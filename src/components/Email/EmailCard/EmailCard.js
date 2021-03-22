import React, { useEffect, useState } from 'react';
import classes from './EmailCard.module.css';

import { connect } from 'react-redux';

function EmailCard (props) { 

    return(
        <div className={classes.EmailCard}>
            <header>
                <p>From: Miroslav Yosifov</p>
                {/* <div>
                    <p>From:</p>
                    <p>Ivan iavanov</p>
                </div> */}
                {/* <div>
                    <p>Include:</p>
                    <ul>
                        <li>MiroslavYosifov</li>
                        <li>AtanasYordanov</li>
                        <li>NaskoAtanasov</li>
                    </ul>
                </div> */}
            </header>
            <main>
                <p>Lorem ispusm orem ispusm  orem ispusm orem ispusm  orem ispusm</p>
            </main>
        </div>)
}

export default EmailCard;