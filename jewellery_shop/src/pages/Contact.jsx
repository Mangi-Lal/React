import React from 'react'

function Contact() {
   return (
      <>
         <section id="center" className="center_shop">
            <div className="container">
               <div className="row">
                  <div className="center_shop_t clearfix">
                     <div className="col-sm-6">
                        <div className="center_shop_tl clearfix">
                           <h4 className="mgt">Contact</h4>
                        </div>
                     </div>
                     <div className="col-sm-6">
                        <div className="center_shop_tr text-right clearfix">
                           <h6 className="col_2">
                              You are here: <a href="#">Home</a> / Contact
                           </h6>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="contact_top">
            <div className="container">
               <div className="row">
                  <div className="">
                     <div className="col-sm-6">
                        <div className="">
                           <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925916665!2d-80.29949920266738!3d25.782390733064336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C+FL%2C+USA!5e0!3m2!1sen!2sin!4v1530774403788"
                              width="100%"
                              height="500px"
                              frameBorder={0}
                              style={{ border: 0 }}
                              allowFullScreen=""
                           />
                        </div>
                     </div>
                     <div className="col-sm-6">
                        <div className="detail_14 clearfix">
                           <h2 className="mgt">Get in touch</h2>
                           <input type="text" className="form-control" placeholder="Name*" />
                           <input
                              type="text"
                              className="form-control"
                              placeholder="E-mail*"
                           />
                           <input
                              type="text"
                              className="form-control"
                              placeholder="Website*"
                           />
                           <textarea
                              className="form-control form_1"
                              placeholder="Message*"
                              defaultValue={""}
                           />
                           <h4>
                              <a className="button" href="#">
                                 Send Message
                              </a>
                           </h4>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="contact_last">
            <div className="container">
               <div className="row">
                  <div className="contact_last_1 clearfix">
                     <div className="col-sm-8">
                        <div className="contact_last_1l clearfix">
                           <h2 className="mgt">Ready To Plan A Project With Us</h2>
                        </div>
                     </div>
                     <div className="col-sm-4">
                        <div className="contact_last_1r clearfix">
                           <h4 className="mgt">
                              <a className="button mgt" href="#">
                                 Contact Us
                              </a>
                           </h4>
                        </div>
                     </div>
                  </div>
                  <div className="contact_last_2 clearfix">
                     <div className="col-sm-4">
                        <div className="contact_last_2i clearfix">
                           <h4 className="bold">LOS ANGELES</h4>
                           <hr />
                           <p>
                              123 Virginia Drive Nottingham
                              <br />
                              Los Angeles 12345
                           </p>
                           <p>
                              +123 444-12xy
                              <br />
                              info@gmail.com
                           </p>
                        </div>
                     </div>
                     <div className="col-sm-4">
                        <div className="contact_last_2i clearfix">
                           <h4 className="bold">LONDON</h4>
                           <hr />
                           <p>
                              123 Virginia Drive Nottingham
                              <br />
                              Los Angeles 12345
                           </p>
                           <p>
                              +123 444-12xy
                              <br />
                              info@gmail.com
                           </p>
                        </div>
                     </div>
                     <div className="col-sm-4">
                        <div className="contact_last_2i clearfix">
                           <h4 className="bold">NEW YORK</h4>
                           <hr />
                           <p>
                              123 Virginia Drive Nottingham
                              <br />
                              Los Angeles 12345
                           </p>
                           <p>
                              +123 444-12xy
                              <br />
                              info@gmail.com
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>

   )
}

export default Contact