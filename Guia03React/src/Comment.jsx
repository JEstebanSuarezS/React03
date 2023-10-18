import React, { Component } from 'react'

export default class Comment extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <>
                <div className="flex justify-center w-full">
                    <i className='bx bx-message-rounded gap-2 flex text-[1.3em] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'><p>Comentarios</p></i>
                </div>
            </>
        )
    }
}
