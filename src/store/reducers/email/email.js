
import * as actionsTypes from '../../actions/actionsTypes';
import { updatedObj } from '../../helpers/common';
import { emailData } from '../../helpers/emailData';

const initialState = {
    emails: emailData,
    currentSelectedEmail: emailData[0],
    error: null,
    isShowedSendMessageForm: false,
    loading: false,
    searchParams: '',
}

const getEmail = (state, action) => {
    return updatedObj(state, {
        currentSelectedEmail: action.email,
    });
}

const listEmails = (state, action) => {
    return updatedObj(state, {
        emails: action.emails,
    });
}

const addEmail = (state, action) => {
    return updatedObj(state, {
        emails: action.emails,
    });
}

const updateEmail = (state, action) => {
    return updatedObj(state, {
        emails: action.emails,
    });
}

const removeEmail = (state, action) => {
    return updatedObj(state, {
        emails: action.emails,
    });
}

const updateCurrentSelected = (state, action) => {
    return updatedObj(state, {
        currentSelectedEmail: action.email,
    });
}

const changeSendMessageFormStatus = (state, action) => {
    return updatedObj(state, {
        isShowedSendMessageForm: action.isShowedSendMessageForm,
    });
}

const emailUpdateSearchParams = (state, action) => {
    return updatedObj(state, {
        searchParams: action.searchParams,
    });
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.EMAIL_GET:
            return getEmail(state, action);
        case actionsTypes.EMAIL_LIST:
            return listEmails(state, action);
        case actionsTypes.EMAIL_ADD:
            return addEmail(state, action);
        case actionsTypes.EMAIL_UPDATE:
            return updateEmail(state, action);
        case actionsTypes.EMAIL_REMOVE:
            return removeEmail(state, action);
        case actionsTypes.EMAIL_CURRENT_SELECTED_UPDATE:
            return updateCurrentSelected(state, action); 
        case actionsTypes.EMAIL_SEND_MESSAGE_FORM_STATUS_UPDATE:
            return changeSendMessageFormStatus(state, action);
        case actionsTypes.EMAIL_UPDATE_SEARCH_PARAMS:
            return emailUpdateSearchParams(state, action); 
        default:
            return state;
    }
};

export default reducer;