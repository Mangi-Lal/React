import React from 'react'

function Footer() {
   return (
      <>
         <section id="footer">
            <div className="container">
               <div className="row">
                  <div className="footer_1 clearfix">
                     <div className="col-sm-3">
                        <div className="footer_1i clearfix">
                           <a className="navbar-brand" href="index.html">
                              <i className="fa fa-diamond" />{" "}
                              <span className="col">Jewe</span>lry
                           </a>
                           <h5 className="col_3 normal">
                              <span>Hotline:</span>{" "}
                              <a className="col" href="#">
                                 01234
                              </a>
                           </h5>
                           <h5 className="col_3 normal">
                              <span>Phone:</span>{" "}
                              <a className="col" href="#">
                                 (+123) 456-7898
                              </a>
                           </h5>
                           <h5 className="col_3 normal">
                              <span>Email:</span>{" "}
                              <a className="col" href="#">
                                 info@gmail.com
                              </a>
                           </h5>
                           <h5 className="col_3 normal">
                              <span>Address:</span>{" "}
                              <a className="col" href="#">
                                 2190 Clue, The Xronz, OZ 0038, USA
                              </a>
                           </h5>
                           <ul className="social-network social-circle">
                              <li>
                                 <a href="#" className="icoRss" title="Rss">
                                    <i className="fa fa-rss" />
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="icoFacebook" title="Facebook">
                                    <i className="fa fa-facebook" />
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="icoTwitter" title="Twitter">
                                    <i className="fa fa-twitter" />
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="icoGoogle" title="Google +">
                                    <i className="fa fa-google-plus" />
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="icoLinkedin" title="Linkedin">
                                    <i className="fa fa-linkedin" />
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-sm-3">
                        <div className="footer_1i1 clearfix">
                           <h4 className="mgt">Information</h4>
                           <ul>
                              <li className="col_3">
                                 <a className="col_3" href="#">
                                    About Us
                                 </a>
                              </li>
                              <li className="col_3">
                                 <a className="col_3" href="#">
                                    Contact Us
                                 </a>
                              </li>
                              <li className="col_3">
                                 <a className="col_3" href="#">
                                    Privacy Policy
                                 </a>
                              </li>
                              <li className="col_3">
                                 <a className="col_3" href="#">
                                    Terms &amp; Conditions
                                 </a>
                              </li>
                              <li className="col_3">
                                 <a className="col_3" href="#">
                                    Delivery Information
                                 </a>
                              </li>
                              <li className="col_3">
                                 <a className="col_3" href="#">
                                    Orders and Returns
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-sm-3">
                        <div className="footer_1i1 clearfix">
                           <h4 className="mgt">Customer Care</h4>
                           <ul>
                              <li className="col_3">
                                 <a className="col_3" href="#">
                                    Help &amp; FAQs
                                 </a>
                              </li>
                              <li className="col_3">
                                 <a className="col_3" href="#">
                                    My Account
                                 </a>
                              </li>
                              <li className="col_3">
                                 <a className="col_3" href="#">
                                    Order History
                                 </a>
                              </li>
                              <li className="col_3">
                                 <a className="col_3" href="#">
                                    Wishlist
                                 </a>
                              </li>
                              <li className="col_3">
                                 <a className="col_3" href="#">
                                    Newsletter
                                 </a>
                              </li>
                              <li className="col_3">
                                 <a className="col_3" href="#">
                                    Newsletter
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-sm-3">
                        <div className="footer_1i1 clearfix">
                           <h4 className="mgt">Newsletter</h4>
                           <p className="col_3">
                              Sign up for our mailing list to get the latest updates &amp;
                              offers.
                           </p>
                           <input
                              className="form-control"
                              placeholder="Email address"
                              type="text"
                           />
                           <h5>
                              <a className="button" href="#">
                                 {" "}
                                 Subscribe Now
                              </a>
                           </h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="footer_bottom">
            <div className="container">
               <div className="row">
                  <div className="footer_2 text-center clearfix">
                     <div className="col-sm-12">
                        <p className="mgt col_3">
                           © 2022 Your Website Name. All Rights Reserved | Design by{" "}
                           <a className="col_1" href="#">
                              A2it online
                           </a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Footer