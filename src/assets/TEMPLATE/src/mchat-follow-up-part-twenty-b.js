import React from "react"
import Questionnaire from "../../../components/questionnaire";
import MCHATFollowUpPartTwentyC from "./mchat-follow-up-part-twenty-c";
import getNextFollowUpItem from "./get-next-follow-up-item";
import questionFields from "../../FIELDS/question-fields.json";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartTwentyB(props) {
  const getResult = (scores, state, items) => { 
    generateAnswerSummary(items, state, scores, 19, props.updateFollowUpAnswerSummary);
  
    if(scores[0] === 1) {
      props.changePart(<MCHATFollowUpPartTwentyC state={state} followUpItems={props.followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} scores={scores} data={props.data} stateMain={props.stateMain} changePart={props.changePart} changeLanguage={props.changeLanguage} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />)
    }
    else {
      props.updateFollowUpScoreMatrix(scores[0], 19)
      props.changePart(getNextFollowUpItem(props.followUpItems, state, props))
    }
  }

  return(
    <Questionnaire partID="20-1" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMain} />
  )
}