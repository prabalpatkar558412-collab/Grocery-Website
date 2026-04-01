// 📦 Assets
import banana from "../assets/banana.png";
import lettuce from "../assets/lettuce.png";
import eggs from "../assets/eggs.png";
import capsicum from "../assets/capsicum.png";
import beef from "../assets/beef.png";
import cheese from "../assets/cheese.png";
import kiwi from "../assets/kiwi.png";
import eggplant from "../assets/eggplant.png";
import broccoli from "../assets/broccoli.png";
import shrimp from "../assets/shrimp.png";
import salmon from "../assets/salmon.png";
import ricottaCheese from "../assets/ricotta-cheese.png";
import pineapple from "../assets/pineapple.png";
import milk from "../assets/milk.png";
import kale from "../assets/kale.png";
import chickenBreast from "../assets/chicken-breast.png";
import grapes from "../assets/grapes.png";
import condensedMilk from "../assets/condensed-milk.png";
import butter from "../assets/butter.png";
 
export const CATEGORIES = {
  FRUITS: "fruits",
  VEGETABLES: "vegetables",
  DAIRY: "dairy",
  SEAFOOD: "seafood",
};
 
const productList = [
  { id: 1, name: "Banana", price: 3.0, img: banana, category: CATEGORIES.FRUITS },
  { id: 2, name: "Lettuce", price: 3.5, img: lettuce, category: CATEGORIES.VEGETABLES },
  { id: 3, name: "Eggs", price: 2.05, img: eggs, category: CATEGORIES.DAIRY },
  { id: 4, name: "Capsicum", price: 3.0, img: capsicum, category: CATEGORIES.VEGETABLES },
  { id: 5, name: "Beef", price: 6.0, img: beef, category: CATEGORIES.SEAFOOD },
  { id: 6, name: "Cheese", price: 4.5, img: cheese, category: CATEGORIES.DAIRY },
  { id: 7, name: "Kiwi", price: 2.5, img: kiwi, category: CATEGORIES.FRUITS },
  { id: 8, name: "Eggplant", price: 3.2, img: eggplant, category: CATEGORIES.VEGETABLES },
  { id: 9, name: "Broccoli", price: 3.2, img: broccoli, category: CATEGORIES.VEGETABLES },
  { id: 10, name: "Shrimp", price: 5.2, img: shrimp, category: CATEGORIES.SEAFOOD },
  { id: 11, name: "Salmon", price: 7.2, img: salmon, category: CATEGORIES.SEAFOOD },
  { id: 12, name: "Ricotta Cheese", price: 4.2, img: ricottaCheese, category: CATEGORIES.DAIRY },
  { id: 13, name: "Pineapple", price: 3.8, img: pineapple, category: CATEGORIES.FRUITS },
  { id: 14, name: "Milk", price: 2.8, img: milk, category: CATEGORIES.DAIRY },
  { id: 15, name: "Kale", price: 3.2, img: kale, category: CATEGORIES.VEGETABLES },
  { id: 16, name: "Chicken Breast", price: 6.5, img: chickenBreast, category: CATEGORIES.SEAFOOD },
  { id: 17, name: "Grapes", price: 3.6, img: grapes, category: CATEGORIES.FRUITS },
  { id: 18, name: "Condensed Milk", price: 2.9, img: condensedMilk, category: CATEGORIES.DAIRY },
  { id: 19, name: "Butter", price: 3.4, img: butter, category: CATEGORIES.DAIRY },
];

export default productList;