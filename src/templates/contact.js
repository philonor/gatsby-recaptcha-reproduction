import React from "react";
import Layout from "../components/layout";
import {Link} from "@reach/router";

const ContactTemplate = ({children, title}) => (
  <Layout>
    <section className="section bg-2 pt-6 pb-5">
      <h2>{title} <span style={{fontSize: '10pt'}}><Link to="/contact-en/">EN</Link>/<Link to="/contact-de/">DE</Link></span></h2>
      <div>
        {children && <div>{children}</div>}
      </div>
    </section>
    <section>
      Form goes here.
    </section>
    <section>
      <Link to="/">Index</Link>
    </section>
  </Layout>
);

export default ContactTemplate;