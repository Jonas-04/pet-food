/* 进口资质 */
import styles from './style.less';
import { Container, Row, Col } from 'react-bootstrap';
import History from "../../../assets/history.png";
export default () => (
  <div>
    <div className="common-banner"></div>
    <div className={styles.content}></div>
    <Container>
      <Row>
        <Col sm={12}>
          <div className={styles.featureTitle}>
            <h2>进口资质</h2>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={4}>
          <div className={styles.feature1}>
            <div className={styles.feature1Image1}></div>
            <p>高雀高蛋白孕哺营养配方幼猫粮进口登记证</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className={styles.feature1}>
            <div className={styles.feature1Image2}></div>
            <p>高雀均衡营养成猫粮进口登记证</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className={styles.feature1}>
            <div className={styles.feature1Image3}></div>
            <p>高雀营养孕哺配方幼犬粮进口登记证</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className={styles.feature1}>
            <div className={styles.feature1Image4}></div>
            <p>高雀低脂塑身配方狗粮进口登记证</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className={styles.feature1}>
            <div className={styles.feature1Image5}></div>
            <p>高雀大中型犬均衡营养狗粮进口登记证</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className={styles.feature1}>
            <div className={styles.feature1Image6}></div>
            <p>高雀大中型犬高能运动配方狗粮进口登记证</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <div className={styles.featureTitle}>
            <h2>品牌历史</h2>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <div className={styles.history}>
            <img src={History} alt="history"/>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);
