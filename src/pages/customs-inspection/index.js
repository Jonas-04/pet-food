import styles from './style.less';
import { Container, Row, Col, InputGroup, FormControl, Button, Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Search } from 'react-bootstrap-icons';
import { imageBaseUrl } from '@/config/config';
import dayjs from 'dayjs';
import {
  getFoodCategory,
  getLicenseCategory,
  getLicenseCategoryImageId,
} from '../../services/inspection';

const activeProduct = {
  backgroundColor: '#f36609',
  color: '#fff',
};

export default () => {
  const [product, setProduct] = useState([]);
  let searchInput = '';

  // let productId = '';


  const [lotNumberList, setLotNumberList] = useState([]);
  const [lotNumberDatas, setLotNumberDatas] = useState([]);
  const [inspectionImage, setInspectionImage] = useState({});
  const [productId, setProductId] = useState("");
  const [lotNumberAllDatas, setLotNumberAllDatas] = useState({});

  const [show, setShow] = useState(true);

  const content = id => {
    setShow(false);
    getLicenseCategoryImageId(id).then(json => {
      setInspectionImage(json);
    });
  };

  useEffect(() => {
    let data;
    let newsList;

    (async () => {
      let json = await getLicenseCategory();
      data = json.data.map((a, i) => ({
        id: a.relationships.field_food_category.data.id,
        productTitle: a.attributes.name,
        data: json.data
          .filter(
            c =>
              c.relationships.field_food_category.data.id ===
              a.relationships.field_food_category.data.id,
          )
          .map((b, index) => ({
            id: b.id,
            title: b.attributes.title,
            url: '',
          })),
      }));
      let json1 = await getFoodCategory();
      newsList = json1.data
        .filter(q => q.relationships.parent.data[0].id === 'virtual')
        .map((a, i) => ({
          id: a.id,
          productTitle: a.attributes.name,
          productList: json1.data
            .filter(q => q.relationships.parent.data[0].id === a.id)
            .map((b, index) => ({
              productName: b.attributes.name,
              projectId: b.id,
              active: !(i + index),
            })),
        }));

      setProduct(newsList);
      setLotNumberDatas(data);
      setLotNumberList(data.find(a => a.id === newsList[0].productList[0].projectId));
      setProductId(newsList[0].productList[0].projectId)
      setLotNumberAllDatas(data.find(a => a.id === newsList[0].productList[0].projectId));
    })();
  }, []);

  const productClick = (id, projectId, i) => {
    setShow(true);

    let index1 = product.findIndex(a => a.id === id);

    setProduct(
      product.map((a, index) =>
        index === index1
          ? {
              ...product[index1],
              productList: product[index1].productList.map((b, index2) =>
                index2 === i ? { ...b, active: true } : { ...b, active: false },
              ),
            }
          : { ...a, productList: product[index].productList.map(b => ({ ...b, active: false })) },
      ),
    );

    
    setLotNumberList(lotNumberDatas.find(a => a.id === projectId) || {});
    setProductId(projectId)
    setLotNumberAllDatas(lotNumberDatas.find(a => a.id === projectId))
  };

  const searchClick = () => {
    let filterData = lotNumberAllDatas.data.filter(a => a.title.includes(searchInput))
    setLotNumberList({...lotNumberAllDatas,data:filterData});
  }

  const ProductBox = props => {
    return (
      <div>
        <div className={styles.productTitle}>{props.title}</div>
        {props.productList instanceof Array &&
          props.productList.map((a, index) => (
            <div
              onClick={() => productClick(props.id, a.projectId, index)}
              key={index}
              className={styles.product}
              style={a.active ? activeProduct : {}}
            >
              {a.productName}
            </div>
          ))}
      </div>
    );
  };

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
                各位选择高雀go-Charr的铲屎官们，我们知道，您每一次为毛孩子们选择食物时，都倾注了满满的爱。
                <br />
                高雀go-Charr认为，宠物的健康和快乐来源于自身。当宠物身体的营养充足时，表现出来的状态自然是好的。
                <br />
                为了让各位宠爸宠妈们喂得更安心，养得更放心，即日起，作为高雀go-Charr中国大陆总代理，我们坚持每一批产品除了厂内检验
                外，也送至第三方公正机构检验，
                <br />
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
                  {product.map((a, index) => (
                    <div key={index}>
                      <ProductBox title={a.productTitle} id={a.id} productList={a.productList} />
                      {index !== product.length - 1 ? (
                        <div className={styles.dividingLine}></div>
                      ) : (
                        <></>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col sm={9}>
              {show ? (
                <Row className={styles.search}>
                  <Col sm={7}></Col>
                  <Col sm={5}>
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="请输入搜索内容"
                        aria-label="请输入搜索内容"
                        aria-describedby="basic-addon2"
                        onChange={(e)=> searchInput = e.target.value}
                      />
                      <InputGroup.Append>
                        <Button className={styles.searchBtn} onClick={(e)=>{searchClick(e)}}>
                          <Search style={{ marginRight: 5, verticalAlign: -2 }}/>
                          搜索
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Col>
                </Row>
              ) : (
                ''
              )}
              <Row>
                <Col sm={12}>
                  {show ? (
                    <ul className={styles.inspectionList}>
                      {lotNumberList.data &&
                        lotNumberList.data.map(a => (
                          <li
                            className={styles.lotNumberItem}
                            key={a.id}
                            onClick={() => content(a.id)}
                          >
                            {a.title}
                          </li>
                        ))}
                    </ul>
                  ) : (
                    <div>
                      {Object.keys(inspectionImage).length ? (
                        <div>
                          <h1 className={styles.titleInspection}>
                            {inspectionImage.data.attributes.title}
                          </h1>
                          <p className={styles.dateInspection}>
                            {dayjs(inspectionImage.data.attributes.created).format('YYYY-MM-DD HH:mm:ss')}
                          </p>
                          <Carousel className={styles.carouselInspection}>
                            {inspectionImage.included.map(a => (
                              <Carousel.Item key={a.id}>
                                <img
                                  className="d-block"
                                  src={`${imageBaseUrl}${a.attributes.uri.url}`}
                                  alt="slide"
                                />
                              </Carousel.Item>
                            ))}
                          </Carousel>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
