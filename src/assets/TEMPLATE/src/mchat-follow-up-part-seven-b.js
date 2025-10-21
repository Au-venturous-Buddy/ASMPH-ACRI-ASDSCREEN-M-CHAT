import React from "react"
import Questionnaire from "../../../components/questionnaire";
import MCHATFollowUpPartSevenC from "./mchat-follow-up-part-seven-c";
import getNextFollowUpItem from "./get-next-follow-up-item"
import questionFields from "../../FIELDS/question-fields.json";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartSevenB(props) {
  const getResult = (scores, state, items) => { 
    var hasPassAnswers = false;
  
    Object.keys(scores).forEach((questionID) => {
      if(scores[questionID] === 1) {
        hasPassAnswers = true;
      }
    })
  
    generateAnswerSummary(items, state, scores, 6, props.updateFollowUpAnswerSummary);
  
    if(hasPassAnswers) {
      props.changePart(<MCHATFollowUpPartSevenC state={state} followUpItems={props.followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} scores={scores} data={props.data} stateMain={props.stateMain} changePart={props.changePart} changeLanguage={props.changeLanguage} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />)
    }
    else {
      props.updateFollowUpScoreMatrix(1, 6)
      props.changePart(getNextFollowUpItem(props.followUpItems, state, props))
    }
  }

  return(
    <Questionnaire partID="07-1" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMain} />
  )
}