import React from 'react'

function Home() {
   return (
      <>
         <section id="center" className="center_home">
            <div
               className="carousel fade-carousel slide"
               data-ride="carousel"
               data-interval={4000}
               id="bs-carousel"
            >
               {/* Overlay */}
               <div className="overlay" />
               {/* Indicators */}
               <ol className="carousel-indicators">
                  <li data-target="#bs-carousel" data-slide-to={0} className="active" />
                  <li data-target="#bs-carousel" data-slide-to={1} className="" />
                  <li data-target="#bs-carousel" data-slide-to={2} className="" />
               </ol>
               {/* Wrapper for slides */}
               <div className="carousel-inner">
                  <div className="item slides active">
                     <div className="slide-1" />
                     <div className="hero">
                        <h1 className="mgt">Jewelry Theme</h1>
                        <hr />
                        <p>
                           Nulla quis sem at nibh elementum imperdiet <br /> lacinia arcu
                           eget nulla!
                        </p>
                        <h4>
                           <a className="button" href="#">
                              View More
                           </a>
                        </h4>
                        <h4>
                           <a className="button_1" href="#">
                              {" "}
                              More Detail
                           </a>
                        </h4>
                     </div>
                  </div>
                  <div className="item slides">
                     <div className="slide-2" />
                     <div className="hero hero_1">
                        <h1 className="mgt">Dolore Magna</h1>
                        <hr />
                        <p>
                           Nulla quis sem at nibh elementum imperdiet <br /> lacinia arcu
                           eget nulla!
                        </p>
                        <h4>
                           <a className="button" href="#">
                              View More
                           </a>
                        </h4>
                        <h4>
                           <a className="button_1" href="#">
                              {" "}
                              More Detail
                           </a>
                        </h4>
                     </div>
                  </div>
                  <div className="item slides">
                     <div className="slide-3" />
                     <div className="hero">
                        <h1 className="mgt">Fusce Tellus </h1>
                        <hr />
                        <p>
                           Nulla quis sem at nibh elementum imperdiet <br /> lacinia arcu
                           eget nulla!
                        </p>
                        <h4>
                           <a className="button" href="#">
                              View More
                           </a>
                        </h4>
                        <h4>
                           <a className="button_1" href="#">
                              {" "}
                              More Detail
                           </a>
                        </h4>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="list">
            <div className="container">
               <div className="row">
                  <div className="list_1 clearfix">
                     <div className="col-sm-3 space_all">
                        <div className="list_1i text-center clearfix">
                           <span>
                              <i className="fa fa-thumbs-o-up" />
                           </span>
                           <h4>
                              <a href="#">Quality Jewelry</a>
                           </h4>
                           <hr />
                           <p>
                              We are proud to realease the best products for our beloved
                              customers.
                           </p>
                           <h5 className="normal">
                              <a className="button_1" href="#">
                                 READ MORE
                              </a>
                           </h5>
                        </div>
                     </div>
                     <div className="col-sm-3 space_all">
                        <div className="list_1i text-center clearfix">
                           <span>
                              <i className="fa fa-rocket" />
                           </span>
                           <h4>
                              <a href="#">Delivery</a>
                           </h4>
                           <hr />
                           <p>
                              We are proud to realease the best products for our beloved
                              customers.
                           </p>
                           <h5 className="normal">
                              <a className="button_1" href="#">
                                 READ MORE
                              </a>
                           </h5>
                        </div>
                     </div>
                     <div className="col-sm-3 space_all">
                        <div className="list_1i text-center clearfix">
                           <span>
                              <i className="fa fa-leaf" />
                           </span>
                           <h4>
                              <a href="#">Best Service</a>
                           </h4>
                           <hr />
                           <p>
                              We are proud to realease the best products for our beloved
                              customers.
                           </p>
                           <h5 className="normal">
                              <a className="button_1" href="#">
                                 READ MORE
                              </a>
                           </h5>
                        </div>
                     </div>
                     <div className="col-sm-3 space_all">
                        <div className="list_1i text-center clearfix">
                           <span>
                              <i className="fa fa-money" />
                           </span>
                           <h4>
                              <a href="#">Guarantee</a>
                           </h4>
                           <hr />
                           <p>
                              We are proud to realease the best products for our beloved
                              customers.
                           </p>
                           <h5 className="normal">
                              <a className="button_1" href="#">
                                 READ MORE
                              </a>
                           </h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="feature">
            <div className="container">
               <div className="row">
                  <div className="feature_1 text-center clearfix">
                     <div className="col-sm-12">
                        <h3 className="mgt">PROMOTIONS PRODUCTS</h3>
                        <hr />
                     </div>
                  </div>
                  <div className="feature_2 clearfix">
                     <div
                        id="carousel-example"
                        className="carousel slide"
                        data-ride="carousel"
                     >
                        {/* Wrapper for slides */}
                        <div className="carousel-inner">
                           <div className="item active">
                              <div className="col-sm-3">
                                 <div className="feature_2im clearfix">
                                    <div className="feature_2im1 clearfix">
                                       <a href="#">
                                          <img src="img/pro1.jpg" className="iw" alt="abc" />
                                       </a>
                                    </div>
                                    <div className="feature_2im2 clearfix">
                                       <h6 className="mgt">
                                          <a className="bg_1" href="#">
                                             Featured
                                          </a>
                                       </h6>
                                       <h6 className="pull-right mgt">
                                          <a className="bg_2" href="#">
                                             Hot
                                          </a>
                                       </h6>
                                    </div>
                                    <div className="feature_2im4 clearfix">
                                       <div className="col-sm-6 space_left">
                                          <h6>
                                             <a className="bg_3" href="#">
                                                Popular
                                             </a>
                                          </h6>
                                       </div>
                                       <div className="col-sm-6 feature_2im4r space_right">
                                          <ul>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-shopping-cart" />
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-rocket" />
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-heart-o" />
                                                </a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="item_last text-center clearfix">
                                    <h4>
                                       <a href="#">Fusce Nec Tellus</a>
                                    </h4>
                                    <h6>
                                       <span className="span_1 col_1 bold">$14.64</span>
                                       <span className="col_2 span_2">$16.30</span>
                                       <span>
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                       </span>
                                    </h6>
                                 </div>
                              </div>
                              <div className="col-sm-3">
                                 <div className="feature_2im clearfix">
                                    <div className="feature_2im1 clearfix">
                                       <a href="#">
                                          <img src="img/pro2.jpg" className="iw" alt="abc" />
                                       </a>
                                    </div>
                                    <div className="feature_2im2 clearfix">
                                       <h6 className="mgt">
                                          <a className="bg_1" href="#">
                                             Featured
                                          </a>
                                       </h6>
                                       <h6 className="pull-right mgt">
                                          <a className="bg_4" href="#">
                                             Sale
                                          </a>
                                       </h6>
                                    </div>
                                    <div className="feature_2im4 clearfix">
                                       <div className="col-sm-6 space_left">
                                          <h6>
                                             <a className="bg_3" href="#">
                                                Popular
                                             </a>
                                          </h6>
                                       </div>
                                       <div className="col-sm-6 feature_2im4r space_right">
                                          <ul>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-shopping-cart" />
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-rocket" />
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-heart-o" />
                                                </a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="item_last text-center clearfix">
                                    <h4>
                                       <a href="#">Nulla Quis Sem </a>
                                    </h4>
                                    <h6>
                                       <span className="span_1 col_1 bold">$14.64</span>
                                       <span className="col_2 span_2">$16.30</span>
                                       <span>
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                       </span>
                                    </h6>
                                 </div>
                              </div>
                              <div className="col-sm-3">
                                 <div className="feature_2im clearfix">
                                    <div className="feature_2im1 clearfix">
                                       <a href="#">
                                          <img src="img/pro3.jpg" className="iw" alt="abc" />
                                       </a>
                                    </div>
                                    <div className="feature_2im2 clearfix">
                                       <h6 className="mgt">
                                          <a className="bg_1" href="#">
                                             Featured
                                          </a>
                                       </h6>
                                       <h6 className="pull-right mgt">
                                          <a className="bg_2" href="#">
                                             Hot
                                          </a>
                                       </h6>
                                    </div>
                                    <div className="feature_2im4 clearfix">
                                       <div className="col-sm-6 space_left">
                                          <h6>
                                             <a className="bg_3" href="#">
                                                Popular
                                             </a>
                                          </h6>
                                       </div>
                                       <div className="col-sm-6 feature_2im4r space_right">
                                          <ul>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-shopping-cart" />
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-rocket" />
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-heart-o" />
                                                </a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="item_last text-center clearfix">
                                    <h4>
                                       <a href="#">Nibh Elementum</a>
                                    </h4>
                                    <h6>
                                       <span className="span_1 col_1 bold">$14.64</span>
                                       <span className="col_2 span_2">$16.30</span>
                                       <span>
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                       </span>
                                    </h6>
                                 </div>
                              </div>
                              <div className="col-sm-3">
                                 <div className="feature_2im clearfix">
                                    <div className="feature_2im1 clearfix">
                                       <a href="#">
                                          <img src="img/pro4.jpg" className="iw" alt="abc" />
                                       </a>
                                    </div>
                                    <div className="feature_2im2 clearfix">
                                       <h6 className="mgt">
                                          <a className="bg_1" href="#">
                                             Featured
                                          </a>
                                       </h6>
                                       <h6 className="pull-right mgt">
                                          <a className="bg_2" href="#">
                                             Hot
                                          </a>
                                       </h6>
                                    </div>
                                    <div className="feature_2im4 clearfix">
                                       <div className="col-sm-6 space_left">
                                          <h6>
                                             <a className="bg_3" href="#">
                                                Popular
                                             </a>
                                          </h6>
                                       </div>
                                       <div className="col-sm-6 feature_2im4r space_right">
                                          <ul>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-shopping-cart" />
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-rocket" />
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-heart-o" />
                                                </a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="item_last text-center clearfix">
                                    <h4>
                                       <a href="#">Vestibulum Lacinia</a>
                                    </h4>
                                    <h6>
                                       <span className="span_1 col_1 bold">$14.64</span>
                                       <span className="col_2 span_2">$16.30</span>
                                       <span>
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                       </span>
                                    </h6>
                                 </div>
                              </div>
                           </div>
                           <div className="item">
                              <div className="col-sm-3">
                                 <div className="feature_2im clearfix">
                                    <div className="feature_2im1 clearfix">
                                       <a href="#">
                                          <img src="img/pro5.png" className="iw" alt="abc" />
                                       </a>
                                    </div>
                                    <div className="feature_2im2 clearfix">
                                       <h6 className="mgt">
                                          <a className="bg_1" href="#">
                                             Featured
                                          </a>
                                       </h6>
                                       <h6 className="pull-right mgt">
                                          <a className="bg_2" href="#">
                                             Hot
                                          </a>
                                       </h6>
                                    </div>
                                    <div className="feature_2im4 clearfix">
                                       <div className="col-sm-6 space_left">
                                          <h6>
                                             <a className="bg_3" href="#">
                                                Popular
                                             </a>
                                          </h6>
                                       </div>
                                       <div className="col-sm-6 feature_2im4r space_right">
                                          <ul>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-shopping-cart" />
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-rocket" />
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-heart-o" />
                                                </a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="item_last text-center clearfix">
                                    <h4>
                                       <a href="#">Vestibulum Lacinia</a>
                                    </h4>
                                    <h6>
                                       <span className="span_1 col_1 bold">$14.64</span>
                                       <span className="col_2 span_2">$16.30</span>
                                       <span>
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                       </span>
                                    </h6>
                                 </div>
                              </div>
                              <div className="col-sm-3">
                                 <div className="feature_2im clearfix">
                                    <div className="feature_2im1 clearfix">
                                       <a href="#">
                                          <img src="img/pro6.jpg" className="iw" alt="abc" />
                                       </a>
                                    </div>
                                    <div className="feature_2im2 clearfix">
                                       <h6 className="mgt">
                                          <a className="bg_1" href="#">
                                             Featured
                                          </a>
                                       </h6>
                                       <h6 className="pull-right mgt">
                                          <a className="bg_4" href="#">
                                             Sale
                                          </a>
                                       </h6>
                                    </div>
                                    <div className="feature_2im4 clearfix">
                                       <div className="col-sm-6 space_left">
                                          <h6>
                                             <a className="bg_3" href="#">
                                                Popular
                                             </a>
                                          </h6>
                                       </div>
                                       <div className="col-sm-6 feature_2im4r space_right">
                                          <ul>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-shopping-cart" />
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-rocket" />
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-heart-o" />
                                                </a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="item_last text-center clearfix">
                                    <h4>
                                       <a href="#">Nibh Elementum</a>
                                    </h4>
                                    <h6>
                                       <span className="span_1 col_1 bold">$14.64</span>
                                       <span className="col_2 span_2">$16.30</span>
                                       <span>
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                       </span>
                                    </h6>
                                 </div>
                              </div>
                              <div className="col-sm-3">
                                 <div className="feature_2im clearfix">
                                    <div className="feature_2im1 clearfix">
                                       <a href="#">
                                          <img src="img/pro7.jpg" className="iw" alt="abc" />
                                       </a>
                                    </div>
                                    <div className="feature_2im2 clearfix">
                                       <h6 className="mgt">
                                          <a className="bg_1" href="#">
                                             Featured
                                          </a>
                                       </h6>
                                       <h6 className="pull-right mgt">
                                          <a className="bg_2" href="#">
                                             Hot
                                          </a>
                                       </h6>
                                    </div>
                                    <div className="feature_2im4 clearfix">
                                       <div className="col-sm-6 space_left">
                                          <h6>
                                             <a className="bg_3" href="#">
                                                Popular
                                             </a>
                                          </h6>
                                       </div>
                                       <div className="col-sm-6 feature_2im4r space_right">
                                          <ul>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-shopping-cart" />
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-rocket" />
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-heart-o" />
                                                </a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="item_last text-center clearfix">
                                    <h4>
                                       <a href="#">Nulla Quis Sem</a>
                                    </h4>
                                    <h6>
                                       <span className="span_1 col_1 bold">$14.64</span>
                                       <span className="col_2 span_2">$16.30</span>
                                       <span>
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                       </span>
                                    </h6>
                                 </div>
                              </div>
                              <div className="col-sm-3">
                                 <div className="feature_2im clearfix">
                                    <div className="feature_2im1 clearfix">
                                       <a href="#">
                                          <img src="img/pro2.jpg" className="iw" alt="abc" />
                                       </a>
                                    </div>
                                    <div className="feature_2im2 clearfix">
                                       <h6 className="mgt">
                                          <a className="bg_1" href="#">
                                             Featured
                                          </a>
                                       </h6>
                                       <h6 className="pull-right mgt">
                                          <a className="bg_2" href="#">
                                             Hot
                                          </a>
                                       </h6>
                                    </div>
                                    <div className="feature_2im4 clearfix">
                                       <div className="col-sm-6 space_left">
                                          <h6>
                                             <a className="bg_3" href="#">
                                                Popular
                                             </a>
                                          </h6>
                                       </div>
                                       <div className="col-sm-6 feature_2im4r space_right">
                                          <ul>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-shopping-cart" />
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-rocket" />
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#">
                                                   <i className="fa fa-heart-o" />
                                                </a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="item_last text-center clearfix">
                                    <h4>
                                       <a href="#">Fusce Nec Tellus</a>
                                    </h4>
                                    <h6>
                                       <span className="span_1 col_1 bold">$14.64</span>
                                       <span className="col_2 span_2">$16.30</span>
                                       <span>
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                       </span>
                                    </h6>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="feature_2_last text-center clearfix">
                        <div className="col-sm-12">
                           {/* Controls */}
                           <div className="controls">
                              <a
                                 className="left fa fa-chevron-left btn btn-success"
                                 href="#carousel-example"
                                 data-slide="prev"
                              />
                              <a
                                 className="right fa fa-chevron-right btn btn-success"
                                 href="#carousel-example"
                                 data-slide="next"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="collect">
            <div className="container">
               <div className="row">
                  <div className="feature_1 text-center clearfix">
                     <div className="col-sm-12">
                        <h3 className="mgt">NEW COLLECTIONS</h3>
                        <hr />
                     </div>
                  </div>
                  <div className="collect_top text-center clearfix">
                     <div className="col-sm-12">
                        <ul className="nav_tab_1 mgt">
                           <li className="active">
                              <a data-toggle="tab" href="#home">
                                 ALL PROJECT{" "}
                              </a>
                           </li>
                           <li className="">
                              <a data-toggle="tab" href="#menu1">
                                 NEW{" "}
                              </a>
                           </li>
                           <li>
                              <a data-toggle="tab" href="#menu2">
                                 POPULAR{" "}
                              </a>
                           </li>
                           <li className="">
                              <a data-toggle="tab" href="#menu3">
                                 TRENDING{" "}
                              </a>
                           </li>
                           <li className="">
                              <a data-toggle="tab" href="#menu4">
                                 TOP RATED{" "}
                              </a>
                           </li>
                           <li className="">
                              <a data-toggle="tab" href="#menu5">
                                 RECENT{" "}
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="tab-content clearfix">
                     <div id="home" className="tab-pane fade  clearfix active in">
                        <div className="click clearfix">
                           <div className="collcet_1 clearfix">
                              <div className="col-sm-6">
                                 <div className="collcet_1l clearfix">
                                    <div className="feature_2im clearfix">
                                       <div className="feature_2im1 clearfix">
                                          <a href="#">
                                             <img src="img/pro2.jpg" className="iw" alt="abc" />
                                          </a>
                                       </div>
                                       <div className="feature_2im2 clearfix">
                                          <h6 className="mgt">
                                             <a className="bg_1" href="#">
                                                Featured
                                             </a>
                                          </h6>
                                          <h6 className="pull-right mgt">
                                             <a className="bg_4" href="#">
                                                Sale
                                             </a>
                                          </h6>
                                       </div>
                                       <div className="feature_2im4 clearfix">
                                          <div className="col-sm-6 space_left">
                                             <h6>
                                                <a className="bg_3" href="#">
                                                   Popular
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="col-sm-6 feature_2im4r text-right">
                                             <ul>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-shopping-cart" />
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-rocket" />
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-heart-o" />
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="item_last text-center clearfix">
                                       <h4>
                                          <a href="#">Nulla Quis Sem </a>
                                       </h4>
                                       <h6>
                                          <span className="span_1 col_1 bold">$14.64</span>
                                          <span className="col_2 span_2">$16.30</span>
                                          <span>
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                          </span>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-6">
                                 <div className="collcet_1r mgt clearfix">
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro2.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_4" href="#">
                                                   Sale
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Nibh Elementum</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro3.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_2" href="#">
                                                   Hot
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Vestibulum Lacinia</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="collcet_1r clearfix">
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro4.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_4" href="#">
                                                   Sale
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Nibh Elementum</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro5.png" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_2" href="#">
                                                   Hot
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Vestibulum Lacinia</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div id="menu1" className="tab-pane fade   clearfix">
                        <div className="click clearfix">
                           <div className="collcet_1 clearfix">
                              <div className="col-sm-6">
                                 <div className="collcet_1l clearfix">
                                    <div className="feature_2im clearfix">
                                       <div className="feature_2im1 clearfix">
                                          <a href="#">
                                             <img src="img/pro6.jpg" className="iw" alt="abc" />
                                          </a>
                                       </div>
                                       <div className="feature_2im2 clearfix">
                                          <h6 className="mgt">
                                             <a className="bg_1" href="#">
                                                Featured
                                             </a>
                                          </h6>
                                          <h6 className="pull-right mgt">
                                             <a className="bg_4" href="#">
                                                Sale
                                             </a>
                                          </h6>
                                       </div>
                                       <div className="feature_2im4 clearfix">
                                          <div className="col-sm-6 space_left">
                                             <h6>
                                                <a className="bg_3" href="#">
                                                   Popular
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="col-sm-6 feature_2im4r text-right">
                                             <ul>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-shopping-cart" />
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-rocket" />
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-heart-o" />
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="item_last text-center clearfix">
                                       <h4>
                                          <a href="#">Nulla Quis Sem </a>
                                       </h4>
                                       <h6>
                                          <span className="span_1 col_1 bold">$14.64</span>
                                          <span className="col_2 span_2">$16.30</span>
                                          <span>
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                          </span>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-6">
                                 <div className="collcet_1r mgt clearfix">
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro7.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_4" href="#">
                                                   Sale
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Nibh Elementum</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro1.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_2" href="#">
                                                   Hot
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Vestibulum Lacinia</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="collcet_1r clearfix">
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro2.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_4" href="#">
                                                   Sale
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Nibh Elementum</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro3.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_2" href="#">
                                                   Hot
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Vestibulum Lacinia</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div id="menu2" className="tab-pane fade   clearfix">
                        <div className="click clearfix">
                           <div className="collcet_1 clearfix">
                              <div className="col-sm-6">
                                 <div className="collcet_1l clearfix">
                                    <div className="feature_2im clearfix">
                                       <div className="feature_2im1 clearfix">
                                          <a href="#">
                                             <img src="img/pro4.jpg" className="iw" alt="abc" />
                                          </a>
                                       </div>
                                       <div className="feature_2im2 clearfix">
                                          <h6 className="mgt">
                                             <a className="bg_1" href="#">
                                                Featured
                                             </a>
                                          </h6>
                                          <h6 className="pull-right mgt">
                                             <a className="bg_4" href="#">
                                                Sale
                                             </a>
                                          </h6>
                                       </div>
                                       <div className="feature_2im4 clearfix">
                                          <div className="col-sm-6 space_left">
                                             <h6>
                                                <a className="bg_3" href="#">
                                                   Popular
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="col-sm-6 feature_2im4r text-right">
                                             <ul>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-shopping-cart" />
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-rocket" />
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-heart-o" />
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="item_last text-center clearfix">
                                       <h4>
                                          <a href="#">Nulla Quis Sem </a>
                                       </h4>
                                       <h6>
                                          <span className="span_1 col_1 bold">$14.64</span>
                                          <span className="col_2 span_2">$16.30</span>
                                          <span>
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                          </span>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-6">
                                 <div className="collcet_1r mgt clearfix">
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro5.png" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_4" href="#">
                                                   Sale
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Nibh Elementum</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro6.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_2" href="#">
                                                   Hot
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Vestibulum Lacinia</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="collcet_1r clearfix">
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro7.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_4" href="#">
                                                   Sale
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Nibh Elementum</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro1.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_2" href="#">
                                                   Hot
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Vestibulum Lacinia</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div id="menu3" className="tab-pane fade   clearfix">
                        <div className="click clearfix">
                           <div className="collcet_1 clearfix">
                              <div className="col-sm-6">
                                 <div className="collcet_1l clearfix">
                                    <div className="feature_2im clearfix">
                                       <div className="feature_2im1 clearfix">
                                          <a href="#">
                                             <img src="img/pro2.jpg" className="iw" alt="abc" />
                                          </a>
                                       </div>
                                       <div className="feature_2im2 clearfix">
                                          <h6 className="mgt">
                                             <a className="bg_1" href="#">
                                                Featured
                                             </a>
                                          </h6>
                                          <h6 className="pull-right mgt">
                                             <a className="bg_4" href="#">
                                                Sale
                                             </a>
                                          </h6>
                                       </div>
                                       <div className="feature_2im4 clearfix">
                                          <div className="col-sm-6 space_left">
                                             <h6>
                                                <a className="bg_3" href="#">
                                                   Popular
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="col-sm-6 feature_2im4r text-right">
                                             <ul>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-shopping-cart" />
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-rocket" />
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-heart-o" />
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="item_last text-center clearfix">
                                       <h4>
                                          <a href="#">Nulla Quis Sem </a>
                                       </h4>
                                       <h6>
                                          <span className="span_1 col_1 bold">$14.64</span>
                                          <span className="col_2 span_2">$16.30</span>
                                          <span>
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                          </span>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-6">
                                 <div className="collcet_1r mgt clearfix">
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro3.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_4" href="#">
                                                   Sale
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Nibh Elementum</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro4.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_2" href="#">
                                                   Hot
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Vestibulum Lacinia</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="collcet_1r clearfix">
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro4.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_4" href="#">
                                                   Sale
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Nibh Elementum</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro5.png" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_2" href="#">
                                                   Hot
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Vestibulum Lacinia</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div id="menu4" className="tab-pane fade   clearfix">
                        <div className="click clearfix">
                           <div className="collcet_1 clearfix">
                              <div className="col-sm-6">
                                 <div className="collcet_1l clearfix">
                                    <div className="feature_2im clearfix">
                                       <div className="feature_2im1 clearfix">
                                          <a href="#">
                                             <img src="img/pro6.jpg" className="iw" alt="abc" />
                                          </a>
                                       </div>
                                       <div className="feature_2im2 clearfix">
                                          <h6 className="mgt">
                                             <a className="bg_1" href="#">
                                                Featured
                                             </a>
                                          </h6>
                                          <h6 className="pull-right mgt">
                                             <a className="bg_4" href="#">
                                                Sale
                                             </a>
                                          </h6>
                                       </div>
                                       <div className="feature_2im4 clearfix">
                                          <div className="col-sm-6 space_left">
                                             <h6>
                                                <a className="bg_3" href="#">
                                                   Popular
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="col-sm-6 feature_2im4r text-right">
                                             <ul>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-shopping-cart" />
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-rocket" />
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-heart-o" />
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="item_last text-center clearfix">
                                       <h4>
                                          <a href="#">Nulla Quis Sem </a>
                                       </h4>
                                       <h6>
                                          <span className="span_1 col_1 bold">$14.64</span>
                                          <span className="col_2 span_2">$16.30</span>
                                          <span>
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                          </span>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-6">
                                 <div className="collcet_1r mgt clearfix">
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro7.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_4" href="#">
                                                   Sale
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Nibh Elementum</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro1.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_2" href="#">
                                                   Hot
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Vestibulum Lacinia</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="collcet_1r clearfix">
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro2.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_4" href="#">
                                                   Sale
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Nibh Elementum</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro3.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_2" href="#">
                                                   Hot
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Vestibulum Lacinia</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div id="menu5" className="tab-pane fade   clearfix">
                        <div className="click clearfix">
                           <div className="collcet_1 clearfix">
                              <div className="col-sm-6">
                                 <div className="collcet_1l clearfix">
                                    <div className="feature_2im clearfix">
                                       <div className="feature_2im1 clearfix">
                                          <a href="#">
                                             <img src="img/pro4.jpg" className="iw" alt="abc" />
                                          </a>
                                       </div>
                                       <div className="feature_2im2 clearfix">
                                          <h6 className="mgt">
                                             <a className="bg_1" href="#">
                                                Featured
                                             </a>
                                          </h6>
                                          <h6 className="pull-right mgt">
                                             <a className="bg_4" href="#">
                                                Sale
                                             </a>
                                          </h6>
                                       </div>
                                       <div className="feature_2im4 clearfix">
                                          <div className="col-sm-6 space_left">
                                             <h6>
                                                <a className="bg_3" href="#">
                                                   Popular
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="col-sm-6 feature_2im4r text-right">
                                             <ul>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-shopping-cart" />
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-rocket" />
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="#">
                                                      <i className="fa fa-heart-o" />
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="item_last text-center clearfix">
                                       <h4>
                                          <a href="#">Nulla Quis Sem </a>
                                       </h4>
                                       <h6>
                                          <span className="span_1 col_1 bold">$14.64</span>
                                          <span className="col_2 span_2">$16.30</span>
                                          <span>
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                             <i className="fa fa-star-o" />
                                          </span>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-6">
                                 <div className="collcet_1r mgt clearfix">
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro5.png" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_4" href="#">
                                                   Sale
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Nibh Elementum</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro6.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_2" href="#">
                                                   Hot
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Vestibulum Lacinia</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="collcet_1r clearfix">
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro7.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_4" href="#">
                                                   Sale
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Nibh Elementum</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                    <div className="col-sm-6 space_left">
                                       <div className="feature_2im clearfix">
                                          <div className="feature_2im1 clearfix">
                                             <a href="#">
                                                <img src="img/pro1.jpg" className="iw" alt="abc" />
                                             </a>
                                          </div>
                                          <div className="feature_2im2 clearfix">
                                             <h6 className="mgt">
                                                <a className="bg_1" href="#">
                                                   Featured
                                                </a>
                                             </h6>
                                             <h6 className="pull-right mgt">
                                                <a className="bg_2" href="#">
                                                   Hot
                                                </a>
                                             </h6>
                                          </div>
                                          <div className="feature_2im4 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h6>
                                                   <a className="bg_3" href="#">
                                                      Popular
                                                   </a>
                                                </h6>
                                             </div>
                                             <div className="col-sm-6 feature_2im4r space_right">
                                                <ul>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-shopping-cart" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-rocket" />
                                                      </a>
                                                   </li>
                                                   <li>
                                                      <a href="#">
                                                         <i className="fa fa-heart-o" />
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item_last text-center clearfix">
                                          <h4>
                                             <a href="#">Vestibulum Lacinia</a>
                                          </h4>
                                          <h6>
                                             <span className="span_1 col_1 bold">$14.64</span>
                                             <span className="col_2 span_2">$16.30</span>
                                             <span>
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="blog_h">
            <div className="container">
               <div className="row">
                  <div className="blog_h_1 clearfix">
                     <div className="col-sm-6">
                        <div className="blog_h_1l clearfix">
                           <img src="img/pro8.jpg" className="iw" alt="abc" />
                           <h5>ELEGAN TELLS YOU THE STORY OF BEAUTY</h5>
                           <p>
                              Founded in New York City in 1932, by Mr. Harry – an innate
                              gemologist, an intuitive business man,...
                           </p>
                           <ul>
                              <li>
                                 <a href="#">
                                    <i className="fa fa-user col_1" /> Eget Nulla
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i className="fa fa-calendar col_1" /> May 27, 2018
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i className="fa fa-bars col_1" /> The Nest
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i className="fa fa-comments col_1" /> 6 Comment
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-sm-6">
                        <div className="blog_h_1r clearfix">
                           <h4 className="mgt">RECENT BLOG POST</h4>
                           <br />
                           <div className="blog_h_1ri clearfix">
                              <h5>
                                 <a href="#">ELEGAN TELLS YOU THE STORY OF BEAUTY</a>
                              </h5>
                              <ul>
                                 <li>10 July 2018 </li>
                                 <li> New User </li>
                                 <li className="border_none">
                                    <a href="#">Site Semper</a>
                                 </li>
                              </ul>
                              <p>
                                 Founded in New York City in 1932, by Mr. Harry – an innate
                                 gemologist, an intuitive business man,...
                              </p>
                              <h5>
                                 <a className="button mgt" href="#">
                                    Read More
                                 </a>
                              </h5>
                           </div>
                           <div className="blog_h_1ri pdb border_none clearfix">
                              <h5>
                                 <a href="#">ELEGAN TELLS YOU THE STORY OF BEAUTY</a>
                              </h5>
                              <ul>
                                 <li>10 July 2018 </li>
                                 <li> New User </li>
                                 <li className="border_none">
                                    <a href="#">Site Semper</a>
                                 </li>
                              </ul>
                              <p>
                                 Founded in New York City in 1932, by Mr. Harry – an innate
                                 gemologist, an intuitive business man,...
                              </p>
                              <h5>
                                 <a className="button mgt" href="#">
                                    Read More
                                 </a>
                              </h5>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="capabil">
            <div className="capabil_m clearfix">
               <div className="container">
                  <div className="row">
                     <div className="feature_1 text-center clearfix">
                        <div className="col-sm-12">
                           <h3 className="mgt col_1">OUR CAPABILITIES</h3>
                           <p className="col">
                              The Elegan pays tribute to the tradition of fine jewelry in its
                              most timeless form.
                           </p>
                           <hr className="hr_1" />
                        </div>
                     </div>
                     <div className="capabil_1 clearfix">
                        <div className="col-sm-3">
                           <div className="capabil_1i clearfix">
                              <div className="progress blue">
                                 <span className="progress-left">
                                    <span className="progress-bar" />
                                 </span>
                                 <span className="progress-right">
                                    <span className="progress-bar" />
                                 </span>
                                 <div className="progress-value">95%</div>
                              </div>
                              <div className="capabil_1i1 text-center clearfix">
                                 <h5>
                                    <a className="col_1" href="#">
                                       HUGE QUANTITY
                                    </a>
                                 </h5>
                                 <p className="col">
                                    We are proud to realease the best products for our beloved
                                    customers.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-3">
                           <div className="capabil_1i clearfix">
                              <div className="progress blue">
                                 <span className="progress-left">
                                    <span className="progress-bar" />
                                 </span>
                                 <span className="progress-right">
                                    <span className="progress-bar" />
                                 </span>
                                 <div className="progress-value">85%</div>
                              </div>
                              <div className="capabil_1i1 text-center clearfix">
                                 <h5>
                                    <a className="col_1" href="#">
                                       ON TIME
                                    </a>
                                 </h5>
                                 <p className="col">
                                    We are proud to realease the best products for our beloved
                                    customers.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-3">
                           <div className="capabil_1i clearfix">
                              <div className="progress blue">
                                 <span className="progress-left">
                                    <span className="progress-bar" />
                                 </span>
                                 <span className="progress-right">
                                    <span className="progress-bar" />
                                 </span>
                                 <div className="progress-value">75%</div>
                              </div>
                              <div className="capabil_1i1 text-center clearfix">
                                 <h5>
                                    <a className="col_1" href="#">
                                       TRUE MATERIAL
                                    </a>
                                 </h5>
                                 <p className="col">
                                    We are proud to realease the best products for our beloved
                                    customers.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-3">
                           <div className="capabil_1i clearfix">
                              <div className="progress blue">
                                 <span className="progress-left">
                                    <span className="progress-bar" />
                                 </span>
                                 <span className="progress-right">
                                    <span className="progress-bar" />
                                 </span>
                                 <div className="progress-value">80%</div>
                              </div>
                              <div className="capabil_1i1 text-center clearfix">
                                 <h5>
                                    <a className="col_1" href="#">
                                       SERVICE
                                    </a>
                                 </h5>
                                 <p className="col">
                                    We are proud to realease the best products for our beloved
                                    customers.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="serv_h">
            <div className="container">
               <div className="row">
                  <div className="feature_1 text-center clearfix">
                     <div className="col-sm-12">
                        <h3 className="mgt">OUR SERVICES</h3>
                        <p>
                           The Elegan pays tribute to the tradition of fine jewelry in its
                           most timeless form.
                        </p>
                        <hr />
                     </div>
                  </div>
                  <div className="serv_h_1 clearfix">
                     <div className="col-sm-3">
                        <div className="serv_h_1i text-center clearfix">
                           <img src="img/sr1.jpg" className="iw" alt="abc" />
                           <h5>
                              <a href="#">CUSTOM WORK</a>
                           </h5>
                           <p>
                              Many customers prefer to custom design their jewelry, therefore
                              truly creating...
                           </p>
                        </div>
                     </div>
                     <div className="col-sm-3">
                        <div className="serv_h_1i text-center clearfix">
                           <img src="img/sr2.jpg" className="iw" alt="abc" />
                           <h5>
                              <a href="#">PRODUCT CLEANING</a>
                           </h5>
                           <p>
                              Many customers prefer to custom design their jewelry, therefore
                              truly creating...
                           </p>
                        </div>
                     </div>
                     <div className="col-sm-3">
                        <div className="serv_h_1i text-center clearfix">
                           <img src="img/sr3.jpg" className="iw" alt="abc" />
                           <h5>
                              <a href="#">PERSONALIZING JEWELRY</a>
                           </h5>
                           <p>
                              Many customers prefer to custom design their jewelry, therefore
                              truly creating...
                           </p>
                        </div>
                     </div>
                     <div className="col-sm-3">
                        <div className="serv_h_1i text-center clearfix">
                           <img src="img/sr4.jpg" className="iw" alt="abc" />
                           <h5>
                              <a href="#">BROKEN MERCHANDISE</a>
                           </h5>
                           <p>
                              Many customers prefer to custom design their jewelry, therefore
                              truly creating...
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="work_h">
            <div className="container">
               <div className="row">
                  <div className="feature_1 text-center clearfix">
                     <div className="col-sm-12">
                        <h3 className="mgt">OUR SERVICES</h3>
                        <p>
                           The Elegan pays tribute to the tradition of fine jewelry in its
                           most timeless form.
                        </p>
                        <hr />
                     </div>
                  </div>
                  <div className="collect_top text-center clearfix">
                     <div className="col-sm-12">
                        <ul className="nav_tab_1 mgt">
                           <li className="active">
                              <a data-toggle="tab" href="#menu6">
                                 ALL CATEGORIES{" "}
                              </a>
                           </li>
                           <li className="">
                              <a data-toggle="tab" href="#menu7">
                                 JEWELRYSHOP{" "}
                              </a>
                           </li>
                           <li>
                              <a data-toggle="tab" href="#menu8">
                                 SITE TEMPLATE{" "}
                              </a>
                           </li>
                           <li className="">
                              <a data-toggle="tab" href="#menu9">
                                 CREATIVE PSD{" "}
                              </a>
                           </li>
                           <li className="">
                              <a data-toggle="tab" href="#menu10">
                                 USER INTERFACE{" "}
                              </a>
                           </li>
                           <li className="">
                              <a data-toggle="tab" href="#menu11">
                                 PHOTOSHOP DESIGNS{" "}
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="tab-content clearfix">
                     <div id="menu6" className="tab-pane fade  clearfix active in">
                        <div className="click clearfix">
                           <div className="work_hi mgt clearfix">
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p1.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p2.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p3.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="work_hi clearfix">
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p4.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p5.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p6.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="work_hi clearfix">
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p7.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p8.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p9.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div id="menu7" className="tab-pane fade   clearfix">
                        <div className="click clearfix">
                           <div className="work_hi clearfix">
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p5.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p6.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p7.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div id="menu8" className="tab-pane fade   clearfix">
                        <div className="click clearfix">
                           <div className="work_hi clearfix">
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p8.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p9.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p1.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div id="menu9" className="tab-pane fade   clearfix">
                        <div className="click clearfix">
                           <div className="work_hi mgt clearfix">
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p2.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p3.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p4.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div id="menu10" className="tab-pane fade   clearfix">
                        <div className="click clearfix">
                           <div className="work_hi clearfix">
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p5.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p6.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p7.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div id="menu11" className="tab-pane fade   clearfix">
                        <div className="click clearfix">
                           <div className="work_hi clearfix">
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p8.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p9.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="work_him clearfix">
                                    <div className="work_him1 clearfix">
                                       <img src="img/p1.jpg" className="iw" alt="abc" />
                                    </div>
                                    <div className="work_him2 text-center clearfix">
                                       <h5 className="mgt col_1">ELEGAN TELLS YOU THE STORY</h5>
                                       <p>
                                          Founded in New York City in 1932, by Mr. Harry – an
                                          innate gemologist, an intuitive
                                       </p>
                                       <h6>
                                          <a className="button" href="#">
                                             READ MORE
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              </div>
                           </div>
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
                              <button className="btn btn-primary" type="button">SUBSCRIBE</button>
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

export default Home