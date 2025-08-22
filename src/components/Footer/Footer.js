import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start border-top mt-5">
      <div className="container p-4">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-start">
            <h5 className="text-uppercase">FakeBazzar</h5>
            <p>
              123, MG Road,<br />
              Kannur, Kerala - 670001 <br />
              Email: support@fakebazzar.com <br />
              Phone: +91 98765 43210
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-start">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="/" className="text-decoration-none text-dark">Home</a></li>
              <li><a href="/products" className="text-decoration-none text-dark">Products</a></li>
              <li><a href="/about" className="text-decoration-none text-dark">About Us</a></li>
              <li><a href="/contact" className="text-decoration-none text-dark">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0 text-start">
            <h5 className="text-uppercase">Follow Us</h5>
            <a href="../" target="_blank" rel="noreferrer" className="me-3 text-dark">
              <Facebook size={22} />
            </a>
            <a href="../" target="_blank" rel="noreferrer" className="me-3 text-dark">
              <Twitter size={22} />
            </a>
            <a href="../" target="_blank" rel="noreferrer" className="text-dark">
              <Instagram size={22} />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="text-center mt-4">
          <p className="mb-1">© {new Date().getFullYear()} FakeBazzar. All rights reserved.</p>
          <p className="small text-muted">
            404 illustration by{" "}
            <a
              href="https://www.freepik.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted text-decoration-none"
            >
              Freepik
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
