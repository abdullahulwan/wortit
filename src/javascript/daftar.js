const getmeals = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllmeals(responseJson.meals);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        })
}
const renderAllmeals = (meals) => {
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
const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
};
class DaftarMeals extends HTMLElement {}
const meal = document.querySelector("meal-item");
if (!meal) {
    const Meal = document.createElement("meal-item");
    customElements.define("meal-item", DaftarMeals);
    document.querySelector("article").appendChild(Meal);
    getmeals();
}
const home = document.querySelector("#home");
home.addEventListener('click', function (event) {
    const text = document.querySelector("h1");
    text.innerHTML = "Daftar Menu"
    getmeals();
})