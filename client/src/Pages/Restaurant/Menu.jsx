import { useState } from "react";

// components
import MenuCollection from "../../components/restaurant/MenuCollection";

const Menu = () => {
  const [menus] = useState([]);
  return (
    <>
      <div>
        {menus.map((menu) => (
          <MenuCollection {...menu} />
        ))}
      </div>
    </>
  );
};

export default Menu;
