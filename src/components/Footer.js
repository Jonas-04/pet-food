import { Container,Row,Col} from "react-bootstrap"

export default () => (
  <div className="footer">
    <Container>
      <Row>
        <Col sm={7}>
          <div className="footer-left">
            <div className='footer-left_phone'>0574-86822322</div>
            <Row>
              <Col sm={5} style={{paddingRight:5}}><span className='footer-left_company'>宁波保税区嘉鱼湃特贸易有限公司</span></Col>
              <Col sm={7}><span className='footer-left_address'>宁波市鄞州区徐戎路临 39号集盒广场11A</span></Col>
            </Row>
          </div>
        </Col>
        <Col sm={5}>


          {/* <Row>
            <Col sm={4}>
              <img src={require(`../assets/qrweixin.png`)} style={{maxWidth:"100%",height:"auto"}} alt=""/>              
            </Col>
            <Col sm={4}>
              <img src={require(`../assets/qrdouyin.png`)} style={{maxWidth:"100%",height:"auto"}} alt=""/>
            </Col>
            <Col sm={4}>
              <img src={require(`../assets/qrtaobao.png`)} style={{maxWidth:"100%",height:"auto"}} alt=""/>
            </Col>
          </Row> */}
          
          
          <div className="qr-box">
            {/* <div className="qr-item">
              <img src={require(`../assets/qrweixin.png`)} className="qr-img" alt=""/>
            </div>
            <div className="qr-item">
              <img src={require(`../assets/qrdouyin.png`)} className="qr-img" alt=""/>
            </div>
            <div className="qr-item">
              <img src={require(`../assets/qrtaobao.png`)} className="qr-img" alt=""/>
            </div>    */}
            <div className="qrcode weixin">
            </div>
            <div className="qrcode douyin">
            </div>
            <div className="qrcode taobao">
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)