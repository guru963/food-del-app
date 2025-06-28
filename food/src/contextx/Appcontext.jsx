import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const Appcontext = createContext(null);

const Tablefunction = (props) => {
  const [itemlist, setitemlist] = useState(() => {
    const stored = localStorage.getItem("itemlist");
    return stored ? JSON.parse(stored) : {};
  });

  // Update localStorage whenever itemlist changes
  useEffect(() => {
    localStorage.setItem("itemlist", JSON.stringify(itemlist));
  }, [itemlist]);

  return (
    <Appcontext.Provider value={{ food_list, itemlist, setitemlist }}>
      {props.children}
    </Appcontext.Provider>
  );
};

export default Tablefunction;
