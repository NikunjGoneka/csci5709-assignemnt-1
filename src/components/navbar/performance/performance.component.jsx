import React, { Component } from 'react'
import "././performance.style.css"
import { CommentBox } from "./comment-box.component";

export const Performance = () => {
    return (
        <div className="PerformanceContainer">

            <div className="Performance">
                <h2>Teacher's comments</h2>
                <div className="CommentContainer">
                    <CommentBox />
                    <CommentBox />
                    <CommentBox />
                </div>
            </div>
        </div>
    );
}