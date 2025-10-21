import React from "react"
import Questionnaire from "../../../components/questionnaire";
import MCHATFollowUpPartEightD from "./mchat-follow-up-part-eight-d";
import getNextFollowUpItem from "./get-next-follow-up-item";
import questionFields from "../../FIELDS/question-fields.json";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartEightC(props) {
  const getResult = (scores, state, items) => { 
    generateAnswerSummary(items, state, scores, 7, props.updateFollowUpAnswerSummary);
  
    if(scores[0] === 1) {
      props.updateFollowUpScoreMatrix(scores[0], 7)
      props.changePart(getNextFollowUpItem(props.followUpItems, state, props))
    }
    else {
      props.changePart(<MCHATFollowUpPartEightD state={state} followUpItems={props.followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} scores={scores} data={props.data} stateMain={props.stateMain} changePart={props.changePart} changeLanguage={props.changeLanguage} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />)
    }
  }

  return(
    <Questionnaire partID="08-2" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMain} />
  )
}