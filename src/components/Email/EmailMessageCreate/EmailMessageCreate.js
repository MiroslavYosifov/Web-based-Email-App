import React, { useEffect, useState } from 'react';
import classes from './EmailMessageCreate.module.css';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const editorStyle = {
    border: '1px solid lightgray',
    borderRadius: '2px',
    height: '200px',
    width: '100%',
};

function EmailMessageCreate (props) { 
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
                <div>
                    <button className="PostButton" type="submit">Send</button>
                    <button className="PostButton" type="submit">Shedule Send</button>
                </div>  
            </form>
        </div>)
}

export default EmailMessageCreate;