import React from "react"
import styled from "styled-components"
import { Flexdiv, Flexinput, Img, Span } from "../../style/common"


const Somenailimg = styled(Img)`
    border-radius: 14px;
    &:hover{
        border-radius: 0px;
    }
`
const Title = styled(Flexdiv)`
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

const Box1 = styled(Flexdiv)`
    box-sizing: border-box;
`
const Article = (props) => {
    const { elem } = props

    return (
        <Flexdiv flex={"1_1_330px_column_center_center"} as="article" height="fit-content" margin="10px 5px">
            <Somenailimg width="100%" margin="10px 5px" src={elem.somenailimg} />
            <Box1 flex={"0_1_auto_row_flex-start_flex_start"} margin="10px 6px">
                <Flexinput flex={"0_0_auto"} width="36px" height="36px" radius="50%" url={require("../../img/6channel.jpg")} type="button" />
                <Flexdiv flex={"0_1_auto_column_flex-start_flex-start"}>
                    <Title as="h1" fontSize="16px" margin="6px 0px 8px 14px">{elem.title}</Title>
                    <Flexdiv margin="0 0 0 14px" fontSize="14px" color="fontminor">{elem.youtuber}</Flexdiv>
                    <Flexdiv flex={"0_1_auto_row_flex-start_center"} margin="0 0 0 14px">
                        <Span flex={"0_1_auto"} fontSize="14px" color="fontminor">{elem.views}</Span>
                        <Span flex={"0_1_auto"} fontSize="14px" color="fontminor">{elem.uploadtime}</Span>
                    </Flexdiv>
                </Flexdiv>
            </Box1>
        </Flexdiv>
    )
}

export default Article