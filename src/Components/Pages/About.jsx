import React from "react";
import "./about.css";
import Layout from "./../Layout/Layout";
import about from "../../assets/about.jpg";
const About = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 my-xxl-4 my-lg-3 my-md-2 my-sm-1 my-1">
            <img src={about} alt="about" className="aboutImg" />
          </div>
          <div className="col-12 my-xxl-4 my-lg-3 my-md-2 my-sm-1 my-1">
            <section class="about-us">
              <h2 className="text-center abth1 my-xxl-4 my-lg-3 my-md-2 my-sm-1 my-1">
                About Us
              </h2>
              <p className="abtP">
                At <strong>Mestry Circle</strong> Vendor Network Pvt Ltd, we are
                building Mestry Circle™, a powerful digital platform designed to
                seamlessly connect customers with vendors, technicians, and
                material suppliers.
              </p>
              <p>
                Our vision is to create a trusted ecosystem where individuals,
                households, and businesses can easily discover and engage with
                skilled labour, technicians, and reliable material providers –
                all in one place. Whether you are looking for a carpenter,
                plumber, electrician, or sourcing construction and renovation
                materials, Mestry Circle™ ensures convenience, transparency, and
                efficiency.
              </p>
              <h3 className="abtHead  my-xxl-4 my-lg-3 my-md-2 my-sm-1 my-1">
                What We Do
              </h3>
              <ul>
                <li>
                  <strong>For Customers:</strong>{" "}
                  <p className="abtp">
                    Find verified technicians, labourers, and service
                    professionals near you.
                  </p>
                </li>
                <li>
                  <p className="abtp">
                    Discover and compare material suppliers with real-time
                    pricing.
                  </p>
                </li>
                <li>
                  <p className="abtp">
                    Book services instantly with transparent pricing and secure
                    payments.
                  </p>
                </li>
                <li>
                  <p className="abtp">
                    {" "}
                    Track service history, manage bookings, and enjoy reliable
                    support.
                  </p>
                </li>
                <strong> For Vendors & Technicians:</strong>{" "}
                <li>
                  <p className="abtp">
                    {" "}
                    Showcase your services or material inventory to a wide
                    customer base.
                  </p>
                </li>{" "}
                <li>
                  <p className="abtp">
                    {" "}
                    Manage bookings, payments, and customer interactions through
                    one app.
                  </p>
                </li>{" "}
                <li>
                  <p className="abtp">
                    {" "}
                    Build credibility with a trusted platform that promotes
                    skilled work.
                  </p>
                </li>
                <li>
                  <p className="abtp">
                    {" "}
                    Access analytics, reviews, and growth tools to expand your
                    business.
                  </p>
                </li>{" "}
                <li>
                  <p className="abtp">
                    {" "}
                    Access analytics, reviews, and growth tools to expand your
                    business.
                  </p>
                </li>
              </ul>
              <h3 className="abtHead  my-xxl-4 my-lg-3 my-md-2 my-sm-1 my-1">
                Why Choose Mestry Circle™?
              </h3>
              <p className="abtP">
                {" "}
                Focused on Labour & Materials – Unlike generic platforms, we
                specialize in bridging the gap between skilled workforce and
                material suppliers with real-time engagement.
              </p>

              <p className="abtP">
                Trust & Transparency – Verified profiles, secure payments, and
                fair review systems.
              </p>

              <p className="abtP">
                Local + Digital – Empowering local technicians and suppliers
                with modern digital tools.
              </p>

              <p className="abtP">
                Convenience – One-stop solution for booking, payments,
                materials, and after-service support.
              </p>

              <p className="abtP">
                Growth & Opportunity – Helping vendors and technicians scale
                their business in the digital age.
              </p>
              <h3 className="abtHead  my-xxl-4 my-lg-3 my-md-2 my-sm-1 my-1">
                Our Mission
              </h3>
              <p className="abtP">
                To empower millions of skilled workers, technicians, and
                suppliers by giving them a platform to showcase their services
                and materials, while offering customers a reliable, transparent,
                and digital-first experience.
              </p>
              <h3 className="abtHead  my-xxl-4 my-lg-3 my-md-2 my-sm-1 my-1">
                Our Vision
              </h3>
              <p className="abtP">
                To become India’s most trusted labour and material marketplace,
                where every customer finds the right professional or material at
                the right price, and every vendor finds meaningful growth
                opportunities.
              </p>
              <p className="abtP">
                With Mestry Circle™ (Joinwalls), we are not just building a
                marketplace – we are building a community of trust, skill, and
                opportunity.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
