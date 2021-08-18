import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="footer-content">
            <h3>Contact Us</h3>
            <p>
              {" "}
              In the world where the waste is at its peak, wouldn't it better if
              we would be more mindful about our actions? Looking at my own
              behaviors- from food wastage, tons of wasted plastic, fast
              fashion, we are definitely living in the era of consumerism and
              while splurging without being maybe, unconscious, the planet is
              suffering and some people too, it is just that we don't see it or
              we just don't want to see it. The app would come as a movement
              into supporting people in need{" "}
            </p>
            <p className="link">mindfulmeals@gmail.com</p>
          </div>
          <div className="footer-bottom">
            <p>
              Copyright &copy;2021 designed by <span>EKS</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
