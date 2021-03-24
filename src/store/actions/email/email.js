import * as actionTypes from '../actionsTypes';

export const getEmail = () => {
    return {
        type: actionTypes.EMAIL_GET ,
    }
}

export const listEmails = (criterion) => {
    return {
        type: actionTypes.EMAIL_LIST,
        criterion: criterion
    }
}

export const addEmail = (email) => {
    return {
        type: actionTypes.EMAIL_ADD,
        email: email
    }
}

export const updateEmail = (emailId) => {
    return {
        type: actionTypes.EMAIL_UPDATE,
        emailId: emailId
    }
}

export const removeEmail = (emailId) => {
    return {
        type: actionTypes.EMAIL_REMOVE,
        emailId: emailId,
    }
}

export const updateCurrentEmail = (email) => {
    return {
        type: actionTypes.EMAIL_CURRENT_SELECTED_UPDATE,
        email: email
    }
}

// ********************************************* //

export const requestListEmails = (criterion) => {
    return dispatch => {
        dispatch(listEmails(criterion))
    }
}

export const requestUpdateCurrentEmail = (email) => {
    return dispatch => {
        dispatch(updateCurrentEmail(email))
    }
}

export const changeFormStatus = (isShowedSendMessageForm) => {
    return dispatch => {
        dispatch({
            type: actionTypes.EMAIL_SEND_MESSAGE_FORM_STATUS_UPDATE,
            isShowedSendMessageForm: isShowedSendMessageForm,
        });
    }
}

export const updateSearchParams = (params) => {
    return dispatch => {
        dispatch({
            type: actionTypes.EMAIL_UPDATE_SEARCH_PARAMS,
            searchParams: params,
        });
    }
}


