import { useEffect, useReducer, useState } from "react";
import StartScreen from "./components/StartScreen";
import StartScreenIpad from "./components/StartScreenIpad";
import StartScreenCircle from "./components/StartScreenCircle";
import StartScreenQuiz from "./components/StartScreenQuiz";
import LeftAngle from "./components/LeftAngle";
import PhotosList from "./components/PhotosList";
import H1StartScreen from "./components/H1StartScreen";
import StartButton from "./components/StartButton";
import ArrowRight from "./components/ArrowRight";
import Error from "./components/Error";
import PhotosItem from "./components/PhotosItem";
import Loader from "./components/Loader";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import BackgroundBird from "./components/BackgroundBird";
import Timer from "./components/Timer";

const API_KEY =
  "live_74dq5IzHAN5vmIGjDosunQXKERdTzGAlQWyr4pRtjWEgtmSkGoLD0atEsDiQaIpY";

const SECS_PER_QUESTION = 30;

const initialState = {
  status: "loading",
  breeds: [],
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
  title: null,
  fourDogs: [],
  numQuestions: 15,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        status: "ready",
        breeds: action.payload,
      };

    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        fourDogs: getRandomElements(state.breeds, 4),
        title: getRandomIntInclusive(0, 3),
        secondsRemaining: state.numQuestions * SECS_PER_QUESTION,
      };
    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === state.title ? state.points + 10 : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        fourDogs: getRandomElements(state.breeds, 4),
        title: getRandomIntInclusive(0, 3),
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        status: "ready",
        breeds: state.breeds,
        highscore: state.highscore,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action unknown");
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const getRandomIndex = (length) => Math.floor(Math.random() * length);

const getRandomElements = (array, count) => {
  const unusedIndexes = Array.from(array, (v, i) => i);
  const randomElements = [];

  while (randomElements.length !== count) {
    const randomUnusedIndex = getRandomIndex(unusedIndexes.length);
    const randomIndex = unusedIndexes.splice(randomUnusedIndex, 1)[0];

    randomElements.push(array[randomIndex]);
  }

  return randomElements;
};

function App() {
  const [
    {
      status,
      breeds,
      fourDogs,
      title,
      index,
      answer,
      numQuestions,
      points,
      highscore,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function handleStartButton() {
    dispatch({ type: "start" });
  }
  function handleRestartButton() {
    dispatch({ type: "restart" });
  }

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await fetch(
        `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`,
      );
      if (response && !response.ok) throw new Error(response.status);
      const data = await response.json();

      dispatch({ type: "dataReceived", payload: data });
    };
    fetchDogs().catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="h-screen  w-full bg-bgImage bg-cover bg-no-repeat">
      <StartScreen width="w-[368px]" dispatch={dispatch} status={status}>
        <H1StartScreen />
        {status === "ready" ? (
          <StartButton dispatch={dispatch} onClick={handleStartButton}>
            <span>Start</span>
          </StartButton>
        ) : null}

        {status === "finished" && (
          <FinishScreen points={points} highscore={highscore}>
            <StartButton dispatch={dispatch} onClick={handleRestartButton}>
              <span>Restart</span>
            </StartButton>
          </FinishScreen>
        )}
      </StartScreen>
      <BackgroundBird />
      <StartScreenCircle width="sm:w-[250px] lg:w-[300px] xl:w-[368px]" />

      {status === "error" && <Error />}
      {status === "loading" && <Loader />}

      {status === "active" && (
        <StartScreenIpad status={status}>
          <Progress
            numQuestions={numQuestions}
            index={index}
            answer={answer}
            points={points}
          />
          <StartScreenCircle width="md:w-[200px] w-[150px]" />
          <LeftAngle />
          <StartScreenQuiz title={title} fourDogs={fourDogs} />

          <PhotosList>
            {fourDogs.map((item, index) => (
              <PhotosItem
                item={item}
                key={item.id}
                index={index}
                title={title}
                dispatch={dispatch}
                answer={answer}
              />
            ))}
          </PhotosList>

          <ArrowRight
            dispatch={dispatch}
            answer={answer}
            index={index}
            numQuestions={numQuestions}
          />
          <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
        </StartScreenIpad>
      )}
    </div>
  );
}

export default App;
