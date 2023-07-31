let searchform =document.querySelector('.search_form');
document.querySelector('#search').onclick = () =>
{
searchform.classList.toggle('active');
navbar.classList.remove('active');
shopping.classList.remove('active');
login.classList.remove('active');



}


let shopping =document.querySelector('.shopping_cart');
document.querySelector('#shooping_cart').onclick = () =>
{
shopping.classList.toggle('active');
searchform.classList.remove('active');

login.classList.remove('active');
navbar.classList.remove('active');


}


let login =document.querySelector('.singup');
document.querySelector('#user').onclick = () =>
{
login.classList.toggle('active');
searchform.classList.remove('active');
shopping.classList.remove('active');

navbar.classList.remove('active');


}


let navbar =document.querySelector('.navbar');
document.querySelector('#menu_btn').onclick = () =>
{
navbar.classList.toggle('active');
searchform.classList.remove('active');
shopping.classList.remove('active');
login.classList.remove('active');



}





window.onscroll = () =>
{
searchform.classList.remove('active');
shopping.classList.remove('active');
login.classList.remove('active');
navbar.classList.remove('active');


}


// silder code 



