import './navbar.css'

function Navbar() {
   return(
    <header>
    
    <nav>
    <div class="wrapper">
  <div class="logo"><a href="#">FAMZY JNR</a></div>
      <input type="radio" name="slider" id="menu-btn"/>
      <input type="radio" name="slider" id="close-btn"/>
      <ul class="nav-links">
        <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li>
          <a href="#" class="desktop-item">Dropdown Menu</a>
          <input type="checkbox" id="showDrop"/>
          <label for="showDrop" class="mobile-item">Dropdown Menu</label>
          <ul class="drop-menu">
            <li><a href="#">Drop menu 1</a></li>
            <li><a href="#">Drop menu 2</a></li>
            <li><a href="#">Drop menu 3</a></li>
            <li><a href="#">Drop menu 4</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="desktop-item">Mega Menu</a>
          <input type="checkbox" id="showMega"/>
          <label for="showMega" class="mobile-item">Mega Menu</label>
          <div class="mega-box">
            <div class="content">
              <div class="row">
                <img src="img.jpg" alt=""/>
              </div>
              <div class="row">
                <header>Design Services</header>
                <ul class="mega-links">
                  <li><a href="#">Graphics</a></li>
                  <li><a href="#">Vectors</a></li>
                  <li><a href="#">Business cards</a></li>
                  <li><a href="#">Custom logo</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Email Services</header>
                <ul class="mega-links">
                  <li><a href="#">Personal Email</a></li>
                  <li><a href="#">Business Email</a></li>
                  <li><a href="#">Mobile Email</a></li>
                  <li><a href="#">Web Marketing</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Security services</header>
                <ul class="mega-links">
                  <li><a href="#">Site Seal</a></li>
                  <li><a href="#">VPS Hosting</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li><a href="#">Feedback</a></li>
      </ul>
      <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
    </div>
    </nav>
  
    

  <div class="body-text">
    <div class="title">Responsive Dropdown and Mega Menu</div>
    <div class="sub-title">using only HTML & CSS</div>
  </div>

  <section class="footer">
    <div class="footer-row">
      <div class="footer-col">
        <h4>Info</h4>
        <ul class="links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Compressions</a></li>
          <li><a href="#">Customers</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Collection</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Explore</h4>
        <ul class="links">
          <li><a href="#">Free Designs</a></li>
          <li><a href="#">Latest Designs</a></li>
          <li><a href="#">Themes</a></li>
          <li><a href="#">Popular Designs</a></li>
          <li><a href="#">Art Skills</a></li>
          <li><a href="#">New Uploads</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Legal</h4>
        <ul class="links">
          <li><a href="#">Customer Agreement</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">GDPR</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Media Kit</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Newsletter</h4>
        <p>
          Subscribe to our newsletter for a weekly dose
          of news, updates, helpful tips, and
          exclusive offers.
        </p>
        <form action="#">
          <input type="text" placeholder="Your email" required/>
          <button type="submit">SUBSCRIBE</button>
        </form>
        <div class="icons">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  </section>

    </header>
   )
}

export default Navbar;

