import styles from './style.less';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import router from 'umi/router';
import { getNewsList } from '../../services/news';
import dayjs from 'dayjs';
import { imageBaseUrl } from '@/config/config'

const NewsItem = props => {
  const detail = id => router.push(`/news/${id}`);

  return (
    <div className={styles.newsItem} onClick={() => detail(props.data.id)}>
      <Row>
        <Col sm={12}>
          <div className={styles.newDate}>{dayjs(props.data.date).format('YYYY-MM-DD')}</div>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <div className={styles.newImg}>
            <img
              src={`${imageBaseUrl}${props.data.imgUrl}`}
              alt=""
            />
          </div>
        </Col>
        <Col sm={8}>
          <h2>{props.data.title}</h2>
          <p className={styles.p2} dangerouslySetInnerHTML={{ __html: props.data.context }}></p>
          <p className={styles.p3}>查看更多</p>
        </Col>
      </Row>
    </div>
  );
};

export default () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    (async () => {
      let json = await getNewsList();
      let newsList = json.data.map((a, index) => ({
        id: a.id,
        title: a.attributes.title,
        contenxt: a.attributes.body.value,
        date: a.attributes.created,
        imgUrl: json.included[index] ? json.included[index].attributes.uri.url : '',
      }));
      setNewsList(newsList);
    })();
  }, []);

  return (
    <div>
      <div className="common-banner"></div>
      <div className={styles.content}>
        <Container>
          {newsList.map((a, i) => (
            <NewsItem data={a} key={i} />
          ))}

          {/* <Row>
          <Col sm={12}>
            <div className={styles.btn} onClick={loadMore}>
              查看更多
            </div>
          </Col>
        </Row> */}
        </Container>
      </div>
    </div>
  );
};
