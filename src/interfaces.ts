
export interface FormInput {
    closeModal: Function;
    invoice: Invoice;
    edit: boolean;
}

export interface Items {
    description: string;
    workHours: number;
    rate: number;
}

export interface Invoice {
    id: string;
    paymentDue: string;
    clientName: string;
    clientEmail: string;
    total: number;
    status: string;
    items: Items;
}

export interface invoiceItem {
    item: {
        id: string;
        paymentDue: string;
        clientName: string;
        clientEmail: string;
        total: number;
        status: string;
        items: Items;
    }
}

export interface invoicesList {
    item: Invoice;
    editInvoice: Function;
}

export interface InvoiceList {
    invoiceList: {
        invoices: Array<invoiceItem>;
    };
}

