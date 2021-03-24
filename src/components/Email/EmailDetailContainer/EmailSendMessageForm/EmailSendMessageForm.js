import React, { useEffect, useState } from 'react';
import classes from './EmailSendMessageForm.module.css';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import DateTimePicker from '../../../UI/DateTimePicker/DateTimePicker';

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
    const [dateTimePicker, setdDateTimePickerOptions] = useState({ isShowed: false });

    function handleCancel(e) {
        e.preventDefault();
        props.onChangeEmailSendMessageFromStatus(!props.isShowedSendMessageForm);
    }

    function handleSend(e) {
        e.preventDefault();
    }

    function handleSchedule(e) {
        e.preventDefault();
        setdDateTimePickerOptions({ isShowed: !dateTimePicker.isShowed })
    }

    function handleCancelShedule(e) {
        e.preventDefault();
        setdDateTimePickerOptions({ isShowed: !dateTimePicker.isShowed })
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

                {dateTimePicker.isShowed && <div className={classes.DateTimePickerWrapper}>
                    <div>
                        <DateTimePicker />
                        <div>
                            <button onClick={(event) => handleSheduleCalendar(event)} className="SendButton" type="submit">Schedule Send</button>
                            <button onClick={(event) => handleCancelShedule(event)} className={classes.Cancel} className={classes.Cancel} type="submit">Cancel</button>
                        </div>  
                    </div> 
                </div>}

                {!dateTimePicker.isShowed && <div>
                    <button onClick={(event) => handleSend(event)} className="SendButton" type="submit">Send</button>
                    <button onClick={(event) => handleSchedule(event)} className={classes.Schedule} type="submit">Schedule</button>
                    <button onClick={(event) => handleCancel(event)} className={classes.Cancel} type="submit">Cancel</button>
                </div>}
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
