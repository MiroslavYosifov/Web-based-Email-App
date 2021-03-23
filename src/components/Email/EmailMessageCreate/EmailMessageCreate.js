import React, { useEffect, useState } from 'react';
import classes from './EmailMessageCreate.module.css';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const editorStyle = {
    border: '1px solid lightgray',
    borderRadius: '2px',
    height: '200px',
    width: '100%',
};

function EmailMessageCreate (props) { 

    const [value, onChange] = useState(new Date());

    useEffect(() => {
        console.log(value);
    });
    
    return(
        <div className={classes.EmailMessageCreate}>
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
                {/* <div className={classes.Calendar}>
                    <div>
                        <Calendar
                          onChange={onChange}
                          value={value}
                        />
                        <div>
                            <button className="SendButton" type="submit">Send</button>
                            <button className={classes.Cancel} type="submit">Cancel</button>
                        </div>  
                    </div> 
                </div> */}
                <div>
                    <button className="SendButton" type="submit">Send</button>
                    <button className={classes.Schedule} type="submit">Schedule Send</button>
                    <button className={classes.Cancel} type="submit">Cancel</button>
                </div>  
            </form>
        </div>)
}

export default EmailMessageCreate;