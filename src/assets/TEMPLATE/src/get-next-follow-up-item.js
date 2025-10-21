import React from "react"
import MCHATFollowUpPartOneA from "./mchat-follow-up-part-one-a"
import MCHATFollowUpPartTwoA from "./mchat-follow-up-part-two-a"
import MCHATFollowUpPartThreeA from "./mchat-follow-up-part-three-a"
import MCHATFollowUpPartFourA from "./mchat-follow-up-part-four-a"
import MCHATFollowUpPartFiveA from "./mchat-follow-up-part-five-a"
import MCHATFollowUpPartSixA from "./mchat-follow-up-part-six-a"
import MCHATFollowUpPartSevenA from "./mchat-follow-up-part-seven-a"
import MCHATFollowUpPartEightA from "./mchat-follow-up-part-eight-a"
import MCHATFollowUpPartNineA from "./mchat-follow-up-part-nine-a"
import MCHATFollowUpPartTenA from "./mchat-follow-up-part-ten-a"
import MCHATFollowUpPartElevenA from "./mchat-follow-up-part-eleven-a"
import MCHATFollowUpPartTwelveA from "./mchat-follow-up-part-twelve-a"
import MCHATFollowUpPartThirteenA from "./mchat-follow-up-part-thirteen-a"
import MCHATFollowUpPartFourteenA from "./mchat-follow-up-part-fourteen-a"
import MCHATFollowUpPartFifteenA from "./mchat-follow-up-part-fifteen-a"
import MCHATFollowUpPartSixteenA from "./mchat-follow-up-part-sixteen-a"
import MCHATFollowUpPartSeventeenA from "./mchat-follow-up-part-seventeen-a"
import MCHATFollowUpPartEighteenA from "./mchat-follow-up-part-eighteen-a"
import MCHATFollowUpPartNineteenA from "./mchat-follow-up-part-nineteen-a"
import MCHATFollowUpPartTwentyA from "./mchat-follow-up-part-twenty-a"
import ShowResult from "./show-result";

export default function getNextFollowUpItem(followUpItems, state, props) {
  if(followUpItems.length > 0) {
    var nextFollowUpItem = followUpItems.shift();

    const allFollowUpItems = {
      0: (<MCHATFollowUpPartOneA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      1: (<MCHATFollowUpPartTwoA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      2: (<MCHATFollowUpPartThreeA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      3: (<MCHATFollowUpPartFourA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      4: (<MCHATFollowUpPartFiveA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      5: (<MCHATFollowUpPartSixA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      6: (<MCHATFollowUpPartSevenA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      7: (<MCHATFollowUpPartEightA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      8: (<MCHATFollowUpPartNineA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      9: (<MCHATFollowUpPartTenA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      10: (<MCHATFollowUpPartElevenA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      11: (<MCHATFollowUpPartTwelveA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      12: (<MCHATFollowUpPartThirteenA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      13: (<MCHATFollowUpPartFourteenA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      14: (<MCHATFollowUpPartFifteenA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      15: (<MCHATFollowUpPartSixteenA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      16: (<MCHATFollowUpPartSeventeenA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      17: (<MCHATFollowUpPartEighteenA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      18: (<MCHATFollowUpPartNineteenA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />),
      19: (<MCHATFollowUpPartTwentyA state={state} followUpItems={followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} data={props.data} stateMain={props.stateMain} changePart={props.changePart} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />)
    }

    return allFollowUpItems[nextFollowUpItem];
  }
  else {
    var overallScore = 0;
    Object.keys(props.stateMain.followUpScoreMatrix).forEach((key) => {
      overallScore = overallScore + props.stateMain.followUpScoreMatrix[key]
    })

    var risk = "High"
    if(overallScore < 2) {
      risk = "Low"
    }

    return (<ShowResult patientInfo={props.patientInfo} currentLanguage={state.currentLanguage} followUpAnswerSummary={props.stateMain.followUpAnswerSummary} scoreMatrix={props.stateMain.followUpScoreMatrix} restartTestMain={props.restartTestMain} risk={risk} overallScore={overallScore} data={props.data} />)
  }
}