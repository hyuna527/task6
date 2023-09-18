import React from "react"
import styled from "styled-components"
import { Flexdiv, Flexinput } from "../../style/common"


const Shortstext = styled.a`
    margin: 4px 0 0 0;
    flex-grow: 0;
    font-size: 15px;
`
const ShortsBtns = (props) => {
    const { shortsbtntext, index } = props

    const inputurl = [require("../../img/like.png"), require("../../img/dislike.png"), require("../../img/comment.png"), require("../../img/share.png"), require("../../img/option.png")]
    return (
        <Flexdiv flex={"0_1_auto_column_center_center"} margin="0 0 15px 0">
            <Flexinput width="50px" height="50px" url={inputurl[index]} radius="50%" type="button" />
            <Shortstext test="red">{shortsbtntext}</Shortstext>
        </Flexdiv>
    )
}

export default ShortsBtns