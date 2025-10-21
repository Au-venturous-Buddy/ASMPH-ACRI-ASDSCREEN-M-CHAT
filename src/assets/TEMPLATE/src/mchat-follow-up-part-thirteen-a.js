import React from "react"
import Questionnaire from "../../../components/questionnaire";
import MCHATFollowUpPartThirteenB from "./mchat-follow-up-part-thirteen-b";
import getNextFollowUpItem from "./get-next-follow-up-item";
import questionFields from "../../FIELDS/question-fields.json";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartThirteenA(props) {
  const getResult = (scores, state, items) => { 
    generateAnswerSummary(items, state, scores, 12, props.updateFollowUpAnswerSummary);
  
    if(scores[0] === 1) {
      props.updateFollowUpScoreMatrix(scores[0], 12);
      props.changePart(getNextFollowUpItem(props.followUpItems, state, props))
    }
    else {
      props.changePart(<MCHATFollowUpPartThirteenB state={state} followUpItems={props.followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} scores={scores} data={props.data} stateMain={props.stateMain} changePart={props.changePart} changeLanguage={props.changeLanguage} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />)
    }
  }

  return(
    <Questionnaire partID="13-0" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMain} />
  )
}