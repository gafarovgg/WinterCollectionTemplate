import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { Input, Space } from "antd";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header-left">
          <div className="logo">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png"
              alt=""
            />
          </div>
        </div>
        <div className="header-middle">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink>Category</NavLink>
              </li>
              <li>
                <NavLink>Latest</NavLink>
              </li>
              <li>
                <NavLink>Blog</NavLink>
              </li>
              <li>
                <NavLink>Pages</NavLink>
              </li>
              <li>
                <NavLink to="/add-product">AddProduct</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
          <CiHeart />
          <SlBasket />
        </div>
      </div>
    </header>
  );
};

export default Header;
