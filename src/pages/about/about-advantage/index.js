/* 高雀优势 */
import styles from './style.less';
import { Container, Row, Col } from 'react-bootstrap';
import Permits from '../../../assets/permits.png';
import Supply1 from '../../../assets/supply1.png';
import Supply2 from '../../../assets/supply2.png';
import Supply3 from '../../../assets/supply3.png';
import Quality1 from '../../../assets/quality1.png';
import Quality2 from '../../../assets/quality2.png';
import Quality3 from '../../../assets/quality3.png';

export default () => (
  <div>
    <div className="common-banner"></div>
    <Container>
      <Row>
        <Col sm={12}>
          <div className={styles.featureTitle}>
            <h2>资质完善</h2>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <div className={styles.textNoBorder}>
            <p>
              go-Charr(高雀)宠粮的生产商是加拿大宠粮生产商SPECTRUM FEED SERVICES
              LTD公司，该公司在中国海关总署批准的境外宠物食品注册生产加工企业名单之中。
            </p>
            <p>
              go-Charr(高雀)是SPECTRUM工厂的自有品牌，在加拿大本地，go-Charr(高雀)的品牌商标由工厂注册，随后才在国内注册了中文商标。
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <img src={Permits} alt=""/>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <div className={styles.subTitle}>
            go-Charr（高雀）已经获得了农业部颁发的6张进口宠物食品登记证
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <div className={styles.textNoBorderCenter}>
            <p>
              并不是你们认为的“假洋鬼子”！所有的猫粮和狗粮，都是100%原装从加拿大原装进口，拥有完善的资质，合法合规的进口。
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <div className={styles.featureTitle}>
            <h2>供货稳定</h2>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <div className={styles.textNoBorder}>
            <p>
              宠粮的生产商不仅获得了中国海关总署批准，多年来也是一直从事宠物食品生产，再加上，中加两国关系友好，物流畅通，供货上
              相对来说比较稳定，不会出现突然断货的情况。
            </p>
          </div>
        </Col>
        <Col sm={12}>
          <Row>
            <Col sm={4}>
              <img className={styles.aboutSupplyImg} src={Supply1} alt="" />
            </Col>
            <Col sm={4}>
              <img className={styles.aboutSupplyImg} src={Supply2} alt="" />
            </Col>
            <Col sm={4}>
              <img className={styles.aboutSupplyImg} src={Supply3} alt="" />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <div className={styles.featureTitle}>
            <h2>品质可靠</h2>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <div className={styles.textNoBorder}>
            <p>
              工艺和配方差别不大是当下的行业现状，宠粮生产商Spectrum在2016年WATT旗下的宠物食品网站petfood
              industry显示Spectrum 是全球第六大宠粮生产商。
            </p>
            <p>这意味着我们的产品质量是可靠的、工艺是成熟的、技术是领先的、管理是科学的。</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <div className={styles.subTitle}>全球前六大宠粮生产商</div>
        </Col>
      </Row>

      <Row>
        <Col sm={2}>
          <div className={styles.aboutQualityText}>玛氏</div>
        </Col>
        <Col sm={2}>
          <div className={styles.aboutQualityText}>雀巢</div>
        </Col>
        <Col sm={2}>
          <div className={styles.aboutQualityText}>大宠心</div>
        </Col>
        <Col sm={2}>
          <div className={styles.aboutQualityText}>希尔斯</div>
        </Col>
        <Col sm={2}>
          <div className={styles.aboutQualityText}>蓝爵</div>
        </Col>
        <Col sm={2}>
          <div className={styles.aboutQualityText}>Spectrum</div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <Row>
            <Col sm={4}>
              <div className={styles.aboutQuality1}>
                <img src={Quality1} alt="" />
                <p>
                  工厂为保证产品新鲜不流失营养， 将原料采集地放在工厂一百公里
                  范围内，有订单才采购原料，有 原料立即加工，灌装后立即发货。
                  避免使用添加剂，保证产品新鲜 有营养。
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div className={styles.aboutQuality2}>
                <img src={Quality2} alt="" />
                <p>
                  产品配方符合AAFCO（美工饲料 控制官员协会）增长、维护、繁
                  殖的营养需求，这也超过了NRC （加拿大计量局）对狗和猫的营养
                  需求，符合且多数超过加拿大国 内及北美相关的标准。
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div className={styles.aboutQuality3}>
                <img src={Quality3} alt="" />
                <p>
                  另外，区别于全球其他大牌企业 一律美式生产线，我们的工厂生
                  产线自主程度在92%以上，工厂 拥有雄厚的技术能力和生产水平。
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <div className={styles.featureTitle}>
            <h2>高性价比</h2>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <div className={styles.featureTitleNoColor}>
            <h2>营养均衡</h2>
            <p>
              我们的加拿大工厂有成熟科研团队及生产经验积累，对每个配
              方的营养配比都进行了均衡化设计，这样可以达到基本靠干粮
              就可以满足宠物的营养需求。且在后期添加剂添加过程中确保
              即使是添加剂也是天然添加剂而非化工添加剂。
            </p>
          </div>
        </Col>
        
        <Col sm={6}>
          <div className={styles.featureTitleNoColor}>
            <h2>价格亲民</h2>
            <p>
              相比市面上百分百原装进口的天然宠物粮，我们的零售价格略
              低于市面上大部分进口宠粮的零售价。差不多的配方、零售价 略低，相对而言，性价比较高。
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);
