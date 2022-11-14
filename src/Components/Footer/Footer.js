import React from "react";
import WidthSpecific from "../Width75em/WidthSpecific";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-black">
      {" "}
      <WidthSpecific>
        <footer className="text-white-600 body-font bg-black text-white">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              {/* <a className="flex title-font font-medium items-center md:justify-start justify-center text-white-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">Tailblocks</span>
                        </a> */}
              <p className="mt-9 text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet sunt doloremque temporibus
              </p>
              <div className="footer-content-first-column mt-3">
                <div>
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/2099/premium/2099122.png?token=exp=1659348390~hmac=f87ebd716429dca8391e689f914f125c"
                    alt=""
                    className="h-3 "
                  />
                </div>
                <div>
                  <p>451 wall steet uk, London</p>
                </div>
              </div>
              <div className="footer-content-first-column mt-1">
                <div>
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/3415/premium/3415074.png?token=exp=1659349527~hmac=004edae45e2f0d3e689f5c6085e9f816"
                    alt=""
                    className="h-3 "
                  />
                </div>
                <div>
                  <p>Phone:(064)332-1233</p>
                </div>
              </div>
              <div className="footer-content-first-column mt-1">
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/546/546394.png"
                    alt=""
                    className="h-3 "
                  />
                </div>
                <div>
                  <p>fax:(099)453-1357</p>
                </div>
              </div>
            </div>
            <div className="flex-grow cursor-pointer flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
                  RECENT POSTS
                </h2>
                <nav className="list-none mb-10 mt-6">
                  <li>
                    <div className="flex ">
                      <div>
                        <img
                          src="https://images.unsplash.com/photo-1610379230744-2260350e2f17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                          className="h-10"
                        />
                      </div>
                      <div className="px-3 mb-3">
                        A compainon of extra sleeping
                        <p>23-jul-2021</p>{" "}
                      </div>
                    </div>
                  </li>
                  <hr />
                  <li>
                    <div className="flex  mt-5">
                      <div>
                        <img
                          src="https://images.unsplash.com/photo-1610379230744-2260350e2f17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt=""
                          className="h-10"
                        />
                      </div>
                      <div className="px-3">
                        outdoor seeting collection
                        <p>24-jul-2021</p>
                      </div>
                    </div>
                  </li>
                </nav>
              </div>
              <div className="cursor-pointer lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
                  OUR STORES
                </h2>
                <nav className="list-none mb-10  leading-10">
                  <li>
                    <a className="text-white-600 hover:">New York</a>
                  </li>
                  <li>
                    <a className="text-white-600 hover:">London</a>
                  </li>
                  <li>
                    <a className="text-white-600 hover:">Cockfosters BP</a>
                  </li>
                  <li>
                    <a className="text-white-600 hover:">Loss Angeles</a>
                  </li>
                  <li>
                    <a className="text-white-600 hover:">Chicago</a>
                  </li>
                  <li>
                    <a className="text-white-600 hover:">Loss Vegas</a>
                  </li>
                </nav>
              </div>
              <div className="cursor-pointer lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
                  USEFUL LINKS
                </h2>
                <nav className="list-none mb-10 leading-10">
                  <li>
                    <a className="text-white-600 hover:">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="text-white-600 hover:">Returns</a>
                  </li>
                  <li>
                    <a className="text-white-600 hover:">Terms & conditions</a>
                  </li>
                  <li>
                    <a className="text-white-600 hover:">Contact Us</a>
                  </li>
                  <li>
                    <a className="text-white-600 hover:">Latest News</a>
                  </li>
                  <li>
                    <a className="text-white-600 hover:">Our Sitemap</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4 leading-10">
                <h2 className="title-font font-medium  tracking-widest text-sm mb-3 ">
                  FOOTER MENU
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-white-600 hover:">Instagram Profile</a>
                  </li>
                  <li>
                    <a className="text-white-600 hover:">New Collection</a>
                  </li>
                  <li>
                    <a className="text-white-600 hover:">Women Dress</a>
                  </li>
                  <li>
                    <a className="text-white-600 hover:">Contact Us</a>
                  </li>
                  <li>
                    <a className="text-white-600 hover:">Latest News</a>
                  </li>
                  <li>
                    <a className="text-white-600 hover:text-white-800">
                      Purches Time
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-black-100">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-white-500 text-sm text-center sm:text-left">
                © 2020
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="cursor-pointer">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 cursor-pointer">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 cursor-pointer">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 cursor-pointer">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </WidthSpecific>
    </div>
  );
};

export default Footer;
