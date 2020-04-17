import styles from './style.less'
import { Container,Row,Col } from "react-bootstrap"

const NewsItem = (props) => (
  <div className={styles.newsItem}>
    <Row>
      <Col sm={12}>
        <div className={styles.newDate}>2020/3/23</div>
      </Col>
    </Row>
    <Row>
      <Col sm={4}>
        <div className={styles.newImg}>
          <img src="http://www.bpet.cn/upload/2020/03/11/15839194768734kw59j.jpg" alt=""/>
        </div>
      </Col>
      <Col sm={8}>
        <h2>圣诞节福克斯经典福克斯的风景</h2>
        <p className={styles.p2}>似懂非懂的滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜</p>
        <p className={styles.p3}>查看更多</p>
      </Col>
    </Row>
  </div>
)

export default () => {
  return(
    <div>
      <div className="common-banner"></div>
      <div className={styles.content}>
      <Container>
        <NewsItem />
        <Row>
          <Col sm={12}>
            <div className={styles.btn}>
              查看更多
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  )
}