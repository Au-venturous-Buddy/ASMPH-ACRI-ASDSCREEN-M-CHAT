import React from "react"
import Questionnaire from "../../../components/questionnaire";
import getNextFollowUpItem from "./get-next-follow-up-item";
import questionFields from "../../FIELDS/question-fields.json";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartSixC(props) {
  const getResult = (scores, state, items) => { 
    generateAnswerSummary(items, state, scores, 5, props.updateFollowUpAnswerSummary);
  
    props.updateFollowUpScoreMatrix(scores[0], 5)
    props.changePart(getNextFollowUpItem(props.followUpItems, state, props))
  }

  return(
    <Questionnaire partID="06-2" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMain} />
  )
}