import React from "react";
import "./privatePolicy.css";
import Layout from "./../Layout/Layout";
const PrivatePolicy = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <section class="privacy-policy">
              <h2 className="text-center abth1 my-xxl-4 my-lg-3 my-md-2 my-sm-1 my-1">
                Privacy Policy
              </h2>
              <p className="abtP">
                At <strong>Mestry Circle</strong>, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy explains how we collect, use, and safeguard your data
                when you use our website, products, or services.
              </p>

              <h3 className="abtHead">1. Information We Collect</h3>
              <ul>
                <li className="abtP">
                  Personal details such as name, email address, phone number,
                  and billing/shipping address.
                </li>
                <li className="abtP">
                  Payment details when you purchase products or services.
                </li>
                <li className="abtP">
                  Non-personal information such as browser type, IP address, and
                  website usage data.
                </li>
              </ul>

              <h3 className="abtHead">2. How We Use Your Information</h3>
              <ul>
                <li className="abtP">
                  To process orders and deliver products/services.
                </li>
                <li className="abtP">
                  To communicate with you about your purchases, inquiries, or
                  support requests.
                </li>
                <li className="abtP">
                  To improve our website, services, and customer experience.
                </li>
                <li className="abtP">
                  To send promotional updates, offers, and news (only if you
                  have opted in).
                </li>
              </ul>

              <h3 className="abtHead">3. Data Protection</h3>
              <ul>
                <li className="abtP">
                  We use secure technologies to protect your personal data
                  against unauthorized access or misuse.
                </li>
                <li className="abtP">
                  We do not sell, rent, or share your personal information with
                  third parties without your consent, except as required by law.
                </li>
              </ul>

              <h3 className="abtHead">4. Cookies</h3>
              <ul>
                <li className="abtP">
                  Our website may use cookies to enhance user experience and
                  track website performance.
                </li>
                <li className="abtP">
                  You may disable cookies in your browser settings, but some
                  features of the site may not function properly.
                </li>
              </ul>

              <h3 className="abtHead">5. Third-Party Services</h3>
              <ul>
                <li className="abtP">
                  We may use trusted third-party service providers (e.g.,
                  payment gateways, delivery partners) to facilitate our
                  services.
                </li>
                <li className="abtP">
                  These third parties have access to personal data only to
                  perform their tasks and are obligated to keep it confidential.
                </li>
              </ul>

              <h3 className="abtHead">6. Your Rights</h3>
              <ul>
                <li className="abtP">
                  You can request access, correction, or deletion of your
                  personal information at any time.
                </li>
                <li className="abtP">
                  You may opt out of receiving promotional emails by following
                  the unsubscribe link in our messages.
                </li>
              </ul>

              <h3 className="abtHead">7. Changes to this Policy</h3>
              <ul>
                <li className="abtP">
                  We may update this Privacy Policy periodically to reflect
                  changes in practices or legal requirements.
                </li>
                <li className="abtP">
                  The latest version will always be available on this page.
                </li>
              </ul>

              <h3 className="abtHead">8. Contact Us</h3>
              <p className="abtP">
                If you have any questions about this Privacy Policy or how we
                handle your data, please contact us at
                <a href="mailto:privacy@yourcompany.com">
                  privacy@mestrycircle.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivatePolicy;
