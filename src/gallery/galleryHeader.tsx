const GalleryHeader: React.FC = () => {
    return (
        <div id="galleryHeader">
            <h1 id="galleryTitle">
                Gallery
            </h1>
            <p id="gallerySubtitle">
                Welcome to the gallery of adoptable cats
                <span role="img" aria-label="Cat emoji">
                    🐱
                </span>
            </p>
        </div>
    )
};

export default GalleryHeader;