import Headroom from 'react-headroom';
import Image from './image';
import Link from 'next/link'

const header = (props) => {
    return (
        // <Headroom>
            <header className="header wrap wrap-no-hor">
                <div className="header__left">
                    <Link href="/">
                        <a>
                            <Image className="header__logo" src="/images/color_dark@2x.png" alt="Pluto" />
                        </a>
                    </Link>
                </div>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        {/* <li>
                            <Link href="/bla">
                                <a className="header__nav-link">
                                    Placeholder
                                </a>
                            </Link>
                        </li> */}
                        <a className="header__app-store-link" href="https://apps.apple.com/us/app/pluto/id1495230120" target="_blank" rel="noopener noreferrer">
                            <img className="header__app-store-img" src="./images/app-store.png" alt="Download on the App store" />
                        </a>
                        <a className="header__app-store-link" href="https://play.google.com/store/apps/details?id=io.plutosocial.pluto" target="_blank" rel="noopener noreferrer">
                            <img className="header__app-store-img" src="./images/google-play.png" alt="Download on the Google Play store" />
                        </a>
                    </ul>
                </nav>
            </header>
        // </Headroom>
    )
}

export default header;
