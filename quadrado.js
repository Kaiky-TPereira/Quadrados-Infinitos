// for (var i = 0; i < 100; i++) {
//     ctx.beginPath();
//     ctx.fillStyle = "rgba(255,0,0,0.5)";
//     ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//     ctx.fill();
//   }

//   ctx.beginPath();
// ctx.fillStyle = "rgba(255,0,0,0.5)";
// ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
// ctx.fill();

        //     function clickBotao(){
        //         let nomePessoa = document.getElementById("nomePessoa");

        //         let campoNomeCompleto = document.createElement("input");

        //         campoNomeCompleto.setAttribute("type", "text");
        //         let colunaNomeCompleto = document.getElementById("colunaNomeCompleto");
        //         colunaNomeCompleto.appendChild(campoNomeCompleto);
        //         campoNomeCompleto.value = nomeCompleto;
        //         console.log(nomePessoa);
        //         nomePessoa.style.color = "white";
        //         nomePessoa.style.backgroundColor = "blue";
        //         console.log(nomeCompleto);
        //   

function clickQuadrado(){
    let gerarQuadrado = document.createElement("div");
    gerarQuadrado.style.width = "70px";
    gerarQuadrado.style.height = "70px";
    gerarQuadrado.style.backgroundColor = "#" + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, "0");
    gerarQuadrado.style.display = "inline-block";
    let borda = document.getElementById("borda");
    gerarQuadrado.addEventListener('click', clickQuadrado);
    // quadrado = document.createElement("input");
    // quadrado.setAttribute("style","width:70px","height:70px","backgroundColor: random()");
    
    borda.appendChild(gerarQuadrado);
}