import React, { Component } from 'react'

export default class Stats extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <>
                <p>{this.props.commets} Likes</p>
            </>
        )
    }
}
