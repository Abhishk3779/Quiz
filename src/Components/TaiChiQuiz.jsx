import { useState } from "react";
import AgeScreen from "./AgeScreen";
import SocialProofScreen from "./SocialProofScreen";
import WelcomeScreen from "./WelcomeScreen";
import GoalScreen from "./GoalScreen";
import ResultIntroScreen from "./ResultIntroScreen";
import BuildScreen from "./BuildScreen";
import DreamBodyScreen from "./DreamBodyScreen";
import TargetZonesScreen from "./TargetZonesScreen";
import BestShapeScreen from "./BestShapeScreen";
import EncouragementScreen from "./EncouragementScreen";
import {
  ageQuestion,
  initialGoalOptions,
  buildOptions,
  dreamBodyOptions,
  targetZoneOptions,
  bestShapeOptions,
} from "./QuizData";

export default function TaiChiQuiz() {
  const [screen, setScreen] = useState("age");
  const [answers, setAnswers] = useState({});
  const [goals, setGoals] = useState(initialGoalOptions);
  const [buildChoices, setBuildChoices] = useState(buildOptions);
  const [dreamBodyChoices, setDreamBodyChoices] = useState(dreamBodyOptions);
  const [targetZones, setTargetZones] = useState(targetZoneOptions);
  const [bestShapeChoices, setBestShapeChoices] = useState(bestShapeOptions);

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
    setScreen("dreamBody");
  }

  function handleDreamBodySelect(label) {
    setDreamBodyChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.label === label,
      }))
    );

    setAnswers((prev) => ({ ...prev, dreamBody: label }));
    setScreen("targetZones");
  }

  function handleTargetZoneToggle(id) {
    setTargetZones((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  }

  function handleTargetZonesContinue() {
    const selectedZones = targetZones
      .filter((item) => item.selected)
      .map((item) => item.label);

    setAnswers((prev) => ({ ...prev, targetZones: selectedZones }));
    setScreen("bestShape");
  }

  function handleBestShapeSelect(label) {
    setBestShapeChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.label === label,
      }))
    );

    setAnswers((prev) => ({ ...prev, bestShape: label }));
    setScreen("encouragement");
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

  if (screen === "dreamBody") {
    return (
      <DreamBodyScreen
        options={dreamBodyChoices}
        onSelect={handleDreamBodySelect}
        onBack={() => setScreen("build")}
      />
    );
  }

  if (screen === "targetZones") {
    return (
      <TargetZonesScreen
        options={targetZones}
        onToggle={handleTargetZoneToggle}
        onContinue={handleTargetZonesContinue}
        onBack={() => setScreen("dreamBody")}
      />
    );
  }

  if (screen === "bestShape") {
    return (
      <BestShapeScreen
        options={bestShapeChoices}
        onSelect={handleBestShapeSelect}
        onBack={() => setScreen("targetZones")}
      />
    );
  }

  if (screen === "encouragement") {
    return (
      <EncouragementScreen
        onContinue={() => {
          // next screen here
        }}
      />
    );
  }

  return null;
}