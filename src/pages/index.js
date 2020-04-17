import styles from './index.less';
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

export default function() {
  const [logs, setLogs] = useState([...Array(8).keys()]);

  useEffect(() => {
    
  }, []);
  return (
    <div>
      <div className={styles.banner}></div>
      <div className={styles.content}>
        <div className={styles.title1}>高雀 go-Charr 旗下产品均超过</div>
        <div className={styles.title2}>IQC、SGS、FeedAssure®和美国AAFCO标准</div>
        <div className={styles.logBox}>
          <Row>
            {logs
              .filter(b => b < 4)
              .map((a, index) => (
                <Col sm={3} className={styles.logItem}>
                  <img
                    src={require(`../assets/log_${a + 1}.png`)}
                    style={{ maxWidth: '100%', height: 'auto' }}
                    alt=""
                  />
                </Col>
              ))}
          </Row>
          <Row>
            {logs
              .filter(b => b > 3)
              .map((a, index) => (
                <Col sm={3} className={styles.logItem}>
                  <img
                    src={require(`../assets/log_${a + 1}.png`)}
                    style={{ maxWidth: '100%', height: 'auto' }}
                    alt=""
                  />
                </Col>
              ))}
          </Row>
          {/* <div className={styles.flexBox}>
            {logs.map((a,index) => (
            <div key={index} className={styles[`flexItem_${a+1}`]}>
              <img src={require(`../assets/log_${a+1}.png`)} alt=""/>
            </div>))}
          </div> */}
        </div>
      </div>
      <div className={styles.nutrition}></div>
    </div>
  );
}
