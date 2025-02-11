import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Welcome from "./Welcome";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      {/* <Welcome/> */}
    </>
  );
};
export default Layout;
