import React from "react"
import PatientInfo from "./patient-info";
import patientInfoFields from "../../FIELDS/patient-info-fields.json";
import SetLanguageAudioMain from "../../../components/set-language-audio-main";

export default function SetLanguageAudio(props) {
  const startTest = (currentLanguage) => {
    props.changePart((<PatientInfo currentLanguage={currentLanguage} data={props.data} stateMain={props.stateMain} changePart={props.changePart} restartTestMain={props.restartTestMain} updateMainTestScoreMatrix={props.updateMainTestScoreMatrix} updateFollowUpScoreMatrix={props.updateFollowUpScoreMatrix} updateMainTestAnswerSummary={props.updateMainTestAnswerSummary} updateFollowUpAnswerSummary={props.updateFollowUpAnswerSummary} />))
  }
  
  return(
    <SetLanguageAudioMain data={props.data} stateMain={props.stateMain} restartTestMain={props.restartTestMain} startTest={startTest} patientInfoFields={patientInfoFields} />
  )
}