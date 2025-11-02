import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState({
    about: false,
    quickLinks: false,
    followUs: false,
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSection = (section) => {
    if (!isMobile) return; // only toggle on mobile
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <footer>
      <section className="top-footer">

        {/*=== EMAIL SUBSCRIPTION Section === */}
        <div className="email-section">
          <h4>BE THE FIRST TO KNOW</h4>
          <p className="mobile-view">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. This is simply dummy text.
          </p>
          <p className="desktop-view">Sign up for updates from mettā muse.</p>
          <div className="input-section">
            <input type="email" placeholder="Enter your e-mail..." required />
            <button type="button">SUBSCRIBE</button>
          </div>
        </div>

          {/*=== CONTACT & CURRENCY Section === */}
        <div className="contact-section">
          {isMobile ? <h4>CALL US</h4> : <h4>CONTACT US</h4>}
          <div className="contact-detail-container">
            <h3 className="contact-details">+44 221 133 5360</h3>
            <h3 className="contact-details">customercare@mettamuse.com</h3>
          </div>
          <hr className="mobile-view-horizontal-line" />
          {isMobile ? <h4>CURRENCY</h4> : <h4>COUNTRY</h4>}
          <div className="flag-container">
            <img src="/US-flag.png" alt="USA-flag" /> <span>USD</span>
          </div>
          <p className="currency-note">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </section>
      <hr />

      <section className="bottom-footer">
        {/* === mettā muse Section === */}
        <div className="about">
          <div
            className="contact-headings"
            onClick={() => toggleSection("about")}
          >
            <h4>mettā muse</h4>
            <img
              src="/arrow-down-white.png"
              alt="arrow-down"
              className={`arrow-icon ${isOpen.about ? "rotate" : ""}`}
            />
          </div>
          <ul className={`footer-list ${isOpen.about ? "open" : ""}`}>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <hr className="mobile-view-horizontal-line" />


        {/* === QUICK LINKS === */}
        <div className="quick-links">
          <div
            className="contact-headings"
            onClick={() => toggleSection("quickLinks")}
          >
            <h4>QUICK LINKS</h4>
            <img
              src="/arrow-down-white.png"
              alt="arrow-down"
              className={`arrow-icon ${isOpen.quickLinks ? "rotate" : ""}`}
            />
          </div>
          <ul className={`footer-list ${isOpen.quickLinks ? "open" : ""}`}>
            <li>Order & Shopping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <hr className="mobile-view-horizontal-line" />

        {/* === FOLLOW US === */}
        <div className="follow-upi">
          <div
            className="contact-headings"
            onClick={() => toggleSection("followUs")}
          >
            <h4>FOLLOW US</h4>
            <img
              src="/arrow-down-white.png"
              alt="arrow-down"
              className={`arrow-icon ${isOpen.followUs ? "rotate" : ""}`}
            />
          </div>
          <ul className={`footer-list ${isOpen.followUs ? "open" : ""}`}>
            <div className="social-media">
              <li>
                <CiInstagram />
              </li>
              <li>
                <FaLinkedin />
              </li>
            </div>
          </ul>
          <hr className="mobile-view-horizontal-line" />

          {/* meta use ACCEPTS Section */}
          <h4>mettā muse ACCEPTS</h4>
          <ul className="payment-gateway">
            <li>
              <img src="/g-pay.png" alt="G-pay" />
            </li>
            <li>
              <img src="/master-card.png" alt="Master Card" />
            </li>
            <li>
              <img src="/pay-pal.png" alt="Pay Pal" />
            </li>
            <li>
              <img src="/amex.png" alt="AMEX Pay" />
            </li>
            <li>
              <img src="/apple-pay.png" alt="Apple Pay" />
            </li>
            <li>
              <img src="/d-pay.png" alt="D-pay" />
            </li>
          </ul>
        </div>
      </section>

      <section className="copy-right-section">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </section>
      <hr style={{ marginTop: "20px" }} />
    </footer>
  );
}
