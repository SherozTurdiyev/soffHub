import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
export default function Navbar() {
  const [searchBox, setSearchBox] = useState(false);
  return (
    <>
      <nav>
        <div className="container row-between">
          <div className="logo">
            <Link to="/">
              <img
                src="./img/soffStudyLogo.jpg"
                alt="soffStudy"
                width="100"
                height="100"
              />
            </Link>
          </div>
          <ul className="nav_top_center list-none row-between">
            <li className="dropdown_content ">
              <Link to="/">Xizmatlar</Link>
              <div className="dropdown">
                <li>Web Sayt</li>
                <li>Mobile App</li>
                <li>Telegram Bot</li>
              </div>
            </li>
            <li>
              <Link to="/">Qanday qilamiz</Link>
            </li>
            <li>
              <Link to="/">Ishlarimiz</Link>
            </li>
            <li>
              <Link to="/">Haqida</Link>
            </li>
            <li>
              <Link to="/">Karyera</Link>
            </li>
          </ul>
          <ul className="nav_top_right  list-none row-between">
            <li>
              <button>Biz bilan bog'lanish</button>
            </li>
            <li className="select_section">
              <select name="" id="">
                <option disabled selected>
                  Til
                </option>
                <option value="">Eng</option>
                <option value="">Ru</option>
                <option value="">Uz</option>
              </select>
            </li>
            <li>
              <button
                onClick={() => {
                  setSearchBox(!searchBox);
                }}
              >
                search
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {searchBox === false ? (
        <></>
      ) : (
        <div className="search">
          <div className="container search_box">
            <input type="text" placeholder="Qidiruv" />
            <SearchIcon className="search_icon" />
          </div>
        </div>
      )}
    </>
  );
}
