import Image from '../components/image';

const valueSquare = (props) => {
    const img = (props.imgSrc)
        ? <Image className="value-square__img" src={props.imgSrc} alt={props.imgAlt}></Image>
        : <div className="value-square__img">{props.children}</div>
    return (
        <div className={`${props.className} value-square`}>
            <div className="value-square">
                {img}
                <div className="value-square__text-container">
                    <h3 className="value-square__title">{props.title}</h3>
                    <p className="value-square__text">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default valueSquare;
