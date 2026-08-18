import keyIcon from "../assets/images/icon-key.svg"
import wifiIcon from "../assets/images/icon-wifi.svg"
import breakfastIcon from "../assets/images/icon-breakfast.svg"
import bedIcon from "../assets/images/icon-bed.svg"
import houseIcon from "../assets/images/icon-house.svg"
import pinIcon from "../assets/images/icon-pin.svg"
import breakfastNavIcon from "../assets/images/icon-breakfast-outline.svg"
import mailIcon from "../assets/images/icon-mail.svg"


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
  isActive?: boolean;
  badgeCount?: number;
}

export const navItems: NavItem[] = [
  { icon: bedIcon, label: "Your stay", isActive: true, badgeCount: 1 },
  { icon: houseIcon, label: "The house" },
  { icon: pinIcon, label: "Around town" },
  { icon: breakfastNavIcon, label: "Breakfast" },
  { icon: mailIcon, label: "Messages" },
]