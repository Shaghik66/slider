import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navBar">
      <img
        className="navLogo"
        src="./images/mobile.png"
        alt="Mobile Centre Logo"
      />
      <div className="navInputContainer">
        <input type="search" placeholder="Որոնում" />
        <img
          className="searchLogo"
          src="./logo/search-interface-symbol.png"
          alt="Search logo png"
        />
      </div>
      <img className="telLogo" src="./logo/telephone.png" alt="Telephone png" />
      <a href="tel:+374157000">+374157000</a>
      <img className="logo" src="./logo/heart.png" alt="" />
      <img className="logo" src="./logo/balance.png" alt="Balance logo png" />
      <img className="logo" src="./logo/cart.png" alt="Cart logo png" />
      <img className="logo" src="./logo/user.png" alt="User logo png" />
    </nav>
  );
}
