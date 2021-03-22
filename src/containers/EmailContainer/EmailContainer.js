import classes from './EmailContainer.module.css';
import React, { useState, useEffect } from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import EmailContainerHeader from './EmailContainerHeader/EmailContainerHeader';
import EmailContainerSidebar from './EmailContainerSidebar/EmailContainerSidebar';

import EmailListContainer from '../../components/Email/EmailListContainer/EmailListContainer';
import EmailDetailContainer from '../../components/Email/EmailDetailContainer/EmailDetailContainer';

function EmailContainer(props) {

  return (
    <div className={classes.EmailContainer}>
        <EmailContainerHeader/>
        <main>
            <EmailContainerSidebar />
            <EmailListContainer />
            <EmailDetailContainer />
        </main>
    </div>
  );
}

export default EmailContainer;