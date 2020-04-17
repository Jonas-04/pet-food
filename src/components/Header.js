import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default () => {
  const [ navListData,setNavListData ] = useState([])

  useEffect(() => {
    const x = [{
      title: "首页",
      url: "/",
      isactive:false
    },{
      title: "关于高雀",
      url: "/about",
      isactive:false
    },
    {
      title: "新闻中心",
      url: "/news",
      isactive:false,
    },
    {
      title: "狗粮",
      url: "/dog-food",
      isactive:false
    },{
      title: "猫粮",
      url: "/cat-food",
      isactive:false
    },{
      title: "报关卫检",
      url: "/customs-inspection",
      isactive:false
    },{
      title: "联系我们",
      url: "/contact-us",
      isactive:false
    }]
    
    if (typeof window !== 'undefined') {
      setNavListData(x.map(a => (
        a.url === window.location.pathname ? { ...a,isactive:true } : a
      )));
    }
  }, []);

  return (
    <div className="header">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="header-logo">
            </div>
          </Col>
          <Col lg={8}>
            <div className="header-share justify-content-end">
              <i className="header-share_item1">EN 英文版</i>
              <i className="header-share_item icon2"></i>
              <i className="header-share_item icon3"></i>
              <i className="header-share_item icon4"></i>
            </div>
            <Nav className="justify-content-between header-nav" activeKey="/home">

              {
                navListData.map((a,i) => {
                  if(a.url === '/'){
                    return (
                      <Nav.Item key={i} className={`${a.isactive ? "item-active" : ""} item-home`}>
                        <Nav.Link href={a.url}>
                          <i className="flag-icon"></i>
                          <span style={{ position: 'absolute', right: 0 }}>首&nbsp;页</span>
                        </Nav.Link>
                      </Nav.Item>
                    )
                  } else{
                    return <Nav.Item key={i} className={`${a.isactive ? "item-active" : ""}`} style={i === navListData.length-1?{ paddingRight: 0 }:{}}>
                    <Nav.Link eventKey={a.url} href={a.url}>
                      {a.title}
                    </Nav.Link>
                  </Nav.Item>
                  }
                })
              }
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

