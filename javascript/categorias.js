const categorias_nomes = ["Serviços", "Eletronicos", "Acessorios", "Smartphones"];
const enderecos = ["serviços.html", "eletronicos.html", "acessorios.html", "smartphones.html"];
const categorias = document.getElementById("mais-categorias");
const seta = document.getElementById("seta");
const categoria_nome = document.getElementById("categoria-nome").innerText;

let click = 0;

criar();

document.getElementById("mais-categorias").onclick = visibilidade;

function criar(){
    categorias.style.transitionDelay = "0.01s";
    categorias.style.transitionDuration = "0.5s";

    for(let i = 0; i < categorias_nomes.length; i++){

        let nomes = categorias_nomes[i];
        let endereco = enderecos[i];

        const outras_categorias = document.createElement("a");

        outras_categorias.innerHTML = nomes;
        outras_categorias.style.fontSize = "3vh";
        outras_categorias.style.color = "white";
        outras_categorias.style.display = "none";
        outras_categorias.style.marginTop = "3vh";
        outras_categorias.setAttribute('id', 'outras-categorias' + i);
        outras_categorias.setAttribute('href', endereco);

        document.getElementById("mais-categorias").appendChild(outras_categorias);
    }    
}

function visibilidade(){
    click++;

    if(click == 1){
        seta.style.transform = "rotateX(180deg)";
        seta.style.transitionDelay = "0.01";
        seta.style.transitionDuration = "0.5s";

        for(let i = 0; i < categorias_nomes.length; i++){
            if(categoria_nome.normalize() === categorias_nomes[i].normalize()){
                document.getElementById("outras-categorias" + i).style.display = "none";
            }

            else{
                document.getElementById("outras-categorias" + i).style.display = "block";
            }
        }
    }
    
    else{
        document.getElementById("seta").style.transform = "rotate(0deg)";

        for(let i = 0; i < categorias_nomes.length; i++){
            document.getElementById("outras-categorias" + i).style.display = "none";
        }

        click = 0;
    }
}