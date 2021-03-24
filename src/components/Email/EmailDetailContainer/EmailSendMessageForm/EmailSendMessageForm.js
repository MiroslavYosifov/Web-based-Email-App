import React, { useEffect, useState } from 'react';
import classes from './EmailSendMessageForm.module.css';

// import Datetime from 'react-datetime';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { connect } from 'react-redux';
import { changeFormStatus } from '../../../../store/actions/';

const editorStyle = {
    border: '1px solid lightgray',
    borderRadius: '2px',
    height: '200px',
    width: '100%',
};

function EmailSendMessageForm (props) { 

    const [value, onChange] = useState(new Date());
    const [calendar, setCalendarOptions] = useState({ isShowed: false });

    useEffect(() => {
        console.log(value);
    });

    function handleCancel(e) {
        e.preventDefault();
        console.log(props);
        props.onChangeEmailSendMessageFromStatus(!props.isShowedSendMessageForm);
    }

    function handleSend(e) {
        e.preventDefault();
    }

    function handleSchedule(e) {
        e.preventDefault();
        setCalendarOptions({ isShowed: !calendar.isShowed })
    }

    function handleCancelShedule(e) {
        e.preventDefault();
        setCalendarOptions({ isShowed: !calendar.isShowed })
    }

    function handleSheduleCalendar(e) {
        e.preventDefault();
    }
    
    return(
        <div className={classes.EmailSendMessageForm}>
            <header>
                <h3>New Mail</h3>
            </header>
            <form>
                <p>
                    <input type="text" id="title" placeholder="To"/>
                </p>
                <p>
                    <input type="text" id="title" placeholder="Subject"/>
                </p>
                <p>
                    <Editor
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                        editorStyle={editorStyle}
                    />
                </p>
                {calendar.isShowed && <div className={classes.Calendar}>
                    <div>
                        <div>
                            <button onClick={(event) => handleSheduleCalendar(event)} className="SendButton" type="submit">Send</button>
                            <button onClick={(event) => handleCancelShedule(event)} className={classes.Cancel} className={classes.Cancel} type="submit">Cancel</button>
                        </div>
                    </div> 
                </div>}
                {/* {calendar.isShowed && <div className={classes.Calendar}>
                    <div>
                        <Calendar
                          onChange={onChange}
                          value={value}
                        />
                        <div>
                            <button onClick={(event) => handleSheduleCalendar(event)} className="SendButton" type="submit">Send</button>
                            <button onClick={(event) => handleCancelShedule(event)} className={classes.Cancel} className={classes.Cancel} type="submit">Cancel</button>
                        </div>
                    </div> 
                </div>} */}
                <div>
                    <button onClick={(event) => handleSend(event)} className="SendButton" type="submit">Send</button>
                    <button onClick={(event) => handleSchedule(event)} className={classes.Schedule} type="submit">Schedule Send</button>
                    <button onClick={(event) => handleCancel(event)} className={classes.Cancel} type="submit">Cancel</button>
                </div>  
            </form>
        </div>)
}

const mapStateToProps = state => {
    return {
        isShowedSendMessageForm: state.email.isShowedSendMessageForm,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeEmailSendMessageFromStatus: (isShowedSendMessageForm) => dispatch(changeFormStatus(isShowedSendMessageForm)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailSendMessageForm);
