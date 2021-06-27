'use strict';







let seattle = {

name :'seattle',
mincus :23,
maxcus :65,
avgcookiescustomer :6.3,
customershour :0,
purchasedinhour:0,
result :[],

getNumber: function (min, max){

    seattle.customerhour=Math.floor(Math.random() * (max - min + 1) + min);
},


getpurchased:function(min,max){
seattle.purchasedinhour=math.ceil(seattle.avgcookiescustomer * getNumber(min,max));
return seattle.purchasedinhour ;

},

render:function(){

    let divEl=document.getElementById('deleciuscookes');
    let articleEl=document.createElement('article');
    divEl.appendChild(articleEl);

    let h2El=document.createElement('h2');
    articleEl.appendChild (h2El);

}








}
