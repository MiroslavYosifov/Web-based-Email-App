import React, { useEffect, useState } from 'react';
import classes from './Search.module.css';

import { connect } from 'react-redux';
import { updateSearchParams } from '../../../store/actions/index';

function Search (props) { 

    const [search, setEmailsData] = useState({ params: '' });

    function handleSearchInput (event) {
        setEmailsData({ params: event.target.value })
        props.onUpdateSearchParams(event.target.value);
    }

    return(
        <div className={classes.Search}>
            <form>
                <div class="search">
                    <input
                        type="search"
                        id="search"
                        name="search"
                        onChange={handleSearchInput}
                        value={search.params}
                        placeholder="Searching..."/>
                    <label for="search"><i class="fas fa-search"></i></label>
                </div>
            </form>
        </div>)
}

const mapStateToProps = state => {
    return {
        searchParams: state.email.searchParams,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateSearchParams: (params) => dispatch(updateSearchParams(params)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);