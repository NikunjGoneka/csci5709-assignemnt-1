import React, { Component } from 'react'
import { Performance } from './performance/performance.component'
import './navbar.style.css'

class Navbar extends Component {
    state = {
        counters: [
            { id: 1, item: "Product 1", price: 10, value: 4 },
            { id: 2, item: "Product2", price: 20, value: 3 },
            { id: 3, item: "Product 3", price: 30, value: 0 },
            { id: 4, item: "Product 4", price: 40, value: 0 },
        ],
    };

    render() {
        return (
            <div className="NavigationPanel">
                <div className="TopBorder"></div>
                <div className="NavbarContainer">
                    <div className="DarkBox"></div>
                    < div className="BlueBox"> </div>
                    <div className="BlueTriangle"></div>

                    <div className="Navbar">
                        <div className="NavbarLogo">INERTIA</div>
                        <div className="NavTabs">
                            <button>My Courses</button>
                            <button id="active">Parents View</button>
                        </div>
                    </div>
                    <div className="SecondNavbar">
                        <button id="active" >Teacher's Comment</button>
                        <button> Overall Performance</button>
                        <button> Course Performance</button>
                    </div>
                </div>
                <div>
                    <Performance />
                </div>

            </div>
        );
    }

}
export default Navbar;