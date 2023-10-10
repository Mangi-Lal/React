import React from 'react'

function Detail() {
   return (
      <>
         <section id="center" className="center_shop">
            <div className="container">
               <div className="row">
                  <div className="center_shop_t clearfix">
                     <div className="col-sm-6">
                        <div className="center_shop_tl clearfix">
                           <h4 className="mgt">Product Detail</h4>
                        </div>
                     </div>
                     <div className="col-sm-6">
                        <div className="center_shop_tr text-right clearfix">
                           <h6 className="col_2">
                              You are here: <a href="#">Home</a> / Product Detail
                           </h6>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="detail">
            <div className="container">
               <div className="row">
                  <div className="detail_1 clearfix">
                     <div className="col-sm-9">
                        <div className="detail_1l clearfix">
                           <div className="col-sm-5 space_left">
                              <div className="detail_1ll clearfix">
                                 <div
                                    className="carousel slide article-slide"
                                    id="article-photo-carousel"
                                 >
                                    {/* Wrapper for slides */}
                                    <div className="carousel-inner cont-slider">
                                       <div className="item active">
                                          <div className="mag">
                                             <div className="magnify">
                                                <div className="magnify">
                                                   <img
                                                      data-toggle="magnify"
                                                      src="img/p1.jpg"
                                                      alt=""
                                                   />
                                                   <div
                                                      className="magnify-large"
                                                      style={{
                                                         background: 'url("img/53.jpg") no-repeat'
                                                      }}
                                                   />
                                                </div>
                                                <div className="magnify-large" />
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item">
                                          <div className="mag">
                                             <div className="magnify">
                                                <div className="magnify">
                                                   <img
                                                      data-toggle="magnify"
                                                      src="img/p2.jpg"
                                                      alt=""
                                                   />
                                                   <div
                                                      className="magnify-large"
                                                      style={{
                                                         background: 'url("img/54.jpg") no-repeat'
                                                      }}
                                                   />
                                                </div>
                                                <div className="magnify-large" />
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item">
                                          <div className="mag">
                                             <div className="magnify">
                                                <div className="magnify">
                                                   <img
                                                      data-toggle="magnify"
                                                      src="img/p3.jpg"
                                                      alt=""
                                                   />
                                                   <div
                                                      className="magnify-large"
                                                      style={{
                                                         background: 'url("img/55.jpg") no-repeat'
                                                      }}
                                                   />
                                                </div>
                                                <div className="magnify-large" />
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item ">
                                          <div className="mag">
                                             <div className="magnify">
                                                <div className="magnify">
                                                   <img
                                                      data-toggle="magnify"
                                                      src="img/p4.jpg"
                                                      alt=""
                                                   />
                                                   <div
                                                      className="magnify-large"
                                                      style={{
                                                         background:
                                                            'url("img/56.jpg") -101px -21px no-repeat',
                                                         display: "block",
                                                         left: 17,
                                                         top: "-27.5px",
                                                         opacity: 0
                                                      }}
                                                   ></div>
                                                </div>
                                                <div className="magnify-large" />
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    {/* Indicators */}
                                    <ol className="carousel-indicators">
                                       <li
                                          className="active"
                                          data-slide-to={0}
                                          data-target="#article-photo-carousel"
                                       >
                                          <img alt="" src="img/p1.jpg" />
                                       </li>
                                       <li
                                          className=""
                                          data-slide-to={1}
                                          data-target="#article-photo-carousel"
                                       >
                                          <img alt="" src="img/p2.jpg" />
                                       </li>
                                       <li
                                          className=""
                                          data-slide-to={2}
                                          data-target="#article-photo-carousel"
                                       >
                                          <img alt="" src="img/p3.jpg" />
                                       </li>
                                       <li
                                          className=""
                                          data-slide-to={3}
                                          data-target="#article-photo-carousel"
                                       >
                                          <img alt="" src="img/p4.jpg" />
                                       </li>
                                    </ol>
                                 </div>
                              </div>
                           </div>
                           <div className="col-sm-7 space_left">
                              <div className="detail_1lr clearfix">
                                 <div className="detail_1lri clearfix">
                                    <h4 className="mgt">White Product New</h4>
                                    <h6>
                                       <span className="span_1">
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                          <i className="fa fa-star-o" />
                                       </span>
                                       <span className="span_2 col_2">0 Review(s)</span>
                                    </h6>
                                    <ul>
                                       <li>
                                          Lightning-fast turnaround times, including one-day
                                          production
                                       </li>
                                       <li>Multiple premium paper stocks and folding options</li>
                                       <li>Brochure direct mailing services available</li>
                                    </ul>
                                    <hr />
                                    <h3>
                                       <span className="span_1 col_1">$11.64</span>{" "}
                                       <span className="span_2">$14.30</span>{" "}
                                       <span className="span_3 pull-right">
                                          In stock SKU: ND7
                                       </span>
                                    </h3>
                                 </div>
                                 <div className="detail_1lri1 clearfix">
                                    <h5>Select Size:</h5>
                                    <select
                                       className="form-control"
                                       id="subject"
                                       name="subject"
                                    >
                                       <option>No additional charge</option>
                                       <option>S No additional charge</option>
                                       <option>M +$1.10</option>
                                       <option>L +$2.20</option>
                                    </select>
                                 </div>
                                 <div className="detail_1lri2 clearfix">
                                    <h5>Select Color:</h5>
                                    <ul>
                                       <li className="bg_1" />
                                       <li className="bg_2" />
                                       <li className="bg_3" />
                                    </ul>
                                 </div>
                                 <div className="detail_1lri3 clearfix">
                                    <div className="col-sm-6 space_left">
                                       <div className="detail_1lri3l clearfix">
                                          <h5 className="mgt">Quantity:</h5>
                                          <div className="input-group number-spinner">
                                             <span className="input-group-btn">
                                                <button className="btn btn-default" data-dir="dwn">
                                                   <span className="glyphicon glyphicon-minus" />
                                                </button>
                                             </span>
                                             <input
                                                type="text"
                                                className="form-control text-center"
                                                defaultValue={1}
                                             />
                                             <span className="input-group-btn">
                                                <button className="btn btn-default" data-dir="up">
                                                   <span className="glyphicon glyphicon-plus" />
                                                </button>
                                             </span>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-sm-6 space_right">
                                       <div className="detail_1lri3r clearfix">
                                          <h5 className="mgt text-right">
                                             <a className="button mgt" href="#">
                                                ADD TO CART
                                             </a>
                                          </h5>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="detail_1lri4 clearfix">
                                    <h5>Array</h5>
                                    <hr />
                                    <ul>
                                       <li>
                                          <a href="#">
                                             <i className="fa fa-repeat" /> Add to Compare
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#">
                                             <i className="fa fa-heart-o" /> Add to Wishlist
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#">
                                             <i className="fa fa-share-alt" /> Share
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="product_detail_1 clearfix">
                           <ul className="nav nav-tabs tab_1">
                              <li className="active">
                                 <a data-toggle="tab" href="#home">
                                    <i className="fa fa-globe" /> Description
                                 </a>
                              </li>
                              <li className="">
                                 <a data-toggle="tab" href="#menu1">
                                    <i className="fa fa-photo" /> Additional Information
                                 </a>
                              </li>
                              <li className="">
                                 <a data-toggle="tab" href="#menu2">
                                    <i className="fa fa-cog" /> Product Review
                                 </a>
                              </li>
                           </ul>
                           <div className="tab-content clearfix">
                              <div id="home" className="tab-pane fade clearfix active in">
                                 <div className="click clearfix">
                                    <div className="col-sm-12">
                                       <div className="home_i">
                                          <p className="mgt">
                                             Web design lorem ipsum dolor sit amet, consectetuer
                                             adipiscing elit.
                                          </p>
                                          <p>
                                             Suspendisse et justo. Praesent mattis commyolk augue
                                             Aliquam ornare hendrerit augue Cras tellus In pulvinar
                                             lectus a est Curabitur eget orci Cras laoreet. Lorem
                                             ipsum dolor sit amet, consectetuer adipiscing elit.
                                             Suspendisse et justo. Praesent mattis commyolk augue
                                             aliquam ornare augue.
                                          </p>
                                          <p>
                                             "But I must explain to you how all this mistaken idea
                                             of denouncing pleasure and praising pain was born and
                                             I will give you a complete account of the system, and
                                             expound the actual teachings of the great explorer of
                                             the truth, the master-builder of human happiness. No
                                             one rejects, dislikes, or avoids pleasure itself,
                                             because it is pleasure, but because those who do not
                                             know how to pursue pleasure rationally encounter
                                             consequences that are extremely painful. Nor again is
                                             there anyone who loves or pursues or desires to obtain
                                             pain of itself, because it is pain, but because
                                             occasionally circumstances occur in which toil and
                                             pain can procure him some great pleasure. To take a
                                             trivial example, which of us ever undertakes laborious
                                             physical exercise, except to obtain some advantage
                                             from it? But who has any right to find fault with a
                                             man who chooses to enjoy a pleasure that has no
                                             annoying consequences, or one who avoids a pain that
                                             produces no resultant pleasure?"
                                          </p>
                                          <ul>
                                             <li>
                                                "But I must explain to you how all this mistaken
                                                idea of denouncing pleasure and praising pain was
                                                born and I will give you a complete account of the
                                                system, and
                                             </li>
                                             <li>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the
                                                industry's standard dummy text ever since the 1500s,
                                                when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book.
                                             </li>
                                             <li>
                                                t is a long established fact that a reader will be
                                                distracted by the readable content of a page when
                                                looking at its layout. The point of using Lorem
                                                Ipsum is that it has a more-or-less normal
                                                distribution of letters, as opposed to using
                                                'Content here, content here'
                                             </li>
                                             <li>
                                                Lorem Ipsum has been the industry's standard dummy
                                                text ever since the 1500s, when an unknown printer
                                                took a galley of type and scrambled it to make a
                                                type specimen book.
                                             </li>
                                             <li>Dorem ipsum dolor sit amet</li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div id="menu1" className="tab-pane fade clearfix">
                                 <div className="click clearfix">
                                    <div className="col-sm-12">
                                       <div className="menu_i clearfix">
                                          <table>
                                             <tbody>
                                                <tr>
                                                   <td>Pricing</td>
                                                   <td>$42.00</td>
                                                </tr>
                                                <tr>
                                                   <td>Stock Availability</td>
                                                   <td>AVAILABLE</td>
                                                </tr>
                                                <tr>
                                                   <td>Rating</td>
                                                   <td>
                                                      <span>
                                                         <i className="fa fa-star" />
                                                         <i className="fa fa-star" />
                                                         <i className="fa fa-star" />
                                                         <i className="fa fa-star" />
                                                         <i className="fa fa-star" />
                                                      </span>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div id="menu2" className="tab-pane fade clearfix">
                                 <div className="click clearfix">
                                    <div className="col-sm-12">
                                       <div className="menu1i clearfix">
                                          <div className="menu1ii mgt clearfix">
                                             <div className="col-sm-9">
                                                <img
                                                   className="thumbnail"
                                                   src="img/pro1.jpg"
                                                   alt="abc"
                                                />
                                                <h5 className="mgt">
                                                   <span className="bold">Conubia Nostra</span>{" "}
                                                   <span className="date">
                                                      <i className="fa fa-clock-o" /> May 9, 2019
                                                   </span>
                                                </h5>
                                                <p>
                                                   Really happy with this print. The colors are
                                                   great, and the paper quality is very good.
                                                </p>
                                             </div>
                                             <div className="col-sm-3 text-right">
                                                <span className="">
                                                   <i className="fa fa-star" />
                                                   <i className="fa fa-star" />
                                                   <i className="fa fa-star" />
                                                   <i className="fa fa-star-o" />
                                                   <i className="fa fa-star-o" />
                                                </span>
                                             </div>
                                          </div>
                                          <div className="menu1ii clearfix">
                                             <div className="col-sm-9">
                                                <img
                                                   className="thumbnail"
                                                   src="img/pro2.jpg"
                                                   alt="abc"
                                                />
                                                <h5 className="mgt">
                                                   <span className="bold">Conubia Nostra</span>{" "}
                                                   <span className="date">
                                                      <i className="fa fa-clock-o" /> May 9, 2019
                                                   </span>
                                                </h5>
                                                <p>
                                                   Really happy with this print. The colors are
                                                   great, and the paper quality is very good.
                                                </p>
                                             </div>
                                             <div className="col-sm-3 text-right">
                                                <span className="">
                                                   <i className="fa fa-star" />
                                                   <i className="fa fa-star" />
                                                   <i className="fa fa-star" />
                                                   <i className="fa fa-star-o" />
                                                   <i className="fa fa-star-o" />
                                                </span>
                                             </div>
                                          </div>
                                          <div className="menu1ii clearfix">
                                             <div className="col-sm-9">
                                                <img
                                                   className="thumbnail"
                                                   src="img/pro3.jpg"
                                                   alt="abc"
                                                />
                                                <h5 className="mgt">
                                                   <span className="bold">Conubia Nostra</span>{" "}
                                                   <span className="date">
                                                      <i className="fa fa-clock-o" /> May 9, 2019
                                                   </span>
                                                </h5>
                                                <p>
                                                   Really happy with this print. The colors are
                                                   great, and the paper quality is very good.
                                                </p>
                                             </div>
                                             <div className="col-sm-3 text-right">
                                                <span className="">
                                                   <i className="fa fa-star" />
                                                   <i className="fa fa-star" />
                                                   <i className="fa fa-star" />
                                                   <i className="fa fa-star-o" />
                                                   <i className="fa fa-star-o" />
                                                </span>
                                             </div>
                                          </div>
                                          <div className="menu1i1 clearfix">
                                             <div className="col-sm-6 space_left">
                                                <h4>ADD A REVIEW</h4>
                                                <h5>Name *</h5>
                                                <input className="form-control" type="text" />
                                                <h5>Email *</h5>
                                                <input className="form-control" type="text" />
                                                <h5>Your Review</h5>
                                                <textarea
                                                   className="form-control form_1"
                                                   defaultValue={""}
                                                />
                                                <h5 className="bg">
                                                   <a className="button" href="#">
                                                      Submit
                                                   </a>
                                                </h5>
                                             </div>
                                             <div className="col-sm-6">
                                                <div className="grid clearfix">
                                                   <figure className="effect-jazz">
                                                      <a href="#">
                                                         <img
                                                            src="img/pro4.jpg"
                                                            height={450}
                                                            className="iw"
                                                            alt="img25"
                                                         />
                                                      </a>
                                                   </figure>
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
                     <div className="col-sm-3">
                        <div className="detail_1r clearfix">
                           <div className="detail_1ri clearfix">
                              <h4 className="mgt">Nibh Elementum</h4>
                              <hr />
                              <p className="mgt">
                                 <i className="fa fa-retweet" /> We will send this product in 2
                                 days.
                              </p>
                              <p>
                                 <i className="fa fa-css3" /> Call us now for more info about
                                 our products.
                              </p>
                              <p>
                                 <i className="fa fa-minus-circle" /> Return purchased items
                                 and get all your money back.
                              </p>
                              <p>
                                 <i className="fa fa-comment" /> Buy this product and earn 10
                                 special loyalty points!
                              </p>
                              <hr />
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
                              <hr />
                           </div>
                           <div className="product_1l clearfix">
                              <h4 className="mgt">Related Products</h4>
                              <hr />
                              <div className="product_1li clearfix">
                                 <img src="img/p1.jpg" alt="abc" />
                                 <h5 className="mgt">
                                    <a href="detail.html">Best Product</a> <br />
                                    $89.00
                                 </h5>
                                 <span>
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o" />
                                 </span>
                              </div>
                              <div className="product_1li clearfix">
                                 <img src="img/p2.jpg" alt="abc" />
                                 <h5 className="mgt">
                                    <a href="detail.html">Nice Product</a> <br />
                                    $69.00
                                 </h5>
                                 <span>
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-half-o" />
                                 </span>
                              </div>
                              <div className="product_1li border_none pdb clearfix">
                                 <img src="img/p3.jpg" alt="abc" />
                                 <h5 className="mgt">
                                    <a href="detail.html">Good Product</a> <br />
                                    $99.00
                                 </h5>
                                 <span>
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="collcet_1r clearfix">
                     <h3 className="heading">Related Product</h3>
                     <div className="col-sm-3 space_left">
                        <div className="feature_2im clearfix">
                           <div className="feature_2im1 clearfix">
                              <a href="#">
                                 <img src="img/p4.jpg" className="iw" alt="abc" />
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
                     <div className="col-sm-3 space_left">
                        <div className="feature_2im clearfix">
                           <div className="feature_2im1 clearfix">
                              <a href="#">
                                 <img src="img/p5.jpg" className="iw" alt="abc" />
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
                     <div className="col-sm-3 space_left">
                        <div className="feature_2im clearfix">
                           <div className="feature_2im1 clearfix">
                              <a href="#">
                                 <img src="img/p6.jpg" className="iw" alt="abc" />
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
                     <div className="col-sm-3 space_left">
                        <div className="feature_2im clearfix">
                           <div className="feature_2im1 clearfix">
                              <a href="#">
                                 <img src="img/p7.jpg" className="iw" alt="abc" />
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
                  </div>
               </div>
            </div>
         </section>
      </>

   )
}

export default Detail