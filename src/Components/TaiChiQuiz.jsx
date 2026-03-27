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
import ActivityLevelScreen from "./ActivityLevelScreen";
import FlexibilityScreen from "./FlexibilityScreen";
import ExerciseScreen from "./ExerciseScreen";
import StairsFeelingScreen from "./StairsFeelingScreen";
import WalkFrequencyScreen from "./WalkFrequencyScreen";
import StrugglesScreen from "./StrugglesScreen";
import WorkloadScreen from "./WorkloadScreen";
import TypicalDayScreen from "./TypicalDayScreen";
import SleepDurationScreen from "./SleepDurationScreen";
import WaterIntakeScreen from "./WaterIntakeScreen";
import BadHabitsScreen from "./BadHabitsScreen";
import {
  ageQuestion,
  initialGoalOptions,
  buildOptions,
  dreamBodyOptions,
  targetZoneOptions,
  bestShapeOptions,
  activityLevelOptions,
  flexibilityOptions,
  exerciseOptions,
  stairsFeelingOptions,
  walkFrequencyOptions,
  strugglesOptions,
  workloadOptions,
  typicalDayOptions,
  sleepDurationOptions,
  waterIntakeOptions,
  badHabitsOptions,
} from "./QuizData";

export default function TaiChiQuiz() {
  const [screen, setScreen] = useState("age");
  const [answers, setAnswers] = useState({});

  const [goals, setGoals] = useState(initialGoalOptions);
  const [buildChoices, setBuildChoices] = useState(buildOptions);
  const [dreamBodyChoices, setDreamBodyChoices] = useState(dreamBodyOptions);
  const [targetZones, setTargetZones] = useState(targetZoneOptions);
  const [bestShapeChoices, setBestShapeChoices] = useState(bestShapeOptions);
  const [activityLevels, setActivityLevels] = useState(activityLevelOptions);
  const [flexibilityChoices, setFlexibilityChoices] = useState(flexibilityOptions);
  const [exerciseChoices, setExerciseChoices] = useState(exerciseOptions);
  const [stairsFeelingChoices, setStairsFeelingChoices] = useState(stairsFeelingOptions);
  const [walkFrequencyChoices, setWalkFrequencyChoices] = useState(walkFrequencyOptions);
  const [strugglesChoices, setStrugglesChoices] = useState(strugglesOptions);
  const [workloadChoices, setWorkloadChoices] = useState(workloadOptions);
  const [typicalDayChoices, setTypicalDayChoices] = useState(typicalDayOptions);
  const [sleepDurationChoices, setSleepDurationChoices] = useState(sleepDurationOptions);
  const [waterIntakeChoices, setWaterIntakeChoices] = useState(waterIntakeOptions);
  const [badHabitsChoices, setBadHabitsChoices] = useState(badHabitsOptions);

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

  function handleActivityLevelSelect(label) {
    setActivityLevels((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.label === label,
      }))
    );

    setAnswers((prev) => ({ ...prev, activityLevel: label }));
    setScreen("flexibility");
  }

  function handleFlexibilitySelect(label) {
    setFlexibilityChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.label === label,
      }))
    );

    setAnswers((prev) => ({ ...prev, flexibility: label }));
    setScreen("exercise");
  }

  function handleExerciseSelect(label) {
    setExerciseChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.label === label,
      }))
    );

    setAnswers((prev) => ({ ...prev, exercise: label }));
    setScreen("stairsFeeling");
  }

  function handleStairsFeelingSelect(label) {
    setStairsFeelingChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.label === label,
      }))
    );

    setAnswers((prev) => ({ ...prev, stairsFeeling: label }));
    setScreen("walkFrequency");
  }

  function handleWalkFrequencySelect(label) {
    setWalkFrequencyChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.label === label,
      }))
    );

    setAnswers((prev) => ({ ...prev, walkFrequency: label }));
    setScreen("struggles");
  }

  function handleStruggleToggle(id) {
    setStrugglesChoices((prev) => {
      const clickedItem = prev.find((item) => item.id === id);
      const isNoneOption = clickedItem?.label === "None of the above";

      if (isNoneOption) {
        return prev.map((item) => ({
          ...item,
          selected: item.id === id ? !item.selected : false,
        }));
      }

      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, selected: !item.selected };
        }

        if (item.label === "None of the above") {
          return { ...item, selected: false };
        }

        return item;
      });
    });
  }

  function handleStrugglesContinue() {
    const selectedStruggles = strugglesChoices
      .filter((item) => item.selected)
      .map((item) => item.label);

    setAnswers((prev) => ({ ...prev, struggles: selectedStruggles }));
    setScreen("workload");
  }

  function handleWorkloadSelect(label) {
    setWorkloadChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.label === label,
      }))
    );

    setAnswers((prev) => ({ ...prev, workload: label }));
    setScreen("typicalDay");
  }

  function handleTypicalDaySelect(label) {
    setTypicalDayChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.label === label,
      }))
    );

    setAnswers((prev) => ({ ...prev, typicalDay: label }));
    setScreen("sleepDuration");
  }

  function handleSleepDurationSelect(label) {
    setSleepDurationChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.label === label,
      }))
    );

    setAnswers((prev) => ({ ...prev, sleepDuration: label }));
    setScreen("waterIntake");
  }

  function handleWaterIntakeSelect(label) {
    setWaterIntakeChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.label === label,
      }))
    );

    setAnswers((prev) => ({ ...prev, waterIntake: label }));
    setScreen("badHabits");
  }

  function handleBadHabitToggle(id) {
    setBadHabitsChoices((prev) => {
      const clickedItem = prev.find((item) => item.id === id);
      const isNoneOption = clickedItem?.label === "None of the above";

      if (isNoneOption) {
        return prev.map((item) => ({
          ...item,
          selected: item.id === id ? !item.selected : false,
        }));
      }

      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, selected: !item.selected };
        }

        if (item.label === "None of the above") {
          return { ...item, selected: false };
        }

        return item;
      });
    });
  }

  function handleBadHabitsContinue() {
    const selectedBadHabits = badHabitsChoices
      .filter((item) => item.selected)
      .map((item) => item.label);

    setAnswers((prev) => ({ ...prev, badHabits: selectedBadHabits }));
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
    return <EncouragementScreen onContinue={() => setScreen("activityLevel")} />;
  }

  if (screen === "activityLevel") {
    return (
      <ActivityLevelScreen
        options={activityLevels}
        onSelect={handleActivityLevelSelect}
        onBack={() => setScreen("encouragement")}
      />
    );
  }

  if (screen === "flexibility") {
    return (
      <FlexibilityScreen
        options={flexibilityChoices}
        onSelect={handleFlexibilitySelect}
        onBack={() => setScreen("activityLevel")}
      />
    );
  }

  if (screen === "exercise") {
    return (
      <ExerciseScreen
        options={exerciseChoices}
        onSelect={handleExerciseSelect}
        onBack={() => setScreen("flexibility")}
      />
    );
  }

  if (screen === "stairsFeeling") {
    return (
      <StairsFeelingScreen
        options={stairsFeelingChoices}
        onSelect={handleStairsFeelingSelect}
        onBack={() => setScreen("exercise")}
      />
    );
  }

  if (screen === "walkFrequency") {
    return (
      <WalkFrequencyScreen
        options={walkFrequencyChoices}
        onSelect={handleWalkFrequencySelect}
        onBack={() => setScreen("stairsFeeling")}
      />
    );
  }

  if (screen === "struggles") {
    return (
      <StrugglesScreen
        options={strugglesChoices}
        onToggle={handleStruggleToggle}
        onContinue={handleStrugglesContinue}
        onBack={() => setScreen("walkFrequency")}
      />
    );
  }

  if (screen === "workload") {
    return (
      <WorkloadScreen
        options={workloadChoices}
        onSelect={handleWorkloadSelect}
        onBack={() => setScreen("struggles")}
      />
    );
  }

  if (screen === "typicalDay") {
    return (
      <TypicalDayScreen
        options={typicalDayChoices}
        onSelect={handleTypicalDaySelect}
        onBack={() => setScreen("workload")}
      />
    );
  }

  if (screen === "sleepDuration") {
    return (
      <SleepDurationScreen
        options={sleepDurationChoices}
        onSelect={handleSleepDurationSelect}
        onBack={() => setScreen("typicalDay")}
      />
    );
  }

  if (screen === "waterIntake") {
    return (
      <WaterIntakeScreen
        options={waterIntakeChoices}
        onSelect={handleWaterIntakeSelect}
        onBack={() => setScreen("sleepDuration")}
      />
    );
  }

  if (screen === "badHabits") {
    return (
      <BadHabitsScreen
        options={badHabitsChoices}
        onToggle={handleBadHabitToggle}
        onContinue={handleBadHabitsContinue}
        onBack={() => setScreen("waterIntake")}
      />
    );
  }

  return null;
}