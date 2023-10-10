import React from 'react'

function Services() {
   return (
      <>
         <section id="center" className="center_shop">
            <div className="container">
               <div className="row">
                  <div className="center_shop_t clearfix">
                     <div className="col-sm-6">
                        <div className="center_shop_tl clearfix">
                           <h4 className="mgt">Services</h4>
                        </div>
                     </div>
                     <div className="col-sm-6">
                        <div className="center_shop_tr text-right clearfix">
                           <h6 className="col_2">
                              You are here: <a href="#">Home</a> / Services
                           </h6>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="example_h">
            <div className="container">
               <div className="row">
                  <div className="feature_1 text-center clearfix">
                     <div className="col-sm-12">
                        <h3 className="mgt">POPULAR SERVICES</h3>
                        <hr />
                     </div>
                  </div>
                  <div className="example_h_1 clearfix">
                     <div className="col-sm-4">
                        <div className="example_h_1l text-center clearfix">
                           <span>
                              <i className="fa fa-book" />
                           </span>
                           <h3>Lorem Dolor</h3>
                           <hr />
                           <p>
                              {" "}
                              Nulla quis sem at nibh elementum imperdiet Duis sagittis ipsum
                              Fusce nec tellus sed augue semper porta. Mauris massa.
                           </p>
                           <h4>
                              <a href="#" className="button">
                                 Learn More
                              </a>
                           </h4>
                        </div>
                     </div>
                     <div className="col-sm-4">
                        <div className="example_h_1l text-center clearfix">
                           <span>
                              <i className="fa fa-joomla" />
                           </span>
                           <h3>Adipiscing Elit</h3>
                           <hr />
                           <p>
                              {" "}
                              Nulla quis sem at nibh elementum imperdiet Duis sagittis ipsum
                              Fusce nec tellus sed augue semper porta. Mauris massa.
                           </p>
                           <h4>
                              <a href="#" className="button">
                                 Learn More
                              </a>
                           </h4>
                        </div>
                     </div>
                     <div className="col-sm-4">
                        <div className="example_h_1l text-center clearfix">
                           <span>
                              <i className="fa fa-flask" />
                           </span>
                           <h3>Cursus Ante</h3>
                           <hr />
                           <p>
                              {" "}
                              Nulla quis sem at nibh elementum imperdiet Duis sagittis ipsum
                              Fusce nec tellus sed augue semper porta. Mauris massa.
                           </p>
                           <h4>
                              <a href="#" className="button">
                                 Learn More
                              </a>
                           </h4>
                        </div>
                     </div>
                  </div>
                  <div className="example_h_1 clearfix">
                     <div className="col-sm-4">
                        <div className="example_h_1l text-center clearfix">
                           <span>
                              <i className="fa fa-graduation-cap" />
                           </span>
                           <h3>Dapibus Diam</h3>
                           <hr />
                           <p>
                              {" "}
                              Nulla quis sem at nibh elementum imperdiet Duis sagittis ipsum
                              Fusce nec tellus sed augue semper porta. Mauris massa.
                           </p>
                           <h4>
                              <a href="#" className="button">
                                 Learn More
                              </a>
                           </h4>
                        </div>
                     </div>
                     <div className="col-sm-4">
                        <div className="example_h_1l text-center clearfix">
                           <span>
                              <i className="fa fa-bell" />
                           </span>
                           <h3>Nibh Elementum</h3>
                           <hr />
                           <p>
                              {" "}
                              Nulla quis sem at nibh elementum imperdiet Duis sagittis ipsum
                              Fusce nec tellus sed augue semper porta. Mauris massa.
                           </p>
                           <h4>
                              <a href="#" className="button">
                                 Learn More
                              </a>
                           </h4>
                        </div>
                     </div>
                     <div className="col-sm-4">
                        <div className="example_h_1l text-center clearfix">
                           <span>
                              <i className="fa fa-pencil-square-o" />
                           </span>
                           <h3>Augue Semper</h3>
                           <hr />
                           <p>
                              {" "}
                              Nulla quis sem at nibh elementum imperdiet Duis sagittis ipsum
                              Fusce nec tellus sed augue semper porta. Mauris massa.
                           </p>
                           <h4>
                              <a href="#" className="button">
                                 Learn More
                              </a>
                           </h4>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="enquiry">
            <div className="container">
               <div className="row">
                  <div className="enquiry_1 text-center clearfix">
                     <div className="col-sm-12">
                        <h4 className="mgt">NEWSLETTER</h4>
                        <p>
                           Subscribe to our newsletter and get{" "}
                           <span className="col_1">20%</span> off your first purchase
                        </p>
                        <div className="input-group">
                           <input
                              type="text"
                              className="form-control form_2"
                              placeholder="Your Email"
                           />
                           <span className="input-group-btn">
                              <button className="btn btn-primary" type="button">
                                 SUBSCRIBE
                              </button>
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>

   )
}

export default Services