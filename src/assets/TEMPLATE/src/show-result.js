import React from "react"
import showResultsFields from "../../FIELDS/show-results-fields.json";
import questionFields from "../../FIELDS/question-fields.json";
import patientInfoFields from "../../FIELDS/patient-info-fields.json";
import ShowResultMain from "../../../components/show-result-main";

export default function ShowResult(props) {
  return(
    <ShowResultMain partID="00-0" followUpIntroButton={props.followUpIntroButton} patientInfoFields={patientInfoFields} patientInfo={props.patientInfo} questionFields={questionFields} showResultsFields={showResultsFields} currentLanguage={props.currentLanguage} followUpAnswerSummary={props.followUpAnswerSummary} scores={props.scoreMatrix} selectedItems={props.selectedItems} restartTestMain={props.restartTestMain} risk={props.risk} overallScore={props.overallScore} data={props.data} />
  )
}