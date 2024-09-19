import React from 'react'
import NavBar from "../component/NavBar";
import SearchBar from "../component/SearchBar";
import NotesContainer from "../component/NotesContainer";
import Categories from "../component/Categories";
import Optional from "../component/Optional";

export default function HomePage() {

  return (
    <>
      <NavBar />
      <div className="homepage w-4/5 flex flex-col items-center">
        <SearchBar />
        <Categories />
        <NotesContainer />
        <Optional />
      </div>
    </>
  )
}
