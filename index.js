const containerElement = document.querySelector(".container");

getRandomRecipe();



async function getRandomRecipe() {
    const response = await fetch("https://mgweek11.onrender.com/random");
    const recipe = await response.json();

    const recipeName = recipe.recipe.recipename;
    const imageUrl = recipe.recipe.imageurl;
    const recipeInstructions = recipe.recipe.instructions;
    const ingredientsArray = recipe.ingredients;


    const recipeImage = document.createElement("img");
    const recipeNameTitle = document.createElement("h2");
    const instructionsBlock = document.createElement("p");
    const ingredientsList = document.createElement("ul");

    ingredientsArray.forEach(ingredient => {
        const ingredientLIElement = document.createElement("li");
        ingredientLIElement.innerHTML = ingredient;
        ingredientsList.appendChild(ingredientLIElement);
    });

    recipeImage.src = imageUrl;
    recipeNameTitle.innerHTML = recipeName;
    instructionsBlock.innerHTML = recipeInstructions;

    const footer = document.createElement("footer");
    footer.innerHTML = "&#169 2023 IAmAwesome All Rights Resered";

    containerElement.appendChild(recipeNameTitle);
    containerElement.appendChild(recipeImage);
    containerElement.appendChild(ingredientsList);
    containerElement.appendChild(instructionsBlock);
    containerElement.appendChild(footer);
    



    console.log(recipeName);
    console.log(imageUrl);
}