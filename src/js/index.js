const chave = "535049b7fbd320985669faf3a462e2b0"

function colocarDadosNaTela(dados) {

    document.querySelector(".res-cidade").innerHTML = "Tempo em " + dados.name

    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "°C"

    document.querySelector(".tempo").innerHTML = dados.weather[0].description

    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-temp").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`
}

async function buscarDados(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    colocarDadosNaTela(dados)
    console.log(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".cidade").value

    buscarDados(cidade)
}