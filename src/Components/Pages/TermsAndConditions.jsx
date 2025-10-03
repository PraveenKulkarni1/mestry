import React from "react";
import "./termsAndConditions.css";
import Layout from "../Layout/Layout";
const TermsAndConditions = () => {
  return (
    <Layout>
      <div className="container my-xxl-5 my-lg-3 my-md-2 my-sm-1 my-1">
        <div className="row">
          <div className="col-12"></div>
          <div className="col-12">
            <section class="terms">
              <h2 className="text-center abth1 my-xxl-4 my-lg-3 my-md-2 my-sm-1 my-1">
                Terms & Conditions
              </h2>
              <p className="abtP">
                Welcome to <strong>Mestry Circle</strong>. By accessing or using
                our materials, services, and website, you agree to comply with
                and be bound by the following Terms and Conditions. Please read
                them carefully.
              </p>

              <h3 className="abtHead">1. General</h3>
              <ul>
                <li className="abtP">
                  These terms apply to all visitors, customers, and users of our
                  services.
                </li>
                <li className="abtP">
                  By purchasing or using our products and services, you accept
                  these terms in full.
                </li>
                <li className="abtP">
                  We reserve the right to update or modify these terms at any
                  time without prior notice.
                </li>
              </ul>

              <h3 className="abtHead">2. Products & Services</h3>
              <ul>
                <li className="abtP">
                  All building materials and services are subject to
                  availability.
                </li>
                <li className="abtP">
                  We strive to provide accurate information regarding
                  specifications, pricing, and availability, but errors may
                  occur.
                </li>
                <li className="abtP">
                  We reserve the right to substitute or modify products with
                  equivalent alternatives if necessary.
                </li>
              </ul>

              <h3 className="abtHead">3. Pricing & Payment</h3>
              <ul>
                <li className="abtP">
                  All prices are quoted in [currency] unless stated otherwise.
                </li>
                <li className="abtP">
                  Payments must be made in full before delivery or execution of
                  services unless otherwise agreed.
                </li>
                <li className="abtP">
                  We are not responsible for any additional charges imposed by
                  banks or third-party payment providers.
                </li>
              </ul>

              <h3 className="abtHead">4. Delivery & Service Execution</h3>
              <ul>
                <li className="abtP">
                  Delivery timelines are estimates and may vary due to factors
                  beyond our control.
                </li>
                <li className="abtP">
                  Risk of loss or damage passes to the customer upon delivery.
                </li>
                <li className="abtP">
                  Installation or on-site services must be scheduled in advance
                  and may be subject to additional terms.
                </li>
              </ul>

              <h3 className="abtHead">5. Returns & Refunds</h3>
              <ul>
                <li className="abtP">
                  Returns are accepted only for defective or damaged products,
                  subject to inspection.
                </li>
                <li className="abtP">
                  Custom orders and used materials are non-refundable.
                </li>
                <li className="abtP">
                  Refunds, if applicable, will be processed within [X] business
                  days.
                </li>
              </ul>

              <h3 className="abtHead">6. Liability</h3>
              <ul>
                <li className="abtP">
                  We are not liable for indirect, incidental, or consequential
                  damages arising from the use of our products or services.
                </li>
                <li className="abtP">
                  Customers are responsible for ensuring that products and
                  services are suitable for their intended use.
                </li>
              </ul>

              <h3 className="abtHead">7. Intellectual Property</h3>
              <ul>
                <li className="abtP">
                  All content on our website (logos, text, images, etc.) is the
                  property of <strong>[Your Company Name]</strong>.
                </li>
                <li className="abtP">
                  Unauthorized reproduction, distribution, or use is strictly
                  prohibited.
                </li>
              </ul>

              <h3 className="abtHead">8. Governing Law</h3>
              <ul>
                <li className="abtP">
                  These terms shall be governed by and construed under the laws
                  of [Your Country/State].
                </li>
                <li className="abtP">
                  Any disputes shall be subject to the exclusive jurisdiction of
                  the courts in [Location].
                </li>
              </ul>

              <h3 className="abtHead">9. Contact Us</h3>
              <p className="abtP">
                For any questions regarding these Terms & Conditions, please
                contact us at
                <a href="mailto:info@yourcompany.com"> info@metsrycircle.com</a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;
