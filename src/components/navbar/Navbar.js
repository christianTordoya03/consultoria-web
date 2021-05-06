import React from 'react';
// import { Link } from 'react-router-dom';
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
                    <a href="about-us/" class="home">Quienes somos</a>
                {/* </Link> */}
                {/* <Link to={"#"} className="home"> */}
                    <a href="home/" class="home">Inicio</a>
                {/* </Link> */}
                {/* <Link to={"#"} className="home"> */}
                    <a href="services/" class="home">Servicios</a>
                {/* </Link> */}
                {/* <Link to={"#"} className="home"> */}
                    <a href="contact-us/" class="home">Contactanos</a>
                {/* </Link> */}

                {/* <Link to="about-us/" className="home">
                    Quienes somos
                </Link>
                <Link to="home/" className="home">
                    Inicio
                </Link>
                <Link to="services/" className="home">
                    Servicios
                </Link>
                <Link to="contact-us/" className="home">
                    Contactanos
                </Link> */}
            </OptionsStyles>
        </NavbarStyles>
    )
}

export default Navbar;
