import React, { useEffect, useState } from 'react';
import classes from './EmailDetailContainer.module.css';

import { connect } from 'react-redux';

import EmailCard from '../EmailCard/EmailCard';
import EmailSendMessageForm from './EmailSendMessageForm/EmailSendMessageForm';
import EmailReplyMessageForm from './EmailReplyMessageForm/EmailReplyMessageForm';

function EmailDetailContainer (props) { 

    const [email, setEmailInfo] = useState({ data: {} });
    const [emailSendMessageForm, setSendMessageForm] = useState({ isShowed: false });
    const [emailReplyMessageForm, setReplyMessageForm] = useState({ isShowed: false });

    useEffect(() => {
        if(email.data !== props.currentSelectedEmail) {
            setEmailInfo({ data: props.currentSelectedEmail });
        }
    });

    useEffect(() => {
        if(emailSendMessageForm.isShowed !== props.isShowedSendMessageForm) {
            setSendMessageForm({ isShowed: props.isShowedSendMessageForm });
            setReplyMessageForm({ isShowed: false });
        }
    });

    function onChangeReplyMessageFormStatus () {
        setReplyMessageForm({ isShowed: !emailReplyMessageForm.isShowed });
    }

    return(
        <div className={classes.EmailDetailContainer}>
            {emailSendMessageForm.isShowed && <EmailSendMessageForm/>}
            {emailReplyMessageForm.isShowed && !emailSendMessageForm.isShowed && <EmailReplyMessageForm participants={email.data.participants} onChangeReplyMessageFormStatus={onChangeReplyMessageFormStatus} />}
            {!emailSendMessageForm.isShowed && 
                <div className={classes.EmailMessageContainer}>
                { email.data.creator &&
                        <EmailCard 
                            id={ email.data.id }
                            title={ email.data.title }
                            date={email.data.date}
                            creator={ email.data.creator }
                            participants={email.data.participants}
                            content={email.data.content}
                            emailHistory={email.data.history}
                            isReplying={emailReplyMessageForm.isShowed}
                            onChangeReplyMessageFormStatus={onChangeReplyMessageFormStatus}
                            parent="email-details"/>
                    }
                </div>
            }
            
        </div>)
}

const mapStateToProps = state => {
    return {
        currentSelectedEmail: state.email.currentSelectedEmail,
        isShowedSendMessageForm: state.email.isShowedSendMessageForm,
    };
};

export default connect(mapStateToProps, null)(EmailDetailContainer);