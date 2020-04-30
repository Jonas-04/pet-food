/* 品牌理念 */
import styles from './style.less';
import { Container, Row, Col } from 'react-bootstrap';
export default () => (
  <div>
    <div className="common-banner"></div>
    <Container>
      <Row>
        <Col sm={12}>
          <div className={styles.title}>go-Charr 高雀 源自加拿大</div>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <div className={styles.text}>
            <p>
              作为加拿大原装进口的宠物食品品牌，我们面向年轻、有知的客户群体，追求“物超所值”、“均衡营养”的产品哲学。
            </p>
          </div>
        </Col>
        <Col sm={4}>
          <div className={styles.text}>
            <p>将科学养宠、理智养宠、品质养宠的理念传递给中国养宠人。</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className={styles.text}>
            <p>以一包宠粮解决基本问题为目标，将温暖紧紧依偎留在宠物主和爱宠的身边。</p>
          </div>
        </Col>
      </Row>
      
      <Row>
        <Col sm={12}>
          <div className={styles.featureTitle}>
            <h2>一包宠粮解决基本问题</h2>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <div className={styles.textNoBorder}>
            <p>
              我们在宠粮的配方上，努力做到了营养均衡，宠粮在加拿大的工厂有着成熟科研团队及生产经验积累，对每个配方的营养配比都进行了均衡化设计，这样可以达到基本靠干粮就可以满足宠物的营养需求。
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={3}>
          <div className={styles.feature1}>
            <div className={styles.feature1Image1}></div>
            <div className={styles.featureText}>
              <p>在后期添加剂添加过程中，确保即使是添加剂也是天然添加剂而非化工添加剂。</p>
            </div>
          </div>
        </Col>
        <Col sm={3}>
          <div className={styles.feature1}>
            <div className={styles.feature1Image2}></div>
            <div className={styles.featureText}>
              <p>
                钙、磷、脂肪酸配比优良，保持骨骼、关节和牙齿健康。丰富的维生素族群，保障营养丰富和平衡。
              </p>
            </div>
          </div>
        </Col>
        <Col sm={3}>
          <div className={styles.feature1}>
            <div className={styles.feature1Image3}></div>
            <div className={styles.featureText}>
              <p>施加的矿物质及其配合物（或螯合物），能够确保宠物安全与营养。</p>
            </div>
          </div>
        </Col>
        <Col sm={3}>
          <div className={styles.feature1}>
            <div className={styles.feature1Image4}></div>
            <div className={styles.featureText}>
              <p>所有植物性原理不含转基因成分。</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <div className={styles.featureTitle}>
            <h2>食材保证新鲜、绝不原料操纵</h2>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <div className={styles.textNoBorder}>
            <p>
              为保证产品新鲜不流失营养，我们的原料采集地在工厂一百公里范围内，有订单才采购原料，有原料立即加工，灌装后立即发货。避免使用添加剂，保证产品新鲜有营养。
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={3}>
          <div className={styles.feature2}>
            <div className={styles.feature2Image1}>
              <span>下订单</span>
            </div>
            <div className={styles.feature2Arrow}></div>
          </div>
        </Col>
        <Col sm={3}>
          <div className={styles.feature2}>
            <div className={styles.feature2Image2}>
              <span>100公里范围内采集原料</span>
            </div>
            <div className={styles.feature2Arrow}></div>
          </div>
        </Col>
        <Col sm={3}>
          <div className={styles.feature2}>
            <div className={styles.feature2Image3}>
              <span>立即加工</span>
            </div>
            <div className={styles.feature2Arrow}></div>
          </div>
        </Col>
        <Col sm={3}>
          <div className={styles.feature2}>
            <div className={styles.feature2Image4}>
              <span>灌装发货</span>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <div className={styles.feature3Title}>
            <h2>绝不操纵原料</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <div className={styles.feature3Content}>
            <p>
              所谓的“原料操纵”是指在产品原料初期就进行添加剂添加作业，以实现产品原料不腐坏、易保存、易成型、固化营养物质等功效。
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <div className={styles.feature3Title}>
            <h2>采用卵磷脂为凝结剂</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <div className={styles.feature3Content}>
            <p>所有系列宠粮内采用的凝结剂不是矿物油，而是价格相对较高d额卵磷脂。</p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);
