import './daftar.js';
const getCategory = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllmeals(responseJson.categories);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        })
}

const renderAllmeals = (categories) => {
    const listBookElement = document.querySelector("meal-item");
    listBookElement.innerHTML = "";

    categories.forEach(meal => {
        listBookElement.innerHTML += `
                            <section section class="${meal.strCategory} card" >
                                <a id="${meal.strCategory}">
                                    <img src = "${meal.strCategoryThumb}" alt = "${meal.strCategory}" class = "cocok" >
                                    <p>${meal.strCategory}</p>
                                </a>
                            </section>
            `;
    });
};

const kategori = document.querySelector("#kategori");
kategori.addEventListener('click', (event => {
    const text = document.querySelector("h1");
    text.innerHTML = "Daftar Katagori Menu"
    getCategory();
}))