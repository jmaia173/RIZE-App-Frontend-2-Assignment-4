import "./Header.css";

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <h1 className="header-title">{storeName}</h1>
      <nav className="header-nav">
        <a href="#">Home</a>
        <a href="#">Games</a>
        <a href="#">Deals</a>
        <a href="#">Contact</a>
      </nav>
      <div className="cart-container">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;