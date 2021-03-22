import React, { useEffect, useState } from 'react';
import classes from './Search.module.css';

import { connect } from 'react-redux';

function Search (props) { 

    return(
        <div className={classes.Search}>
            <input type="text" name="search" placeholder="Searching..."/>
        </div>)
}

export default Search;