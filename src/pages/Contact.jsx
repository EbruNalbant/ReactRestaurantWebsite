import BannerImage from "../assets/2blackbean.jpg";
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Please, enter full name"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Please, enter email address"
          />
          <label htmlFor="name">Message:</label>
          <textarea name="message" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
