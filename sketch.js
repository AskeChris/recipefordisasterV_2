let DDcategory;
let textWidth = 500;
let lastMealId;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  let canvasContainer = createDiv().id('canvas-container');
  canvasContainer.child(select('canvas'));
  background(255);
  
  let Btn = createButton("Random Dish!")
    .position((windowWidth-140)/2+75, windowHeight-60, 'fixed')
    .size(140, 30)
    .mousePressed(() => Dish());
  DDcategory = createSelect();
  DDcategory.position((windowWidth-140)/2-75, windowHeight-60, 'fixed')
  DDcategory.size(140, 30);
  ["Miscellaneous", "Vegan", "Dessert", "Vegetarian", "Starter", "Side", "Pasta", "Seafood", "Breakfast", "Goat"].forEach(category => DDcategory.option(category));
}

function Dish() {
  const categoryString = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  loadJSON(categoryString + DDcategory.selected(), Console);
}

function Console(d) {
  background(255);
  textWrap(WORD);

  let randomMeal = random(d.meals);

  if (randomMeal.idMeal === lastMealId) {
    randomMeal = random(d.meals);
  }

  lastMealId = randomMeal.idMeal;

  const idString = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  loadJSON(idString + randomMeal.idMeal, (mealData) => {
    textSize(32);
    text(mealData.meals[0].strMeal, (windowWidth - textWidth) / 2, 75, textWidth);
    textStyle(BOLD);
    textSize(20);
    text("Instructions", (windowWidth - textWidth) / 2, 150, textWidth);
    textSize(12);
    textStyle(BOLD);
    text(mealData.meals[0].strArea.toUpperCase() + " CUISINE", (windowWidth - textWidth) / 2, 55, textWidth);
    textSize(14);
    textStyle(NORMAL);
    text(mealData.meals[0].strInstructions, (windowWidth - textWidth) / 2, 190, textWidth);
  });
}