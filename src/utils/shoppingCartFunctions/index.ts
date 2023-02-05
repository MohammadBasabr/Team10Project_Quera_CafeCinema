import movies from "../../movies";

let shoppingCartValue: any;

if (localStorage.getItem("shoppingCart")) {
  const existedObj: any = localStorage.getItem("shoppingCart");
  shoppingCartValue = JSON.parse(existedObj);
} else {
  shoppingCartValue = {};
}

export const addToCardHandler = (id: number): void => {
  const movie = movies[id];
  let count;
  if (movie.id in shoppingCartValue) {
    count = shoppingCartValue[movie.id];
    shoppingCartValue = { ...shoppingCartValue, [movie.id]: count + 1 };
  } else {
    count = 1;
    shoppingCartValue = { ...shoppingCartValue, [movie.id]: count };
  }
  count++;
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartValue));
};

export const removeFromCardHandler = (id: number): void => {};
export const deleteFromCardHandler = (id: number): void => {
  const targetProps = movies[id].id;
  delete shoppingCartValue[movies[id].id];
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartValue));
  console.log(shoppingCartValue);
};
