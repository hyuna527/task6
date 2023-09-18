import React from "react"
import styled from "styled-components"
import { Flexdiv, Flexinput } from "../../style/common"


const Headermain = styled(Flexdiv)`
    position: fixed;
    top: 0;
    left: 70px;
`
const Searchdiv = styled(Flexdiv)`
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    box-shadow: 0 0 0 0.5px rgb(176, 175, 175) inset;
`
const Searchdivright = styled(Flexdiv)`
    box-shadow: 0 0 0 0.5px rgb(176, 175, 175) inset;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`
const Searchinput = styled(Flexinput)`
    &::placeholder{
    font-size: 16px;
    color: rgb(162, 161, 161);
    }
`
const Header = () => {
    return (
        <Headermain as="header" flex={"0_1_auto_row_space-between_center"} backgroundColor="white" width="95%" padding="10px 0px">
            <Flexdiv flex={"0_1_auto_row_flex-start_center"}>
                <Flexinput flex={"0_0_auto"} type="button" width="90px" height="20px" url={require("../../img/youtubelogo.png")} margin={"0 0 0 10px"} />
                <Flexinput flex={"0_0_auto"} type="button" width="20px" height="22px" url={require("../../img/kr.png")} margin="0 0 6px 0 " />
            </Flexdiv>
            <Flexdiv flex={"0_1_728px_row_center_center"}>
                <Flexdiv flex={"0_1_604px_row_center_center"}>
                    <Searchdiv flex={"0_1_540px_row_center_center"} height="40px">
                        <Searchinput flex={"0_1_488px"} outline="none" height="24px" margint="0 0 0 6px" type="text" placeholder="검색" />
                        <Flexinput flex={"0_0_auto"} outline="none" width="19px" height="11px" margin="0 0 0 6px" url={require("../../img/keyboard.png")} type="button" />
                    </Searchdiv>
                    <Searchdivright flex={"0_0_auto_row_center_center"} width="64px" height="40px" backgroundColor="minor">
                        <Flexinput flex={"0_1_20px"} outline="none" height="20px" url={require("../../img/search.png")} type="button" />
                    </Searchdivright>
                </Flexdiv>
                <Flexdiv flex={"0_0_auto_row_center_center"} width="30px" height="30px" radius="50%" margin="0 0 0 14px" >
                    <Flexinput flex={"0_0_auto"} url={require("../../img/mike.png")} type="button" width="25px" height="28px" radius="50px" />
                </Flexdiv>
            </Flexdiv>
            <Flexdiv flex={"0_0_auto_row_space-around_center"} width="156px">
                <Flexinput flex={"0_0_auto"} type="button" width="24px" height="24px" url={require("../../img/plus.png")} />
                <Flexinput flex={"0_0_auto"} type="button" width="24px" height="24px" url={require("../../img/bell.png")} />
                <Flexinput flex={"0_0_auto"} radius="50%" type="button" width="32px" height="32px" url={require("../../img/myprofile.jpg")} />
            </Flexdiv>
        </Headermain>
    )
}


export default Header