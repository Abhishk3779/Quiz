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
import LifeEventsScreen from "./LifeEventsScreen";
import LifeEventsResultScreen from "./LifeEventsResultScreen";
import HeightScreen from "./HeightScreen";
import PerfectWeightScreen from "./PerfectWeightScreen";
import GoalWeightScreen from "./GoalWeightScreen"; // Imported New Component
import ExactAgeScreen from "./ExactAgeScreen";
import NameScreen from "./NameScreen";
import WellnessProfileScreen from "./WellnessProfileScreen";
import WalkingBenefitScreen from "./WalkingBenefitScreen";
import SpecialOccasionScreen from "./SpecialOccasionScreen";
import EventDateScreen from "./EventDateScreen";
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
  lifeEventsOptions,
  specialOccasionOptions,
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
  const [lifeEventsChoices, setLifeEventsChoices] = useState(lifeEventsOptions);
  const [specialOccasions] = useState(specialOccasionOptions);

  function handleAgeSelect(option) {
    setAnswers((prev) => ({ ...prev, ageGroup: option }));
    setScreen("social");
  }

  function handleGoalToggle(id) {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id ? { ...goal, selected: !goal.selected } : goal
      )
    );
  }

  function handleGoalsContinue() {
    const selectedGoals = goals.filter((goal) => goal.selected).map((goal) => goal.label);
    setAnswers((prev) => ({ ...prev, goals: selectedGoals }));
    setScreen("resultIntro");
  }

  function handleBuildSelect(option) {
    setBuildChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.id === option.id,
      }))
    );
    setAnswers((prev) => ({ ...prev, build: option.label }));
    setScreen("dreamBody");
  }

  function handleDreamBodySelect(option) {
    setDreamBodyChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.id === option.id,
      }))
    );
    setAnswers((prev) => ({ ...prev, dreamBody: option.label }));
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
    const selectedZones = targetZones.filter((item) => item.selected).map((item) => item.label);
    setAnswers((prev) => ({ ...prev, targetZones: selectedZones }));
    setScreen("bestShape");
  }

  function handleBestShapeSelect(option) {
    setBestShapeChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.id === option.id,
      }))
    );
    setAnswers((prev) => ({ ...prev, bestShape: option.label }));
    setScreen("encouragement");
  }

  function handleActivityLevelSelect(option) {
    setActivityLevels((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.id === option.id,
      }))
    );
    setAnswers((prev) => ({ ...prev, activityLevel: option.label }));
    setScreen("flexibility");
  }

  function handleFlexibilitySelect(option) {
    setFlexibilityChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.id === option.id,
      }))
    );
    setAnswers((prev) => ({ ...prev, flexibility: option.label }));
    setScreen("exercise");
  }

  function handleExerciseSelect(option) {
    setExerciseChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.id === option.id,
      }))
    );
    setAnswers((prev) => ({ ...prev, exercise: option.label }));
    setScreen("stairsFeeling");
  }

  function handleStairsFeelingSelect(option) {
    setStairsFeelingChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.id === option.id,
      }))
    );
    setAnswers((prev) => ({ ...prev, stairsFeeling: option.label }));
    setScreen("walkFrequency");
  }

  function handleWalkFrequencySelect(option) {
    setWalkFrequencyChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.id === option.id,
      }))
    );
    setAnswers((prev) => ({ ...prev, walkFrequency: option.label }));
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

  function handleWorkloadSelect(option) {
    setWorkloadChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.id === option.id,
      }))
    );
    setAnswers((prev) => ({ ...prev, workload: option.label }));
    setScreen("typicalDay");
  }

  function handleTypicalDaySelect(option) {
    setTypicalDayChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.id === option.id,
      }))
    );
    setAnswers((prev) => ({ ...prev, typicalDay: option.label }));
    setScreen("sleepDuration");
  }

  function handleSleepDurationSelect(option) {
    setSleepDurationChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.id === option.id,
      }))
    );
    setAnswers((prev) => ({ ...prev, sleepDuration: option.label }));
    setScreen("waterIntake");
  }

  function handleWaterIntakeSelect(option) {
    setWaterIntakeChoices((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.id === option.id,
      }))
    );
    setAnswers((prev) => ({ ...prev, waterIntake: option.label }));
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
    setScreen("lifeEvents");
  }

  function handleLifeEventToggle(id) {
    setLifeEventsChoices((prev) => {
      const clickedItem = prev.find((item) => item.id === id);
      const isNoneOption = clickedItem?.label === "No similar event";

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

        if (item.label === "No similar event") {
          return { ...item, selected: false };
        }

        return item;
      });
    });
  }

  function handleLifeEventsContinue() {
    const selectedLifeEvents = lifeEventsChoices
      .filter((item) => item.selected)
      .map((item) => item.label);

    setAnswers((prev) => ({ ...prev, lifeEvents: selectedLifeEvents }));
    setScreen("lifeEventsResult");
  }

  function handleHeightContinue(heightData) {
    setAnswers((prev) => ({ ...prev, height: heightData }));
    setScreen("weight");
  }

  function handleWeightContinue(weightData) {
    // Save current weight (value and unit)
    setAnswers((prev) => ({ ...prev, currentWeight: weightData }));
    setScreen("goalWeight");
  }

  function handleGoalWeightContinue(goalData) {
    // Save the perfect/goal weight data
    setAnswers((prev) => ({ ...prev, goalWeight: goalData }));
    setScreen("exactAge");
  }

  function handleExactAgeContinue(ageValue) {
    setAnswers((prev) => ({ ...prev, exactAge: ageValue }));
    setScreen("name");
  }
  function handleNameContinue(nameValue) {
    setAnswers((prev) => ({ ...prev, name: nameValue }));
    setScreen("wellnessProfile");
  }

  function handleWellnessProfileContinue() {
    setScreen("walkingBenefit");
  }

  function handleWalkingBenefitContinue() {
    setScreen("specialOccasion");
  }

  function handleSpecialOccasionSelect(option) {
    setAnswers((prev) => ({ ...prev, specialOccasion: option.label }));
    setScreen("eventDate");
  }

  function handleEventDateContinue(eventDate) {
    setAnswers((prev) => ({ ...prev, eventDate }));
    console.log("Final answers:", { ...answers, eventDate });
    // add next screen here later
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

  if (screen === "lifeEvents") {
    return (
      <LifeEventsScreen
        options={lifeEventsChoices}
        onToggle={handleLifeEventToggle}
        onContinue={handleLifeEventsContinue}
        onBack={() => setScreen("badHabits")}
      />
    );
  }

  if (screen === "lifeEventsResult") {
    return <LifeEventsResultScreen onContinue={() => setScreen("height")} />;
  }

  if (screen === "height") {
    return (
      <HeightScreen
        onContinue={handleHeightContinue}
        onBack={() => setScreen("lifeEventsResult")}
      />
    );
  }

  if (screen === "weight") {
    return (
      <PerfectWeightScreen
        // Pass height from answers to calculate BMI on the weight page
        userHeightInMeters={answers.height?.meters || 1.75}
        onContinue={handleWeightContinue}
        onBack={() => setScreen("height")}
      />
    );
  }

  // NEW: Goal Weight Screen (Step 20)
  if (screen === "goalWeight") {
    return (
      <GoalWeightScreen
        // Pass current weight so it can calculate the "Sensible Goal" %
        currentWeightKg={answers.currentWeight?.weight || 70}
        onContinue={handleGoalWeightContinue}
        onBack={() => setScreen("weight")}
      />
    );
  }

  if (screen === "exactAge") {
    return (
      <ExactAgeScreen
        onContinue={handleExactAgeContinue}
        onBack={() => setScreen("goalWeight")} // Corrected Back Path
      />
    );
  }

  if (screen === "name") {
    return (
      <NameScreen
        onContinue={handleNameContinue}
        onBack={() => setScreen("exactAge")}
      />
    );
  }

  if (screen === "wellnessProfile") {
    return (
      <WellnessProfileScreen
        answers={answers} // This contains BMI, activityLevel, etc.
        onContinue={handleWellnessProfileContinue}
      />
    );
  }

  if (screen === "walkingBenefit") {
    return (
      <WalkingBenefitScreen
        onContinue={handleWalkingBenefitContinue}
        onBack={() => setScreen("wellnessProfile")}
      />
    );
  }

  if (screen === "specialOccasion") {
    return (
      <SpecialOccasionScreen
        options={specialOccasions}
        onSelect={handleSpecialOccasionSelect}
        onBack={() => setScreen("walkingBenefit")}
      />
    );
  }

  if (screen === "eventDate") {
    return (
      <EventDateScreen
        onContinue={handleEventDateContinue}
        onBack={() => setScreen("specialOccasion")}
      />
    );
  }

  return null;
}