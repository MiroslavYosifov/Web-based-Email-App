import React, { useEffect, useState } from 'react';
import classes from './EmailListContainer.module.css';

import { Route, Switch, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { requestListEmails } from '../../../store/actions/index';

import EmailsList from './EmailsList/EmailsList';
import EmailsFilter from './EmailFilter/EmailFilter';

function EmailListContainer (props) { 

    const [filter, setFilterOptions] = useState({ downtime: '', isReset: false });

    function updateFilterOptions(value) {
        setFilterOptions({ downtime: value });
    }

    return(
        <div className={classes.EmailListContainer}>
            <main>
                <EmailsFilter updateFilterOptions={updateFilterOptions} />
                <div className={classes.ListEmails}>
                    <Switch>
                        <Route path="/sent" render={() => <EmailsList status="sent" filterDowntime={filter.downtime} emails={props.emails} />}></Route>
                        <Route path="/scheduled" render={() => <EmailsList status="scheduled" filterDowntime={filter.downtime} emails={props.emails} />}></Route>
                        <Route path="/" render={() => <EmailsList status="inbox" filterDowntime={filter.downtime} emails={props.emails} />}></Route>
                        <Route render={() => <h1>Not found</h1>} ></Route>
                    </Switch>
                </div>
            </main>
        </div>)
}

const mapStateToProps = state => {
    return {
        emails: state.email.emails,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetEmails: () => dispatch(requestListEmails()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailListContainer);