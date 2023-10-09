mensagem = (msg) => alert (msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div = (a,b) => a / b;
raiz = x => Math.sqrt(x);

let a = "";
let b = "";
let valor = "";
let temPonto = false;
let desligada = true;

function porcentagem(){
    if(executa =="mult"){
        b = valor;
        escrever_display(div(mult(a,b),100));
        b = "";
        valor = "";
    }
}

function raiz_quadrada (){
    escrever_display(raiz(valor));
    valor = "";
}

function onoff(){
    if(desligada){
        zerar ();
        desligada = true;
       }else{
          zerar();
          desligada = true;
    }

}

function zerar(){
    a = "";
    b = "";
    valor = "";
    temPonto = "";
    escrever_display(0);
}

function escrever_display(num) {
    document.getElementById("resultado").value = num;
}
function digitando(tecla){
   if( tecla == "."){
    if(!temPonto){
        temPonto = true;
        valor += tecla;
        escrever_display(valor);
    }
    return;
}
    valor += tecla;
    escrever_display(valor);
}
let executa = "";
function operacao(op){
    executa = op;
    valor = "";
    temPonto = false;
}
function calcula() {
    if(executa != ""){
        b=valor;
        if(executa == "mult") escrever_display(mult(a,b));
        if(executa == "div") escrever_display(div(a,b));
        if(executa == "sub") escrever_display(sub(a,b));
        if(executa == "soma") escrever_display(soma(Number(a),Number(b)));
        a = "";
        b = "";
        valor = ""
        temPonto = false;
    }
    
}