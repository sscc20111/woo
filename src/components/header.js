import { Main, Sub1, Sub2, Sub3, Sub4 } from "../pages";
import { NavLink } from "react-router-dom";


const Header = () => {
    return(
        <div className='header'>
            <nav>
                <ul>
                    <li><NavLink to="/">Main</NavLink></li>
                    <li><NavLink to="/sub1">Sub1</NavLink></li>
                    <li><NavLink to="/sub2">Sub2</NavLink></li>
                    <li><NavLink to="/sub3">Sub3</NavLink></li>
                    <li><NavLink to="/sub4">Sub4</NavLink></li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;