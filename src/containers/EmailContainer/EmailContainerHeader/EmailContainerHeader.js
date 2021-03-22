import React, { useEffect, useState } from 'react';
import classes from './EmailContainerHeader.module.css';

import { connect } from 'react-redux';

function EmailContainerHeader(props) { 

    return(
        <div className={classes.EmailContainerHeader}>
            <h2>EmailHeader</h2>
        </div>)
}

export default EmailContainerHeader;