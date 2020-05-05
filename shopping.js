var carts=document.getElementsByClassName("blue-btn");


for(let i=0;i<carts.length;i++){
  /*essai2 pour total
var priceProduct = document.getElementsByClassName("price")
var total = parseInt(document.querySelector(".total p span"))

fin essai2*/

    var nbr=parseInt(document.querySelector(".cart a span").innerHTML);
    console.log(nbr);
    console.log(typeof(nbr));
    var element=carts[i];
    element.addEventListener("click", () =>{
        nbr=nbr+1
    document.querySelector(".cart a span").innerHTML=nbr; 
    console.log(nbr);  
    /*essai2 pour total
    total = total + parseInt(priceProduct.innerHTML)
    document.querySelector(".total p span") = total
    console.log(total)
    */
 })
}

/* essai 1 pour total
var carts=document.getElementsByClassName("blue-btn");
  for(let i=0;i<carts.length;i++){
    var element=carts[i] 
    var sum=parseInt(document.querySelector(".total p span").innerHTML,10);
    element.addEventListener("click",function(event){
     var elementClick=event.target;
     var priceElement=elementClick.previousElementSibling;
     var price=parseInt(priceElement.innerText);
     sum=sum+price;
    })
}
*/
