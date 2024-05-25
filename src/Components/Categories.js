import styles from "./Categories.css";

export const Categories = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="navbar-item">
          <a href="#">Home</a>
        </li>
        <li className="navbar-item dropdown">
          <a href="#" className="dropdown-link">
            Categories
            <i className="fa-solid fa-chevron-down dropdown-chevron"></i>
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-item sub-dropdown">
              <a href="#" className="sub-dropdown-link ">
                Electronics
                <i className="fa-solid fa-chevron-down"></i>
              </a>
              <ul className="sub-dropdown-menu">
                <li className="sub-dropdown-item">
                  <a href="#">Smartphones</a>
                </li>
                <li className="sub-dropdown-item">
                  <a href="#">Tablets</a>
                </li>
                <li className="sub-dropdown-item">
                  <a href="#">Laptops</a>
                </li>
                <li className="sub-dropdown-item">
                  <a href="#">TV</a>
                </li>
              </ul>
            </li>
            <li className="dropdown-item sub-dropdown">
              <a href="#" className="sub-dropdown-link ">
                Women's Fashion
                <i className="fa-solid fa-chevron-down"></i>
              </a>
              <ul className="sub-dropdown-menu">
                <li className="sub-dropdown-item">
                  <a href="#">Dresses</a>
                </li>
                <li className="sub-dropdown-item">
                  <a href="#">T-shirts</a>
                </li>
                <li className="sub-dropdown-item">
                  <a href="#">Shoes</a>
                </li>
                <li className="sub-dropdown-item">
                  <a href="#">Bags</a>
                </li>
                <li className="sub-dropdown-item">
                  <a href="#">Accessories</a>
                </li>
                <li className="sub-dropdown-item">
                  <a href="#">Jewellery</a>
                </li>
              </ul>
            </li>
            <li className="dropdown-item sub-dropdown">
              <a href="#" className="sub-dropdown-link">
                Men's Fashion
                <i className="fa-solid fa-chevron-down"></i>
              </a>
              <ul className="sub-dropdown-menu">
                <li className="sub-dropdown-item">
                  <a href="#">Jeans</a>
                </li>
                <li className="sub-dropdown-item">
                  <a href="#">T-shirts</a>
                </li>
                <li className="sub-dropdown-item">
                  <a href="#">Shoes</a>
                </li>
                <li className="sub-dropdown-item">
                  <a href="#">Formals</a>
                </li>
                <li className="sub-dropdown-item">
                  <a href="#">Accessories</a>
                </li>
                <li className="sub-dropdown-item">
                  <a href="#">Innerwear</a>
                </li>
              </ul>
            </li>
            <li className="dropdown-item sub-dropdown">
              <a href="#" className="sub-dropdown-link">
                Home Appliances
                <i className="fa-solid fa-chevron-down"></i>
              </a>
              <ul className="sub-dropdown-menu">
                <li className="sub-dropdown-item">
                  <a href="#">Microwave/Ovens</a>
                </li>
                <li className="sub-dropdown-item">
                  <a href="#">Refrigerator</a>
                </li>
                <li className="sub-dropdown-item">
                  <a href="#">Air Conditioners</a>
                </li>
                <li className="sub-dropdown-item">
                  <a href="#">Lighting and Decor</a>
                </li>
              </ul>
            </li>
            <li className="dropdown-item">
              <a href="#">Health and Beauty</a>
            </li>
          </ul>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Groceries
          </a>
        </li>
      </ul>
    </nav>
  );
};
