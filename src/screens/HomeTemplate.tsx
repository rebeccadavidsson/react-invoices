
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listInvoices } from '../redux/actions/actions';
import Header from '../components/Header/Header';
import { InvoiceList } from '../interfaces';
import InvoicesList from '../components/InvoiceList/InvoiceList';
import Modal from 'react-modal';
import FormInvoices from '../components/Modal/invoiceModal';

const customStyles = {
    content: {
        inset: '140px'
    }
};

function HomeTemplate() {

    const dispatch = useDispatch();

    const [modalIsOpen, setIsOpen] = useState(false);
    const [toEdit, setToEdit] = useState(false);
    const [currentInvoice, setCurrentInvoice] = useState(Object);

    const { invoices } = useSelector((state: InvoiceList) => state.invoiceList);

    useEffect(() => {
        dispatch(listInvoices());
    }, [dispatch]);

    function openModal() {
        setToEdit(false);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const openEdit = (id: string) => {
        setInvoice(id);
        setToEdit(true);
        setIsOpen(true);
    }
    const setInvoice = (invoiceID: string) => {
        invoices.forEach((invoice: any) => {
            if (invoice.id === invoiceID) {
                setCurrentInvoice(invoice)
            }
        })
    }




    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <FormInvoices
                    closeModal={closeModal}
                    invoice={currentInvoice}
                    edit={toEdit} />
            </Modal>
            <Header />
            <section className="block block--products-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="products-box-wrapper">
                                <div className="product-box product-box--proofreading invoice col-lg-12">
                                    <div className="product-box__footer">
                                        <button className="product-box__link btn btn--outline"
                                            onClick={openModal}
                                        >
                                            {"Create a new invoice"}
                                        </button>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="clearfix"> </div>
                                {invoices.map((item: any, i: number) => {
                                    return (
                                        <div className="invoice-list" key={i}>
                                            <InvoicesList
                                                item={item}
                                                editInvoice={openEdit} />
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default HomeTemplate;