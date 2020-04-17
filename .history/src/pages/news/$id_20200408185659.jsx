import styles from './style.less'
import { Container,Row,Col } from "react-bootstrap"

const NewsItem = (props) => (
  <Row>
    <Col sm={12}>
      <div>高雀</div>
    </Col>
  </Row>
)

export default () => {
  return(
    <div>
      <div className="common-banner"></div>
      <div className={styles.content}>
      <Container>
        <NewsItem />
      </Container>
      </div>
    </div>
  )
}