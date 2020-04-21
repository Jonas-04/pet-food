import styles from './style.less';
import { getLicenseCategoryId, getLicenseCategoryImageId } from '../../services/inspection';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { imageBaseUrl } from '@/config/config';

export default props => {
  const [inspectionDetail, setinspectionDetail] = useState({});
  const [inspectionImage, setInspectionImage] = useState({});

  useEffect(() => {
    (async () => {
      const { id } = props.match.params;
      if (id) {
        let json = await getLicenseCategoryId(props.match.params.id);
        let image = await getLicenseCategoryImageId(props.match.params.id);

        const { id, attributes } = json.data;
        const { title } = attributes;
        setinspectionDetail({
          id,
          title,
        });

        setInspectionImage(image.included);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="common-banner"></div>
      <div className={styles.content} style={{ paddingTop: '3.125rem' }}>
        <Container>
          <Row>
            <Col sm={12}>
              {/* <h1 className={styles.detailTitle} style={{textAlign:"center"}}>{inspectionDetail.title}</h1>
              <p dangerouslySetInnerHTML={{__html: inspectionDetail.context}}></p> */}

              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
