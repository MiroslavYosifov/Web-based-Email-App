import React, { useEffect, useState } from 'react';
import classes from './EmailListContainer.module.css';
import { connect } from 'react-redux';

import Search from '../../UI/Search/Search';
import EmailsList from '../EmailsList/EmailsList';

function EmailListContainer (props) { 

    return(
        <div className={classes.EmailListContainer}>
            <main>
                <Search />
                <div className={classes.ListEmails}>
                    <EmailsList />
                </div>
            </main>
        </div>)
}

export default EmailListContainer;