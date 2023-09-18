import React from "react"
import styled from "styled-components"
import { useSetRecoilState, useRecoilState } from "recoil"
import { menuAtom, pageAtom } from "../../recoil/mainAtom"
import { Flexdiv, Flexinput } from "../../style/common"
import { Link } from "react-router-dom"
import NavBtns from "./NavBtns"

const Navmain = styled(Flexdiv)`
    position: fixed;
    top: 0;
    left: 0;
`
const Nav = () => {
    const [menu, setMenu] = useRecoilState(menuAtom)
    const setPage = useSetRecoilState(pageAtom)

    const navetextinnerhtmlList = {
        '홈': 1,
        'Shorts': 2,
        '구독': 3,
        '보관함': 4
    }
    const navebtns = Object.entries(navetextinnerhtmlList).map(([key, value]) => <NavBtns inner={key} index={value} />)


    const clickEvent = (e) => {
        const id = e.target.id
        if (id == "menu") {
            setMenu(!menu)
        }
        //object를 불러와서 매개변수로 넣어주기만 하면, if문 없이 할 수 있다?
        if (id == "onEvent_1") {
            setPage("Home")
        }
        else if (id == "onEvent_2") {
            setPage("Shorts")
        }
    }

    return (
        <React.Fragment>
            <Navmain as="nav" flex={"0_0_auto_column_flex-start_center_wrap"} width={menu ? "204px" : "60px"} height="100%" backgroundColor="major" padding="10px 10px 0px 10px" menu={menu} onClick={clickEvent}>
                <Flexdiv flex={"0_1_auto_row_center_center"} width="60px" height="40px" >
                    <Flexinput flex={"0_0_auto"} url={require("../../img/menu.png")} id="menu" type="button" width="30px" height="30px" />
                </Flexdiv>
                {navebtns}<Link to="./Shorts" >숏츠</Link>
            </Navmain>

        </React.Fragment>
    )
}

export default Nav