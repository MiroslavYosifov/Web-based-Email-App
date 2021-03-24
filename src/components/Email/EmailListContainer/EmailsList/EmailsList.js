import React, { useEffect, useState } from 'react';
import classes from './EmailsList.module.css';

import { connect } from 'react-redux';
import { requestUpdateCurrentEmail, changeFormStatus } from '../../../../store/actions/index';

import EmailCard from '../../EmailCard/EmailCard';

function EmailsList (props) { 

    const [emails, setEmailsData] = useState({ data: [] });
    const [filteredEmails, setFilteredEmailsData] = useState({ data: [] });

    useEffect(() => {
        let filteredData = [];

        if(props.status === 'inbox') {
            filteredData = [...props.emails]
        } 
        else if (props.status) {
            filteredData = props.emails.filter(e => props.status === e.status);
        }

        setFilteredEmailsData({  data: filteredData });
        setEmailsData({ data: filteredData });
      

    }, [props.emails]);
    

    useEffect(() => {
        console.log(props);
        let filteredData = [];

        if(props.status === 'inbox') {
            filteredData = [...props.emails]
        } 
        else if (props.status) {
            filteredData = props.emails.filter(e => props.status === e.status);
        }

        setFilteredEmailsData({  data: filteredData });
        setEmailsData({ data: filteredData });
       
    }, [props.status]);

    useEffect(() => {
        let filteredData = [];

        if(props.filterDowntime === 'all' || props.filterDowntime === '') {
            filteredData = [...props.emails];
        } else {
            filteredData = emails.data.filter(e => e.kind.toUpperCase() === props.filterDowntime.toUpperCase());
        }

        setFilteredEmailsData({  data: filteredData });
        
    }, [props.filterDowntime]);

    useEffect(() => {
        let filteredData = [];

        if(props.searchParams !== '') {
            filteredData = emails.data.filter(e => e.content.toUpperCase().includes(props.searchParams.toUpperCase()) 
                                            || e.title.toUpperCase().includes(props.searchParams.toUpperCase())
                                            || e.creator.name.toUpperCase().includes(props.searchParams.toUpperCase())
                                            || e.kind.toUpperCase().includes(props.searchParams.toUpperCase()));
            setFilteredEmailsData({  data: filteredData });
        }
    }, [props.searchParams]);

    function onEmailSelect(id) {
        const email = props.emails.filter(e => e.id === id);
        props.onSelectCurrentEmail(email[0]);

        if(props.isShowedSendMessageForm) {
            props.onChangeEmailSendMessageFromStatus(!props.isShowedSendMessageForm);
        }
    }

    const emailsList = filteredEmails.data ? filteredEmails.data.map((email, index) =>  (
        <li key={index} onClick={() => onEmailSelect(email.id)}>
            <EmailCard 
                selectedSection={props.status}
                id={email.id} 
                title={email.title}
                date={email.date}
                scheduledDate={email.scheduledDate}
                isSeen={email.isSeen} 
                status={email.status} 
                kind={email.kind} 
                creator={email.creator}
                participants={email.participants}
                content={email.content}
                parent="emails-list"/>
        </li>
    )) : '';

    return (
        <div className={classes.EmailsList}>
            <header>
                <h5>{props.status.toUpperCase()}</h5>
            </header>
            <ul>
                {emailsList}
            </ul>
        </div>)
}



const mapStateToProps = state => {
    return {
        emails: state.email.emails,
        isShowedSendMessageForm: state.email.isShowedSendMessageForm,
        searchParams: state.email.searchParams,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectCurrentEmail: (email) => dispatch(requestUpdateCurrentEmail(email)),
        onChangeEmailSendMessageFromStatus: (isShowedSendMessageForm) => dispatch(changeFormStatus(isShowedSendMessageForm)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailsList);