import React from 'react';
import Recaptcha from 'react-recaptcha';

class ContactForm extends React.Component {

  state = {
    name: '',
    company: '',
    mail: '',
    message: '',
    captcha: null,
    canSubmit: false,
    submitted: false
  };

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  onVerifyRecaptcha(token) {
    this.setState({
      recaptcha: token,
      canSubmit: true
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({submitted: true});
  }

  render() {
    return <>
      <div>
        <p>
          <noscript>Please enable JS to use the contact form.</noscript>
        </p>
        <form onSubmit={(e) => this.handleSubmit(e)} noValidate
              style={{display: this.state.submitted ? 'none' : 'block'}}>
          <div className="form-group">
            <label id="contact-name-label" htmlFor="contact-name" className="bold">Name*</label>
            <input type="text" id="contact-name" name="name" value={this.state.name}
                   onChange={(e) => this.handleUserInput(e)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="contact-company" className="bold">Company</label>
            <input type="text" id="contact-company" name="company" value={this.state.company}
                   onChange={(e) => this.handleUserInput(e)}/>
          </div>
          <div className="form-group">
            <label htmlFor="contact-email" className="bold mb-0">Mail*</label>
            <input type="email" id="contact-email" name="mail" value={this.state.mail}
                   onChange={(e) => this.handleUserInput(e)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="contact-message" className="bold">Text*</label>
            <textarea id="contact-message" name="message" value={this.state.message}
                      onChange={(e) => this.handleUserInput(e)} rows="4" required/>
          </div>
          <div className="form-group">
            <Recaptcha verifyCallback={(e) => this.onVerifyRecaptcha(e)}
                       sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"/>
          </div>
          <div className="form-group">
            <button id="contact-submit" name="submit" type="submit"
                    disabled={!this.state.canSubmit}>
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  }
}

export default ContactForm;
