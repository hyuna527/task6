import React from "react"
import Nav from "./components/nav/Nav"
import Main from "./components/main/Main"
import Header from "./components/header/Header"


//body 나눌 필요 없다. (리덕스를 사용하게 되면서)
const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Nav />
            <Main />
        </React.Fragment>
    )
}


export default App