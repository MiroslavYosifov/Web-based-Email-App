import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import classes from './EmailsList.module.css';

import EmailCard from '../EmailCard/EmailCard';

function EmailsList (props) { 

    return(
        <div className={classes.EmailsList}>
            <ul>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
                <li><EmailCard/></li>
            </ul>
            
        </div>)
}

export default EmailsList;