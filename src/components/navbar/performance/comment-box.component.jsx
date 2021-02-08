import React, { Component } from 'react'
import "././performance.style.css"

export const CommentBox = () => {
    return (
        <div className="commentBox">
            <div className="TeacherName"> Teacher - A says that:</div>
            <div className="Comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="timeStampDiv">On 4th January 2021</div>
        </div>
    );
}