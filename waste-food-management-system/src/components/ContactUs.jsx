import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <section id="contactus">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                            <h1 className="display-6 text-center mb-4">Clear Out Your <b>Questions</b></h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/contactus1.png" alt="ContactUs" className="w-75" />
                        </div>
                        <div className="col-md-6">
                            <form action="">
                                <div className="mb-3">
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Your Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="John Smith" />
                                    </div>
                                    <div className="mb-3">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-warning rounded-pill px-4">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs;