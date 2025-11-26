class Otazka {
    constructor(jmeno_otazky, obrazek, id, otazky, spravna_odpoved) {
        this.jmeno_otazky = jmeno_otazky;
        this.obrazek = obrazek;
        this.id = id;
        this.otazky = otazky;
        this.spravna_odpoved = spravna_odpoved;
    }
}

seznam_otazek = {
    otazka0:["Čáp", "obrazek", 0, ["Option 1\n", "Option 2\n", "Option 3", "Option 4"], 0],
    otazka1:["Bobr", "obrazek", 0, ["Option 1\n", "Option 2\n", "Option 3", "Option 4"], 1]}

otazka = ""

function hrat() {
    function vyhodnot(tip) {
        if (tip == otazka.spravna_odpoved) {
            text.innerText = "To je správná odpověď";
        } else {
            text.innerText = "To je špatně!!!!";
        }
    }

    function dalsi() {
        random_otazka = Math.floor(Math.random() * Object.keys(seznam_otazek).length);

        otazka = new Otazka(seznam_otazek["otazka" + random_otazka][0], seznam_otazek["otazka" + random_otazka][1], seznam_otazek["otazka" + random_otazka][2], seznam_otazek["otazka" + random_otazka][3], seznam_otazek["otazka" + random_otazka][4]);
        delete seznam_otazek["otazka" + random_otazka];

        document.getElementById("otazka_element").innerText = otazka.jmeno_otazky;
        for (let i = 0; i < 4; i++) {
            document.getElementById("otazka_button").remove();
        }

        for (let i = 0; i < otazka.otazky.length; i++) {
            const para = document.createElement("button");
            para.innerText = otazka.otazky[i];
            para.id = "otazka_button"
            para.addEventListener("click", () => vyhodnot(i));
            document.body.appendChild(para);

            document.body.appendChild(document.createElement("br"));
        }
    }

    function zobrazeni_otazky() {
        random_otazka = Math.floor(Math.random() * Object.keys(seznam_otazek).length);

        otazka = new Otazka(seznam_otazek["otazka" + random_otazka][0], seznam_otazek["otazka" + random_otazka][1], seznam_otazek["otazka" + random_otazka][2], seznam_otazek["otazka" + random_otazka][3], seznam_otazek["otazka" + random_otazka][4]);
        delete seznam_otazek["otazka" + random_otazka];

        document.getElementById("hrat_button").style.display = "none";
        document.getElementById("otazka_element").innerText = otazka.jmeno_otazky;

        for (let i = 0; i < otazka.otazky.length; i++) {
            const para = document.createElement("button");
            para.innerText = otazka.otazky[i];
            para.id = "otazka_button"
            para.addEventListener("click", () => vyhodnot(i));
            document.body.appendChild(para);

            document.body.appendChild(document.createElement("br"));
        }
    }

    zobrazeni_otazky()

    const text = document.createElement("p");
    document.body.appendChild(text);

    const dalsi_button = document.createElement("button");
    dalsi_button.addEventListener("click", () => dalsi());
    dalsi_button.innerText = "Další otázka";
    document.body.appendChild(dalsi_button);
}