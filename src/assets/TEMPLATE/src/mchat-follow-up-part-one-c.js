import React from "react"
import Questionnaire from "../../../components/questionnaire";
import getNextFollowUpItem from "./get-next-follow-up-item";
import questionFields from "../../FIELDS/question-fields.json";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartOneC(props) {
  const getResult = (scores, state, items) => { 
    generateAnswerSummary(items, state, scores, 0, props.updateFollowUpAnswerSummary);
  
    props.updateFollowUpScoreMatrix(scores[0], 0)
    props.changePart(getNextFollowUpItem(props.followUpItems, state, props))
  }

  return(
    <Questionnaire prevSectionScores={props.scores} partID="01-2" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMain} />
  )
}