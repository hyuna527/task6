import React from "react"
import ShortsBtns from "./ShortsBtns"
import { Flexdiv } from "../../style/common"


const Shorts = () => {
    const shortsbtnsList = ["5천", "싫어요", "400", "공유", ""]
    const shortsbtns = shortsbtnsList.map((elem, i) => <ShortsBtns shortsbtntext={elem} index={i} />)

    return (
        <Flexdiv as="section" width="95%" textAlign="center" margin="74px 0 0 70px">
            <Flexdiv flex={"0_1_auto_row_center_flex-end"}>
                <Flexdiv as="img" width="347px" height="fit-content" radius="14px" src={require("../../img/hosi.webp")} />
                <Flexdiv flex={"0_1_auto_column_center_center"} margin="0 0 0 10px">{shortsbtns}</Flexdiv>
            </Flexdiv>
        </Flexdiv>
    )
}

export default Shorts