const MAX_LIVES = 6;

async function serializeGameSession(gameSession){
  const gameSessionWord = await gameSession.getWord();
  const actualWord = gameSessionWord.title;
  const playedLetters = gameSession.playedLetters.split("");

  const word_set = new Set([...actualWord]);
  const played_set = new Set([...playedLetters]);
  const wrongLetters = playedLetters.filter((letter) => !word_set.has(letter));
  const lives = Math.max(MAX_LIVES - wrongLetters.length,0);
  const maskedWord = [...actualWord].map(letter => played_set.has(letter) ? letter : "_");
  
  return {
    id: gameSession.id,
    livesleft: lives,
    result: !!gameSession.endedAt,
    maskedWord: maskedWord,
  }
}

module.exports = serializeGameSession;