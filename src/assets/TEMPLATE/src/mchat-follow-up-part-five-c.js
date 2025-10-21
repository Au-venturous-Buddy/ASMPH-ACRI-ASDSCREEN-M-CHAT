import React from "react"
import Questionnaire from "../../../components/questionnaire";
import getNextFollowUpItem from "./get-next-follow-up-item"
import questionFields from "../../FIELDS/question-fields.json";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartFiveC(props) {
  const getResult = (scores, state, items) => { 
    generateAnswerSummary(items, state, scores, 4, props.updateFollowUpAnswerSummary);
  
    props.updateFollowUpScoreMatrix(scores[0], 4)
    props.changePart(getNextFollowUpItem(props.followUpItems, state, props))
  }

  return(
    <Questionnaire partID="05-2" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} followUpItems={props.followUpItems} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMain} />
  )
}