import React, { useEffect, useState } from 'react';
import classes from './EmailCard.module.css';

import { connect } from 'react-redux';

function EmailCard (props) { 

    console.log(props);

    switch(props.parent) {
        case "emails-list":
            return(
                <div className={classes.EmailCard}>
                    <section>
                        <h5>{props.title}</h5>
                    </section>
                    <section>
                        <h6>{props.creator.name}</h6>
                    </section>
                    
                    <section>
                        <p>{`${props.content.slice(0, 100).trim()}...`}</p>
                    </section>
                </div>)
        case "email-details":
            return(
                <div className={classes.EmailCard}>
                    <section>
                        <h5>Title: ABotu fkwerjfjewhfjewfew</h5>
                    </section>
                    <section>
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
                    </section>
                    
                    <section>
                        <p>Lorem ispusm orem ispusm  orem ispusm orem ispusm  orem ispusm</p>
                    </section>
                </div>)
        default: 
        return(<div>NOT EXIST PARENT</div>)
}
}

export default EmailCard;