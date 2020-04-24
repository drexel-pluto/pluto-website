import { NextSeo } from 'next-seo';
import getURL from '../utils/getURL';

export default (props) => {
    const pageURL = getURL();

    // pageTitle
    // description
    // img
    const logoImage = './images/color_dark@3x.jpg'
    return(
        <NextSeo
            title={`${props.pageTitle} | Pluto`}
            description={props.description}
            canonical={pageURL}
            openGraph={{
                url: pageURL,
                title: `${props.pageTitle} | Pluto`,
                description: props.description,
                images: [
                {
                    url: logoImage,
                    width: 1081,
                    height: 421,
                    alt: `${props.pageTitle}, Pluto`,
                }
                ],
                site_name: props.pageTitle,
            }}
            twitter={{
                handle: '@plutosocial',
                site: '@site',
                cardType: 'summary_large_image',
                image: logoImage
            }}
        />
    )
}