import { useInView } from 'react-intersection-observer';

const Footer = () => {

    const animationOptions = { triggerOnce: false, rootMargin: "-100px 0px", };
    const { ref: titleRef, inView: titleIsVisible } = useInView(animationOptions);
    const { ref: formRef, inView: formIsVisible } = useInView(animationOptions);
    const { ref: navRef, inView: navIsVisible } = useInView(
        {
            triggerOnce: false,
            rootMargin: "0px 0px",
        });

    return (
        <div id='footer'>
            <div className="newsletter">
                <div className="container">
                    <h2 ref={titleRef} className={titleIsVisible? "newsletter-title-animated" : "newsletter-title"}>Newsletter</h2>
                    <form ref={formRef} className={formIsVisible? "newsletter-form-container-animated" : "newsletter-form-container"}>
                        <input type="email" name="email" placeholder='john@doe.com' />
                        <button type='button' className='nl-submit'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-menu">
                <div className="container">
                    <div ref={navRef} className={navIsVisible? "footer-menu-items-animated" : "footer-menu-items"}>
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
};

export default Footer
