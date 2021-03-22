import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import EmailCard from '../EmailCard/EmailCard';

function EmailsList (props) { 

    return(
        <div>
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>
            <EmailCard/>
        </div>)
}

export default EmailsList;