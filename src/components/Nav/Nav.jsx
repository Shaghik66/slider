import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navBar">
      <img
        className="navLogo"
        src="./logo/mobileCenter-logo.png"
        alt="Mobile Centre Logo"
      />
      <div className="navInputContainer">
        <input className="navInput" type="search" placeholder="Որոնում" />
        <img
          className="searchLogo"
          src="./logo/search-interface-symbol.png"
          alt="Search logo png"
        />
      </div>
      <div className="navTelNumContainer">
        <img
          className="telLogo"
          src="./logo/telephone.png"
          alt="Telephone png"
        />
        <a className="navTelNum" href="tel:+374157000"> +374 157 000</a>
      </div>
      <div className="navLogosContainer">
        <img className="logo" src="./logo/heart.png" alt="" />
        <img className="logo" src="./logo/balance.png" alt="Balance logo png" />
        <img className="logo" src="./logo/cart.png" alt="Cart logo png" />
        <img className="logo" src="./logo/user.png" alt="User logo png" />
      </div>
    </nav>
  );
}
