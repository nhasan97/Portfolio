"use client";

import { useProjectProvider } from "@/src/context/projects.provider";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import React, { useState } from "react";
import { BiReset } from "react-icons/bi";

const Browser = ({}) => {
  const { searchTerm, setSearchTerm, setSort, resetBrowser } =
    useProjectProvider();

  const [openSearchFilterBox, setOpenSearchFilterBox] = useState(false);

  const sortOptions = [
    { key: "name", label: "Name (A to Z)" },
    { key: "-name", label: "Name (Z to A)" },
    { key: "createdAt", label: "Date Created (Asce)" },
    { key: "-createdAt", label: "Date Created (Desc)" },
  ];

  return (
    <div>
      {/*----------------- pc view -----------------*/}
      <div className="hidden w-full md:flex justify-evenly items-center gap-3">
        {/* search */}

        <Input
          type="text"
          placeholder="Seach by title, type, technology..."
          value={searchTerm}
          // className={`${searchBox ? "" : "hidden"}`}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        {/* sort */}

        <Select
          // label="Category"
          placeholder="Sort by"
          // className={`${sortBox ? "" : "hidden"}`}
          onChange={(e) => setSort(e.target.value)}
        >
          {sortOptions.map((option) => (
            <SelectItem key={option.key}>{option.label}</SelectItem>
          ))}
        </Select>

        {/* reset */}

        <Button
          className="bg-transparent hover:bg-[#c4c6d3] text-[#c4c6d3] hover:text-[#010018] text-xl rounded-lg border border-[#c4c6d3] hover:border-transparent"
          onClick={resetBrowser}
          isIconOnly
        >
          <BiReset />
        </Button>
      </div>

      {/*----------------- mobile view -----------------*/}
      <Button
        isIconOnly
        className="md:hidden bg-[#c4c6d3] text-[#010018]"
        onClick={() => setOpenSearchFilterBox(!openSearchFilterBox)}
      >
        {openSearchFilterBox ? (
          <i className="fa-solid fa-xmark" />
        ) : (
          <i className="fa-solid fa-filter" />
        )}
      </Button>

      <div
        className={`${
          openSearchFilterBox
            ? "md:hidden bg-[#c4c6d3]/80 backdrop-blur-md flex flex-col gap-2 p-2 rounded-lg mt-2 absolute z-10 right-0"
            : "hidden"
        }`}
      >
        <Input
          type="text"
          placeholder="Search"
          value={searchTerm}
          // className={`${searchBox ? "" : "hidden"}`}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <Select
          // label="Category"
          placeholder="Sort by"
          // className={`${sortBox ? "" : "hidden"}`}
          onChange={(e) => setSort(e.target.value)}
        >
          {sortOptions.map((option) => (
            <SelectItem key={option.key}>{option.label}</SelectItem>
          ))}
        </Select>

        <Button
          className="bg-red-700 text-[rgba(255,255,255,0.88)] text-lg rounded-lg"
          onClick={resetBrowser}
        >
          <BiReset />
        </Button>
      </div>
    </div>
  );
};

export default Browser;
