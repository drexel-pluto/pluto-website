import React, { Component } from 'react';
import Head from '../utils/headLinks';
import Meta from '../utils/meta'
import Header from '../components/header';
import Image from '../components/image';
import EmailInput from '../components/email-input'


export default (props) => {
    return (
        <>
        <Meta
            pageTitle="Welcome to connections that matter"
            description=""
            img=""
        />
        <Head />
        <Header />
        <main>
            <div className="home__block home-block-1">
                <div className="home-block-1__text-section">
                    <div>
                        <h2 className="home-block-1__main-text">Making connections <strong>meaningful</strong> again</h2>
                        <div className="home-block-1__input-section">
                            <EmailInput
                                buttonText = "Request Early Access"
                                label="Help us make Pluto great before launch!"
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
