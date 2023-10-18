import React, { Component } from 'react'

export default class Share extends Component {
    render() {
        return (
            <>
                <div className="flex justify-center w-full ">
                    <i className='bx bxs-share flex gap-2 text-[1.3em] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'><p>Compartir</p></i>
                </div>
            </>
        )
    }
}
