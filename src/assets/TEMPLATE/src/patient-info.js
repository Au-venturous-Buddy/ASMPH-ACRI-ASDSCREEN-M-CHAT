import React from "react"
import MCHATMainTest from "./mchat-main-test";
import patientInfoFields from "../../FIELDS/patient-info-fields.json";
import PatientInfoMain from "../../../components/patient-info-main";

export default function PatientInfo(props) {
  const submitPatientInfo = (patientInfo, currentLanguage) => {
    props.changePart((<MCHATMainTest currentLanguage={currentLanguage} patientInfo={patientInfo} data={props.data} stateMain={props.stateMain} changePart={props.changePart} restartTestMain={props.restartTestMain} updateMainTestScoreMatrix={props.updateMainTestScoreMatrix} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateMainTestAnswerSummary={props.updateMainTestAnswerSummary} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />))
  }
  
  return(
    <PatientInfoMain currentLanguage={props.currentLanguage} data={props.data} stateMain={props.stateMain} restartTestMain={props.restartTestMain} submitPatientInfo={submitPatientInfo} patientInfoFields={patientInfoFields} />
  )
}