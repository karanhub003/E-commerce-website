import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
        <div className='footerContainer'>
            <div className="leftSide">
                <div className="leftVal">
                    <h2>Useful Links</h2>
                    <p>Contact-Us</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className="leftVal">
                    <h2>Social Media</h2>
                    <div className="socialIcon">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div className="leftVal">
                    <h2>Copyright</h2>
                    <p>Nexora<i class="fa-solid fa-copyright"></i>2026</p>
                </div>
            </div>
            <div className="rightSide">
                <h2>Subscribe to our newsletter and flat 10% off</h2>
                <div className="emailInputBox">
                    <input type="email" placeholder='Email...' />
                    <button>Subscribe</button>
                </div>
                <p>Get regular updates on our product with our newsletter</p>
            </div>
        </div>
    </footer>
  )
}
