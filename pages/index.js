import React from 'react';
import Head from '../utils/headLinks';
import Meta from '../utils/meta'
import Header from '../components/header';
import Image from '../components/image';
import EmailInput from '../components/email-input'


export default (props) => {
    return (
        <>
        <Meta
            pageTitle="Welcome"
            description="A platform focused on your most meaningful connections."
            img="/images/logo_black@2x.jpg"
        />
        <Head />
        <Header />
        <main>
            <div className="home__block home-block-1 wrap wrap-no-hor">
                <div className="home-block-1__text-section">
                    <div>
                        <h2 className="home-block-1__main-text">Making connections <strong>meaningful</strong> again</h2>
                        <div className="home-block-1__input-section">
                            <EmailInput
                                buttonText = "Keep in touch"
                                label="Help make Pluto special before launch"
                            />
                        </div>
                    </div>
                </div>
                <Image className="home-block-1__img" src="/images/father-son-unsplash.jpg" alt="" />
            </div>
        </main>
    </>
    )
}
