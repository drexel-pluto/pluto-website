import Image from './image';
import Link from 'next/link'

const footer = (props) => {
    return (
        <footer className="footer">
            <div className="wrap wrap-no-hor">
                <nav className="footer__nav">
                    <ul className="footer__nav-list">
                        <li className="footer__list-item">
                            <Link href="/">
                                <a className="footer__nav-link">
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className="footer__list-item">
                            <Link href="/beta">
                                <a className="footer__nav-link">
                                    Beta Guide
                                </a>
                            </Link>
                        </li>
                        <li className="footer__list-item">
                            <a href="https://drexel-pluto.github.io/contract-book/#/" target="_blank" rel="noopener noreferrer" className="footer__nav-link">
                                Contract Book
                            </a>
                        </li>
                        <li className="footer__list-item">
                            <a href="https://pluto417.com" target="_blank" rel="noopener noreferrer" className="footer__nav-link">
                                Research
                            </a>
                        </li>
                        <li className="footer__list-item">
                            <Link href="/terms">
                                <a className="footer__nav-link">
                                    Terms of Service
                                </a>
                            </Link>
                        </li>
                        <li className="footer__list-item">
                            <Link href="/privacy">
                                <a className="footer__nav-link">
                                    Privacy Policy
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <p className="footer__copyright">© {new Date().getFullYear()} Pluto Social&trade;</p>
            </div>
        </footer>
    )
}

export default footer;