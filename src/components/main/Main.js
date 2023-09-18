import React from "react"
import { useRecoilValue } from "recoil"
import { pageAtom } from "../../recoil/mainAtom"
import { Routes, Route } from "react-router-dom"

import Shorts from "./Shorts"
import Home from "./Home"


const Main = () => {
    const page = useRecoilValue(pageAtom)
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shorts" element={<Shorts />} />
        </Routes>
        // <React.Fragment>
        //     {
        //         page == "Home" ? <Home />
        //             : page == "Shorts" ? <Shorts />
        //                 : null
        //     }
        // </React.Fragment>
    )
}

export default Main