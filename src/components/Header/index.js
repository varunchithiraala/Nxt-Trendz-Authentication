// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-header-content">
      <div className="nav-bar-small-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="website-logo"
          alt="website logo"
        />
        <button type="button" className="nav-bar-mobile-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            className="nav-bar-image"
            alt="nav logout"
          />
        </button>
      </div>
      <div className="nav-bar-large-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="website-logo"
          alt="website logo"
        />
        <ul className="nav-menu-items">
          <li className="nav-menu-item">Home</li>
          <li className="nav-menu-item">Products</li>
          <li className="nav-menu-item">Cart</li>
        </ul>
        <button type="button" className="logout-desktop-button">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-menu-mobile-container">
      <ul className="nav-menu-mobile-list">
        <li className="nav-menu-mobile-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            className="nav-bar-image"
            alt="nav home"
          />
        </li>
        <li className="nav-menu-mobile-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            className="nav-bar-image"
            alt="nav products"
          />
        </li>
        <li className="nav-menu-mobile-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            className="nav-bar-image"
            alt="nav cart"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
