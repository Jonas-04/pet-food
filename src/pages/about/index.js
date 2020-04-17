import styles from './style.less'
import { Container,Row,Col } from "react-bootstrap"
export default () => (
  <div>
    <div className="common-banner"></div>
    <div className={styles.content}>
    <Container>
        <Row>
          <Col sm={12}>
            <div className={styles.title}>高雀 go-Charr 源自加拿大</div>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div className={styles.text}>
              作为拥有25年宠粮研发经验的专家，来自加拿大的高雀（go-Charr）为不同生长阶段的猫犬提供营养。生产商为全球第六大宠粮生产
              商Specturm Feed Services Ltd.，于1996年开始专注于宠粮的研发生产，高雀(go-Charr)不仅有着动物营养均衡研发团队，还有着非
              常成熟的管理和生产工艺。
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <div className={styles.companyImg1}>
            </div>
          </Col>
          <Col sm={6}>
              <div className={styles.companyImg2}>
              </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div className={styles.companyTitle}>SPECTURM FEED SERVICES LTD.</div>
          </Col>
        </Row>
        <Row>
          <Col sm={7}>
            <div className={styles.companyTag}>白名单录入企业</div>
            <div className={styles.tagText}>
              加拿大Specturm Feed Services Ltd.是中国政府白名单录入企业。主营动物饲料，不仅有着“从老鼠到大象”的产品提供能力，
              还有着领先的动物营养均衡研发团队，以及非常成熟的管理和生产工艺。
            </div>
            <div className={styles.companyTag}>原料新鲜  即购即产</div>
            <div className={styles.tagText}>
              提供产品原料的供应商大多来自工厂100公里范围内的农场中，在备料过程中要求即购即产，尽可能的缩短原料储存周期。
              同时设立了严苛的流程监管机制，要求原料最长贮藏时间不超过6天，在制度上保障产品的新鲜。营造了一个低氧低温低湿低微生物的贮藏环境。
            </div>
            <div className={styles.companyTag}>符合加拿大国内及北美相关标准</div>
            <div className={styles.tagText}>
              产品配方符合AAFCO（美国饲料控制官员协会）增长、维护、繁殖的营养需
              求，这也超过了NRC对狗和猫的营养需求。符合且多数超过加拿大国内及北美相关标准。
            </div>

            <Row>
              <Col sm={6}>              
                  <div className={styles.companyImg5}>
                  </div>
              </Col>
              <Col sm={6}>              
                  <div className={styles.companyImg7}>
                  </div>
              </Col>
            </Row>
          </Col>
          <Col sm={5}>
            <div className={styles.imgBox2}>
              <div className={styles.companyImg3}>
              </div>
              <div className={styles.companyImg4}>
              </div>
              <div className={styles.companyImg6}>
              </div>
            </div>
          </Col>
        </Row> 
    </Container>
    </div>
  </div>
)