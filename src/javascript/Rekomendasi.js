import './daftar.js';
const gethot = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllhot(responseJson.meals);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        })
}
const renderAllhot = (meals) => {
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
const hot = document.querySelector("#hot");
hot.addEventListener('click', function (event) {
    gethot();
    const text = document.querySelector("h1");
    text.innerHTML = "Hot Tranding saat ini"

})