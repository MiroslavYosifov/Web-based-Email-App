import React, { useEffect, useState } from 'react';
import classes from './EmailContainerSidebar.module.css';

import { Route, Switch, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

function EmailContainerSidebar (props) { 

    return(
        <div className={classes.EmailContainerSidebar}>
            <h2>SIDEBAR</h2>
        </div>)
}

export default EmailContainerSidebar;