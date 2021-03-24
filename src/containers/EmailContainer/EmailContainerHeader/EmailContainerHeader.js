import React, { useEffect, useState } from 'react';
import classes from './EmailContainerHeader.module.css';

import { connect } from 'react-redux';

import Search from '../../../components/UI/Search/Search';

function EmailContainerHeader(props) { 

    return(
        <div className={classes.EmailContainerHeader}>
            <h3 className={classes.AppTittle}>Email APP</h3>
            <Search />
            <nav>
                <ul>
                    <li><span><i class="fas fa-bell"></i> Downtimes</span></li>
                    <li><span>Miroslav Yosifov</span></li>
                    <li><span><i class="fas fa-sign-out-alt"></i></span></li>
                </ul>
            </nav>
        </div>)
}



export default EmailContainerHeader;
