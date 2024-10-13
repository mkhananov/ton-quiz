import { makeAutoObservable } from "mobx";
import api from "../api.js";

class Store {
  coins = 0;
  question = {};
  isShowAnswerScreen = false;
  loadingQuestion = false;

  getNextQuestion() {
    this.isShowAnswerScreen = false;
    this.loadingQuestion = true;
    api.getNextQuestion(this.question).then((response) => {
      this.loadingQuestion = false;
      this.question = response;
    });
  }

  goToAnswer() {
    this.isShowAnswerScreen = true;
  }

  setCoins(value) {
    this.coins = value;
  }

  setAnswer(value) {
    console.log(value);
    this.question.answer = value;
  }

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export default new Store();
