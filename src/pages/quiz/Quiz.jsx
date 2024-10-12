import { useEffect } from "react";
import { Button, Radio } from "antd";
import store from "../../store/Store.js";
import { observer } from "mobx-react-lite";
import Wrapper from "../../components/Wrapper.jsx";
import styles from "./Quiz.module.scss";

function Quiz() {
  const {
    getNextQuestion,
    goToAnswer,
    question,
    loadingQuestion,
    isShowAnswerScreen,
    setAnswer,
  } = store;

  useEffect(() => getNextQuestion(), []);

  if (question.finished) {
    return (
      <Wrapper>
        <h2>Now you know everything!</h2>
      </Wrapper>
    );
  }

  if (!question?.id) {
    return "Loading...";
  }

  const { title, theory, variants, answer } = question;

  return isShowAnswerScreen ? (
    <Wrapper>
      <Radio.Group
        className={styles.variants}
        onChange={(e) => setAnswer(e.target.value)}
        value={answer}
        options={variants}
      />
      <Button
        disabled={!answer}
        className="button"
        loading={loadingQuestion}
        onClick={getNextQuestion}
      >
        Answer
      </Button>
    </Wrapper>
  ) : (
    <Wrapper>
      <h2>{title}</h2>
      <div>{theory}</div>
      <Button className="button" loading={loadingQuestion} onClick={goToAnswer}>
        Next
      </Button>
    </Wrapper>
  );
}

export default observer(Quiz);
