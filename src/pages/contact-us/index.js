import styles from './style.less'
import { Container,Row,Col,Form,Button } from "react-bootstrap"

const btnStyle = {
  backgroundColor:"#f36609",
  color:"#fff",
  fontSize:30,
  padding: "0 20px",
  borderColor: "#f36609",
  borderRadius: 10,
  cursor: "pointer"
}

export default () =>(
  <>
    <div className='common-banner'></div>
    <div className={styles.content}>
      <Container className="text-center">
        <Row>
          <Col sm={12}>
            <div className={styles.t1}>
              中国地区（含香港、澳门、台湾）独家代理商
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div className={styles.t2}>
              宁波保税区嘉鱼湃特贸易有限公司
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div className={styles.t3}>
              宁波市鄞州区徐戎路临39号集盒广场11A
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div className={styles.t4}>
              联系电话：0574-86822322
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <Form className={styles.form}>
              <Form.Group controlId="name">
                <Form.Control placeholder="姓名" />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Control type="email" placeholder="邮箱" />
              </Form.Group>
              <Form.Group controlId="leaveMessage">
                <Form.Control as="textarea" placeholder="留言" style={{ height:150 }} />
              </Form.Group>
              <Button variant="primary" type="submit" style={btnStyle}>
                提交
              </Button>
            </Form>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </div>
  </>
)