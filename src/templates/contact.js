import React from "react";
import * as PropTypes from "prop-types";
import {Link, navigate} from "@reach/router";
import Layout from "../components/layout";
import ContactForm from "../components/contact-form";

class ContactTemplate extends React.Component {
  constructor (props) {
    super (props);
    const lang = props.lang;
    const otherLang = lang === 'de' ? 'en' : 'de';
    // Simulate page redirect to correct locale.
    // setTimeout (() => {
    //  console.log (`Redirecting to ${otherLang}`)
    //  navigate(`/contact-${otherLang}/`, {replace: true});
    //}, 2000);
  }

  render() {
    const {children, title} = this.props;
    return <Layout>
      <section className="section bg-2 pt-6 pb-5">
        <h2>{title} <span style={{fontSize: '10pt'}}>
          <Link to="/contact-en/">EN</Link>/<Link to="/contact-de/">DE</Link>
        </span>
        </h2>
        <div>
          {children && <div>{children}</div>}
        </div>
      </section>
      <section>
        <ContactForm/>
      </section>
      <section>
        <Link to="/">Index</Link>
      </section>
    </Layout>
  }
}

ContactTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired
};

export default ContactTemplate;