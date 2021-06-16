import { invoicesList } from '../../interfaces';
import { send } from 'emailjs-com';

const InvoicesList = ({ item, editInvoice }: invoicesList) => {

    const { id, paymentDue, clientName, total, status, items } = item;

    const templateParams = {
        from_name: 'Rebecca',
        to_name: clientName,
        message:
            `{
            id: ${id},
            clientName: ${clientName},
            paymentDue: ${paymentDue},
            total: ${total},
            status: ${status},
            description: ${items.description}
        }`
    }

    const sendInvoice = (e: any) => {
        e.preventDefault();
        send(
            'service_h7g4qoh',
            'template_2k0141s',
            templateParams,
            'user_ZfIuL5ZY7mTex5RrOdBPZ'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }

    return (
        <>
            <div className="invoice-row">
                <div className="col"> #{id} </div>
                <div className="col"> {paymentDue} </div>
                <div className="col"> {clientName} </div>
                <div className="col"> € {total} </div>
                <div className="col">  {status} </div>
                <div className="col">
                    {status !== "paid" &&
                        <button
                            className={status === "pending" ? "btn btn--outline pay-pending" : "btn btn--outline pay-late"}>
                            Pay
                        </button>
                    }
                </div>
            </div>
            <div className="invoice-row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"> Description: {items.description}</div>
                <div className="col">Hours: {items.workHours}</div>
                <div className="col">Rate: {items.rate}</div>
                <div className="col">
                    <button className="btn btn--outline"
                        onClick={() => { editInvoice(id) }}>
                        {status !== 'paid' ? 'Edit / Pay' : 'Edit'}
                    </button>
                </div>
            </div>
            <div className="invoice-row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col">
                    <button className="btn btn--outline send-btn"
                        onClick={(e: any) => { sendInvoice(e) }}>
                        Send Invoice
                </button>
                </div>

            </div>
            <hr />
        </>

    )
}
export default InvoicesList;