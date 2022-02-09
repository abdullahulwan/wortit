import './daftar.js';
const SearchMeals = (key) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${key}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllsearch(responseJson.meals);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        })
}
const renderAllsearch = (meals) => {
    const listBookElement = document.querySelector("meal-item");
    listBookElement.innerHTML = "";

    meals.forEach(meal => {
        listBookElement.innerHTML += `
                            <section section class="${meal.strMeal} card" >
                                <a href="${meal.strYoutube}">
                                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="cocok">
                                    <p>${meal.strMeal}</p>
                                </a>
                                <p>country : ${meal.strArea}</p>
                            </section>
            `;
    });
};
const keyword1 = document.querySelector("#search1");
keyword1.addEventListener("keyup", (event => {
    const text = document.querySelector("h1");
    text.innerHTML = `Anda Mencari "${keyword1.value}"`
    SearchMeals(keyword1.value)
}))
const keyword2 = document.querySelector("#search2");
keyword2.addEventListener("keyup", (event => {
    const text = document.querySelector("h1");
    text.innerHTML = `Anda Mencari "${keyword2.value}"`
    SearchMeals(keyword2.value)
}))
const keyword3 = document.querySelector("#search3");
keyword3.addEventListener("keyup", (event => {
    const text = document.querySelector("h1");
    text.innerHTML = `Anda Mencari "${keyword3.value}"`
    SearchMeals(keyword3.value)
}))