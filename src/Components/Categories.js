import "./Categories.css";

export const Categories = () => {
  const categories = [
    {
      name: "Electronics",
      subMenu: ["Smartphones", "Tablets", "Laptops", "TV"],
    },
    {
      name: "Women's Fashion",
      subMenu: ["Dresses", "T-shirts", "Shoes", "Bags", "Jewellery"],
    },
    {
      name: "Men's Fashion",
      subMenu: ["Jeans", "T-shirts", "Shoes", "Formal Wear", "Accessories"],
    },
    {
      name: "Home Appliances",
      subMenu: [
        "Microwaves & Ovens",
        "Refrigerators",
        "Air Conditioning",
        "Lighting & Decor",
      ],
    },
    {
      name: "Health & Beauty",
      subMenu: [],
    },
    {
      name: "Sports & Fitness",
      subMenu: [],
    },
  ];

  return (
    <ul className="dropdown-menu">
      {categories.map((category, index) => (
        <li key={index} className="dropdown-item sub-dropdown">
          <a href="#" className="sub-dropdown-link">
            {category.name}
            {category.subMenu.length > 0 && (
              <i className="fa-solid fa-chevron-down"></i>
            )}
          </a>
          {category.subMenu.length > 0 && (
            <ul className="sub-dropdown-menu">
              {category.subMenu.map((subItem, subIndex) => (
                <li key={subIndex} className="sub-dropdown-item">
                  <a href="#">{subItem}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
