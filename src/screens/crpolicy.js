import React from 'react'
import Header2 from '../Components/Header2'
import Footer from '../Components/Footer'

export default function crpolicy() {
    return (
        <div><div >
            <div>
                <Header2></Header2>
            </div>
            <div>
                <section className="vh-100 mt-4" style={{ backgroundColor: "white" }}>
                    <div className="container w-150 h-50">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col">
                                <p>
                                    <span className="h2">Cancellation policy</span>
                                </p>
                                <div className="card mb-5">
                                    <div className="card-body p-4">
                                        <div className="float-start">
                                            <div>
                                                <p>❖ If cancelled prior 24 hours or more from the Scheduled Time : 100% Refund</p>
                                                <p>❖ If cancelled prior 12 hours of the Scheduled Time : 75% Refund</p>
                                                <p>❖ If cancelled prior 6 hours of the Scheduled Time : 50% Refund</p>
                                                <p>❖ Cancellation of the activity will not be applicable on Special Dates like 1st January, 14th February, 25th December, 31st December of Every Year</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <p>
                                    <span className="h2">Refund Policy</span>
                                </p>
                                <div className="card mb-5">
                                    <div className="card-body p-4">
                                        <div className="float-start">
                                            <div>
                                                <p>❖ Refund will be provided within 7 days of Cancellation</p>
                                                <p>❖ The respective amount based on cancellation policy will be refunded back to the same source of payment option selected during the transaction</p>

                                                <p>❖ Refund of the activity will not be applicable on Special Dates like 1st January, 14th February, 25th December, 31st December of Every Year</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div></div>
    )
}
