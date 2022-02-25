import React from 'react';

const Footer = () => {
    return (
        <footer>
        <div className='big-footer'>
        <div className='text-center'>
            <h5>GET IN TOUCH</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Suscipit saepe itaque quidem similique</p>
            <div>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-snapchat-ghost"></i>
            <i className="fab fa-youtube"></i>
            </div>
        </div>

        <div>
            <h5 className='text-center'>LINKS</h5>
            <ul>
                <li><a href="/">Search</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">Returns</a></li>
            </ul>
        </div>

        <div>
            <h5 className='text-center'>LINKS</h5>
            <ul>
                <li><a href="/">Search</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">Returns</a></li>
            </ul>
        </div>
        </div>
        <div className='cc-icone'>
        <i className="fab fa-cc-paypal"></i>
        <i className="fab fa-cc-visa"></i>
        <i className="fab fa-cc-mastercard"></i>
        <i className="fab fa-cc-amex"></i>
        <i className="fab fa-cc-discover"></i>
        </div>
        <div className='text-center mt-3'>
            <p>Copyright © ALL rights reserved.</p>
        </div>
    </footer>
    );
};

export default Footer;
