import classes from './App.css';
import React, { useState, useEffect } from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './components/Layout/Layout';
import EmailBuilder from './containers/EmailContainer/EmailContainer';

function App(props) {

  return (
    <div className={classes.App}>
      <Layout {...props}>
        <EmailBuilder/>
      </Layout>
    </div>
  );
}

export default App;