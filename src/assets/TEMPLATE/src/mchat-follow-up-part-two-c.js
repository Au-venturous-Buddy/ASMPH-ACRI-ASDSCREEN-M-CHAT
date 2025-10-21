import React from "react"
import getNextFollowUpItem from "./get-next-follow-up-item";
import questionFields from "../../FIELDS/question-fields.json";
import Questionnaire from "../../../components/questionnaire";
import generateAnswerSummary from "./generate-answer-summary";

export default function MCHATFollowUpPartTwoC(props) {
  const getResult = (scores, state, items) => { 
    generateAnswerSummary(items, state, scores, 1, props.updateFollowUpAnswerSummary);
  
    props.patientInfo['patientHearingTestResults'] = (items[0]['choices'][state.selectedItems[0]].text ? items[0]['choices'][state.selectedItems[0]].text.replace(/<[\/]?span(.*?)>/g, "").replace(/&nbsp;/g, " ") : items[0]['choices'][state.selectedItems[0]].replace(/<[\/]?span(.*?)>/g, "").replace(/&nbsp;/g, " "));
    props.changePart(getNextFollowUpItem(props.followUpItems, state, props))
  }

  return(
    <Questionnaire partID="02-2" questionFields={questionFields} getResult={getResult} currentLanguage={props.state.currentLanguage} stateMain={props.stateMain} data={props.data} restartTestMain={props.restartTestMainMain} />
  )
}