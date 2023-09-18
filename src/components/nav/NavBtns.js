import React from "react"
import styled from "styled-components"
import { useRecoilValue } from "recoil"
import { menuAtom, pageAtom } from "../../recoil/mainAtom"
import { Flexdiv, Flexinput } from "../../style/common"




const Navbtndiv = styled(Flexdiv)`
    flex-direction: ${props => props.menu ? "row" : "column"};
    justify-content: ${props => props.menu ? "flex-start" : "center"};

    background-color: ${props => props.navEvent ? "#e1e1e1" : "white"};
    &:hover {
        background-color: #e1e1e1;
    }
`

const NavBtns = (props) => {
    const { inner, index } = props

    const menu = useRecoilValue(menuAtom)
    const page = useRecoilValue(pageAtom)


    let navEvent =
        (index) == 1 && page == "Home"
            ? true
            : (index) == 2 && page == "Shorts"
                ? true
                : false

    const navimgurl = [require("../../img/home.png"), require("../../img/shorts.png"), require("../../img/gudok.png"), require("../../img/save.png")]
    return (
        <Navbtndiv flex={"0_0_auto_column_center_center"} radius="12px" width={menu ? "90%" : "60px"} height={menu ? "41px" : "70px"} navEvent={navEvent} menu={menu} id={"onEvent_" + index}>
            <Flexinput flex={"0_0_auto"} menu={menu} width="30px" height="30px" margin={menu ? "3px 12px" : "0px 0px 6px 0px"} url={navimgurl[index - 1]} id={"onEvent_" + index} type="button" />
            <Flexdiv flex={"0_0_auto"} menu={menu} fontSize={menu ? "14px" : "11px"} id={"onEvent_" + index}>{inner}</Flexdiv>
        </Navbtndiv>
    )
}




export default NavBtns