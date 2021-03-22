import React, { useEffect, useState } from 'react';
import classes from './EmailFilter.module.css';

import { connect } from 'react-redux';

function EmailFilter (props) { 
    return(
        <div className={classes.EmailFilter}>
            <span> Downtime </span>
            <select id="downtime">
                <option value="all">All</option>
                <option value="host">Host</option>
                <option value="database">Database</option>
            </select>
            <span> Data </span>
            <select id="downtime">
                <option value="all">All</option>
                <option value="host">Host</option>
                <option value="database">Database</option>
            </select>
        </div>)
}

export default EmailFilter;