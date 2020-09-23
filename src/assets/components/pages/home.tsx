import React from "react"

import Header from "../objects/Header"

import FloatingDiamond from "../objects/FloatingDiamond"

const Homepage: React.FC = () => {
    return (
        <div>
            <Header />

            <div id="title-background">
                <div
                    className="typing-effect title-text"
                    style={{ top: "37vh" }}
                >
                    Game Development Club
                </div>
                <div className="subtitle-text fade-in" style={{ top: "40vh" }}>
                    Making games at Franklin High School since 2020
                </div>

                <FloatingDiamond x={20} y={70} />
            </div>

            <div
                className="text"
                style={{
                    fontFamily: "'Bebas Neue', cursive",
                    marginTop: "25px",
                    marginBottom: "20px",
                    fontSize: "64px",
                }}
            >
                « Who we are »
            </div>
        </div>
    )
}

export default Homepage