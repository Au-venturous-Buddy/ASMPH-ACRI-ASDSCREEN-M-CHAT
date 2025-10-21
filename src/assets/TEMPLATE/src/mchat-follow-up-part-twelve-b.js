import React from "react"
import Questionnaire from "../../../components/questionnaire";
import MCHATFollowUpPartTwelveC from "./mchat-follow-up-part-twelve-c";
import getNextFollowUpItem from "./get-next-follow-up-item"
import questionFields from "../../FIELDS/question-fields.json";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartTwelveB(props) {
  const getResult = (scores, state, items) => { 
    var overallScore = 0;
    Object.keys(scores).forEach((key) => {
      overallScore = overallScore + scores[key]
    })
  
    generateAnswerSummary(items, state, scores, 11, props.updateFollowUpAnswerSummary);
  
    if(overallScore > 1) {
      props.changePart(<MCHATFollowUpPartTwelveC state={state} followUpItems={props.followUpItems} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} scores={scores} data={props.data} stateMain={props.stateMain} changePart={props.changePart} changeLanguage={props.changeLanguage} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />)
    }
    else {
      props.updateFollowUpScoreMatrix(0, 11)
      props.changePart(getNextFollowUpItem(props.followUpItems, state, props))
    }
  }

  return(
    <Questionnaire partID="12-1" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMain} />
  )
}