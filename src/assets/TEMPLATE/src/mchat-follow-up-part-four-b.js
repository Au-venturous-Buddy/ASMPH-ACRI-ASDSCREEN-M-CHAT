import React from "react"
import Questionnaire from "../../../components/questionnaire";
import getNextFollowUpItem from "./get-next-follow-up-item";
import questionFields from "../../FIELDS/question-fields.json";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartFourB(props) {
  const getResult = (scores, state, items) => { 
    var hasPassAnswers = false;
  
    Object.keys(scores).forEach((questionID) => {
      if(scores[questionID] === 1) {
        hasPassAnswers = true;
      }
    })
  
    generateAnswerSummary(items, state, scores, 3, props.updateFollowUpAnswerSummary);
  
    if(hasPassAnswers) {
      props.updateFollowUpScoreMatrix(0, 3)
    }
    else {
      props.updateFollowUpScoreMatrix(1, 3)
    }
    props.changePart(getNextFollowUpItem(props.followUpItems, state, props))
  }

  return(
    <Questionnaire partID="04-1" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMainMain} />
  )
}