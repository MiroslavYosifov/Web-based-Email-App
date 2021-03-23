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

// ********************************************* //

export const requestListEmails = (criterion) => {
    return dispatch => {
        dispatch(listEmails(criterion))
    }
}
