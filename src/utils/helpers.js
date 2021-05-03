export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

//Return a user's leaderboard score.
export function score(user) {
  const questions = user.questions.length;
  const answers = Object.keys(user.answers).length;

  return questions + answers;
}

//Returns true if a user has answered a question and false otherwise
export function hasAnswered(question, authedUser) {
  return question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser);
}