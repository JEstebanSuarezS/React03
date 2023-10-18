import React, { Component } from 'react'
import Userinfo from './Userinfo'
import Content from './Content'
import Reactions from './Reactions'

export default class Post extends Component {
    render() {
        return (
            <>
                <div className=" w-full h-[30em] shadow-2xl">
                    <Userinfo />
                    <Content />
                    <Reactions />
                </div>
            </>
        )
    }
}
