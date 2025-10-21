import React from "react"
import Questionnaire from "../../../components/questionnaire";
import MCHATFollowUpPartFifteenB from "./mchat-follow-up-part-fifteen-b";
import questionFields from "../../FIELDS/question-fields.json";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartFifteenA(props) {
  const getResult = (scores, state, items) => { 
    generateAnswerSummary(items, state, scores, 14, props.updateFollowUpAnswerSummary);
  
    props.changePart(<MCHATFollowUpPartFifteenB state={state} followUpItems={props.followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} scores={scores} data={props.data} stateMain={props.stateMain} changePart={props.changePart} changeLanguage={props.changeLanguage} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />)
  }

  return(
    <Questionnaire partID="15-0" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMainMain} />
  )
}