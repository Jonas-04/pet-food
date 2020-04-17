import styles from './index.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Header />
      <div style={{minHeight:"100vh"}}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default BasicLayout;
