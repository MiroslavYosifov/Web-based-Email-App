import React, { useEffect, useState } from 'react';
import classes from './EmailContainerHeader.module.css';

import { connect } from 'react-redux';

import Search from '../../../components/UI/Search/Search';

function EmailContainerHeader(props) { 

    return(
        <div className={classes.EmailContainerHeader}>
             <Search/>
            <h2>EmailHeader</h2>
        </div>)
}

export default EmailContainerHeader;