import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actionCreators from '../../actions/auth';

class MainLayout extends Component {
  render() {
    const {auth: {email}, actions: {logout}} = this.props;
    return (<div>
      <a href="#" onClick={() => logout()}> Logout? ({email}) </a>
      <div>
        {this.props.children}
      </div>
    </div>);
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
  auth: PropTypes.shape({
    email: PropTypes.string
  }),
  actions: PropTypes.shape({
    logout: PropTypes.func.isRequired
  })
};


const mapStateToProps = ({auth}) => ({auth});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
