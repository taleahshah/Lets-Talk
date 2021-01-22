import React, { Component } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './Home.css';
import image from "../../images/cheese1.jpg";
import images from '../../ProjectImages/ProjectImages';
import { Link } from 'react-router-dom';

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="splash-container">
                    <div class="splash">
                        <h1 class="splash-head" >Chatter Cheese</h1>
                        {/* <img width="30" margin-top="130px" alt="File Icons" class="pure-img-responsive" src={image} /> */}
                        <p class="splash-subhead">
                            Let's chat with your loved ones and enjoy cheese!
                        </p>



                        <div id="custom-button-wrapper">
                            <Link to='/login'>
                                <a class="my-super-cool-btn">
                                    <div class="dots-container">
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                    </div>
                                    <span className="buttoncooltext">Get Started</span>
                                </a>

                            </Link>

                        </div>
                    </div>
                </div>
                <div class="content-wrapper">
                    <div class="content">
                        <h2 class="content-head is-center"> Features of this Application</h2>

                        <div className="Appfeatures">
                            <div className="contenthead">

                                <h3 class="content-subhead">
                                    <i class="fa fa-rocket"></i>
                                    Get Started Quickly
                                </h3>
                                <p>
                                    Just register yourself with this app and connect with your loved ones
                                </p>
                            </div>

                            <div class="l-box pure-u-l md 1-2 pure-u-lg-1-4">
                                <h3 class="content-subhead">
                                    <i class="fa fa-sign-in"></i>
                                    Firebase Authentication
                                </h3>
                                <p>
                                    Firebase Authentication has been implemented in this app
                                </p>
                            </div>

                            <div class="l-box pure-u-l md 1-2 pure-u-lg-1-4">
                                <h3 class="content-subhead">
                                    <i class="fa fa-th-large"></i>
                                    Media
                                </h3>
                                <p>
                                    You can share images to make your communincation better
                                </p>
                            </div>

                            <div class="l-box pure-u-l md 1-2 pure-u-lg-1-4">
                                <h3 class="content-subhead">
                                    <i class="fa fa-refresh"></i>
                                    Updates
                                </h3>
                                <p>
                                    I am working with new features for this app for better experience in future
                                </p>
                            </div>

                        </div>

                    </div>

                    <div class="AppFeaturesFounder">
                        <div class="l-box-lrg is-center pure-u-l pure-u md 1-2 pure-u-lg-2-5">
                            <img width="250" alt="File Icons" class="pure-img-responsive" src={image} />
                        </div>
                        <div class="pure-u-l pure-u md 1-2 pure-u-lg-3-5">

                            <h2 class="content-head content-head-ribbon">Chatter Cheese</h2>

                            <p5 style={{ color: 'black' }}>
                                About App
                            </p5>
                            <p style={{ color: 'black' }}>
                                I have develop this app using react with firestore, firebase storage and firebase authentication.
                            </p>

                        </div>

                    </div>

                    <div class="content">
                        <h2 class="content-head is-center">Who Am I?</h2>

                        <div class="Appfeatures">
                            <div class="l-box-lrg pure-u-l pure-u-md-2-5">
                                <form class="pure-form pure-form-stacked">
                                    <fieldset>

                                        <label for="name"> Your Name</label>
                                        <input id="name" type="text" placeholder="Your Name" />

                                        <label for="email">Your Email</label>
                                        <input id="email" type="email" placeholder="Your Email" />

                                        <label for="password">Your Password</label>
                                        <input id="password" type="password" placeholder="Your Password" />

                                        <button type="submit" class="pure-button" >Sign Up</button>

                                    </fieldset>
                                </form>

                            </div>

                            <div class="l-box-lrg pure-u-l pure-u-md-3-5">
                                <h4>Contact Us</h4>
                                <p>
                                    For any questions or suggestion you can directly contact us on our Facebook Page:
                                    <a href="https://web.facebook.com/">https://web.facebook.com</a>
                                </p>
                                <p>
                                    Twitter: <a href="https://web.twitter.com/">https://web.twitter.com</a>
                                </p>
                                <p>
                                    Facebook: <a href="https://web.facebook.com/">https://web.facebook.com</a>
                                </p>
                                <p>
                                    Instagram: <a href="https://web.instagram.com/">https://web.instagram.com</a>
                                </p>

                                <h4>More Information</h4>
                                <p>
                                    To whom it may concern
                                </p>
                                <p>
                                    This app is developed as my semester project-
                                    Developed by Syeda Taleah Shah
                                </p>
                            </div>



                        </div>

                    </div>


                </div>



            </div>

        )
    }
}