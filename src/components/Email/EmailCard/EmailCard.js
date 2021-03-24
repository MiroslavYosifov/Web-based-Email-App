import React, { useEffect, useState } from 'react';
import classes from './EmailCard.module.css';

import { connect } from 'react-redux';

import EmailCardHistory from './EmailCardHistory/EmailCardHistory';

function EmailCard (props) { 

    const participants = Object.values(props.participants).map((p, index) =>  (
        <li key={index}>
            <p>{p.name}</p>
        </li>
    ));
    
    switch(props.parent) {
        case "emails-list":
            return(
                <div className={classes.EmailCard}>
                    <section className={classes.EmailCardDetailsIssue}>
                        <span><i class="fas fa-exclamation"></i><p>Issue: {props.kind}</p></span>
                    </section>
                    
                    <section className={classes.EmailCardDetailsHeader}>
                        {props.selectedSection === 'inbox' && <h5>From: {props.creator.name}</h5>}
                        {(props.selectedSection === 'sent' || props.selectedSection === 'scheduled') && <h5>To: {props.creator.name}</h5>}
                        <p>{props.date}</p>
                    </section>

                    <section className={classes.EmailCardDetailsTitle}>
                        <h6>{props.title}</h6>
                    </section>

                    <section>
                        <p>{`${props.content.slice(0, 100).trim()}...`}</p>
                    </section>

                   {props.selectedSection === 'scheduled' && 
                    <section className={classes.SheduledDate}>
                        <p>{props.scheduledDate}</p>
                    </section>}
                </div>)
        case "email-details":
            return(
                <div className={classes.EmailCardDetails}>
                    <section>
                        <section className={classes.EmailCardParticipantsWrapper}>

                            <section className={classes.EmailCardDetailsTitle}>
                                <h5>Subject: {props.title}</h5>
                            </section>

                            <section className={classes.EmailCardDetailsHeader}>
                                 <h5>From: {props.creator.name}</h5>
                                 <p>{props.date}</p>
                             </section>

                            <section className={classes.EmailCardDetailsParticipants}>
                                <h5>To:</h5>
                                <ul>
                                    {participants}
                                </ul>
                            </section>

                        </section>
                       
                        <section>
                            <p>{props.content}</p>
                        </section>

                        {!props.isReplying && <section>
                            <button onClick={() => props.onChangeReplyMessageFormStatus()} className={classes.ReplyButton}>Reply</button>
                        </section>}
                    </section>
                    
                    <section>
                        <EmailCardHistory 
                            emailHistory={props.emailHistory} 
                        />
                    </section>
                    
                </div>)
        default: 
        return(<div>NOT EXIST PARENT</div>)
}
}

export default EmailCard;