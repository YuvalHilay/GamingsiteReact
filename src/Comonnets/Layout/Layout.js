import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import ChangeTitle from "../../Services/ChangeTitle";
import StateTutorial from "../../StateTutorial";
import Colors from "../../Tuts/Colors";
import Home from "../Home/Home";
import LoginPage from "../Home/LoginPage";
import RegisterPage from "../Home/RegisterPage";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Timer from "./Header/Timer";
import "./Layout.css"
import Menu from "./Menu/Menu";
import Routing from "../../Routing/Routing";




function Layout() {
    return (
      <BrowserRouter>
        <div className="Layout">
          <header>
            <Timer />
            <Header />
          </header>
          <aside>
            <Menu />
          </aside>
          <main>
          <Routing/>
          </main>
          <footer>
            <Footer />
            <ChangeTitle title="האתר של יובל הילאי" />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
  
  export default Layout;

/*
 return <div
 
    className="Layout">
    <header>
    <Timer/><Header/> <Colors/>
    </header>
    <aside>
    <Menu/> 
    </aside>
    <main>
<Home/> 
    </main>
    <footer>
<Footer/>
<ChangeTitle title="האתר של יובל הילאי" />
    </footer>
 </div>

*/