import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { BoxForLogoStyles, NavbarStyles, OptionsStyles } from './NavbarStyles';

const Navbar = () => {
    return (
        <NavbarStyles>
            <BoxForLogoStyles>
                <img src={Logo} alt="logo" />
            </BoxForLogoStyles>
            <OptionsStyles>
                {/* <Link to={"#"} className="home"> */}
                    <a href="#" class="home">Quienes somos</a>
                {/* </Link> */}
                {/* <Link to={"#"} className="home"> */}
                    <a href="#" class="home">Inicio</a>
                {/* </Link> */}
                {/* <Link to={"#"} className="home"> */}
                    <a href="#" class="home">Servicios</a>
                {/* </Link> */}
                {/* <Link to={"#"} className="home"> */}
                    <a href="#" class="home">Contactanos</a>
                {/* </Link> */}
            </OptionsStyles>
        </NavbarStyles>
    )
}

export default Navbar;
