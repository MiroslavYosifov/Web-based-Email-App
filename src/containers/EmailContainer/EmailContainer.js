import classes from './EmailContainer.module.css';
import React, { useState, useEffect } from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function EmailContainer(props) {

  return (
    <div className={classes.EmailContainer}>
        <h1>EmailContainer</h1>
    </div>
  );
}

export default EmailContainer;