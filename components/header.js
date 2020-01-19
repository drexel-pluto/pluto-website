import Headroom from 'react-headroom';
import Image from './image';
import Link from 'next/link'

const header = (props) => {
    return (
        <Headroom>
            <header className="header">
                <div className="header__left">
                    <Link href="/">
                        <a>
                            <Image className="header__logo" src="/images/logo_black@2x.png" alt="Pluto" />
                        </a>
                    </Link>
                </div>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li>
                            <Link href="/bla">
                                <a className="header__nav-link">
                                    Bla
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </Headroom>
    )
}

export default header;
