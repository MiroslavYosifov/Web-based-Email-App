import React, { useEffect, useState } from 'react';
import classes from './EmailListContainer.module.css';

import { Route, Switch, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import EmailsList from '../EmailsList/EmailsList';
import EmailFilter from '../EmailFilter/EmailFilter';

function EmailListContainer (props) { 

    return(
        <div className={classes.EmailListContainer}>
            <main>
                <EmailFilter />
                <div className={classes.ListEmails}>
                    <Switch>myprofile
                        <Route path="/inbox" component={EmailsList}></Route>
                        <Route path="/sent" component={EmailsList}></Route>
                        <Route path="/scheduled" component={EmailsList}></Route>
                        <Route render={() => <h1>Not found</h1>} ></Route>
                    </Switch>
                </div>
            </main>
        </div>)
}

export default EmailListContainer;