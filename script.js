const matchas = [
    { name: "Matcha1", desc: "Matcha1 Description:", rating: 5, image: "images/matcha.jpg" },
    { name: "Matcha2", desc: "Matcha2 Description:", rating: 4, image: "images/matcha.jpg" },
    { name: "Matcha3", desc: "Matcha3 Description:", rating: 2, image: "images/matcha.jpg" }
];

const matchaList = document.getElementById("matcha-list");

matchas.forEach(matcha => {
    const card = document.createElement("div");
    card.classList.add("matcha-card");
    card.innerHTML = `<img src="${matcha.image}" alt="${matcha.name}">
                    <div class="matcha-info">
                        <h3>${matcha.name}</h3>
                        <p>${matcha.desc}</p}
                    </div>
                    <div class="rating">${matcha.rating}</div>
                `;
    matchaList.append(card);
});


document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to the Matcha Latte page!");
});