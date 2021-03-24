import React, { useEffect, useState } from 'react';
import classes from './EmailCardHistory.module.css';


function EmailCardHistory (props) { 

    const [email, setEmailsData] = useState({ emailHistory: [] });

    useEffect(() => {
        setEmailsData({ emailHistory: props.emailHistory });
    }, [props.emailHistory]);

    function strechContent (event) {
        if(event.currentTarget.getElementsByTagName('p')[2].style.display === 'block') {

            event.currentTarget.getElementsByTagName('p')[1].style.display = 'block';
            event.currentTarget.getElementsByTagName('p')[2].style.display = 'none'
        } 
        else {
            event.currentTarget.getElementsByTagName('p')[1].style.display = 'none';
            event.currentTarget.getElementsByTagName('p')[2].style.display = 'block'
        }
    }

    const listEmailHistory = email.emailHistory ? email.emailHistory.map((element, index) =>  (
        <li key={index} onClick={(event) => {strechContent(event)}}>
            <section>

                <header>
                    <h6>{element.creator.name}</h6>
                    <p>{element.date}</p>
                </header>

                <p className={classes.CompressedEmailHistoryContent}>{`${element.content.slice(0, 100).trim()}...`}</p>
                <p className={classes.Disabled}>{`${element.content}`}</p>
            </section>
        </li>
    )) : '';

    return(
        <div className={classes.EmailCardHistory}>

            <header>
                <h4>History</h4>
            </header>
            
            <ul>
               {listEmailHistory}
            </ul>
        </div>)
}

export default EmailCardHistory;