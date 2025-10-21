import React from "react"
import { graphql } from "gatsby"
import SetLanguageAudio from "../assets/TEMPLATE/src/set-language-audio"

export default class MCHATMain extends React.Component {
  state = {
    mainTestScoreMatrix: {},
    mainTestAnswerSummary: {},
    followUpScoreMatrix: {},
    followUpAnswerSummary: {},
    currentPart: null,
    changeLanguageHistory: []
  }

  updateMainTestScoreMatrix = (score, questionID) => {
    this.state.mainTestScoreMatrix[questionID] = score;
  }

  updateMainTestAnswerSummary = (contents, questionID) => {
    this.state.mainTestAnswerSummary[questionID] = contents;
  }

  updateFollowUpScoreMatrix = (score, questionID) => {
    this.state.followUpScoreMatrix[questionID] = score;
  }

  updateFollowUpAnswerSummary = (contents, questionID, partID) => {
    if(!(questionID in this.state.followUpAnswerSummary)) {
      this.state.followUpAnswerSummary[questionID] = {};
    }

    this.state.followUpAnswerSummary[questionID][partID] = contents;
  }

  changePart = (nextPart) => {
    this.setState({currentPart: nextPart})
  }

  restartTestMain = () => {
    this.state.mainTestScoreMatrix = {}
    this.state.followUpScoreMatrix = {}
    this.state.mainTestAnswerSummary = {}
    this.state.followUpAnswerSummary = {}
    this.state.changeLanguageHistory = []
    this.setState({currentPart: null})
  }

  render() {
    return(
      <>
        {
          (
            (this.state.currentPart === null) ?
            (<SetLanguageAudio data={this.props.data} stateMain={this.state} changePart={this.changePart} restartTestMain={this.restartTestMain} updateMainTestScoreMatrix={this.updateMainTestScoreMatrix} updateFollowUpScoreMatrix={this.updateFollowUpScoreMatrix} updateMainTestAnswerSummary={this.updateMainTestAnswerSummary} updateFollowUpAnswerSummary={this.updateFollowUpAnswerSummary} />) :
            (this.state.currentPart)
          )
        }
      </>
    )
  }
}

export const query = graphql`
query {
  allFile(
    filter: {relativeDirectory: {regex: "/assets/*/"}}
    sort: {relativePath: ASC}
  ) {
    edges {
      node {
        name
        ext
        relativeDirectory
        publicURL
        childMarkdownRemark {
          html
          frontmatter {
            title
            language_code
            points
            arrangement {
              position
              name
            }
            languages
            audio
            choices {
              text
              audio
            }
            choices_id
          }
          internal {
            content
          }
        }
      }
    }
  }
}
`