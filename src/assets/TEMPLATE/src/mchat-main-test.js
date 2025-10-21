import React from "react"
import ShowResult from "./show-result";
import MCHATFollowUpIntro from "./mchat-follow-up-intro";
import Questionnaire from "../../../components/questionnaire";
import questionFields from "../../FIELDS/question-fields.json";
import ResponsiveSize from "../../../hooks/responsive-size";
import {Button} from "react-bootstrap";

function FollowUpIntroButton({questionFields, followUpItems, currentLanguage, propsMain, changePart}) {
  const goToFollowUpIntro = () => {
    changePart(<MCHATFollowUpIntro partID="00-0" questionFields={questionFields} followUpItems={followUpItems} currentLanguage={currentLanguage} propsMain={propsMain} />)
  }

  return(
    <Button style={{fontSize: ResponsiveSize(0.8, "rem", 0.001, 500)}} onClick={goToFollowUpIntro}>Start M-CHAT Follow-Up</Button>
  )
}

export default function MCHATMainTest(props) {
  const getResult = (scores, state, items) => { 
    var followUpItems = [];
    Object.keys(scores).forEach((key) => {
      props.updateFollowUpScoreMatrix(scores[key], key)
      if(scores[key] === 1) {
        followUpItems.push(key)
      }
    })

    var risk = "Medium";
    if(followUpItems.length >= 8) {
      risk = "High";
    }
    else if(followUpItems.length <= 2) {
      risk = "Low";
    }

    Object.keys(items).forEach((questionID) => {
      props.updateMainTestAnswerSummary({
        item_answer: items[questionID]['choicesID'][state.selectedItems[questionID]].replace(/<[\/]?span(.*?)>/g, "").replace(/&nbsp;/g, " "),
        item_point: scores[questionID]
      }, questionID)
    })

    props.changePart(<ShowResult followUpIntroButton={<FollowUpIntroButton questionFields={questionFields} followUpItems={followUpItems} currentLanguage={state.currentLanguage} propsMain={props} changePart={props.changePart} />} patientInfo={props.patientInfo} currentLanguage={state.currentLanguage} scoreMatrix={props.stateMain.mainTestScoreMatrix} selectedItems={state.selectedItems} restartTestMain={props.restartTestMain} risk={risk} overallScore={followUpItems.length} data={props.data} />)
}

  return(
    <Questionnaire partID="00-0" questionFields={questionFields} getResult={getResult} currentLanguage={props.currentLanguage} stateMain={props.stateMain} data={props.data} updateCurrentScoreMatrix={props.updateMainTestScoreMatrix} patientInfo={props.patientInfo} restartTestMain={props.restartTestMain} scores={props.stateMain.mainTestScoreMatrix} />
  )
}