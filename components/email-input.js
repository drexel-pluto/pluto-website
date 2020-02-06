import React from 'react';
import Lottie from 'react-lottie';
import checkmark from '../animations/checkmark-success.json'
import fetch from 'isomorphic-unfetch';
import validator from 'email-validator';

const checkmarkAnimOptions = {
    loop: false,
    autoplay: true,
    prerender: false,
    animationData: checkmark,
    setSpeed: 0.1
}
class EmailInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emailSentSuccess: false,
            errMsg: "",
            defaultErrMsg: "Sorry, something’s wrong. Please refresh or try again later.",
            sentEmail: "",
            typedEmail: "",
            container: null
        };

        this.postEmail = this.postEmail.bind(this);
        this.unfocusButton = this.unfocusButton.bind(this);
        this.checkParams = this.checkParams.bind(this);
        this.hideMessages = this.hideMessages.bind(this);
        this.clickEmailSubmit = this.clickEmailSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount () {
        const container = document.getElementsByClassName(`email-input-${this.props.uid}`)[0];
        this.setState({ container });
    }

    handleInputChange (event) {
        return this.setState({ typedEmail: event.target.value });
    }

    unfocusButton () {
        const button = this.state.container.getElementsByClassName('email-input__btn')[0];
        button.blur();
    }

    async checkParams (email) {
        if (email.length <= 0) { return Promise.reject({show: true, msg: 'Please enter your email before submitting.'}) }
        if (email.length > 75) { return Promise.reject({show: true, msg: 'Please use a shorter email address.'}) }
        if (!email.slice().includes('@')) { return Promise.reject({show: true, msg: 'Did you forget an @?'}) }
        if (!email.slice().includes('.')) { return Promise.reject({show: true, msg: 'Did you forget a dot?'}) }
        if (!validator.validate(email)) { return Promise.reject({show: true, msg: 'Sorry, we can’t use this email. Please try a different one.'})}
        return;
    }

    async checkSameEmail (email) {
        if (email == this.state.sentEmail) { return Promise.reject({ silent: true, msg: 'Email didnt change.' })}
        return;
    }

    hideMessages () {
        this.setState({ emailSentSuccess: false });
        const inputLabel = this.state.container.getElementsByClassName('email-input__label')[0];
        const failureMessage = this.state.container.getElementsByClassName('email-input__email-failure')[0]; 
        inputLabel.style.display = "none";
        failureMessage.style.display = "none";
    }

    async postEmail () {
        const email = this.state.typedEmail; 
        return await fetch(`/api/email/${email}`);
    }

    clickEmailSubmit () {
        (async () => {
            try {
                const email = this.state.typedEmail;
                this.setState({ sentEmail: email });
                this.unfocusButton();
                await this.checkSameEmail(email);
                this.hideMessages();
                await this.checkParams(email);
                const res = await this.postEmail();
                if (res.status != 200) {
                    throw Error(res.statusText);
                }
                this.setState({ emailSentSuccess: true });

                // Clear inputs after submitting
                setTimeout(() => {
                    const inputs = this.state.container.getElementsByClassName('email-input__input')[0];
                    Array.from(inputs).forEach(input => { input.value = '' });
                }, 500);
            } catch (err) {
                if (err.show) {
                    const msg = err.msg;
                    this.setState({errMsg: msg });
                } else if (!err.silent) {
                    this.setState({errMsg: this.state.defaultErrMsg });
                }

                if (!err.silent) {
                    const failureMessage = this.state.container.getElementsByClassName('email-input__email-failure')[0]; 
                    failureMessage.style.display = "block";
                    console.log(err);
                }
            }
        })();
    }

    render () {
        const success = (this.state.emailSentSuccess)
        ? (
            <div className="email-input__email-success">
                <p className="email-input__email-success-text">Your interest means the world to us! An invitation to join will be sent shortly.</p>
                <div className="email-input__checkmark">
                    <Lottie options={checkmarkAnimOptions} speed={0.25} />
                </div>
            </div> 
          )
        : <p className="email-input__label">{this.props.label}</p>;


        const buttonClass = (this.props.inverseButton) ? 'btn btn--inverse' : 'btn';

        return (
            <div className={`email-input ${this.props.className} email-input-${this.props.uid}`}>
                <input onChange={this.handleInputChange} className="input email-input__input" type="email" name="email" placeholder="email@plutosocial.io" />
                <button className={`${buttonClass} email-input__btn`} type="submit" onClick={ this.clickEmailSubmit }>
                    {this.props.buttonText}
                    <span className="btn__after">
                        <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                    </span>
                </button>

                {success}

                <div className="email-input__email-failure">
                    <p className="email-input__email-failure-text">{this.state.errMsg}</p>
                </div>
            </div>
        )
    }
}

export default EmailInput;
