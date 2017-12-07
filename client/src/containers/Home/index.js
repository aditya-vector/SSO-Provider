import { Table } from 'react-bootstrap';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import CssModules from 'react-css-modules';

import * as actionCreators from '../../actions/tickets';
import { isAdmin, isSupport } from '../../utils/index';
import styles from './styles.css';

class Home extends Component {

  componentWillMount() {
    this.props.actions.fetchTickets();
  }

  getActionCellHtml(ticketId) {
    if (isAdmin(this.props.auth)) {
      return (
        <div>
          <td><Link to={`/tickets/${ticketId}`}>Edit</Link></td>
          <td>Delete</td>
        </div>
      );
    } else if (isSupport(this.props.auth)) {
      return (<td><Link to={`/tickets/${ticketId}`}>Edit</Link></td>);
    }
  }

  getActionHeadHtml() {
    if (isAdmin(this.props.auth) || isSupport(this.props.auth)) {
      return <td>Action</td>;
    }
  }

  getTicketRowHtml(ticketList) {
    return ticketList.map(ticket =>{
      return (
        <tr key={ticket.id}>
          <td>{ticket.id}</td>
          <td>{ticket.category}</td>
          <td>{ticket.status}</td>
          <td>{ticket.user_description}</td>
          <td>{ticket.support_user.email}</td>
          <td>{ticket.user.email}</td>
          {this.getActionCellHtml(ticket.id)}
        </tr>
      );
    });
  }

  render() {
    const {auth: {email}, tickets: {ticketList}} = this.props;

    return (
      <div>
        <div styleName={'container'}>
          <h1> Hi {email} </h1>
        </div>
          <Table responsive striped bordered condensed hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Status</th>
                <th>Description</th>
                <th>Assigned To</th>
                <th>Created By</th>
                {this.getActionHeadHtml()}
              </tr>
            </thead>
            <tbody>
              {this.getTicketRowHtml(ticketList)}
            </tbody>
          </Table>
      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.node,
  auth: PropTypes.shape({
    email: PropTypes.string,
    roles: PropTypes.array
  }),
  tickets: PropTypes.object,
  actions: PropTypes.shape({
    fetchTickets: PropTypes.func
  })
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const mapStateToProps = ({auth, tickets}) => ({
  auth, tickets
});

export default connect(mapStateToProps, mapDispatchToProps)(CssModules(Home, styles));
