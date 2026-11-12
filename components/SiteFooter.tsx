export default function SiteFooter() {
  return (
    <>
      <footer className="foot">
        <div className="wrap foot-grid">
          <div>
            <h4>Get in touch</h4>
            <p>India to International, 2088, Vijay Nagar Colony, Prasad Bungalow, near N.S. Phadake Chowk, Sadashiv Peth, Pune, Maharashtra 411030.</p>
            <p>+91 - 9359544396</p><p>+91 - 97118 57351</p>
            <p>info@indiatointernational.com</p><p>admission@indiatointernational.com</p>
          </div>
          <div><h4>Important link</h4><a href="#">Home</a><a href="#">About us</a><a href="#">Why Subscribe us</a><a href="#">Contact us</a></div>
          <div><h4>Services</h4><a href="#">Check IPD/OPD/BEDS</a><a href="#">NEET PG NRI Quota Admission Services</a><a href="#">NEET PG Management Quota</a><a href="#">NEET PG Counselling services</a><a href="#">NEET PG Admission Guidance services</a></div>
          <div>
            <h4>Stay always in touch</h4>
            <p>Get latest update on mail.</p>
            <input type="email" placeholder="Enter your email address" aria-label="Email address" />
            <a className="btn btn-accent" href="#">SUBMIT</a>
          </div>
        </div>
        <p className="copy">Powered by India To International © 2026</p>
      </footer>
      <button className="fab fab-plus" aria-label="Quick actions">+</button>
      <a className="fab fab-wa" href="#" aria-label="Chat on WhatsApp">✆</a>
    </>
  );
}
