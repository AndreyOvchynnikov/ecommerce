
const Footer = () => {
  return (
    <div id='footer'>
        <div className="newsletter">
            <div className="container">
            <h2>Newsletter</h2>
                <form className="newsletter-form-container">
                    <input type="email" name="email" placeholder='john@doe.com' />                    
                    <button type='button' className='nl-submit'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className="footer-menu">
            <div className="container">
                <div className="footer-menu-items">
                    <div className="nav-items">
                                <span className="nav-item">About</span>
                                <span className="nav-item">Store locator</span>                            
                                <span className="nav-item">FAQs</span>                                                    
                                <span className="nav-item">News</span>                                                       
                                <span className="nav-item">Careers</span>                                                      
                                <span className="nav-item">Contact Us</span>                            
                    </div>
                <div className="cr">Built with passion</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
