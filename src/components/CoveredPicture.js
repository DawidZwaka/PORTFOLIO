

const CoveredPicture = (props) => {
    const { src, alt } = props;

    return <div class="coveredPicture">
        <div className="coveredPicture__cover"></div>
        <div className="coveredPicture__cover"></div>
        <img className="coveredPicture__img" src={src} alt={alt} />
    </div>;
}

export default CoveredPicture;