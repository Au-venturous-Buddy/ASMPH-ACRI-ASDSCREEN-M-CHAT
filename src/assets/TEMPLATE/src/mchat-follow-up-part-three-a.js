import React from "react"
import Questionnaire from "../../../components/questionnaire";
import MCHATFollowUpPartThreeB from "./mchat-follow-up-part-three-b";
import questionFields from "../../FIELDS/question-fields.json";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartThreeA(props) {
  const getResult = (scores, state, items) => { 
    generateAnswerSummary(items, state, scores, 2, props.updateFollowUpAnswerSummary);
  
    props.changePart(<MCHATFollowUpPartThreeB state={state} followUpItems={props.followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} scores={scores} data={props.data} stateMain={props.stateMain} changePart={props.changePart} changeLanguage={props.changeLanguage} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />)
  }

  return(
    <Questionnaire partID="03-0" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMainMain} />
  )
}