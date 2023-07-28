import { useEffect, useState } from "react";
import { downloadImages } from "../service/catService";
import { Col, Container, Row } from "react-bootstrap";

const GalleryContainer: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);
    useEffect(() => {
        const setImage = async () => {
            const newImages = await downloadImages();
            setImages(newImages);
        };
        setImage();
    }, []);
    return (
        <Container>
            <Row>
                {images.map((image, index) => (
                    <Col key={index} xs={12} sm={6} md={4}>
                        <img src={`data:image/jpeg;base64,${image}`} alt="Kitten" className="img-fluid"/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default GalleryContainer;