import {
  STORAGE_KEY_BASKET_ID_LIST,
  STORAGE_KEY_FAVORITE_ID_LIST,
  STORAGE_KEY_ITEM_LIST,
} from "../../constants";
import {
  getObjectFromLocalStorage,
  saveObjectToLocalStorage,
} from "../../helper";
import { v4 as uuidv4 } from "uuid";

const defaultItemList = [
  {
    id: uuidv4(),
    name: "iPhone 12 Mini 64 GB",
    img: "assets/1.png",
    colorOptionCount: 2,
    price: 119.99,
    mark: "Apple",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "iPhone 13 Pro Max 256 GB",
    img: "assets/2.png",
    colorOptionCount: 2,
    price: 109.99,
    mark: "Apple",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "iPhone SE 128 GB",
    img: "assets/3.png",
    colorOptionCount: 2,
    price: 129.99,
    mark: "Apple",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "iPhone 13 256 GB",
    img: "assets/4.png",
    colorOptionCount: 2,
    price: 139.99,
    mark: "Apple",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "iPhone 13 Pro Max 128 GB",
    img: "assets/1.png",
    colorOptionCount: 2,
    price: 159.99,
    mark: "Apple",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "iPhone 11 64 GB",
    img: "assets/2.png",
    colorOptionCount: 2,
    price: 169.99,
    mark: "Apple",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "iPhone 13 128 GB",
    img: "assets/3.png",
    colorOptionCount: 2,
    price: 189.99,
    mark: "Apple",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "iPhone 12 64 GB",
    img: "assets/4.png",
    colorOptionCount: 2,
    price: 179.99,
    mark: "Apple",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "iPhone 13 Pro 256 GB",
    img: "assets/1.png",
    colorOptionCount: 2,
    price: 109.99,
    mark: "Apple",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "iPhone SE 64 GB",
    img: "assets/2.png",
    colorOptionCount: 2,
    price: 89.99,
    mark: "Apple",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "iPhone 12 Pro Max 128 GB",
    img: "assets/3.png",
    colorOptionCount: 2,
    price: 199.99,
    mark: "Apple",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "iPhone 12 256 GB",
    img: "assets/4.png",
    colorOptionCount: 2,
    price: 219.99,
    mark: "Apple",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "iPhone 12 Pro 512 GB",
    img: "assets/1.png",
    colorOptionCount: 2,
    price: 209.99,
    mark: "Apple",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "iPhone XR 64 GB",
    img: "assets/2.png",
    colorOptionCount: 2,
    price: 89.99,
    mark: "Apple",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "iPhone 7 32 GB",
    img: "assets/3.png",
    colorOptionCount: 2,
    price: 99.99,
    mark: "Apple",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "iPhone 7 Plus 32 GB",
    img: "assets/4.png",
    colorOptionCount: 2,
    price: 69.99,
    mark: "Apple",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Samsung Galaxy M22 128 GB",
    img: "assets/1.png",
    colorOptionCount: 2,
    price: 239.99,
    mark: "Samsung",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Samsung Galaxy M12 128 GB",
    img: "assets/2.png",
    colorOptionCount: 2,
    price: 239.99,
    mark: "Samsung",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Samsung Galaxy M21 64 GB",
    img: "assets/3.png",
    colorOptionCount: 2,
    price: 249.99,
    mark: "Samsung",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Samsung Galaxy M52 5G 128 GB",
    img: "assets/4.png",
    colorOptionCount: 2,
    price: 259.99,
    mark: "Samsung",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Samsung Galaxy A21s 64 GB",
    img: "assets/1.png",
    colorOptionCount: 2,
    price: 269.99,
    mark: "Samsung",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Samsung Galaxy S20 FE 256 GB Snapdragon",
    img: "assets/2.png",
    colorOptionCount: 2,
    price: 279.99,
    mark: "Samsung",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Samsung Galaxy M12 64 GB",
    img: "assets/3.png",
    colorOptionCount: 2,
    price: 289.99,
    mark: "Samsung",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Samsung Galaxy Note 20 Ultra 256 GB",
    img: "assets/4.png",
    colorOptionCount: 2,
    price: 269.99,
    mark: "Samsung",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Samsung Galaxy S20 FE 128 GB Snapdragon",
    img: "assets/1.png",
    colorOptionCount: 2,
    price: 279.99,
    mark: "Samsung",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Samsung Galaxy A22 64 GB",
    img: "assets/1.png",
    colorOptionCount: 2,
    price: 299.99,
    mark: "Samsung",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Samsung Galaxy A02s 32 GB",
    img: "assets/2.png",
    colorOptionCount: 2,
    price: 309.99,
    mark: "Samsung",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Samsung Galaxy S21 Plus 5G 128 GB",
    img: "assets/3.png",
    colorOptionCount: 2,
    price: 319.99,
    mark: "Samsung",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Oppo A73 128 GB",
    img: "assets/4.png",
    colorOptionCount: 2,
    price: 329.99,
    mark: "Oppo",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Oppo A12 32 GB",
    img: "assets/1.png",
    colorOptionCount: 2,
    price: 329.99,
    mark: "Oppo",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Oppo A16 32 GB 3 GB Ram",
    img: "assets/2.png",
    colorOptionCount: 2,
    price: 339.99,
    mark: "Oppo",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Oppo Reno 4 Pro 256 GB",
    img: "assets/3.png",
    colorOptionCount: 2,
    price: 119.99,
    mark: "Oppo",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Oppo A15 32 GB",
    img: "assets/4.png",
    colorOptionCount: 2,
    price: 349.99,
    mark: "Oppo",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Oppo A55 64 GB 4 GB Ram",
    img: "assets/1.png",
    colorOptionCount: 2,
    price: 359.99,
    mark: "Oppo",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Oppo A13 32 GB",
    img: "assets/4.png",
    colorOptionCount: 2,
    price: 399.99,
    mark: "Oppo",
    color: "Siyah",
  },
  {
    id: uuidv4(),
    name: "Oppo A59 64 GB 4 GB Ram",
    img: "assets/1.png",
    colorOptionCount: 2,
    price: 357.99,
    mark: "Oppo",
    color: "Siyah",
  },
];

const itemList =
  getObjectFromLocalStorage(STORAGE_KEY_ITEM_LIST) || defaultItemList;
saveObjectToLocalStorage(STORAGE_KEY_ITEM_LIST, itemList);

const basketIDList =
  getObjectFromLocalStorage(STORAGE_KEY_BASKET_ID_LIST) || [];
const favoriteIDList =
  getObjectFromLocalStorage(STORAGE_KEY_FAVORITE_ID_LIST) || [];

const initialState = {
  itemList: itemList,
  basketIDList: basketIDList,
  favoriteIDList: favoriteIDList,
  searchString: "",
};

export default initialState;
