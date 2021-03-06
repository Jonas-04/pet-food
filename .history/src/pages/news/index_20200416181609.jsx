import styles from './style.less'
import { Container,Row,Col } from "react-bootstrap"
import { useState } from "react"
import router from 'umi/router';
import { getNewsList } from '../../services/news'
import dayjs from 'dayjs'

const NewsItem = (props) => {

  const detail = id => router.push(`/news/${id}`)
  
  return (
    <div className={styles.newsItem} onClick={() => detail(props.data.id)}>
      <Row>
        <Col sm={12}>
          <div className={styles.newDate}>{dayjs(props.data.date).format("YYYY-MM-DD")}</div>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <div className={styles.newImg}>
            <img src={`http://go-charr-drupal.c60795b656a25414792b17fae115d4da1.cn-hangzhou.alicontainer.com${props.data.imgUrl}`} alt=""/>
          </div>
        </Col>
        <Col sm={8}>
          <h2>{props.data.title}</h2>
          <p className={styles.p2} dangerouslySetInnerHTML={{__html: props.data.context}}></p>
          <p className={styles.p3}>查看更多</p>
        </Col>
      </Row>
    </div>
)}

const Index = (props) => {
  const [newsList, setNewsList] = useState(props.data.map((a,index) => ({
    id:a.id,
    title:a.attributes.title,
    contenxt:a.attributes.body.value,
    date: a.attributes.created,
    imgUrl: props.included[index].attributes.uri.url
  })) )

  // useEffect(() => {

  //   (
  //     async () => {
  //       let json = await getNewsList()
  //       let newsList = props.json.data.map((a,index) => ({
  //         id:a.id,
  //         title:a.attributes.title,
  //         contenxt:a.attributes.body.value,
  //         date: a.attributes.created,
  //         imgUrl: json.included[index].attributes.uri.url
  //       })) 
  //       setNewsList(newsList)
  //     }
  //   )()
  // }, [])

  const loadMore = () => {
    setNewsList(newsList.concat([{
      id:4,
      title:"但是范玮琪",
      context:"我儿沃尔沃我问问村上春树",
      date:"2020-3-4"
    },{
      id:5,
      title:"我儿为呃我",
      context:"刚发给我儿给我儿而且儿我去玩",
      date:"2020-3-4"
    },{
      id:6,
      title:"说到发顺丰",
      context:"我儿气味人情味人情味儿气味人情味人情味人",
      date:"2020-3-4"
    }]))
  }

  return(
    <div>
      <div className="common-banner"></div>
      <div className={styles.content}>
      <Container>

        {newsList.map((a,i) => (
          <NewsItem data={a} key={i}/>
        ))}
        
        {/* <Row>
          <Col sm={12}>
            <div className={styles.btn} onClick={loadMore}>
              查看更多
            </div>
          </Col>
        </Row> */}
      </Container>
      </div>
    </div>
  )
}

Index.getInitialProps = async ()=>{
  return await getNewsList()
}

export default Index