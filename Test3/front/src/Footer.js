import React, { forwardRef } from 'react';

const Footer = forwardRef((props, ref) => (
    <footer ref={ref} className="footer bg-light mt-4">
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <a href="#" className="nav-link"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="nav-link"><i className="fab fa-facebook-square"></i></a>
                    <a href="#" className="nav-link"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="nav-link"><i className="fas fa-phone"></i></a>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <a href="#" className="nav-link">Categoria 1</a>
                    <a href="#" className="nav-link">Categoria 2</a>
                </div>
            </div>
        </div>
    </footer>
));

export default Footer;
