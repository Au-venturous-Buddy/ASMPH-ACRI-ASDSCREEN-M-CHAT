import React from "react"
import Questionnaire from "../../../components/questionnaire";
import MCHATFollowUpPartTwelveD from "./mchat-follow-up-part-twelve-d";
import getNextFollowUpItem from "./get-next-follow-up-item";
import questionFields from "../../FIELDS/question-fields.json";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartTwelveC(props) {
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
  
    generateAnswerSummary(items, state, scores, 11, props.updateFollowUpAnswerSummary);
  
    if(hasPassAnswers && (!hasFailAnswers)) {
      props.updateFollowUpScoreMatrix(0, 11)
      props.changePart(getNextFollowUpItem(props.followUpItems, state, props))
    }
    else if((!hasPassAnswers) && hasFailAnswers) {
      props.updateFollowUpScoreMatrix(1, 11)
      props.changePart(getNextFollowUpItem(props.followUpItems, state, props))
    }
    else if(hasPassAnswers && hasFailAnswers) {
      props.changePart(<MCHATFollowUpPartTwelveD state={state} followUpItems={props.followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} scores={scores} data={props.data} stateMain={props.stateMain} changePart={props.changePart} changeLanguage={props.changeLanguage} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />)
    }
  }

  return(
    <Questionnaire partID="12-2" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMain} />
  )
}