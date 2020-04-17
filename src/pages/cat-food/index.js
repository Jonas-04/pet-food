import styles from './style.less'
import { Container,Row,Col } from "react-bootstrap"

const IntroductionComponents = (props) => (
  <>
    <div style={{textAlign:"center"}}><img className='responsive-img' src={require(`../../assets/${props.img}.png`)} alt=""/></div>
    <div className={styles.introduction}>
      <div className={styles.product_title}>{props.data.title}</div>
      <div className={styles.product_title_en}>{props.data.titleEN}</div>
      <div className={styles.product_for}>{props.data.productFor}</div>
      <div><span className={styles.for_details}>{props.data.forDetailsText}</span></div>
    </div>
  </>
)

export default () =>(
  <>
    <div className='common-banner'></div>
    <div className={styles.content}>
      <Container>
        <Row>
          <Col sm={6}>
            <IntroductionComponents data={{
              title:"高雀高蛋白孕哺营养配方幼猫粮",
              titleEN:"Go-Charr high protein nutritional formula cat food",
              productFor:"幼猫、孕期及哺乳期猫适用",
              forDetailsText:"点击进入了解详情"
            }} productTag={"product1"} img={'cat-food-1'} />
          </Col>
          <Col sm={6}>
            <IntroductionComponents data={{
                title:"高雀均衡营养成猫粮",
                titleEN:"Go-Charr balanced nutrition cat food ",
                productFor:"全猫适用",
                forDetailsText:"点击进入了解详情"
              }} productTag={"product2"} img={'cat-food-2'}/>
          </Col>
        </Row>
      </Container>
    </div>
  </>
)