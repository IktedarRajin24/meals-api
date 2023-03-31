const loadMeals = mealId =>{
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealId}`;
    fetch(url).then(response => response.json()).then(data => showMeals(data.meals));
}

const showMeals = meals =>{
   const mealContainer = document.getElementById('meals-container');
   mealContainer.innerHTML = ' ';
    for(const meal in meals){
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div class="card" style="width: 18rem">
                <img src="${meals[meal].strMealThumb}" class="card-img-top img-fluid" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${meals[meal].strMeal}</h5>
                    <p class="card-text">
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
        
        `;
        mealContainer.appendChild(mealDiv);
    }
}

const searchMeals = () =>{
    const showMealField = document.getElementById('meal-id').value;
    loadMeals(showMealField);

}