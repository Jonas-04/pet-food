/* 进口资质 */
import styles from './style.less';
import { Container, Row, Col } from 'react-bootstrap';
import History from "../../../assets/history.png";
import FeatureImage1 from "../../../assets/about_permit_01.png";
import FeatureImage2 from "../../../assets/about_permit_02.png";
import FeatureImage3 from "../../../assets/about_permit_03.png";
import FeatureImage4 from "../../../assets/about_permit_04.png";
import FeatureImage5 from "../../../assets/about_permit_05.png";
import FeatureImage6 from "../../../assets/about_permit_06.png";

export default () => (
  <div>
    <div className="common-banner"></div>
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
            {/* <div className={styles.feature1Image1}></div> */}
            <img src={FeatureImage1} alt=""/>
            <p>高雀高蛋白孕哺营养配方幼猫粮进口登记证</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className={styles.feature1}>
            {/* <div className={styles.feature1Image2}></div> */}
            <img src={FeatureImage2} alt=""/>
            <p>高雀均衡营养成猫粮进口登记证</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className={styles.feature1}>
            {/* <div className={styles.feature1Image3}></div> */}
            <img src={FeatureImage3} alt=""/>
            <p>高雀营养孕哺配方幼犬粮进口登记证</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className={styles.feature1}>
            {/* <div className={styles.feature1Image4}></div> */}
            <img src={FeatureImage4} alt=""/>
            <p>高雀低脂塑身配方狗粮进口登记证</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className={styles.feature1}>
            {/* <div className={styles.feature1Image5}></div> */}
            <img src={FeatureImage5} alt=""/>
            <p>高雀大中型犬均衡营养狗粮进口登记证</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className={styles.feature1}>
            {/* <div className={styles.feature1Image6}></div> */}
            <img src={FeatureImage6} alt=""/>
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

      <Row>
        <Col sm={12}>
          <div className={styles.continued}>
            <p>......</p>
            <h2>To be continued (未完待续)</h2>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);
