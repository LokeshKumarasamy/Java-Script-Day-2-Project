function add()
{
    let a=parseInt(document.getElementById("N1").value);
    let b=parseInt(document.getElementById("N2").value); 
    let c=a+b;
    document.getElementById("button1").innerHTML="Addition is "+c;
}
function sub()
{
    let a=parseInt(document.getElementById("N1").value);
    let b=parseInt(document.getElementById("N2").value); 
    let c=a-b;
    document.getElementById("button2").innerHTML="Substraction is "+c;
}
function mul()
{
    let a=parseInt(document.getElementById("N1").value);
    let b=parseInt(document.getElementById("N2").value); 
    let c=a*b;
    document.getElementById("button3").innerHTML="Multiplication is "+c;
}
function div()
{
    let a=parseInt(document.getElementById("N1").value);
    let b=parseInt(document.getElementById("N2").value); 
    let c=a/b;
    document.getElementById("button4").innerHTML="Division is "+c;
}