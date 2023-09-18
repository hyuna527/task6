import React from "react"
import Article from "./Article"
import { Flexdiv } from "../../style/common"


const Home = () => {
    const somenailimglist = [require("../../img/danial.webp"), require("../../img/ttt.webp"), require("../../img/ttt2.webp"), require("../../img/bgm.webp"), require("../../img/15.webp"), require("../../img/back2.webp"), require("../../img/back.webp"), require("../../img/saturday.webp"), require("../../img/jazz.webp"), require("../../img/danial.webp"), require("../../img/danial.webp")]
    let artObjList = []
    //백엔드에서 오는 data라면 state로 처리해주면 센스 b  백엔드 state 연습 가능
    somenailimglist.forEach((elem, index) => {
        artObjList[index] = {
            somenailimg: elem,
            youtuberimg: "youtuberimg css경로",
            title: "긴 제목 이것 좀 봐 신기하지 내가 모은 것들 대단하지 내가 세상 모든 걸 다 가진 것 같겠지 이것 좀 봐 아름답고 신비한 물건들 바라보면",
            youtuber: "유튜버이름",
            views: "조회수 n만 회",
            uploadtime: "n년 전"
        }
    })

    // element 쪼개서 받지 말고 자체를 주기
    const articles = artObjList.map((elem) => <Article elem={elem} />)

    return (
        <Flexdiv as="section" flex={"0_1_auto_row_center_center_wrap"} width="95%" margin="50px 0 0 70px">{articles}</Flexdiv>
    )
}



export default Home