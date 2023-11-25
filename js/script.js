// boton y listaº
const fetchJoke = document.getElementById('fetchJoke');
const jokeList = document.getElementById('jokeList');
let arrChiste = [];
let parsedJokes = [];



document.addEventListener('DOMContentLoaded', () => {
    const storedJokes = localStorage.getItem("Chistes");
    if (storedJokes) {
        // los datos del localStorage lo pasamos a un array 'parsedJokes'
        parsedJokes = JSON.parse(storedJokes);
        console.log(parsedJokes);
        // recorremos el array y vamos pintando en html
        parsedJokes.forEach(chisteRecarga => {
            jokeList.innerHTML += `<li>${chisteRecarga}<button class='btnBorrar'>Borrar Chiste</button></li>`;

        })
    }
})



fetchJoke.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => {
            if (!response.ok) {
                throw new Error('La solicitud ha fallado');
            }
            return response.json();
        })
        .then((data) => {
            // console.log(data);
            arrChiste.push(data.value);
            //console.log(arrChiste);
            // pasamos el array a string para almacenarlo en el localStorage
            localStorage.setItem("Chistes", JSON.stringify(arrChiste));
            const chistesAlmParse = JSON.parse(localStorage.getItem("Chistes"));
            console.log(chistesAlmParse);
            const [ultmimoChiste] = chistesAlmParse.slice(-1);
            let pintarHtml = `<li>${ultmimoChiste}<button class='btnBorrar'>Borrar Chiste</button></li>`;
            jokeList.innerHTML += pintarHtml;
        })

})






// chiste.length -1
/*  chistesAlmParse.forEach(chiste => {
                console.log(chiste);
                const ultimoChiste = chiste[chiste.lenght - 1];
                if (ultimoChiste != 'undefined') {
                    console.log(ultimoChiste);
                    let pintarHtml = `<li>${ultimoChiste}</li>`;
                    jokeList.innerHTML += pintarHtml;
                }
 */