"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ImSearch } from "react-icons/im";
import "./Search.css";
import Link from "next/link";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
  };

  return (
    // <form
    //   onSubmit={handleSubmit}
    //   className={`search-box ${isExpanded ? "expanded" : ""}`}
    // >
    //   <input
    //     onChange={(e) => setSearch(e.target.value)}
    //     value={search}
    //     type="text"
    //     placeholder="Search"
    //     className="search-input flex justify-end"
    //     onFocus={handleExpand}
    //     onBlur={handleCollapse}
    //   />
    //   <button disabled={!search} className="search-button">
    //     <span className="search-icon"><ImSearch/></span>
    //   </button>
    // </form>

    <form onSubmit={handleSubmit} className="search-box">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Search"
        className="search-text"
      />
      <Link href="#" disabled={!search}>
        <span className="search-btn">
          <ImSearch />
        </span>
      </Link>
    </form>
  );
};

export default SearchBox;
