"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search"
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent fex-1"
      />
      <button
        disabled={!search}
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent"
      >
        Search BTN
      </button>
    </form>
  );
};

export default SearchBox;
