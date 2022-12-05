criar();

document.getElementById("adicionar").onclick = click_adicionar;

function criar(){
    const adicionar_page = document.createElement("div");
    adicionar_page.style.width = "160vh";
    adicionar_page.style.height = "150vh";
    adicionar_page.style.marginTop = "4vh";
    adicionar_page.style.backgroundColor = "whitesmoke";
    adicionar_page.setAttribute('id', 'adicionar-page');
    adicionar_page.style.display = "none";
    document.getElementById("display").appendChild(adicionar_page);
}

function click_adicionar(){
    click++;

    if(click == 1){
        for(let i = 0; i < 6; i++){
            n++;
    
            const produtos = document.getElementById("produtos" + n);
            produtos.style.display = "none";
        }
    
        document.getElementById("adicionar-page").style.display = "block";
        document.getElementById("lista").style.display = "none";
        document.getElementById("grade").style.display = "none";
    }
    
    else{
        for(let i = 0; i < 6; i++){
            n++;
    
            const produtos = document.getElementById("produtos" + n);
            produtos.style.display = "block";
        }
        
        document.getElementById("adicionar-page").style.display = "none";
        document.getElementById("lista").style.display = "block";
        document.getElementById("grade").style.display = "block";
        
        click = 0;
    }

    n = 0;
}