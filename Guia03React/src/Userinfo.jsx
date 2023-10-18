import React, { Component } from 'react'

export default class Userinfo extends Component {
  render() {
    return (
        <>
        <div class="flex flex-col justify-center items-center">
            <div class="relative flex flex-col items-center border-[1px] border-gray-200 w-full mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                <div class="relative flex h-[4em] w-full justify-center rounded-xl bg-cover" >
                    <img src='https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' class="absolute flex h-[7em] w-full justify-center rounded-xl bg-cover" />
                    <div class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                        <img class="h-full w-full rounded-full" src='https://images.unsplash.com/photo-1474176857210-7287d38d27c6?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                    </div>
                </div>
                <div class="mt-16 flex flex-col items-center">
                    <i class='relative left-[9.5em] bx bx-dots-horizontal-rounded text-gray-600 text-[1.5em] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'></i>
                    <h4 class="text-xl font-bold text-navy-700 dark:text-black">
                        Esteban Suárez
                    </h4>
                    <p class="text-base font-normal text-gray-600">Software Develop</p>
                </div>
                <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
                    <div class="flex flex-col items-center justify-center">
                        <p class="text-2xl font-bold text-navy-700 dark:text-black">17</p>
                        <p class="text-sm font-normal text-gray-600">Publicaciones</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <p class="text-2xl font-bold text-navy-700 dark:text-black">
                            9.7K
                        </p>
                        <p class="text-sm font-normal text-gray-600">Seguidores</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <p class="text-2xl font-bold text-navy-700 dark:text-black">
                            434
                        </p>
                        <p class="text-sm font-normal text-gray-600">Seguidos</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
  }
}
