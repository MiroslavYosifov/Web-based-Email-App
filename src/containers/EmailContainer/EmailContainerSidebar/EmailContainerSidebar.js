import React, { useEffect, useState } from 'react';
import classes from './EmailContainerSidebar.module.css';

import { Route, Switch, withRouter, Link } from 'react-router-dom';

import { connect } from 'react-redux';

function EmailContainerSidebar (props) { 

    return(
        <div className={classes.EmailContainerSidebar}>
            <div className={classes.NewMessageButton}>
                <p>Send Mail <i class="fas fa-envelope"></i></p>
            </div>
            <nav>
                <ul>
                    <li><Link to="/inbox"><span><i class="fas fa-inbox"></i> Inbox</span> </Link></li>
                    <li><Link to="/Sent"><span><i class="fas fa-paper-plane"></i> Sent</span></Link></li>
                    <li><Link to="/scheduled"><span><i class="far fa-calendar-alt"></i> Scheduled</span></Link></li>
                </ul>
            </nav>
        </div>)
}

export default EmailContainerSidebar;