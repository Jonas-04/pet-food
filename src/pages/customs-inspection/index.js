import styles from './style.less'
import { Container,Row,Col,InputGroup,FormControl,Button } from "react-bootstrap"
import { useState,useEffect } from "react";
import { Search } from "react-bootstrap-icons"

const activeProduct = {
  backgroundColor: "#f36609",
  color: "#fff"
}

export default () => {

  const [product, setProduct] = useState([{
    id:1,
    productTitle:"犬 粮",
    productList:[{
      productName:"高雀低脂塑身配方狗粮",
      projectId:1,
      active:true,
    },{
      productName:"高雀大中型犬均衡营养狗粮",
      projectId:2,
      active:false,
    },{
      productName:"高雀营养孕哺配方幼犬粮",
      projectId:3,
      active:false,
    }]
  },{
    id:2,
    productTitle:"猫 粮",
    productList:[{
      productName:"高雀均衡营养成猫粮",
      projectId:4,
      active:false,
    },{
      productName:"高雀高蛋白孕哺营养配方幼猫粮",
      projectId:5,
      active:false,
    }]
  }]);

  const [lotNumberList, setLotNumberList] = useState([]);
  const [lotNumberDatas,setLotNumberDatas] = useState([]);

  useEffect(() => {
    const data = [{
      id:1,
      data:[
        {
          title:"批号12111",
          url:""
        },
        {
          title:"批号2222",
          url:""
        },
        {
          title:"批号3333",
          url:""
        }
      ]
    },{
      id:2,
      data:[
        {
          title:"批号211111",
          url:""
        },
        {
          title:"批号222222",
          url:""
        },
        {
          title:"批号233333",
          url:""
        }
      ]
    },{
      id:3,
      data:[
        {
          title:"批号3111111",
          url:""
        },
        {
          title:"批号3222222",
          url:""
        },
        {
          title:"批号33333333",
          url:""
        }
      ]
    },{
      id:4,
      data:[
        {
          title:"批号4111111",
          url:""
        },
        {
          title:"批号4222222",
          url:""
        },
        {
          title:"批号43333333",
          url:""
        }
      ]
    }]
    setLotNumberDatas(data)
    setLotNumberList(data.find(a => a.id === 1))
  }, []);

  const productClick = (id,projectId,i) => {
    let index1 = product.findIndex(a => a.id === id)

    setProduct(product.map((a,index) => ( index === index1 ? {
        ...product[index1],
        productList:product[index1].productList.map((b,index2) => index2 === i ? {...b,active:true}:{...b,active:false})
      } : { ...a, productList:product[index].productList.map((b)=> ({...b,active:false}))}
    )))

    setLotNumberList(lotNumberDatas.find(a => a.id === projectId)||{})

  }

  const ProductBox = (props) => {

    return (<div>
      <div className={styles.productTitle}>{props.title}</div>
      { props.productList instanceof Array && 
        props.productList.map((a,index) => (
          <div onClick={() => productClick(props.id, a.projectId ,index)} key={index} className={styles.product} style={a.active?activeProduct:{}}>{a.productName}</div>
        ))
      }
    </div>
  )}
  

  return (
    <div>
      <div className="common-banner"></div>
      <div className={styles.content}>
        <Container>
            <Row>
              <Col sm={12}>
                <div className={styles.title}>高雀 go-Charr 证件齐全</div>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <div className={styles.text}>
                  各位选择高雀go-Charr的铲屎官们，我们知道，您每一次为毛孩子们选择食物时，都倾注了满满的爱。<br/>
                  高雀go-Charr认为，宠物的健康和快乐来源于自身。当宠物身体的营养充足时，表现出来的状态自然是好的。<br/>
                  为了让各位宠爸宠妈们喂得更安心，养得更放心，即日起，作为高雀go-Charr中国大陆总代理，我们坚持每一批产品除了厂内检验
                  外，也送至第三方公正机构检验，<br/>
                  让您和毛孩子的每一天，都充满安心与快乐。我们最大的愿景，就是跟您一起，守护宠物的健康，监督高雀go-Charr的品质，让高
                  雀go-Charr成为让人安心无虞的进口粮！
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                <div className={styles.reportBox}>
                  <div className={styles.reportTitle}>报关质检报告</div>
                  <div className={styles.productList}>
                    { product.map((a,index) => (
                      <div key={index}> 
                        <ProductBox title={a.productTitle} id={a.id} productList={a.productList} />
                        { index !== product.length-1 ? <div className={styles.dividingLine}></div> : <></> }
                      </div>
                    ))}
                  </div>

                </div>
              </Col>
              <Col sm={9}>
                <Row>
                  <Col sm={7}></Col>
                  <Col sm={5}>
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="请输入搜索内容"
                        aria-label="请输入搜索内容"
                        aria-describedby="basic-addon2"
                      />
                      <InputGroup.Append>
                        <Button className={styles.searchBtn}><Search style={{ marginRight: 5,verticalAlign: -2}} />搜索</Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Col>
                </Row>
                <Row className={styles.lotNumberList}>
                  <Col sm={12}>
                    <ul>
                      { lotNumberList.data && lotNumberList.data.map(a => ( <li className={styles.lotNumberItem} key={a.id}>{a.title}</li>  ))  }
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
        </Container>
      </div>
    </div>
)}