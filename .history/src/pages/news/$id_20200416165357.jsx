import styles from './style.less';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getNewsDteail } from '../../services/news'

export default (props) => {
  const [newDetail, setNewDetail] = useState({});

  useEffect(() => {

    (
      async () => {
        console.log(props);
        if(props.match.params.id){
          let json = await getNewsDteail()
          console.log(json)
        }



        // setNewDetail(newsList)
      }
    )()
    
    setNewDetail({
      id: 1,
      title: '习近平：团结合作是国际社会战胜疫情最有力武器',
      context:
        '近来，新冠肺炎疫情在全球持续蔓延。疫情发生以来，习近平主席时刻关注国内外疫情形势，从构建人类命运共同体高度，亲自推动疫情防控国际合作。4月16日出版的第8期《求是》杂志将发表习近平的重要文章《团结合作是国际社会战胜疫情最有力武器》。针对疫情防控，习近平多次强调，流行性疾病不分国界和种族，是人类共同的敌人。国际社会只有共同应对，才能战而胜之。',
      date: '2020-3-4',
    });
  }, [props]);

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
