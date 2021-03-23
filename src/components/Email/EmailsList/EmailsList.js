import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import classes from './EmailsList.module.css';

import EmailCard from '../EmailCard/EmailCard';

function EmailsList (props) { 

    const [emails, setEmailsData] = useState({ data: [] });

    useEffect(() => {
        if(emails.data !== props.emails) {
            setEmailsData({ data: props.emails });
        }
    });

    const emailsList = emails.data ? emails.data.map(email =>  (
        <li>
            <EmailCard 
                id={email.id} 
                title={email.title} 
                isSeen={email.isSeen} 
                status={email.status} 
                kind={email.kind} 
                creator={email.creator}
                participants={email.participants}
                content={email.content}
                parent="emails-list" />
        </li>
    )) : '';

    return(
        <div className={classes.EmailsList}>
            <ul>
                {emailsList}
            </ul>
            
        </div>)
}

export default EmailsList;