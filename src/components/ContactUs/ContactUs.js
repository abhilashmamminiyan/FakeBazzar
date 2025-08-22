// ContactUs.js
import React from "react";

function ContactUs() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" placeholder="Subject" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>

        {/* Company Info */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h4>Fake Bazzar Pvt Ltd</h4>
          <p><strong>Address:</strong> 123, MG Road, Kannur, Kerala</p>
          <p><strong>Email:</strong> support@fakebazzar.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
