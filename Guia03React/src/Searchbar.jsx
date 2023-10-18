import React, { Component } from 'react'

export default class Searchbar extends Component {
  render() {
    return (
        <>
        <div class="relative w-full bg-white p-[0.8em] rounded-t-[0.4em]">
            <label for="Search" class="sr-only"> Search </label>

            <input
                type="text"
                id="Search"
                placeholder="Search for..."
                class="w-full rounded-md  pl-3 py-2.5 pe-10 shadow-sm sm:text-sm"
            />

            <span class="absolute inset-y-0 end-2 grid w-10 place-content-center">
                <button type="button" class="text-gray-600 hover:text-gray-700">
                    <span class="sr-only">Search</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
            </span>
        </div>
        <hr />
    </>
    )
  }
}
