import React, { Component, PropTypes } from 'react';
import {reduxForm} from 'redux-form';
import DropDownSelect from '../../components/DropDownSelect';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button} from 'react-bootstrap';
import * as actionCreators from '../../actions/tickets';
import {CATEGORIES, STATUSES} from '../../constants';

class EditTicket extends Component {
  componentWillMount() {
    this.props.actions.fetchTicket(this.props.params.id);
  }

  render() {
    const {
      tickets: {currentTicket},
      actions: {updateTicket},
      handleSubmit
    } = this.props;
    return (
      <div>
        <h1> Edit Ticket </h1>
        <form styleName={'form'} onSubmit={handleSubmit(data => updateTicket(data))}>
          <DropDownSelect
            label="selectCategory"
            options={CATEGORIES}
            inputName="category"
            selected={currentTicket.category}/>
          <DropDownSelect
            label="selectStatus"
            options={STATUSES}
            inputName="status"
            selected={currentTicket.status}/>
          <Button onClick={handleSubmit(data => updateTicket(data))}>Submit</Button>
        </form>
      </div>
    );
  }
}

EditTicket.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.shape({
    fetchTicket: PropTypes.func,
    updateTicket: PropTypes.func
  }),
  handleSubmit: PropTypes.func,
  tickets: PropTypes.object,
  params: PropTypes.object,
  fields: PropTypes.shape({
    status: PropTypes.object,
    category: PropTypes.object
  })
};


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const mapStateToProps = ({tickets}) => ({
  tickets
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'editTicket',
  fields: ['category', 'status']
})(EditTicket));
