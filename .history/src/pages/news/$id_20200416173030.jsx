import styles from './style.less';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { getNewsDteail } from '../../services/news'


function Index(props){
  const { id,attributes } = props.data;
  const { body,title,created } = attributes
  const [newDetail, setNewDetail] = useState({
    id,
    title,
    context:body.value,
    date:created
  });

  if(!props.data){
    return;
  }

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

Index.getInitialProps = async ({route})=>{
  const { id } = route.params;
  return await getNewsDteail(id)
}

export default Index
