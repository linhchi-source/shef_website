function saveRecipe() {
    const recipe = document.getElementById('recipeTextarea').value;
    localStorage.setItem('savedRecipe', recipe); // Save the recipe text
    alert('Recipe saved!');
}

// Load the recipe from local storage
function loadRecipe() {
    const savedRecipe = localStorage.getItem('savedRecipe'); // Retrieve saved recipe
    if (savedRecipe) {
        document.getElementById('recipeTextarea').value = savedRecipe;
    } else {
        alert('No recipe saved!');
    }
}

// Clear the saved recipe from local storage
function clearRecipe() {
    localStorage.removeItem('savedRecipe'); // Remove saved recipe
    document.getElementById('recipeTextarea').value = ''; // Clear textarea
    alert('Recipe cleared!');
}

// Auto-load saved recipe when the page is loaded (if it exists)
window.onload = function() {
    loadRecipe(); // Attempt to load saved recipe on page load
};
