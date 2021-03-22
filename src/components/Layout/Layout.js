import React from 'react';
import classes from './Layout.module.css';

import Auxiliary from '../../hoc/auxiliary';

const layout = (props) => {
    return (
        <Auxiliary>
            <div className={classes.Layout}>
                <main  className={classes.Content}>
                    {props.children}
                </main>
            </div>
        </Auxiliary>);
}
  
export default layout;