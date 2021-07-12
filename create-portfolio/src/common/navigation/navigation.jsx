import { Container, Navbar, Nav } from "react-bootstrap";
import logoSvg from "../../images/logo.svg";
import "./navigation.css";
export const Navigation = () => {
    return (
        <div class="navigation">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
                        <div class="logo">
                            <a href="index.html">
                                <img src={logoSvg} alt="logo" />
                            </a>
                        </div>
                    </div>

                    <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
                        <div class="primary-nav">
                            <ul>
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a href="portfolio.html">Portfolio</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/*
       // <nav className="navigation">
        //     <Navbar>
        //         <Container>
        //             <Navbar.Brand href="#home">
        //                 <div className="logo">
        //                     <img src={logoSvg} alt="" />
        //                 </div>
        //             </Navbar.Brand>
        //             <Navbar.Toggle />
        //             <Navbar.Collapse className="justify-content-end">
        //                 <Nav className="me-auto">
        //                     <Nav.Link className="li" href="#home">
        //                         Home
        //                     </Nav.Link>
        //                     <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        //                     <Nav.Link href="#contact">contact</Nav.Link>
        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        // </nav>
        */
