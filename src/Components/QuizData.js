import img1 from '../assets/Lose-weight.png';
import img2 from '../assets/Improve-heart-health.png';
import img3 from '../assets/Get-more-toned.png';
import img4 from '../assets/Feel-younger.png';
import img5 from '../assets/better.png';
import img6 from '../assets/middle.png';
import img7 from '../assets/heavy.png';
import img8 from '../assets/lighter.png';
import img9 from '../assets/toned.png';
import img10 from '../assets/balanced.png';
import img11 from '../assets/Exercise1.png';
import img12 from '../assets/Exercise2.png';
import img13 from '../assets/Exercise3.png';
import img14 from '../assets/back-pain.png';
import img15 from '../assets/knee-pain.png';
import img16 from '../assets/elbow-pain.png';
import img17 from '../assets/no-problem.png';


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
  { id: 1, label: "In the middle", selected: false ,image : img5},
  { id: 2, label: "A bit heavier than I want", selected: false ,image : img6},
  { id: 3, label: "Much heavier than I want", selected: false ,image : img7},
];

export const dreamBodyOptions = [
  { id: 1, label: "Lighter and more comfortable", selected: false ,image : img8, },
  { id: 2, label: "More toned and a bit stronger", selected: false,image : img9 },
  { id: 3, label: "Balanced and confident in my shape", selected: false ,image : img10 },
];

export const targetZoneOptions = [
  { id: 1, label: "Arms", selected: false },
  { id: 2, label: "Abs", selected: false },
  { id: 3, label: "Booty", selected: false },
  { id: 4, label: "Legs", selected: false },
];

export const bestShapeOptions = [
  { id: 1, label: "Less than 1 year ago", emoji: "🤔", selected: false },
  { id: 2, label: "1–2 years ago", emoji: "😅", selected: false },
  { id: 3, label: ">More than 3 years ago", emoji: "🥲", selected: false },
  { id: 4, label: "I have never felt that way", emoji: "✖", selected: false },
];

export const activityLevelOptions = [
  { id: 1, label: "Very active", emoji: "😎", selected: false },
  { id: 2, label: "Somewhat active", emoji: "🤔", selected: false },
  { id: 3, label: "Just starting", emoji: "🤷‍♀️", selected: false },
];

export const flexibilityOptions = [
  { id: 1, label: "Quite flexible", emoji: "💪", selected: false },
  { id: 2, label: "A little flexible", emoji: "👍", selected: false },
  { id: 3, label: "Not very flexible", emoji: "👌", selected: false },
  { id: 4, label: "I’m not sure", emoji: "💪", selected: false },
];

export const exerciseOptions = [
  { id: 1, label: "Almost every day", selected: false ,image : img11 },
  { id: 2, label: "A few times per week", selected: false ,image : img12},
  { id: 3, label: "A few times per month", selected: false ,image : img13 },
];

export const stairsFeelingOptions = [
  { id: 1, label: "I feel out of breath", emoji: "🤷‍♀️", selected: false },
  {
    id: 2,
    label: "I feel a bit tired, but okay",
    emoji: "🥲",
    selected: false,
  },
  {
    id: 3,
    label: "I feel fine after one flight",
    emoji: "👌",
    selected: false,
  },
  {
    id: 4,
    label: "I can easily climb several flights",
    emoji: "💪",
    selected: false,
  },
];

export const walkFrequencyOptions = [
  { id: 1, label: "Nearly every day", emoji: "💪", selected: false },
  { id: 2, label: "A few times during the week", emoji: "👍", selected: false },
  { id: 3, label: "Rarely (around once a month)", emoji: "👌", selected: false },
];

export const strugglesOptions = [
  { id: 1, label: "Back pain", selected: false , image : img14 },
  { id: 2, label: "Knee pain", selected: false , image : img15 },
  { id: 3, label: "Elbow pain", selected: false , image : img16 },
  { id: 4, label: "No problems", selected: false , image : img17 },
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