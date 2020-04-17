import styles from './style.less';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default (props) => {
  const [newDetail, setNewDetail] = useState({});

  useEffect(() => {
    
    setNewDetail({
      id: 1,
      title: '习近平：团结合作是国际社会战胜疫情最有力武器',
      context:
        '习近平：团结合作是国际社会战胜疫情最有力武器',
      date: '2020-3-4',
    });
  }, []);

  return (
    <div>
      <div className="common-banner"></div>
      <div className={styles.content} style={{paddingTop:"3.125rem"}}>
        <Container>
          <Row>
            <Col sm={12}>
              <h1 style={{textAlign:"center"}}>{newDetail.title}</h1>
              <p>
                {newDetail.context}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
