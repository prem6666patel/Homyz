import "./ContactBtn.css";

const ContactBtn = () => {
  return (
    <section className="contact-wrapper">
      <div className="flexCenter paddings contact-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactBtn;
