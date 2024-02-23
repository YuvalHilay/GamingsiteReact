import "./Menu.css";
import myImage from "./yuval.jpg";
function Menu() {
    return (
        <div>
            <nav className="Menu">
            <img src={myImage} alt="yuval" width={240} />
             <a href="/Home">Home Page</a>
             <a href="/Home">My Cart</a>
             <a href="/Products">Products</a>
             <a href="#">Support</a>
             <a href="#">Contact Us</a>
             <a href="/Register">Register</a>
             <a href="/Login">Login</a>
             <a href="/Colors">Colors</a>
             <a href="/MisparColor">Mispar Color</a>
             <a href="/ColorDisplay">ColorDisplay</a>
             <a href="/ReducerFc">ReducerFc</a>
             <a href="/StateTutorial">StateTutorial</a>
             <a href="/Sqaure">Square</a>
             
            </nav>
        </div>
    );
}
export default Menu;