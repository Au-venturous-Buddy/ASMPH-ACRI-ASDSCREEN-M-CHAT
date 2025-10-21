import React from "react"
import Questionnaire from "../../../components/questionnaire";
import MCHATFollowUpPartEightC from "./mchat-follow-up-part-eight-c";
import getNextFollowUpItem from "./get-next-follow-up-item";
import questionFields from "../../FIELDS/question-fields.json";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartEightB(props) {
  const getResult = (scores, state, items) => { 
    generateAnswerSummary(items, state, scores, 7, props.updateFollowUpAnswerSummary);
  
    if(scores[0] === 1) {
      props.changePart(<MCHATFollowUpPartEightC state={state} followUpItems={props.followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} scores={scores} data={props.data} stateMain={props.stateMain} changePart={props.changePart} changeLanguage={props.changeLanguage} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />)
    }
    else {
      props.updateFollowUpScoreMatrix(scores[0], 7)
      props.changePart(getNextFollowUpItem(props.followUpItems, state, props))
    }
  }

  return(
    <Questionnaire partID="08-1" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMain} />
  )
}