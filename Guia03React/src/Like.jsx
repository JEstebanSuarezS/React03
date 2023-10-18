import React, { Component } from 'react'

export default class Like extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <>
                <div className="flex justify-center w-full">
                    <i className='bx bx-like flex gap-2 text-[1.3em] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'><p onClick={this.props.onClick}>Me gusta</p></i>
                </div>
            </>
        )
    }
}
