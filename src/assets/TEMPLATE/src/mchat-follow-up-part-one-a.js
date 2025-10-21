import React from "react"
import Questionnaire from "../../../components/questionnaire";
import MCHATFollowUpPartOneB from "./mchat-follow-up-part-one-b";
import questionFields from "../../FIELDS/question-fields.json";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartOneA(props) {
  const getResult = (scores, state, items) => { 
    generateAnswerSummary(items, state, scores, 0, props.updateFollowUpAnswerSummary);
  
    props.changePart(<MCHATFollowUpPartOneB state={state} followUpItems={props.followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} scores={scores} data={props.data} stateMain={props.stateMain} changePart={props.changePart} changeLanguage={props.changeLanguage} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />)
  }

  return(
    <Questionnaire partID="01-0" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMainMain} />
  )
}