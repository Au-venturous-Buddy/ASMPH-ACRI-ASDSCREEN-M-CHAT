import React from "react"
import Questionnaire from "../../../components/questionnaire";
import MCHATFollowUpPartElevenC from "./mchat-follow-up-part-eleven-c";
import getNextFollowUpItem from "./get-next-follow-up-item";
import questionFields from "../../FIELDS/question-fields.json";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartElevenB(props) {
  const getResult = (scores, state, items) => { 
    var hasPassAnswers = false;
    var hasFailAnswers = false;
  
    Object.keys(scores).forEach((questionID) => {
      if(scores[questionID] === 1) {
        hasPassAnswers = true;
      }
      else if(scores[questionID] === -1) {
        hasFailAnswers = true;
      } 
    })
  
    generateAnswerSummary(items, state, scores, 10, props.updateFollowUpAnswerSummary);
  
    if(hasPassAnswers && (!hasFailAnswers)) {
      props.updateFollowUpScoreMatrix(0, 10)
      props.changePart(getNextFollowUpItem(props.followUpItems, state, props))
    }
    else if((!hasPassAnswers) && hasFailAnswers) {
      props.updateFollowUpScoreMatrix(1, 10)
      props.changePart(getNextFollowUpItem(props.followUpItems, state, props))
    }
    else if(hasPassAnswers && hasFailAnswers) {
      props.changePart(<MCHATFollowUpPartElevenC state={state} followUpItems={props.followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} scores={scores} data={props.data} stateMain={props.stateMain} changePart={props.changePart} changeLanguage={props.changeLanguage} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />)
    }
  }

  return(
    <Questionnaire partID="11-1" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMain} />
  )
}