import keyIcon from "../assets/images/icon-key.svg"
import wifiIcon from "../assets/images/icon-wifi.svg"
import breakfastIcon from "../assets/images/icon-breakfast.svg"
import bedIcon from "../assets/images/icon-bed.svg"
import houseIcon from "../assets/images/icon-house.svg"
import pinIcon from "../assets/images/icon-pin.svg"
import breakfastNavIcon from "../assets/images/icon-breakfast-outline.svg"
import mailIcon from "../assets/images/icon-mail.svg"
import KitchenImage from "../assets/images/Kitchen.jpg"
import LivingroomImage from "../assets/images/Livingroom.jpg"
import BedroomImage from "../assets/images/Bedroom.jpg"
import BathroomImage from "../assets/images/Bathroom.jpg"
import TerraceImage from "../assets/images/Terrace.jpg"
import {
  LuClock3,
  LuClock9,
  LuPawPrint,
  LuCigaretteOff,
  LuVolumeX,
  LuPartyPopper,
} from "react-icons/lu";

export interface InfoCardsData {
  icon: string;
  iconBg: string;
  cardTitle: string;
  titleColor: string;
  numberColor: string;
  cardNumber: string;
  title: string;
  subTitle: string;
  cardText?: string;
  children?: React.ReactNode;
}

export const infoCardsData: InfoCardsData[] = [
  {
    icon: keyIcon,
    cardTitle: "Arrival",
    iconBg : "bg-terracotta-600",
    numberColor : "text-terracotta-600",
    titleColor : "text-terracotta-600",
    cardNumber: "01",
    title: "Check-in from 15:00",
    subTitle: "Sat, 25 April",
    cardText : "Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree."
  },
  {
    icon: wifiIcon,
    iconBg: "bg-blue-500",
    numberColor: "text-blue-500",
    titleColor: "text-blue-500",
    cardTitle: "Wifi",
    cardNumber: "02",
    title: "Le Soleil · Guest",
    subTitle: "Password below"
  },
  {
    icon: breakfastIcon,
    iconBg: "bg-rose-500",
    numberColor: "text-rose-500",
    titleColor: "text-rose-500",
    cardTitle: "Breakfast",
    cardNumber: "03",
    title: "Served 8 - 10:30",
    subTitle: "On the terrace",
    cardText: "Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before."
  }
]


// Receipt Card
export interface ReceiptLineItem {
  label: string;
  price: string;
}

export interface ReceiptData {
  receiptNumberLine1: string;     
  receiptNumberLine2: string;     
  checkIn: { date: string; day: string; time: string };   
  checkOut: { date: string; day: string; time: string }; 
  lineItems: ReceiptLineItem[];
  total: string;               
  paymentMethod: string;       
  currency: string;        
}

export const receiptData: ReceiptData = {
  receiptNumberLine1: "MS-2026",
  receiptNumberLine2: "0421-AH",
  checkIn: { date: "25 Apr", day: "Saturday", time: "15:00" },
  checkOut: { date: "29 Apr", day: "Wednesday", time: "11:00" },
  lineItems: [
    { label: "Room · La Garrigue × 4 nights", price: "€ 620.00" },
    { label: "Breakfast × 2 guests", price: "€ 96.00" },
    { label: "Tourist tax", price: "€ 14.40" },
  ],
  total: "€ 730.40",
  paymentMethod: "WISE",
  currency: "GBP",
}

//Navbar
export interface NavItem {
  icon: string;
  label: string;
  badgeCount?: number;
  path: string;
}

export const navItems: NavItem[] = [
  { icon: bedIcon, label: "Your stay", badgeCount: 1, path:"/" },
  { icon: houseIcon, label: "The house", path:"/the-house" },
  { icon: pinIcon, label: "Around town", path: "/around-town"},
  { icon: breakfastNavIcon, label: "Breakfast", path:"/breakfast" },
  { icon: mailIcon, label: "Messages", path:"/messages" },
]

// Amenities
export interface Amenity {
  icon: string;
  label: string;
  iconBg: string;
}

export const amenities: Amenity[] = [
  { icon: wifiIcon, label: "Free Wi-Fi", iconBg: "bg-blue-500" },
  { icon: keyIcon, label: "Self check-in", iconBg: "bg-terracotta-600" },
  { icon: breakfastIcon, label: "Breakfast included", iconBg: "bg-rose-500" },
  { icon: houseIcon, label: "Private terrace", iconBg: "bg-sun-500" },
  { icon: houseIcon, label: "Full kitchen", iconBg: "bg-terracotta-400" },
  { icon: pinIcon, label: "5 min to the beach", iconBg: "bg-blue-500" },
]

// Spaces
export interface Space {
  image: string;
  name: string;
  description: string;
}

export const spaces: Space[] = [
  {
    image: LivingroomImage,
    name: "Living room",
    description: "Sun-bleached linen sofas, a well-worn piano, and doors that open straight onto the terrace."
  },
  {
    image: BedroomImage,
    name: "La Garrigue bedroom",
    description: "A queen bed dressed in washed cotton, shutters that filter the morning light just right."
  },
  {
    image: BathroomImage,
    name: "Bathroom",
    description: "An indoor-outdoor limestone master sanctuary with seamless glass walls merging with a private Calanques terrace.",
  },
  {
    image: KitchenImage,
    name: "Kitchen",
    description: "Everything you need for a slow breakfast — and Margaux's honey, if you know where to look."
  },
  {
    image: TerraceImage,
    name: "Terrace",
    description: "Olive trees, a hammock, and the best seat in Cassis for a glass of rosé at golden hour."
  },
]

// House rules

export interface HouseRule {
  label: string;
  value: string;
  iconBg: string;
  icon: React.ElementType;
}

export const houseRules: HouseRule[] = [
  { label: "Check-in", value: "3:00 PM - 10:00PM", icon: LuClock3, iconBg:"bg-blue-500" },
  { label: "Check-out", value: "Before 11:00AM", icon: LuClock9, iconBg: "bg-terracotta-600" },
  { label: "Pets", value: "Not allowed", icon: LuPawPrint, iconBg:"bg-rose-500" },
  { label: "Smoking", value: "Outdoors only", icon: LuCigaretteOff, iconBg: "bg-sun-500" },
  { label: "Quiet hours", value: "10:00 PM – 08:00 AM", icon: LuVolumeX, iconBg:"bg-blue-500" },
  { label: "Parties", value: "Not permitted", icon: LuPartyPopper, iconBg: "bg-terracotta-400" },
]


// Breakfast Page

export interface Breakfast {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  strCountry: string;
}

// Meal Details

export interface MealDetail {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strInstructions: string;
  [key: string]: string | null;
}

export interface Ingredient {
  name: string;
  measure: string;
}

export interface MappedMealDetail {
  id: string;
  name: string;
  category: string;
  mealThumb: string;
  instructions: string;
}

export function extractIngredients(meal: MealDetail): Ingredient[] {
  const ingredients: Ingredient[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({ name: ingredient, measure: measure || "" });
    }
  }

  return ingredients;
}

// Message Page 
export interface Message {
  id: string;
  sender: "guest" | "host";
  text: string;
  timestamp: string;
}

export const initialMessages: Message[] = [
  { id: "1", sender: "host", text: "Bonjour Lucia! Just confirming your check-in for the 25th — let me know if you need anything before you arrive.", timestamp: "Yesterday, 14:20" },
  { id: "2", sender: "guest", text: "Hi Margaux! Just one question — is the terrace accessible in the evening?", timestamp: "Yesterday, 15:02" },
  { id: "3", sender: "host", text: "Absolutely, anytime you like. There's a light switch just inside the kitchen door.", timestamp: "Yesterday, 15:10" },
]