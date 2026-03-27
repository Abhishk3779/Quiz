import { useState } from "react";
import AgeScreen from "./AgeScreen";
import SocialProofScreen from "./SocialProofScreen";
import WelcomeScreen from "./WelcomeScreen";
import GoalScreen from "./GoalScreen";
import ResultIntroScreen from "./ResultIntroScreen";
import BuildScreen from "./BuildScreen";
import {
  ageQuestion,
  initialGoalOptions,
  buildOptions,
} from "./QuizData";

export default function TaiChiQuiz() {
  const [screen, setScreen] = useState("age");
  const [answers, setAnswers] = useState({});
  const [goals, setGoals] = useState(initialGoalOptions);
  const [buildChoices, setBuildChoices] = useState(buildOptions);

  function handleAgeSelect(option) {
    setAnswers((prev) => ({ ...prev, age: option }));
    setScreen("social");
  }

  function handleGoalToggle(id) {
    setGoals((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  }

  function handleGoalsContinue() {
    const selectedGoals = goals
      .filter((item) => item.selected)
      .map((item) => item.label);

    setAnswers((prev) => ({ ...prev, goals: selectedGoals }));
    setScreen("resultIntro");
  }

  function handleBuildSelect(label) {
    setBuildChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.label === label,
      }))
    );

    setAnswers((prev) => ({ ...prev, build: label }));
  }

  if (screen === "age") {
    return <AgeScreen question={ageQuestion} onSelect={handleAgeSelect} />;
  }

  if (screen === "social") {
    return <SocialProofScreen onContinue={() => setScreen("welcome")} />;
  }

  if (screen === "welcome") {
    return <WelcomeScreen onContinue={() => setScreen("goals")} />;
  }

  if (screen === "goals") {
    return (
      <GoalScreen
        goals={goals}
        onToggle={handleGoalToggle}
        onContinue={handleGoalsContinue}
      />
    );
  }

  if (screen === "resultIntro") {
    return <ResultIntroScreen onContinue={() => setScreen("build")} />;
  }

  if (screen === "build") {
    return (
      <BuildScreen
        options={buildChoices}
        onSelect={handleBuildSelect}
        onBack={() => setScreen("resultIntro")}
      />
    );
  }

  return null;
}