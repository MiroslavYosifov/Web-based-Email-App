import React, { useEffect, useState } from 'react';
import classes from './Search.module.css';

import { connect } from 'react-redux';

function Search (props) { 
    return(
        <div className={classes.Search}>
            <form>
                <div class="search">
                    <input
                        type="search"
                        id="search"
                        name="search"
                        placeholder="Searching..."/>
                    <label for="search"><i class="fas fa-search"></i></label>
                </div>
            </form>
        </div>)
}

export default Search;