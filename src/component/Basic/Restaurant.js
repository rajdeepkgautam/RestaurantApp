import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "ALL"
]
// console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  // console.log(menuData);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {

    if(category==="ALL") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);

  }

  return (
    <> 

    <Navbar filterItem ={filterItem}  menuList ={menuList}/>
      {/* <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick={()=> filterItem("Breakfast")}>BREAKFAST</button>
          <button className="btn-group__item" onClick={()=> filterItem("Lunch")}>LUNCH</button>
          <button className="btn-group__item" onClick={()=> filterItem("Dinner")}>DINNER</button>
          <button className="btn-group__item" onClick={()=> setMenuData(Menu)}>ALL</button>
        </div>
      </nav> */}
      <MenuCard menuData ={menuData} />
      
      
    </>
  );
};

export default Restaurant;
