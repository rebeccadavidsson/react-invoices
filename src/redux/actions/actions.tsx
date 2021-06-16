import invoiceData from '../../data/data.json';
import {
    INVOICE_LIST_REQUEST,
    INVOICE_LIST_SUCCESS,
    INVOICE_CREATE_SUCCESS,
    INVOICE_EDIT_SUCCES,
} from '../constants/constants';


export const listInvoices = () => async (dispatch: Function) => {
    try {
        dispatch({ type: INVOICE_LIST_REQUEST });
        dispatch({
            type: INVOICE_LIST_SUCCESS,
            payload: invoiceData,
        });
    } catch (error) {
        console.log(error);
    }
};


export const createInvoice = (data: any) => async (dispatch: Function) => {
    try {
        dispatch({
            type: INVOICE_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};


export const editInvoice = (data: any) => async (dispatch: Function) => {
    try {
        dispatch({
            type: INVOICE_EDIT_SUCCES,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};

