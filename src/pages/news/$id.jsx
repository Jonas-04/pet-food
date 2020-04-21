import styles from './style.less';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getNewsDteail } from '../../services/news'


export default (props) => {
  const [newDetail, setNewDetail] = useState({});

  useEffect(() => {
    (
      async () => {
        const {id} =  props.match.params
        if(id) {
          let json = await getNewsDteail(props.match.params.id)
          const { id,attributes } = json.data;
          const { body,title,created } = attributes
          setNewDetail({
            id,
            title,
            context:body.value,
            date:created
          })
        }
      }
    )()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="common-banner"></div>
      <div className={styles.content} style={{paddingTop:"3.125rem"}}>
        <Container>
          <Row>
            <Col sm={12}>
              <h1 className={styles.detailTitle} style={{textAlign:"center"}}>{newDetail.title}</h1>
              <p dangerouslySetInnerHTML={{__html: newDetail.context}}></p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
