import React from "react"
import Questionnaire from "../../../components/questionnaire";
import MCHATFollowUpPartTwoB from "./mchat-follow-up-part-two-b";
import questionFields from "../../FIELDS/question-fields.json";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartTwoA(props) {
  const getResult = (scores, state, items) => { 
    var hasFailAnswers = false;
  
    Object.keys(scores).forEach((questionID) => {
      if(scores[questionID] === 1) {
        hasFailAnswers = true;
      }
    })
  
    generateAnswerSummary(items, state, scores, 1, props.updateFollowUpAnswerSummary);
  
    if(hasFailAnswers) {
      props.updateFollowUpScoreMatrix(1, 1)
    }
    else {
      props.updateFollowUpScoreMatrix(0, 1)
    }
    props.changePart(<MCHATFollowUpPartTwoB state={state} followUpItems={props.followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} scores={scores} data={props.data} stateMain={props.stateMain} changePart={props.changePart} changeLanguage={props.changeLanguage} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />)
  }

  return(
    <Questionnaire partID="02-0" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMain} />
  )
}