import React from "react"
import Searchbar from "./Searchbar"
import Post from "./Post"

export default function App() {
  return (
    <>
      <div className="bg-gray-200 h-screen flex flex-col items-center w-screen">
        <div className="w-[27%] mt-[3em] shadow-2xl">
        <Searchbar />
        <Post />
        </div>
      </div>
    </>
  )
}
