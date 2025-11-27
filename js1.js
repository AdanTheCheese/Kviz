class Otazka {
    constructor(data) {
        this.jmeno_otazky = data[0];
        this.obrazek = data[1];
        this.id = data[2];
        this.otazky = data[3];
        this.spravna_odpoved = data[4];
    }
}

seznam_otazek = [
    ["Čáp", "obrazek", 0, ["Option 1", "Option 2", "Option 3", "Option 4"], 0],
    ["Bobr", "obrazek", 0, ["Option 1", "Option 2", "Option 3", "Option 4"], 1]
]

otazka = ""

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min));
}

function hrat() {
    content_div = document.getElementById("content_div");

    function vyhodnot(tip) {
        text = document.getElementById("text");
        if (tip == otazka.spravna_odpoved) {
            if (document.getElementById("dalsi") == null && seznam_otazek.length != 0) {
                createNextButton();
            } else if (seznam_otazek.length === 0) {
               return text.innerText = "Posledná otázka. To je správná odpověď.";
            }
            return text.innerText = "To je správná odpověď.";
        } else {
            return text.innerText = "To je špatně!!!!";
        }
    }

    function createNextButton() {
        const dalsi_button = document.createElement("button");
        dalsi_button.setAttribute("id", "dalsi");
        dalsi_button.addEventListener("click", () => dalsi());
        dalsi_button.innerText = "Další otázka";
        content_div.appendChild(dalsi_button);
    }

    function createText() {
        const text = document.createElement("p");
        text.setAttribute("id", "text");
        content_div.appendChild(text);
    }

    function dalsi() {
        random_otazka = randomInt(0, seznam_otazek.length);
        otazka = new Otazka(seznam_otazek[random_otazka]);
        seznam_otazek.splice(random_otazka, 1);

        document.getElementById("dalsi").remove();
        document.getElementById("text").remove();
        document.getElementById("otazka_element").innerText = otazka.jmeno_otazky;
        for (let i = 0; i < 4; i++) {
            document.getElementById("otazka_button").remove();
        }
        
        for (let i = 0; i < otazka.otazky.length; i++) {
            const para = document.createElement("button");
            para.innerText = otazka.otazky[i];
            para.id = "otazka_button"
            para.addEventListener("click", () => vyhodnot(i));
            content_div.appendChild(para);
        }

        createText();
    }

    function zobrazeni_otazky() {
        random_otazka = randomInt(0, seznam_otazek.length);
        console.log(random_otazka, seznam_otazek.length);
        otazka = new Otazka(seznam_otazek[random_otazka]);
        seznam_otazek.splice(random_otazka, 1);

        document.getElementById("hrat_button").style.display = "none";
        document.getElementById("otazka_element").innerText = otazka.jmeno_otazky;

        for (let i = 0; i < otazka.otazky.length; i++) {
            const para = document.createElement("button");
            para.innerText = otazka.otazky[i];
            para.id = "otazka_button"
            para.addEventListener("click", () => vyhodnot(i));
            content_div.appendChild(para);
        }
    }

    zobrazeni_otazky();
    createText();
}
