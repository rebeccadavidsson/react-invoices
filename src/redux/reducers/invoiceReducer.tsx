import {
    INVOICE_LIST_REQUEST,
    INVOICE_LIST_SUCCESS,
    INVOICE_CREATE_SUCCESS,
    INVOICE_EDIT_SUCCES,
} from '../constants/constants';
import { invoicesList } from '../../interfaces';
interface Reducer {
    type: string;
    payload: any;
}

export const invoiceListReducer = (
    state = { invoices: [] },
    action: Reducer
) => {

    switch (action.type) {

        case INVOICE_LIST_REQUEST:
            return { ...state };
        case INVOICE_LIST_SUCCESS:
            return {
                invoices: action.payload,
            };
        case INVOICE_CREATE_SUCCESS:
            return {
                invoices: [action.payload.invoice, ...state.invoices]
            };
        case INVOICE_EDIT_SUCCES:

            const newInvoices = Array<invoicesList>();
            state.invoices.forEach((invoice: any) => {
                if (invoice.id === action.payload.invoice.id) {
                    invoice = action.payload.invoice;
                }
                newInvoices.push(invoice);
            })
            return {
                invoices: newInvoices
            }

        default:
            return state;
    }
};
