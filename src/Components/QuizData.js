import img1 from '../assets/Lose-weight.png';
import img2 from '../assets/Improve-heart-health.png';
import img3 from '../assets/Get-more-toned.png';
import img4 from '../assets/Feel-younger.png';


export const ageQuestion = {
  id: "age",
  badge: "1-minute quiz",
  badgeSub: "to Find Your Personal Tai Chi Indoor Walking Plan",
  title: "TAICHI COACH creates a simple, personalized indoor walking plan for weight loss",
  options: ["18-29", "30-39", "40-49", "50+"],
};

export const initialGoalOptions = [
  { id: 1, label: "Lose weight", selected: false, image: img1 },
  { id: 2, label: "Improve heart health", selected: false, image: img2 },
  { id: 3, label: "Get more toned", selected: false, image: img3 },
  { id: 4, label: "Feel younger and more energized", selected: false, image: img4 },
];

export const buildOptions = [
  { id: 1, label: "Mid-sized", selected: false },
  { id: 2, label: "On a heavier side", selected: false },
  { id: 3, label: "Overweight", selected: false },
];

export const dreamBodyOptions = [
  { id: 1, label: "Thin", selected: false },
  { id: 2, label: "Toned", selected: false },
  { id: 3, label: "Curvy", selected: false },
];

export const targetZoneOptions = [
  { id: 1, label: "Arms", selected: false },
  { id: 2, label: "Abs", selected: false },
  { id: 3, label: "Booty", selected: false },
  { id: 4, label: "Legs", selected: false },
];

export const bestShapeOptions = [
  { id: 1, label: "<1 year ago", emoji: "🤔", selected: false },
  { id: 2, label: "1–2 years ago", emoji: "😅", selected: false },
  { id: 3, label: "> 3 years ago", emoji: "🥲", selected: false },
  { id: 4, label: "Never", emoji: "✖", selected: false },
];

export const activityLevelOptions = [
  { id: 1, label: "Advanced", emoji: "😎", selected: false },
  { id: 2, label: "Intermediate", emoji: "🤔", selected: false },
  { id: 3, label: "Beginner", emoji: "🤷‍♀️", selected: false },
];

export const flexibilityOptions = [
  { id: 1, label: "Pretty Flexible", emoji: "💪", selected: false },
  { id: 2, label: "Just getting started", emoji: "👍", selected: false },
  { id: 3, label: "Not that good", emoji: "👌", selected: false },
  { id: 4, label: "Not sure", emoji: "💪", selected: false },
];

export const exerciseOptions = [
  { id: 1, label: "Almost every day", selected: false },
  { id: 2, label: "Several times per week", selected: false },
  { id: 3, label: "Several times per month", selected: false },
];

export const stairsFeelingOptions = [
  { id: 1, label: "I feel short of breath", emoji: "🤷‍♀️", selected: false },
  {
    id: 2,
    label: "I feel slightly winded, but I’m okay",
    emoji: "🥲",
    selected: true,
  },
  {
    id: 3,
    label: "I feel fine after one flight of stairs",
    emoji: "👌",
    selected: false,
  },
  {
    id: 4,
    label: "I can easily climb 3-5 flights of stairs",
    emoji: "💪",
    selected: false,
  },
];

export const walkFrequencyOptions = [
  { id: 1, label: "Almost every day", emoji: "💪", selected: false },
  { id: 2, label: "2-3 times per week", emoji: "👍", selected: false },
  { id: 3, label: "More like once a month", emoji: "👌", selected: false },
];

export const strugglesOptions = [
  { id: 1, label: "Sensitive back", selected: false },
  { id: 2, label: "Sensitive knees", selected: false },
  { id: 3, label: "Sensitive elbows", selected: false },
  { id: 4, label: "None of the above", selected: false },
];

export const workloadOptions = [
  { id: 1, label: "9 to 5", emoji: "🌞", selected: false },
  { id: 2, label: "Night shifts", emoji: "🌘", selected: false },
  { id: 3, label: "It’s fairly flexible", emoji: "🙂", selected: false },
  { id: 4, label: "I’m retired", emoji: "🌴", selected: false },
];

export const typicalDayOptions = [
  { id: 1, label: "I'm on my feet all day long", emoji: "🏃", selected: false },
  { id: 2, label: "I take active breaks", emoji: "✌", selected: false },
  {
    id: 3,
    label: "I spend most of the day sitting",
    emoji: "👩‍💻",
    selected: false,
  },
];

export const sleepDurationOptions = [
  { id: 1, label: "I sleep less than 5 hours", emoji: "😴", selected: false },
  { id: 2, label: "I sleep around 5-6 hours", emoji: "💤", selected: false },
  { id: 3, label: "I sleep well for 7-8 hours", emoji: "💪", selected: false },
  {
    id: 4,
    label: "I like to sleep longer than 8 hours",
    emoji: "🤷‍♀️",
    selected: false,
  },
];

export const waterIntakeOptions = [
  { id: 1, label: "About 2 glasses (16 oz)", emoji: "💧", selected: false },
  {
    id: 2,
    label: "Between 2 - 6 glasses (17 - 51 oz)",
    emoji: "💦",
    selected: false,
  },
  {
    id: 3,
    label: "More than 6 glasses (51 oz >)",
    emoji: "😎",
    selected: false,
  },
  { id: 4, label: "I drink only coffee or tea", emoji: "☕", selected: false },
];

export const badHabitsOptions = [
  {
    id: 1,
    label: "I have trouble getting enough sleep",
    emoji: "😴",
    selected: false,
  },
  {
    id: 2,
    label: "I find it hard to reduce my sugar intake",
    emoji: "🍫",
    selected: false,
  },
  {
    id: 3,
    label: "I have an addiction to soda",
    emoji: "🥤",
    selected: false,
  },
  {
    id: 4,
    label: "I consume a lot of salty foods",
    emoji: "🧂",
    selected: false,
  },
  {
    id: 5,
    label: "I’m a midnight snacker",
    emoji: "🌘",
    selected: false,
  },
  {
    id: 6,
    label: "None of the above",
    emoji: "",
    selected: false,
  },
];

export const lifeEventsOptions = [
  {
    id: 1,
    label: "Marriage or relationship",
    emoji: "💑",
    selected: false,
  },
  {
    id: 2,
    label: "Busy work schedule",
    emoji: "👩‍💻",
    selected: false,
  },
  {
    id: 3,
    label: "Stress or mental health",
    emoji: "🤯",
    selected: false,
  },
  {
    id: 4,
    label: "Pregnancy",
    emoji: "🤰",
    selected: false,
  },
  {
    id: 5,
    label: "Meds or hormonal disorder",
    emoji: "💊",
    selected: false,
  },
  {
    id: 6,
    label: "No similar event",
    emoji: "",
    selected: false,
  },
];
export const specialOccasionOptions = [
  {
    id: "vacation",
    label: "Vacation",
    emoji: "🙂",
  },
  {
    id: "sporting-event",
    label: "Sporting event",
    emoji: "🥇",
  },
  {
    id: "beach-trip",
    label: "Beach trip",
    emoji: "👙",
  },
  {
    id: "wedding",
    label: "Wedding",
    emoji: "🍾",
  },
  {
    id: "family-occasion",
    label: "Family occasion",
    emoji: "👨‍👩‍👧",
  },
  {
    id: "reunion",
    label: "Reunion",
    emoji: "👊",
  },
  {
    id: "no-similar-events",
    label: "No similar events",
    emoji: "✖",
  },
];