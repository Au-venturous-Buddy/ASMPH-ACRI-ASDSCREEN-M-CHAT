import React from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { Button } from "react-bootstrap";
import ResponsiveSize from "../../../hooks/responsive-size";
import ResponsiveHeader from "../../../components/responsive-header";
import SettingsWindow from "../../../components/settings-window";
import ShowAudio from "../../../components/show-audio";
import getNextFollowUpItem from "./get-next-follow-up-item";
import followUpIntroFields from "../../FIELDS/follow-up-intro-fields.json";

function StartFollowUpButton({followUpItems, state, propsMain}) {
    return(
        <Button style={{fontSize: ResponsiveSize(0.8, "rem", 0.001, 500)}} onClick={() => (propsMain.changePart(getNextFollowUpItem(followUpItems, state, propsMain)))}>Start Follow-Up</Button>
    )
}

export default class MCHATFollowUpIntro extends React.Component {
    state = {
        currentLanguage: this.props.currentLanguage
    }

    changeLanguage = (partID) => {
        var language = document.getElementById(`language-selector-${partID}`).value;
        this.props.propsMain.stateMain.changeLanguageHistory.push(language);
        this.setState({currentLanguage: language});
    }
  
    render() {
        var questions = [];
        var currentLanguageCode = `en`;
        var questionArrangement = [];
        var metadataItems = null;
        for(var i = 0; i < this.props.propsMain.data.allFile.edges.length; i++) {
            var nodeItem = this.props.propsMain.data.allFile.edges[i].node

            if(nodeItem.relativeDirectory.includes(`PARTS/${this.props.partID}/ITEMS`) && nodeItem.ext === ".md") {
                if(nodeItem.relativeDirectory.includes(`PARTS/${this.props.partID}/ITEMS/${this.state.currentLanguage}`)) {
                    if(nodeItem.name === "lang-info") {
                        currentLanguageCode = nodeItem.childMarkdownRemark.frontmatter.language_code
                    }
                    else if(nodeItem.relativeDirectory.includes("/QUESTIONS")) {
                        questions.push(nodeItem);
                    }
                }
            }
            else if(nodeItem.relativeDirectory.includes(`PARTS/${this.props.partID}`) && nodeItem.ext === ".md" && nodeItem.name === "part-info") {
                questionArrangement = nodeItem.childMarkdownRemark.frontmatter.arrangement;
            }
            else if(nodeItem.ext === ".md" && nodeItem.name === "index") {
                metadataItems = nodeItem;
            }
        }

        var sectionNum = 0;
        var maxSectionNum = parseInt(questions[questions.length - 1].name);
        var currentQuestion = null;
        var currentChoices = [];
        var nextQuestionID = 0;
        var allQuestions = {};
        while(sectionNum <= maxSectionNum) {
            if(nextQuestionID < questions.length && parseInt(questions[nextQuestionID].name) === sectionNum) {
                currentQuestion = questions[nextQuestionID].childMarkdownRemark;
                nextQuestionID++;
            }

            var questionNum = questionArrangement[sectionNum].position
            allQuestions[questionNum] = {"name": questionArrangement[sectionNum].name, "question": currentQuestion, "choices": currentChoices}

            sectionNum++;
        }

        return(
            <Layout>
            <SEO title={metadataItems.childMarkdownRemark.frontmatter.title} />
            <section className="pt-3 mt-3 mb-5 main-background" style={{paddingBottom: "1in"}}>
                <section className="questionnaire-main m-3">
                    <section className="questionnaire-contents">
                        <SettingsWindow hideClearAnswersButton partID="follow-up-intro" restartTest={this.props.propsMain.restartTestMain} clearSelectedItems={this.props.propsMain.restartTestMain} currentLanguage={this.state.currentLanguage} languageOptions={metadataItems.childMarkdownRemark.frontmatter.languages} changeLanguage={this.changeLanguage} />
                        <section style={{textAlign: "center"}} className="justify-content-center mx-3 mb-2">
                            <ResponsiveHeader level={1} maxSize={2} minScreenSize={800}>
                                {metadataItems.childMarkdownRemark.frontmatter.title}
                            </ResponsiveHeader>
                        </section>
                        <section lang={currentLanguageCode} className="justify-content-center">
                            <p dangerouslySetInnerHTML={{__html: followUpIntroFields[this.state.currentLanguage]['field_names']['text']}}></p>
                            <ol>
                                {this.props.followUpItems.map((questionID) => (
                                    <li>
                                        <span className="m-3"><ResponsiveHeader level={2} maxSize={1.5} minScreenSize={500}><span dangerouslySetInnerHTML={{__html: this.props.questionFields[this.state.currentLanguage]['question'] + `&nbsp;${allQuestions[questionID]['name']}`}}></span></ResponsiveHeader></span>
                                        <section aria-label={allQuestions[questionID]['question'].html.replace(/<[\/]?p(.*?)>/gm, "").replace(/<[\/]?iframe(.*?)>/gm, "").replace(/<[\/]?strong>/gm, "")}>
                                            <section>
                                                <article aria-hidden dangerouslySetInnerHTML={{ __html: allQuestions[questionID]['question'].html }}></article>
                                                <ShowAudio audioLink={allQuestions[questionID]['question'].frontmatter.audio} />
                                            </section>
                                        </section>
                                    </li>
                                ))}
                            </ol>
                        </section>
                        <section style={{textAlign: "center"}}>
                            <StartFollowUpButton followUpItems={this.props.followUpItems} state={this.state} propsMain={this.props.propsMain} />
                        </section>
                    </section>
                </section>
            </section>
            </Layout>
        )
    }
}