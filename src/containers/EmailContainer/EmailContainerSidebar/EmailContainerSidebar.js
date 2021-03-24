import React, { useEffect, useState } from 'react';
import classes from './EmailContainerSidebar.module.css';

import { Route, Switch, withRouter, Link, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { changeFormStatus } from '../../../store/actions/index';

function EmailContainerSidebar (props) { 

    function showForm() {
        if(props.isShowedSendMessageForm === true) return;
        props.onChangeEmailSendMessageFromStatus(!props.isShowedSendMessageForm)
    }

    return(
        <div className={classes.EmailContainerSidebar}>
            <div className={classes.NewMessageButton}>
                <p onClick={() => showForm()} >Send Mail <i class="fas fa-envelope"></i></p>
            </div>
            <nav>
                <ul>
                    <li><NavLink exact={true} activeClassName={ classes.Active } to="/inbox"><span><i class="fas fa-inbox"></i> Inbox</span> </NavLink></li>
                    <li><NavLink exact={true} activeClassName={ classes.Active } to="/Sent"><span><i class="fas fa-paper-plane"></i> Sent</span></NavLink></li>
                    <li><NavLink exact={true} activeClassName={ classes.Active } to="/scheduled"><span><i class="far fa-calendar-alt"></i> Scheduled</span></NavLink></li>
                </ul>
            </nav>
        </div>)
}

const mapStateToProps = state => {
    return {
        isShowedSendMessageForm: state.email.isShowedSendMessageForm,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeEmailSendMessageFromStatus: (isShowedSendMessageForm) => dispatch(changeFormStatus(isShowedSendMessageForm)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailContainerSidebar);
// export default EmailContainerSidebar;