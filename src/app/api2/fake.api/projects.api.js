const data = [
    { id: 1, img: "./assets/2.png", link: "http://inwizo.com/", title: "Inwizo", description: "Desktop, mobile" },
    { id: 2, img: "./assets/4.png", link: "https://natellaverde.github.io/excel/dist/", title: "Excel", description: "Desktop" },
    { id: 3, img: "./assets/3.png", link: "https://natella2902.github.io/Chocco/dist/", title: "Chocco", description: "Desktop, mobile" },
    { id: 4, img: "./assets/5.png", link: "https://natella2902.github.io/LionBank/", title: "Lion bank", description: "Desktop" },
    { id: 5, img: "./assets/1.png", link: "https://natellaverde.github.io/battle-movie/", title: "Movie battle", description: "Desktop" },
    { id: 6, img: "./assets/6.png", link: "https://natella2902.github.io/Vue3_Stepper/", title: "Vue stepper", description: "Desktop" }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(data);
        }, 2000);
    });

export default {
    fetchAll
};
