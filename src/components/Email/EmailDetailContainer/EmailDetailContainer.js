import React, { useEffect, useState } from 'react';
import classes from './EmailDetailContainer.module.css';

import { connect } from 'react-redux';

import EmailCard from '../EmailCard/EmailCard';
import EmailMessageCreate from '../EmailMessageCreate/EmailMessageCreate';

function EmailDetailContainer (props) { 

    return(
        <div className={classes.EmailDetailContainer}>
            <EmailMessageCreate/>
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
            </ul>
            
        </div>)
}

export default EmailDetailContainer;