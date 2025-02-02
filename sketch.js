let DDcategory;
let textWidth = 600;
let lastMealId;
let mealImage;
let youtubeLinkP;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight * 1.5); // Sørg for at canvas er større end vinduet, så det kan scrolles
  canvas.parent('canvas-container'); // Tilknyt canvas til containeren
  background(255);
  let Btn = createButton("Random Dish!")
    .position((windowWidth - 140) / 2 + 75, windowHeight - 60, 'fixed')
    .size(140, 30)
    .mousePressed(() => Dish());
  DDcategory = createSelect();
  DDcategory.position((windowWidth - 140) / 2 - 75, windowHeight - 60, 'fixed')
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
    let meal = mealData.meals[0];
    mealImage = loadImage(meal.strMealThumb, () => {
      textSize(32);
      textAlign(CENTER);
      text(meal.strMeal, (windowWidth - textWidth) / 2, 75, textWidth);
      textStyle(BOLD);
      textSize(20);
      textAlign(LEFT);
      text("Instructions", (windowWidth - textWidth) / 2 + 200, 150, textWidth);
      text("Ingredients", (windowWidth - textWidth) / 2 - 280, 150, textWidth);
      textSize(12);
      textAlign(CENTER);
      text(meal.strArea.toUpperCase() + " CUISINE", (windowWidth - textWidth) / 2, 55, textWidth);
      textSize(14);
      textStyle(NORMAL);
      textAlign(LEFT);

      // Display the image
      image(mealImage, (windowWidth - textWidth) / 2 - 280, 500, 300, 250, 0, 0, mealImage.width, mealImage.height, COVER);

      text(meal.strInstructions, (windowWidth - textWidth) / 2 + 200, 190, textWidth);

      // Opdater eller skab et nyt link til YouTube videoen
      if (youtubeLinkP) {
        youtubeLinkP.remove();
      }
      youtubeLinkP = createP(`<a href="${meal.strYoutube}" target="_blank">(Watch recipe tutorial on YouTube)</a>`);
      youtubeLinkP.position((windowWidth - textWidth) / 2 + 330, 134);
      youtubeLinkP.style('font-family', 'Arial'); // Sæt fonten til Arial
      youtubeLinkP.parent('canvas-container'); // Tilknyt linket til containeren

      let yPos = 190;
      for (let i = 1; i <= 20; i++) {
        let ingredient = meal[`strIngredient${i}`];
        let measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
          textAlign(LEFT);
          text(ingredient, (windowWidth - textWidth) / 2 - 70, yPos, textWidth);
          text(measure, (windowWidth - textWidth) / 2 - 280, yPos, textWidth);
          yPos += 20;
        }
      }
    });
  });
}