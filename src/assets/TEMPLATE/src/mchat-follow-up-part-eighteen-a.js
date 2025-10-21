import React from "react"
import Questionnaire from "../../../components/questionnaire";
import MCHATFollowUpPartEighteenB from "./mchat-follow-up-part-eighteen-b";
import questionFields from "../../FIELDS/question-fields.json";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartEighteenA(props) {
  const getResult = (scores, state, items) => { 
    generateAnswerSummary(items, state, scores, 17, props.updateFollowUpAnswerSummary);
  
    props.changePart(<MCHATFollowUpPartEighteenB state={state} followUpItems={props.followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} scores={scores} data={props.data} stateMain={props.stateMain} changePart={props.changePart} changeLanguage={props.changeLanguage} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />)
  }

  return(
    <Questionnaire partID="18-0" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMainMain} />
  )
}