import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <header className="header">
      <div className="container headerContainer">
        <div className="headerLogo">
          <Link to="/">INFINIT +</Link>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              placeholder="Busque um filme"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button>
              <BiSearch style={{ fontSize: 25, color: "#fff" }} />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
