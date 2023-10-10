import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
   return (
      <>
         <section id="top">
            <div className="container">
               <div className="row">
                  <div className="top_1 clearfix">
                     <div className="col-sm-3">
                        <div className="top_1l clearfix">
                           <ul className="mgt">
                              <li>
                                 <a href="#"><i className="fa fa-lock" /></a>
                                 <a href="#"><i className="fa fa-user" /></a>
                                 <a href="#"><i className="fa fa-facebook" /></a>
                                 <a href="#"><i className="fa fa-twitter" /></a>
                                 <a href="#"><i className="fa fa-linkedin" /></a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-sm-9">
                        <div className="top_1r clearfix">
                           <ul className="nav navbar-nav nav_1 mgt navbar-right">
                              <li className="bord_l">
                                 <a className="font_tag col_1" href="#"> <i className="fa fa-phone" /> 123 456 789</a>
                              </li>
                              <li className="dropdown bord_l">
                                 <a className="font_tag border_none" href="#" data-toggle="dropdown" role="button" aria-expanded="false"> Setting <span className="caret" /></a>
                                 <ul className="dropdown-menu drop_1" role="menu">
                                    <li><a href="#">Checkout</a></li>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Shopping Cart</a></li>
                                    <li><a href="#">Wishlist</a></li>
                                 </ul>
                              </li>
                              <li className="dropdown bord_l">
                                 <a className="font_tag border_none" href="#" data-toggle="dropdown" role="button" aria-expanded="false"> $ USD <span className="caret" /></a>
                                 <ul className="dropdown-menu drop_1" role="menu">
                                    <li><a href="#">EUR – Euro</a></li>
                                    <li><a href="#">GBP – British Pound</a></li>
                                    <li><a href="#">INR – India Rupee</a></li>
                                 </ul>
                              </li>
                              <li className="dropdown bord_l border_none">
                                 <a className="font_tag border_none" href="#" data-toggle="dropdown" role="button" aria-expanded="false"> English <span className="caret" /></a>
                                 <ul className="dropdown-menu drop_1" role="menu">
                                    <li><a href="#"><i className="fa fa-flag" /> English</a></li>
                                    <li><a href="#"><i className="fa fa-flag" /> Germany</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="menu" className="clearfix cd-secondary-nav">
            <nav className="navbar nav_t">
               <div className="container">
                  <div className="navbar-header page-scroll">
                     <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                     > <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" />
                     </button>
                     <a className="navbar-brand" href="index.html">
                        <i className="fa fa-diamond" /> <span className="col">Jewe</span>lry
                     </a>
                  </div>
                  {/* Brand and toggle get grouped for better mobile display */}
                  {/* Collect the nav links, forms, and other content for toggling */}
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" >
                     <ul className="nav navbar-nav nav_m">
                        <li> <Link className="m_tag active_tab" to="/"> Home </Link> </li>
                        <li className="dropdown">
                           <a className="m_tag" href="#" data-toggle="dropdown" role="button" aria-expanded="false" > Product <span className="caret" /> </a>
                           <ul className="dropdown-menu drop_3" role="menu">
                              <li> <Link to="/Product">Product</Link> </li>
                              <li> <Link className="border_none" to="/Detail"> Product Detail </Link> </li>
                           </ul>
                        </li>
                        <li className="dropdown"> <a className="m_tag" href="#" data-toggle="dropdown" role="button" aria-expanded="false" > Blog <span className="caret" /> </a>
                           <ul className="dropdown-menu drop_3" role="menu">
                              <li> <Link to="/Blog">Blog</Link> </li>
                              <li> <Link className="border_none" to="/Blog_detail"> Blog Detail </Link> </li>
                           </ul>
                        </li>
                        <li> <Link className="m_tag" to="/Contact"> Contact </Link>
                        </li>
                        <li className="dropdown"> <a className="m_tag" href="#" data-toggle="dropdown" role="button" aria-expanded="false" > Pages <span className="caret" /> </a>
                           <ul className="dropdown-menu drop_3" role="menu">
                              <li> <Link to="/Services">Services</Link> </li>
                              <li> <Link to="/Cart">Cart</Link> </li>
                              <li> <Link className="border_none" to="/Checkout"> Checkout </Link> </li>
                           </ul>
                        </li>
                        <li className="dropdown dropdown-large"> <a href="#" className="dropdown-toggle m_tag" data-toggle="dropdown" > Dropdown <b className="caret" /> </a>
                           <ul className="dropdown-menu dropdown-menu-large row">
                              <li className="col-sm-3">
                                 <ul>
                                    <li className="dropdown-header">SHOP LAYOUTS</li>
                                    <li> <a href="#"> <img src="img/pro1.jpg" alt="abc" className="iw" /> </a>
                                    </li>
                                    <li>
                                       <a href="#">
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                       </a>
                                    </li>
                                 </ul>
                              </li>
                              <li className="col-sm-3">
                                 <ul>
                                    <li className="dropdown-header">OTHER PAGES</li>
                                    <li>
                                       <a href="#">Basic example</a>
                                    </li>
                                    <li>
                                       <a href="#">Button toolbar</a>
                                    </li>
                                    <li>
                                       <a href="#">Sizing</a>
                                    </li>
                                    <li>
                                       <a href="#">Nesting</a>
                                    </li>
                                    <li>
                                       <a href="#">Vertical variation</a>
                                    </li>
                                    <li>
                                       <a href="#">Single button dropdowns</a>
                                    </li>
                                 </ul>
                              </li>
                              <li className="col-sm-3">
                                 <ul>
                                    <li className="dropdown-header">PRODUCT TYPES</li>
                                    <li>
                                       <a href="#">Basic example</a>
                                    </li>
                                    <li>
                                       <a href="#">Button toolbar</a>
                                    </li>
                                    <li>
                                       <a href="#">Sizing</a>
                                    </li>
                                    <li>
                                       <a href="#">Nesting</a>
                                    </li>
                                    <li>
                                       <a href="#">Vertical variation</a>
                                    </li>
                                    <li>
                                       <a href="#">Single button dropdowns</a>
                                    </li>
                                 </ul>
                              </li>
                              <li className="col-sm-3">
                                 <ul>
                                    <li className="dropdown-header">OTHER TYPES</li>
                                    <li>
                                       <a href="#">
                                          <img src="img/p1.jpg" alt="abc" className="iw" />
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#">
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                       </a>
                                    </li>
                                 </ul>
                              </li>
                           </ul>
                        </li>
                     </ul>
                     <ul className="nav navbar-nav mgt navbar-right nav_r">
                        <li>
                           <a className="m_tag" href="#">
                              <i className="fa fa-user" />
                           </a>
                        </li>
                        <li className="dropdown">
                           <a
                              className="m_tag"
                              href="#"
                              data-toggle="dropdown"
                              role="button"
                              aria-expanded="false"
                           >
                              <i className="glyphicon glyphicon-shopping-cart" />
                           </a>
                           <ul className="dropdown-menu drop_1" role="menu">
                              <li>
                                 <div className="drop_1i clearfix">
                                    <div className="col-sm-6">
                                       <div className="drop_1il clearfix">
                                          <h5 className="mgt">2 ITEMS</h5>
                                       </div>
                                    </div>
                                    <div className="col-sm-6">
                                       <div className="drop_1il text-right clearfix">
                                          <h5 className="mgt">
                                             <a href="#">VIEW CART</a>
                                          </h5>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="drop_1i1 clearfix">
                                    <div className="col-sm-8">
                                       <div className="drop_1i1l clearfix">
                                          <h6 className="mgt bold">
                                             <a href="#">Nulla Quis</a> <br />{" "}
                                             <span className="normal col_2">1x - $89.00</span>{" "}
                                             <br />{" "}
                                             <span>
                                                <i className="fa fa-remove" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                    <div className="col-sm-4">
                                       <div className="drop_1i1r text-right clearfix">
                                          <a href="#">
                                             <img src="img/1.jpg" className="iw" alt="abc" />
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="drop_1i1 clearfix">
                                    <div className="col-sm-8">
                                       <div className="drop_1i1l clearfix">
                                          <h6 className="mgt bold">
                                             <a href="#">Eget Nulla</a> <br />{" "}
                                             <span className="normal col_2">1x - $49.00</span>{" "}
                                             <br />{" "}
                                             <span>
                                                <i className="fa fa-remove" />
                                             </span>
                                          </h6>
                                       </div>
                                    </div>
                                    <div className="col-sm-4">
                                       <div className="drop_1i1r text-right clearfix">
                                          <a href="#">
                                             <img src="img/2.png" className="iw" alt="abc" />
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="drop_1i2 clearfix">
                                    <div className="col-sm-6">
                                       <div className="drop_1il clearfix">
                                          <h5 className="mgt">TOTAL</h5>
                                       </div>
                                    </div>
                                    <div className="col-sm-6">
                                       <div className="drop_1il text-right clearfix">
                                          <h5 className="mgt">$138.00</h5>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="drop_1i3 text-center clearfix">
                                    <div className="col-sm-12">
                                       <h5>
                                          <a className="button_1 block" href="checkout.html">
                                             CHECKOUT
                                          </a>
                                       </h5>
                                       <h5>
                                          <a className="button block" href="cart.html">
                                             VIEW CART
                                          </a>
                                       </h5>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </li>
                        <li className="dropdown">
                           <a className="m_tag" href="#" data-toggle="dropdown">
                              <span className="fa fa-search" />
                           </a>
                           <ul className="dropdown-menu drop_2" style={{ minWidth: 300 }}>
                              <li>
                                 <div className="row_1">
                                    <div className="col-sm-12">
                                       <form className="navbar-form navbar-left" role="search">
                                          <div className="input-group">
                                             <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search"
                                             />
                                             <span className="input-group-btn">
                                                <button className="btn btn-primary" type="button">
                                                   Search
                                                </button>
                                             </span>
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </div>
                  {/* /.navbar-collapse */}
               </div>
               {/* /.container-fluid */}
            </nav>
         </section>
      </>
   )
}

export default Header