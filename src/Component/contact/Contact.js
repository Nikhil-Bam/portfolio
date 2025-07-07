import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import './contact.css';

export default function Contact() {
  return (
    <div>
      <div id="contact" className="contact">
        <div className="contact-title">
          <h1>Get In Touch</h1>
          <img src={theme_pattern} alt="" className="c" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I'm currently ready to take new projects, so feel free to contact me.</p>

            <div className="contact-details">
              <div className="contact-detail">
                <a
                  href="mailto:nikhilbam777@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <img src={mail_icon} alt="Email icon" className="c" />
                  <p>nikhilbam777@gmail.com</p>
                </a>
              </div>

              <div className="contact-detail">
                <a href="tel:+9779868944066" className="contact-link">
                  <img src={call_icon} alt="Phone icon" className="r" />
                  <p>+977 9868944066</p>
                </a>
              </div>

              <div className="contact-detail">
                <a
                  href="https://www.google.com/maps/place/Kumaripati,+Lalitpur,+Nepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <img src={location_icon} alt="Location icon" />
                  <p>Kathmandu, Kumaripati</p>
                </a>
              </div>
            </div>
          </div>

          <form
            className="contact-right"
            action="https://formspree.io/f/xgvyronr"
            method="POST"
          >
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />
            <label htmlFor="message">Write your message here</label>
            <textarea
              name="message"
              id="message"
              rows="8"
              placeholder="Enter Your Message"
              required
            ></textarea>
            <button className="contact-submit" type="submit">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
