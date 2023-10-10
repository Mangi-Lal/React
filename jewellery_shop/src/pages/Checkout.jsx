import React from 'react'

function Checkout() {
   return (
      <>
         <section id="center" className="center_shop">
            <div className="container">
               <div className="row">
                  <div className="center_shop_t clearfix">
                     <div className="col-sm-6">
                        <div className="center_shop_tl clearfix">
                           <h4 className="mgt">Checkout</h4>
                        </div>
                     </div>
                     <div className="col-sm-6">
                        <div className="center_shop_tr text-right clearfix">
                           <h6 className="col_2">
                              You are here: <a href="#">Home</a> / Checkout
                           </h6>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="checkout" className="clearfix">
            <div className="container">
               <div className="row">
                  <div className="checkout_1 clearfix">
                     <div className="col-sm-8">
                        <div className="checkout_1l clearfix">
                           <h3 className="mgt">Make Your Checkout Here</h3>
                           <p>Please register in order to checkout more quickly</p>
                        </div>
                        <br />
                        <div className="checkout_1l1 clearfix">
                           <div className="col-sm-6 space_left">
                              <h5>
                                 First Name <span className="col_1">*</span>
                              </h5>
                              <input className="form-control" type="text" />
                           </div>
                           <div className="col-sm-6 space_left">
                              <h5>
                                 Last Name <span className="col_1">*</span>
                              </h5>
                              <input className="form-control" type="text" />
                           </div>
                        </div>
                        <div className="checkout_1l1 clearfix">
                           <div className="col-sm-6 space_left">
                              <h5>
                                 Email Address <span className="col_1">*</span>
                              </h5>
                              <input className="form-control" type="text" />
                           </div>
                           <div className="col-sm-6 space_left">
                              <h5>
                                 Phone Number <span className="col_1">*</span>
                              </h5>
                              <input className="form-control" type="text" />
                           </div>
                        </div>
                        <div className="checkout_1l1 clearfix">
                           <div className="col-sm-6 space_left">
                              <h5>
                                 Country <span className="col_1">*</span>
                              </h5>
                              <select className="form-control">
                                 <option>India</option>
                                 <option>Paksitan</option>
                                 <option>Russia</option>
                                 <option>England</option>
                                 <option>Nepal</option>
                              </select>
                           </div>
                           <div className="col-sm-6 space_left">
                              <h5>
                                 State / Divition <span className="col_1">*</span>
                              </h5>
                              <select className="form-control">
                                 <option>UP</option>
                                 <option>MP</option>
                                 <option>Bihar</option>
                                 <option>Delhi</option>
                                 <option>Jharkhand</option>
                              </select>
                           </div>
                        </div>
                        <div className="checkout_1l1 clearfix">
                           <div className="col-sm-6 space_left">
                              <h5>
                                 Address Line 1 <span className="col_1">*</span>
                              </h5>
                              <input className="form-control" type="text" />
                           </div>
                           <div className="col-sm-6 space_left">
                              <h5>
                                 Address Line 2 <span className="col_1">*</span>
                              </h5>
                              <input className="form-control" type="text" />
                           </div>
                        </div>
                        <div className="checkout_1l1 clearfix">
                           <div className="col-sm-6 space_left">
                              <h5>
                                 Postal Code <span className="col_1">*</span>
                              </h5>
                              <input className="form-control" type="text" />
                           </div>
                           <div className="col-sm-6 space_left">
                              <h5>
                                 Company <span className="col_1">*</span>
                              </h5>
                              <select className="form-control">
                                 <option>Microsoft</option>
                                 <option>Xaiomi</option>
                                 <option>Apple</option>
                                 <option>Samsung</option>
                                 <option>Motorola</option>
                              </select>
                           </div>
                        </div>
                        <div className="checkout_1l clearfix">
                           <p>
                              <input type="checkbox" /> Create an account?
                           </p>
                        </div>
                     </div>
                     <div className="col-sm-4">
                        <div className="checkout_1r clearfix">
                           <h4 className="mgt">CART TOTALS</h4>
                           <hr className="hr_1" />
                           <h5>
                              Sub Total <span className="pull-right">$230.00</span>
                           </h5>
                           <h5>
                              (+) Shipping <span className="pull-right">$20.00</span>
                           </h5>
                           <hr className="hr_2" />
                           <h5>
                              Total <span className="pull-right">$250.00</span>
                           </h5>
                           <br />
                           <h4>PAYMENTS</h4>
                           <hr className="hr_1" />
                           <p>
                              <input type="radio" /> <span>Check Payments</span>
                           </p>
                           <p>
                              <input type="radio" /> <span>Cash On Delivery</span>
                           </p>
                           <p>
                              <input type="radio" /> <span>PayPal</span>
                           </p>
                           <br />
                           <h6>
                              <a className="button" href="#">
                                 PROCEED TO CHECKOUT
                              </a>
                           </h6>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Checkout