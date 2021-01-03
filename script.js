'use strict';

const adv = document.querySelectorAll('.promo__adv img');
const poster = document.querySelector(".promo__bg");
const genre = poster.querySelector(".promo__genre");
const add = document.querySelector(".add");
const button = add.querySelector("button");
const input = add.querySelectorAll("input");
const deleeteFilm = document.querySlector(".delete");
const movieList = document.querySelector(".promo__interactive-list");
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};



adv.forEach(item => {
	item.remove();
});

genre.textContent = "драма";

poster.style.backgroundImage = "url('img/bg.jpg')";

addFilms();

function addFilms() {
    movieList.innerHTML = "";

    movieDB.movies.sort();

    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
                </li>
        `;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
        btn.addEventListener("click", (event) => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            addFilms();
        });
    });
}

let i = 0;

button.addEventListener('click', (event) => {
	event.preventDefault();

	if (input[0].value != "") {
        if (input[0].value.length > 21) {
            movieDB.movies.push(input[0].value.slice(0, 21) + "...");
            addFilms();
        } else {
            movieDB.movies.push(input[0].value);
            localStorage.setItem(i, input[0].value);
            i++;
            addFilms();
        }
        chekboxValue();  
    }
});

function chekboxValue() {
    if (input[1].checked == true) {
        console.log('Добавляем любимый фильм');
    }
}

deleteFilm.addEventListener('click', (event) => {
    event.preventDefault();

    event.target.parentElement.remove();
});
