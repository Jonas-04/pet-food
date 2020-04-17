import styles from './style.less';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default () => {
  const [newDetail, setNewDetail] = useState({});

  useEffect(() => {
    setNewDetail({
      id: 1,
      title: '圣诞节福克斯经典福克斯的风景',
      context:
        '似懂非懂的滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜',
      date: '2020-3-4',
    });
  }, []);

  return (
    <div>
      <div className="common-banner"></div>
      <div className={styles.content}>
        <Container>
          <Row>
            <Col sm={12}>
              <div>{newDetail.title}</div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
