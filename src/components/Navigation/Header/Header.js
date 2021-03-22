import React, { useEffect, useState } from 'react';
import classes from './Header.module.css';

import { connect } from 'react-redux';

function Header(props) { 

    return(
        <header className={classes.Header}>
            <h2>HEADER</h2>
        </header>)
}

export default Header;