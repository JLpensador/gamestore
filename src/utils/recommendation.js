export const getRecommendations = (
  games,
  userAnswers
) => {
  return games
    .map((game) => {
      let score = 0;

      userAnswers.forEach((answer) => {
        if (game.profile.includes(answer)) {
          score++;
        }
      });

      return {
        ...game,
        compatibility: score
      };
    })
    .sort((a, b) => b.compatibility - a.compatibility);
};