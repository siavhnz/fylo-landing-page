import Footer from "./Footer";
import Header from "./Header";
import styleUtils from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className={styleUtils.main}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
