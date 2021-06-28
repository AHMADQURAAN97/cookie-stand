'use strict';


let openhours = ['6am', '7am', '8am', '9am', '10am', '11am', '12bm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// FIRST LOCATION


let seattle =  {

name :'seattle',
mincus :23,
maxcus :65,
avgcookiescustomer :6.3,
randomcustomer :[],
cookiesinhour:[],
total:0,

randcushour: function (min, max){
    
      for (let i=0;i < openhours.length;i++) {
          
        let min = Math.ceil(this.mincus);
        let max = Math.floor(this.maxcus);
      let randomcustomer =   Math.floor(Math.random() * (max - min + 1) + min);
 
    this.randomcustomer.push (randomcustomer);

      }
      
},


getpurchased: function () {
    for (let i = 0 ; i < openhours.length; i++) {

 this.cookiesinhour[i]=Math.ceil(this.randomcustomer[i] * this.avgcookiescustomer);
 this.total = this.total + this.cookiesinhour[i];
 
}

},

render:function(){

    let divEl=document.getElementById('deleciuscookes');
    let h2El =document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent=this.name;

    let ulEl=document.createElement('ul');
    divEl.appendChild(ulEl);
    for (let i=0;i<openhours.length;i++) {
        let liEl=document.createElement('li')
        
        liEl.textContent=`${openhours[i]} ${this.cookiesinhour[i]}`;
        ulEl.appendChild(liEl);
    }


    let totalEl=document.createElement('li');
    totalEl.textContent="total" + this.total +'Cookies';
    ulEl.appendChild(totalEl);

 }

}
console.log(seattle);
seattle.randcushour();
seattle.getpurchased();
seattle.render();

// SECOND LOCATION



let Tokyo =  {

name :'Tokyo',
mincus :23,
maxcus :65,
avgcookiescustomer :6.3,
randomcustomer :[],
cookiesinhour:[],
total:0,

randcushour: function (min, max){
    
      for (let i=0;i < openhours.length;i++) {
          
        let min = Math.ceil(this.mincus);
        let max = Math.floor(this.maxcus);
      let randomcustomer =   Math.floor(Math.random() * (max - min + 1) + min);
 
    this.randomcustomer.push (randomcustomer);

      }
      
},


getpurchased: function () {
    for (let i = 0 ; i < openhours.length; i++) {

 this.cookiesinhour[i]=Math.ceil(this.randomcustomer[i] * this.avgcookiescustomer);
 this.total = this.total + this.cookiesinhour[i];
 
}

},

render:function(){

    let divEl=document.getElementById('deleciuscookes');
    let h2El =document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent=this.name;

    let ulEl=document.createElement('ul');
    divEl.appendChild(ulEl);
    for (let i=0;i<openhours.length;i++) {
        let liEl=document.createElement('li')
        
        liEl.textContent=`${openhours[i]} ${this.cookiesinhour[i]}`;
        ulEl.appendChild(liEl);
    }


    let totalEl=document.createElement('li');
    totalEl.textContent="total" + this.total +'Cookies';
    ulEl.appendChild(totalEl);

 }

}
console.log(Tokyo);
Tokyo.randcushour();
Tokyo.getpurchased();
Tokyo.render();

// THIRD LOCATION


let Dubai =  {

name :'Dubai',
mincus :23,
maxcus :65,
avgcookiescustomer :6.3,
randomcustomer :[],
cookiesinhour:[],
total:0,

randcushour: function (min, max){
    
      for (let i=0;i < openhours.length;i++) {
          
        let min = Math.ceil(this.mincus);
        let max = Math.floor(this.maxcus);
      let randomcustomer =   Math.floor(Math.random() * (max - min + 1) + min);
 
    this.randomcustomer.push (randomcustomer);

      }
      
},


getpurchased: function () {
    for (let i = 0 ; i < openhours.length; i++) {

 this.cookiesinhour[i]=Math.ceil(this.randomcustomer[i] * this.avgcookiescustomer);
 this.total = this.total + this.cookiesinhour[i];
 
}

},

render:function(){

    let divEl=document.getElementById('deleciuscookes');
    let h2El =document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent=this.name;

    let ulEl=document.createElement('ul');
    divEl.appendChild(ulEl);
    for (let i=0;i<openhours.length;i++) {
        let liEl=document.createElement('li')
        
        liEl.textContent=`${openhours[i]} ${this.cookiesinhour[i]}`;
        ulEl.appendChild(liEl);
    }


    let totalEl=document.createElement('li');
    totalEl.textContent="total" + this.total +'Cookies';
    ulEl.appendChild(totalEl);

 }

}
console.log(Dubai);
Dubai.randcushour();
Dubai.getpurchased();
Dubai.render();

// FORTH SECTION



let Paris =  {

name :'Paris',
mincus :23,
maxcus :65,
avgcookiescustomer :6.3,
randomcustomer :[],
cookiesinhour:[],
total:0,

randcushour: function (min, max){
    
      for (let i=0;i < openhours.length;i++) {
          
        let min = Math.ceil(this.mincus);
        let max = Math.floor(this.maxcus);
      let randomcustomer =   Math.floor(Math.random() * (max - min + 1) + min);
 
    this.randomcustomer.push (randomcustomer);

      }
      
},


getpurchased: function () {
    for (let i = 0 ; i < openhours.length; i++) {

 this.cookiesinhour[i]=Math.ceil(this.randomcustomer[i] * this.avgcookiescustomer);
 this.total = this.total + this.cookiesinhour[i];
 
}

},

render:function(){

    let divEl=document.getElementById('deleciuscookes');
    let h2El =document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent=this.name;

    let ulEl=document.createElement('ul');
    divEl.appendChild(ulEl);
    for (let i=0;i<openhours.length;i++) {
        let liEl=document.createElement('li')
        
        liEl.textContent=`${openhours[i]} ${this.cookiesinhour[i]}`;
        ulEl.appendChild(liEl);
    }


    let totalEl=document.createElement('li');
    totalEl.textContent="total" + this.total +'Cookies';
    ulEl.appendChild(totalEl);

 }

}
console.log(Paris);
Paris.randcushour();
Paris.getpurchased();
Paris.render();

// 5 SECTION


let Lima =  {

name :'Lima',
mincus :23,
maxcus :65,
avgcookiescustomer :6.3,
randomcustomer :[],
cookiesinhour:[],
total:0,

randcushour: function (min, max){
    
      for (let i=0;i < openhours.length;i++) {
          
        let min = Math.ceil(this.mincus);
        let max = Math.floor(this.maxcus);
      let randomcustomer =   Math.floor(Math.random() * (max - min + 1) + min);
 
    this.randomcustomer.push (randomcustomer);

      }
      
},


getpurchased: function () {
    for (let i = 0 ; i < openhours.length; i++) {

 this.cookiesinhour[i]=Math.ceil(this.randomcustomer[i] * this.avgcookiescustomer);
 this.total = this.total + this.cookiesinhour[i];
 
}

},

render:function(){

    let divEl=document.getElementById('deleciuscookes');
    let h2El =document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent=this.name;

    let ulEl=document.createElement('ul');
    divEl.appendChild(ulEl);
    for (let i=0;i<openhours.length;i++) {
        let liEl=document.createElement('li')
        
        liEl.textContent=`${openhours[i]} ${this.cookiesinhour[i]}`;
        ulEl.appendChild(liEl);
    }


    let totalEl=document.createElement('li');
    totalEl.textContent="total" + this.total +'Cookies';
    ulEl.appendChild(totalEl);

 }

}
console.log(Lima);
Lima.randcushour();
Lima.getpurchased();
Lima.render();