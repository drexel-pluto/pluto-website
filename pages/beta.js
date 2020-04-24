import React from 'react';
import Head from '../utils/headLinks';
import Meta from '../utils/meta'
import Header from '../components/header';
import Image from '../components/image';
import EmailInput from '../components/email-input'
import ValueSquare from '../components/value-square';
import Footer from '../components/footer';

export default (props) => {
    return (
        <>
        <Meta
            pageTitle="Beta"
            description="A platform focused on your most meaningful connections."
            img="/images/logo_black@2x.jpg"
        />
        <Head />
        <Header />
        <main>
            <div className="wrap wrap-no-hor beta">
                <h1 className="beta__title">Hello, welcome to Pluto</h1>
                <p className="beta__subtitle">let's get started</p>
                <div className="beta__block beta-block">
                    <h2 className="beta-block__title">connect with those that matter to you</h2>
                    <div className="beta-block__img-cont">
                        <figure className="beta-block__fig">
                            <img className="beta-block__img" src="./images/beta/1-1.png" alt=""></img>
                            <figcaption className="beta-block__label">tap the 'add friend' icon</figcaption>
                        </figure>
                        <figure className="beta-block__fig">
                            <img className="beta-block__img" src="./images/beta/1-2.png" alt=""></img>
                            <figcaption className="beta-block__label">copy the link to invite your friends</figcaption>
                        </figure>
                        <figure className="beta-block__fig">
                            <img className="beta-block__img" src="./images/beta/1-3.png" alt=""></img>
                            <figcaption className="beta-block__label">confirm your request</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="beta__block beta-block">
                    <h2 className="beta-block__title">group your connections to view a curated feed</h2>
                    <div className="beta-block__img-cont">
                        <figure className="beta-block__fig">
                            <img className="beta-block__img" src="./images/beta/2-1.png" alt=""></img>
                            <figcaption className="beta-block__label">swipe right to create a new group</figcaption>
                        </figure>
                        <figure className="beta-block__fig">
                            <img className="beta-block__img" src="./images/beta/2-2.png" alt=""></img>
                            <figcaption className="beta-block__label">select the friends you want and name the group</figcaption>
                        </figure>
                        <figure className="beta-block__fig">
                            <img className="beta-block__img" src="./images/beta/2-3.png" alt=""></img>
                            <figcaption className="beta-block__label">swipe left to view your groups; tap to view your feed</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="beta__block beta-block">
                    <h2 className="beta-block__title">share with those that matter to you</h2>
                    <div className="beta-block__img-cont">
                        <figure className="beta-block__fig">
                            <img className="beta-block__img" src="./images/beta/3-1.png" alt=""></img>
                            <figcaption className="beta-block__label">tap the 'new post' icon</figcaption>
                        </figure>
                        <figure className="beta-block__fig">
                            <img className="beta-block__img" src="./images/beta/3-2.png" alt=""></img>
                            <figcaption className="beta-block__label">edit who sees your post and how long it is public</figcaption>
                        </figure>
                        <figure className="beta-block__fig">
                            <img className="beta-block__img" src="./images/beta/3-3.png" alt=""></img>
                            <figcaption className="beta-block__label">change post settings as desired and go back to review and post</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="beta__block beta-block">
                    <div className="beta-block__img-cont">
                        <figure className="beta-block__fig">
                            <img className="beta-block__img" src="./images/beta/4-1.png" alt=""></img>
                            <figcaption className="beta-block__label">make final touches and post</figcaption>
                        </figure>
                        <figure className="beta-block__fig">
                            <img className="beta-block__img" src="./images/beta/4-2.png" alt=""></img>
                            <figcaption className="beta-block__label">view what you posted</figcaption>
                        </figure>
                        <figure className="beta-block__fig">
                            <img className="beta-block__img" src="./images/beta/4-3.png" alt=""></img>
                            <figcaption className="beta-block__label">enjoy seeing what your connections share with you</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </>
    )
}
