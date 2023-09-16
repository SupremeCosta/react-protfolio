import './Footer.css';

function Footer() {
  return (
    <footer className="protfolio-footer">
        <div className='social'>
            <ul>
                <li><a href='#'><i className="fa fa-github"></i></a></li>
                <li><a href='#'><i className="fa fa-linkedin"></i></a></li>
                <li><a href='#'><i className="fa fa-stack-overflow"></i></a></li>
            </ul>
        </div>
        <div className='footer-title'>
            <h2>&copy; Copyright 2023 | Made With React<i class="fa fa-react" style={{color:'white'}}></i></h2>
        </div>
    </footer>
  );
}

export default Footer;
