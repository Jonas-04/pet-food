import styles from './style.less';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getNewsDteail } from '../../services/news'


function Index(props) {
  const [newDetail, setNewDetail] = useState({});
  console.log(props.nodeContent);
  

  useEffect(() => {
    (
      async () => {
        const {id} =  props.match.params
        if(id) {
          let json = await getNewsDteail(props.match.params.id)
          console.log(json)
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
  }, [props.match.params]);

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

Index.getInitialProps = ({location})=>{
  console.log(location);
  return {a:1}
  // return getNewsDteail(props.match.params.id)
}

export default Index
