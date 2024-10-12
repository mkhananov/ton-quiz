import { QUESTIONS } from "./constants.js";

export default {
  getNextQuestion: async ({ id: currentId, answer }) =>
    new Promise((resolve) => {
      if (currentId) {
        const index = QUESTIONS.findIndex(({ id }) => id === currentId);
        if (index !== -1) {
          const next = index + 1;
          if (QUESTIONS[next]) {
            resolve(QUESTIONS[next]);
          } else {
            resolve({ finished: true });
          }
        }
      }
      resolve(QUESTIONS[0]);
    }),
};
