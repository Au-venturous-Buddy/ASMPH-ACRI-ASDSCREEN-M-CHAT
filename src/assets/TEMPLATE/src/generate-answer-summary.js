export default function generateAnswerSummary(items, state, scores, mainTestQuestionID, updateFollowUpAnswerSummary) {
  Object.keys(items).forEach((questionID) => {
    updateFollowUpAnswerSummary({
      item_question: items[questionID]['question'],
      item_answer: items[questionID]['choices'][state.selectedItems[questionID]],
      item_answer_id: items[questionID]['choicesID'][state.selectedItems[questionID]].replace(/<[\/]?span(.*?)>/g, "").replace(/&nbsp;/g, " "),
      item_point: scores[questionID]
    }, mainTestQuestionID, items[questionID]['name'])
  })
}