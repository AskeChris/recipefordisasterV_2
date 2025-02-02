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
    text(mealData.meals[0].strIngredient1, 200, 350, 600);
    text(mealData.meals[0].strMeasure1, 20, 350, 600);
    text(mealData.meals[0].strIngredient2, 200, 370, 600);
    text(mealData.meals[0].strMeasure2, 20, 370, 600);
    text(mealData.meals[0].strIngredient3, 200, 390, 600);
    text(mealData.meals[0].strMeasure3, 20, 390, 600);
    text(mealData.meals[0].strIngredient4, 200, 410, 600);
    text(mealData.meals[0].strMeasure4, 20, 410, 600);
    text(mealData.meals[0].strIngredient5, 200, 430, 600);
    text(mealData.meals[0].strMeasure5, 20, 430, 600);
    text(mealData.meals[0].strIngredient6, 200, 450, 600);
    text(mealData.meals[0].strMeasure6, 20, 450, 600);
    text(mealData.meals[0].strIngredient7, 200, 470, 600);
    text(mealData.meals[0].strMeasure7, 20, 470, 600);
    text(mealData.meals[0].strIngredient8, 200, 490, 600);
    text(mealData.meals[0].strMeasure8, 20, 490, 600);
    text(mealData.meals[0].strIngredient9, 200, 510, 600);
    text(mealData.meals[0].strMeasure9, 20, 510, 600);
    text(mealData.meals[0].strIngredient10, 200, 530, 600);
    text(mealData.meals[0].strMeasure10,20, 530, 600);
    text(mealData.meals[0].strIngredient11, 200, 550, 600);
    text(mealData.meals[0].strMeasure11, 20, 550, 600);
    text(mealData.meals[0].strIngredient12, 200, 570, 600);
    text(mealData.meals[0].strMeasure12, 20, 570, 600);
    text(mealData.meals[0].strIngredient13, 200, 590, 600);
    text(mealData.meals[0].strMeasure13, 20, 590, 600);
    text(mealData.meals[0].strIngredient14, 200, 610, 600);
    text(mealData.meals[0].strMeasure14, 20, 610, 600);
    text(mealData.meals[0].strIngredient15, 200, 630, 600);
    text(mealData.meals[0].strMeasure15, 20, 630, 600);
    text(mealData.meals[0].strIngredient16, 200, 650, 600);
    text(mealData.meals[0].strMeasure16, 20, 650, 600);
    text(mealData.meals[0].strIngredient17, 200, 670, 600);
    text(mealData.meals[0].strMeasure17, 20, 670, 600);
    text(mealData.meals[0].strIngredient18, 200, 690, 600);
    text(mealData.meals[0].strMeasure18, 20, 690, 600);
    text(mealData.meals[0].strIngredient19, 200, 710, 600);
    text(mealData.meals[0].strMeasure19, 20, 710, 600);
    text(mealData.meals[0].strIngredient20, 200, 730, 600);
    text(mealData.meals[0].strMeasure20, 20, 730, 600);
  
  });
}