import React, { useEffect, useState } from 'react';
import classes from './EmailFilter.module.css';

import { connect } from 'react-redux';

function EmailFilter (props) { 

    function handleDowntimeOptions (event) {
        const downtime = event.target.value;
        props.updateFilterOptions(downtime);
    }

    return(
        <div className={classes.EmailFilter}>
            <span> Downtime </span>
            <select onChange={(event) => handleDowntimeOptions(event)} id="downtime">
                <option value="all">All</option>
                <option value="host">Host</option>
                <option value="database">Database</option>
            </select>
        </div>
    )
}

export default EmailFilter;