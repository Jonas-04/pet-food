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
      <Container className={styles.container}>
        {/* <div className={styles.flexBox}> */}
          {/* <img src={require("../../assets/dog-food-1.png")} alt=""/>
          <img src={require("../../assets/dog-food-2.png")} alt=""/>
          <img src={require("../../assets/dog-food-3.png")} alt=""/> */}
          {/* <div className={styles.product1}></div>
          <div className={styles.product2}></div>
          <div className={styles.product3}></div>
        </div> */}
        <Row>
          <Col sm={4}>
            <IntroductionComponents data={{
              title:"高雀营养孕哺配方幼犬粮",
              titleEN:"Go-Charr nutritional formula dog food",
              productFor:"幼犬，孕期及哺乳期犬适用",
              forDetailsText:"点击进入了解详情"
            }} productTag={"product1"}  img={'dog-food-1'}/>
          </Col>
          <Col sm={4}>
            <IntroductionComponents data={{
                title:"高雀大中型犬均衡营养狗粮",
                titleEN:"Go-Charr balanced nutrition dog food",
                productFor:"大中型犬适用",
                forDetailsText:"点击进入了解详情"
              }} productTag={"product2"}  img={'dog-food-2'}/>
          </Col>
          <Col sm={4}>
            <IntroductionComponents data={{
                title:"高雀低脂塑身配方狗粮",
                titleEN:"Go-Charr formula dog food",
                productFor:"超重犬及老年犬适用",
                forDetailsText:"点击进入了解详情"
              }} productTag={"product3"}  img={'dog-food-3'}/>
          </Col>
        </Row>
      </Container>
    </div>
  </>
)