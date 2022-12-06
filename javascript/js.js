const grade = document.createElement("img");
grade.style.width = "4vh";
grade.style.marginLeft = "2vh";
grade.style.marginRight = "2vh";
grade.setAttribute('src', 'imagens/icones/grade.png');
grade.setAttribute('id', 'grade');
document.getElementById("botoes").appendChild(grade);

const lista = document.createElement("img");
lista.style.width = "4vh";
lista.style.marginLeft = "2vh";
lista.setAttribute('src', 'imagens/icones/listavermelha.png');
lista.setAttribute('id', 'lista');
document.getElementById("botoes").appendChild(lista);

let n = 0;

criar();

document.getElementById("grade").onclick = click_grade;
document.getElementById("lista").onclick = click_lista;

function criar(){
    for (let i = 0; i < 6; i++) {
        n++;
    
        const produtos = document.createElement("div");
        produtos.setAttribute('id', 'produtos' + n);
        produtos.style.width = "160vh";
        produtos.style.height = "35vh";
        produtos.style.borderRadius = "2vh";
        produtos.style.marginTop = "2vh";
        produtos.style.backgroundColor = "white";
        produtos.style.display = "flex";
        produtos.style.flexDirection = "row";
        document.getElementById("display").appendChild(produtos);
    
        const imagem = document.createElement("div");
        imagem.setAttribute('id', 'imagem' + n);
        imagem.style.width = "40vh";
        imagem.style.height = "35vh";
        imagem.style.borderTopLeftRadius = "2vh";
        imagem.style.borderBottomLeftRadius = "2vh";
        imagem.style.textAlign = "center";
        imagem.style.backgroundColor = "whitesmoke";
        document.getElementById("produtos" + n).appendChild(imagem);
    
        const celular = document.createElement("img");
        celular.setAttribute('id', 'celular' + n);
        celular.style.width = "26vh";
        celular.style.marginTop = "5vh";
        document.getElementById("imagem" + n).appendChild(celular);

        const produtos_info = document.createElement("div");
        produtos_info.setAttribute('id', 'produtos-info' + n);
        produtos_info.style.display = "flex";
        produtos_info.style.flexDirection = "row";
        document.getElementById("produtos" + n).appendChild(produtos_info);

        const produto_nome = document.createElement("h1");
        produto_nome.innerHTML = "Samsung";
        produto_nome.style.fontSize = "10vh";
        produto_nome.style.marginTop = "5vh";
        produto_nome.style.marginLeft = "5vh";
        produto_nome.setAttribute('id', 'produto-nome' + n);
        document.getElementById("produtos-info" + n).appendChild(produto_nome);

        const setor_preco = document.createElement("div");
        setor_preco.style.marginTop = "5vh";
        setor_preco.style.marginLeft = "60vh";
        setor_preco.style.width = "auto";
        setor_preco.style.height = "auto";
        setor_preco.style.display = "flex";
        setor_preco.style.flexDirection = "column";
        setor_preco .setAttribute('id', 'setor-preco' + n);
        document.getElementById("produtos-info" + n).appendChild(setor_preco);

        const desconto = document.createElement("s");
        desconto.innerHTML = "R$99,90";
        desconto.style.fontSize = "3vh";
        desconto.style.opacity = "0.4";
        desconto.setAttribute('id', 'desconto' + n);
        document.getElementById("setor-preco" + n).appendChild(desconto);

        const preco = document.createElement("price");
        preco.innerHTML = "R$79,90";
        preco.style.fontSize = "5vh";
        preco.style.marginTop = "1.2vh";
        preco.setAttribute('id', 'preco' + n);
        document.getElementById("setor-preco" + n).appendChild(preco);
    }

    n = 0;
}

function click_grade(){
    
    for (let i = 0; i < 6; i++) {
        n++;
    
        document.getElementById("display").style.display = "grid";
        document.getElementById("display").style.gridTemplateColumns = "auto auto auto";
        document.getElementById("display").style.gap = "5vh";
        document.getElementById("display").style.marginTop = "2vh";

        let modificar_produtos = document.getElementById("produtos" + n);

        modificar_produtos.style.width = "50vh";
        modificar_produtos.style.height = "60vh";
        modificar_produtos.style.marginTop = "0vh";
        modificar_produtos.style.display = "flex";
        modificar_produtos.style.flexDirection = "column";

        let modificar_imagem = document.getElementById("imagem" + n);

        modificar_imagem.style.width = "50vh";
        modificar_imagem.style.height = "30vh";
        modificar_imagem.style.borderTopLeftRadius = "2vh";
        modificar_imagem.style.borderTopRightRadius = "2vh";
        modificar_imagem.style.borderBottomLeftRadius = "0vh";

        let modificar_celular = document.getElementById("celular" + n);

        modificar_celular.style.marginTop = "2vh";

        let modificar_produtos_info = document.getElementById('produtos-info' + n);

        modificar_produtos_info.style.display = "flex";
        modificar_produtos_info.style.flexDirection = "column";

        let modificar_produto_nome = document.getElementById('produto-nome' + n);

        modificar_produto_nome.style.marginBottom = "1vh";

        let modificar_setor_preco = document.getElementById('setor-preco' + n);

        modificar_setor_preco.style.marginTop = "0vh";
        modificar_setor_preco.style.marginLeft = "2vh";

        document.getElementById("grade").setAttribute('src', 'imagens/icones/gradevermelha.png');
        document.getElementById("lista").setAttribute('src', 'imagens/icones/lista.png');
    }

    n = 0;
}

function click_lista(){
    
    for (let i = 0; i < 6; i++) {
        n++;

        document.getElementById("display").style.display = "block";

        let modificar_produtos = document.getElementById("produtos" + n);

        modificar_produtos.style.width = "160vh";
        modificar_produtos.style.height = "35vh";
        modificar_produtos.style.marginTop = "2vh";
        modificar_produtos.style.display = "flex";
        modificar_produtos.style.flexDirection = "row";

        let modificar_imagem = document.getElementById("imagem" + n);

        modificar_imagem.style.width = "40vh";
        modificar_imagem.style.height = "35vh";
        modificar_imagem.style.borderTopLeftRadius = "2vh";
        modificar_imagem.style.borderTopRightRadius = "0vh";
        modificar_imagem.style.borderBottomLeftRadius = "2vh";

        let modificar_celular = document.getElementById("celular" + n);

        modificar_celular.style.marginTop = "5vh";

        let modificar_produtos_info = document.getElementById('produtos-info' + n);

        modificar_produtos_info.style.display = "flex";
        modificar_produtos_info.style.flexDirection = "row";

        let modificar_produto_nome = document.getElementById('produto-nome' + n);

        modificar_produto_nome.style.marginBottom = "initial";

        let modificar_setor_preco = document.getElementById('setor-preco' + n);

        modificar_setor_preco.style.marginTop = "5vh";
        modificar_setor_preco.style.marginLeft = "60vh";

        document.getElementById("grade").setAttribute('src', 'imagens/icones/grade.png');
        document.getElementById("lista").setAttribute('src', 'imagens/icones/listavermelha.png');
    }

    n = 0;
}
