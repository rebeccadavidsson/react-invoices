
import React, { useState } from 'react';
import { FormInput } from '../../interfaces';
import { createInvoice, editInvoice } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';


const FormInvoices = ({ closeModal, invoice, edit }: FormInput) => {

    const dispatch = useDispatch();

    const [name, setName] = useState(edit ? invoice.clientName : "");
    const [email, setEmail] = useState(edit ? invoice.clientEmail : "");
    const [date, setDate] = useState(edit ? invoice.paymentDue : "");
    const [id, setID] = useState(edit ? invoice.id : "");
    const [price, setPrice] = useState(edit ? invoice.total : 0);
    const [description, setDescription] = useState(edit ? invoice.items.description : "");
    const [workHours, setWorkHours] = useState(edit ? invoice.items.workHours : 0);
    const [rate, setRate] = useState(edit ? invoice.items.rate : 0);
    const [status, setStatus] = useState(edit ? invoice.status : "");

    const onSubmit = () => {
        dispatch(createInvoice({
            invoice: {
                id: id,
                createdAt: new Date(),
                paymentDue: date,
                clientName: name,
                clientEmail: email,
                status: status,
                total: price,
                items: {
                    description: description,
                    workHours: workHours,
                    rate: rate
                }
            }
        }
        ))
    }

    const editNewInvoice = () => {
        dispatch(editInvoice({
            invoice: {
                id: id,
                createdAt: new Date(),
                paymentDue: date,
                clientName: name,
                clientEmail: email,
                status: status,
                total: price,
                items: {
                    description: description,
                    workHours: workHours,
                    rate: rate
                }
            }
        }
        ))
    }

    return (
        <form onSubmit={() => onSubmit()}>
            <h3>Invoice To</h3>
            <div style={{ display: "grid" }}>
                <label>Unique ID</label>
                <input
                    type='text'
                    name='ID'
                    id='ID'
                    value={id}
                    onChange={(e: any) => setID(e.target.value)}
                />
                <label>Client's Name</label>
                <input
                    type='text'
                    name='clientName'
                    id='clientName'
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                />
                <label>Client's Email</label>
                <input
                    type='text'
                    name='clientEmail'
                    id='clientEmail'
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                />

                <label>Invoice Date</label>
                <input
                    type='date'
                    name='invoiceDate'
                    id='invoiceDate'
                    value={date}
                    onChange={(e: any) => setDate(e.target.value)}
                />
                <label>Price</label>
                <input
                    type='number'
                    name='Total amount'
                    id='price'
                    value={price === 0 ? "" : price}
                    onChange={(e: any) => setPrice(e.target.value)}
                />
                <hr />

                <label>Description</label>
                <input
                    type='string'
                    name='Description'
                    id='description'
                    value={description}
                    onChange={(e: any) => setDescription(e.target.value)}
                />
                <label>Working Hours</label>
                <input
                    type='number'
                    name='workHours'
                    id='workHours'
                    value={workHours === 0 ? "" : workHours}
                    onChange={(e: any) => setWorkHours(e.target.value)}
                />
                <label>Rate</label>
                <input
                    type='number'
                    name='Rate'
                    id='rate'
                    value={rate === 0 ? "" : rate}
                    onChange={(e: any) => setRate(e.target.value)}
                />
                <label>Status</label>
                <select value={status} onChange={(e: any) => setStatus(e.target.value)}>
                    <option value="pending">Pending</option>
                    <option value="paid">Paid</option>
                    <option value="late">Late</option>
                </select>
                {edit ?
                    <button className="product-box__link btn btn--outline"
                        onClick={() => { editNewInvoice(); closeModal() }}>
                        Edit Invoice
                </button>
                    :
                    <button className="product-box__link btn btn--outline"
                        onClick={() => { onSubmit(); closeModal() }}>
                        Add Invoice
                 </button>
                }

                <button className="product-box__link btn btn--outline"
                    onClick={() => { closeModal() }}>Close</button>
            </div>
        </form>
    );
};

export default FormInvoices;

