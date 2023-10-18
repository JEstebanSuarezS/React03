import React, { Component } from 'react'
import Stats from './Stats'
import Like from './Like'
import Comment from './Comment'
import Share from './Share'

export default class Reactions extends Component {
    constructor(props){
        super(props)
        this.state = {commets: 100}
        this.Cambiasosorra = this.Cambiasosorra.bind(this)
    }

    Cambiasosorra() {
        const newVal = this.state.commets
        this.setState({commets:newVal + 1})
    }
  render() {
    return (
        <>
        <div className="shadow-2xl">
            <div className="flex items-center bg-white gap-2 pl-[1em] h-[2em] justify-between text-[1.2em] ">
                <div>
                    <i className='bx bxs-like hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'></i>
                    <i className='bx bx-happy-alt hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'></i>
                    <i className='bx bxs-heart hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'></i>
                </div>
                <div className="pr-[1em]">
                    <Stats commets = {this.state.commets}/>
                </div>
            </div>
            <div className="flex bg-white items-center h-[2.2em] rounded-b-[0.4em]">
                <Like onClick={this.Cambiasosorra}/>
                <Comment />
                <Share />
            </div>
        </div>
        </>
    )
  }
}
