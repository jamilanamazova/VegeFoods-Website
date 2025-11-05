import React from "react";

const ContactSection = () => {
  return (
    <section className=" contact-section bg-light" >
      <div className="container d-flex justify-content-center" >
        <div className="row d-flex mb-5 contact-info" style={{'margin-top':'20px'}}>
          <div className="col-md-3 d-flex" >
            <div className="info bg-white p-4">
              <p>
                <span>Address:</span> 198 West 21th Street, Suite 721 New York
                NY 10016
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="info bg-white p-4">
              <p>
                <span>Phone:</span>{" "}
                <a href="tel://1234567920">+ 1235 2355 98</a>
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="info bg-white p-4">
              <p>
                <span>Email:</span>{" "}
                <a href="mailto:info@yoursite.com">info@yoursite.com</a>
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="info bg-white p-4">
              <p>
                <span>Website:</span> <a href="#">yoursite.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="row block-9" style={{"text-Align":"right"}}>
          <div className="col-md-6 order-md-last d-flex"  >
            <form action="#" className="bg-white p-5 contact-form"  >
              <div className="form-group" style={{"margin-bottom":"10px","width":"400px"}} >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  
                />
              </div>
              <div className="form-group" style={{"margin-bottom":"10px","width":"400px"}} >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group" style={{"margin-bottom":"10px","width":"400px"}} >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group" style={{"margin-bottom":"10px","width":"400px"}} >
                <textarea
                  cols="30"
                  rows="7"
                  className="form-control"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group" style={{"margin-bottom":"10px","width":"300px"}}>
                <input
                  type="submit"
                  value="Send Message"
                  className="btn-primary py-3 px-5"
                />
              </div>
            </form>
          </div>

          <div className="col-md-6 d-flex">
            <div
              id="map"
              className="bg-white"
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  backgroundColor: "rgb(229, 227, 223)",
                }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
