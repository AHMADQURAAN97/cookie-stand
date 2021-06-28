'use strict';
let openhours = ['6am', '7am', '8am', '9am', '10am', '11am', '12bm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let locations = [];

function location (name , mincus , avgcookiescustomer) {

    this.name = name;
    this.mincus = mincus;
    this.maxcus = maxcus;
    this.avgcookiescustomer = avgcookiescustomer;
    this.randomcustomer();
    this.cookiesinhour = [],
    this.total=0,


    locations.push(this);
}


location.prototype.randcushour= function (min, max){
    
      for (let i=0;i < openhours.length;i++) {
          
        let min = Math.ceil(this.mincus);
        let max = Math.floor(this.maxcus);
      let randomcustomer =   Math.floor(Math.random() * (max - min + 1) + min);
 
    this.randomcustomer.push (randomcustomer);

      }
      
},


location.prototype.getpurchased= function () {
    for (let i = 0 ; i < openhours.length; i++) {

 this.cookiesinhour[i]=Math.ceil(this.randomcustomer[i] * this.avgcookiescustomer);
 this.total = this.total + this.cookiesinhour[i];
 
}

},

// location.prototype.render=function(){

//         let divEl=document.getElementById('deleciuscookes');
//         let h2El =document.createElement('h2');
//         divEl.appendChild(h2El);
//         h2El.textContent=this.name;
    
//         let ulEl=document.createElement('ul');
//         divEl.appendChild(ulEl);
//         for (let i=0;i<openhours.length;i++) {
//             let liEl=document.createElement('li')
            
//             liEl.textContent=`${openhours[i]} ${this.cookiesinhour[i]}`;
//             ulEl.appendChild(liEl);
//         }
    
    
//         let totalEl=document.createElement('li');
//         totalEl.textContent="total" + this.total +'Cookies';
//         ulEl.appendChild(totalEl);
    
//      }
    
    

    function createTableHeader() {

        //header
        let container = document.getElementById('deleciuscookes');
        let tableEl = document.createElement('table');
        container.appendChild(tableEl);
       
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);

        let thEl1 = document.createElement('th');
        thEl1.textContent = ' ';
        tableEl.appendChild(thEL1)

         for (let i=0; i < openhours.length ;i++) {

            let thEl = document.createElement('th');
        thEl.textContent = openhours[i];
        tableEl.appendChild(thEL);

         } 

         let thEl1 = document.createElement('th');
        thEl1.textContent = 'Daily Location Total';
        tableEl.appendChild(thEL1)




         //render of the table
         createTableHeader();
         let trEl2 = document.createElement('tr');
         tableEl.appendChild(trEl2);
         
         let tdEl=document.createElement('td');
         tdEl.textContent = this.name;
         trEl2.appendChild(tdEl);
         
         for (let x=0 ; x < openhours.length ; x++ ) {
          
            let tdEl=document.createElement('td');
            this.randomcustomer();
            tdEl.textContent =this.randomcustomer(); 

         }
         
        }
       









































































































// let openhours = ['6am', '7am', '8am', '9am', '10am', '11am', '12bm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// // FIRST LOCATION


// let seattle =  {

// name :'seattle',
// mincus :23,
// maxcus :65,
// avgcookiescustomer :6.3,
// randomcustomer :[],
// cookiesinhour:[],
// total:0,

// randcushour: function (min, max){
    
//       for (let i=0;i < openhours.length;i++) {
          
//         let min = Math.ceil(this.mincus);
//         let max = Math.floor(this.maxcus);
//       let randomcustomer =   Math.floor(Math.random() * (max - min + 1) + min);
 
//     this.randomcustomer.push (randomcustomer);

//       }
      
// },


// getpurchased: function () {
//     for (let i = 0 ; i < openhours.length; i++) {

//  this.cookiesinhour[i]=Math.ceil(this.randomcustomer[i] * this.avgcookiescustomer);
//  this.total = this.total + this.cookiesinhour[i];
 
// }

// },

// render:function(){

//     let divEl=document.getElementById('deleciuscookes');
//     let h2El =document.createElement('h2');
//     divEl.appendChild(h2El);
//     h2El.textContent=this.name;

//     let ulEl=document.createElement('ul');
//     divEl.appendChild(ulEl);
//     for (let i=0;i<openhours.length;i++) {
//         let liEl=document.createElement('li')
        
//         liEl.textContent=`${openhours[i]} ${this.cookiesinhour[i]}`;
//         ulEl.appendChild(liEl);
//     }


//     let totalEl=document.createElement('li');
//     totalEl.textContent="total" + this.total +'Cookies';
//     ulEl.appendChild(totalEl);

//  }

// }
// console.log(seattle);
// seattle.randcushour();
// seattle.getpurchased();
// seattle.render();

// // SECOND LOCATION



// let Tokyo =  {

// name :'Tokyo',
// mincus :23,
// maxcus :65,
// avgcookiescustomer :6.3,
// randomcustomer :[],
// cookiesinhour:[],
// total:0,

// randcushour: function (min, max){
    
//       for (let i=0;i < openhours.length;i++) {
          
//         let min = Math.ceil(this.mincus);
//         let max = Math.floor(this.maxcus);
//       let randomcustomer =   Math.floor(Math.random() * (max - min + 1) + min);
 
//     this.randomcustomer.push (randomcustomer);

//       }
      
// },


// getpurchased: function () {
//     for (let i = 0 ; i < openhours.length; i++) {

//  this.cookiesinhour[i]=Math.ceil(this.randomcustomer[i] * this.avgcookiescustomer);
//  this.total = this.total + this.cookiesinhour[i];
 
// }

// },

// render:function(){

//     let divEl=document.getElementById('deleciuscookes');
//     let h2El =document.createElement('h2');
//     divEl.appendChild(h2El);
//     h2El.textContent=this.name;

//     let ulEl=document.createElement('ul');
//     divEl.appendChild(ulEl);
//     for (let i=0;i<openhours.length;i++) {
//         let liEl=document.createElement('li')
        
//         liEl.textContent=`${openhours[i]} ${this.cookiesinhour[i]}`;
//         ulEl.appendChild(liEl);
//     }


//     let totalEl=document.createElement('li');
//     totalEl.textContent="total" + this.total +'Cookies';
//     ulEl.appendChild(totalEl);

//  }

// }
// console.log(Tokyo);
// Tokyo.randcushour();
// Tokyo.getpurchased();
// Tokyo.render();

// // THIRD LOCATION


// let Dubai =  {

// name :'Dubai',
// mincus :23,
// maxcus :65,
// avgcookiescustomer :6.3,
// randomcustomer :[],
// cookiesinhour:[],
// total:0,

// randcushour: function (min, max){
    
//       for (let i=0;i < openhours.length;i++) {
          
//         let min = Math.ceil(this.mincus);
//         let max = Math.floor(this.maxcus);
//       let randomcustomer =   Math.floor(Math.random() * (max - min + 1) + min);
 
//     this.randomcustomer.push (randomcustomer);

//       }
      
// },


// getpurchased: function () {
//     for (let i = 0 ; i < openhours.length; i++) {

//  this.cookiesinhour[i]=Math.ceil(this.randomcustomer[i] * this.avgcookiescustomer);
//  this.total = this.total + this.cookiesinhour[i];
 
// }

// },

// render:function(){

//     let divEl=document.getElementById('deleciuscookes');
//     let h2El =document.createElement('h2');
//     divEl.appendChild(h2El);
//     h2El.textContent=this.name;

//     let ulEl=document.createElement('ul');
//     divEl.appendChild(ulEl);
//     for (let i=0;i<openhours.length;i++) {
//         let liEl=document.createElement('li')
        
//         liEl.textContent=`${openhours[i]} ${this.cookiesinhour[i]}`;
//         ulEl.appendChild(liEl);
//     }


//     let totalEl=document.createElement('li');
//     totalEl.textContent="total" + this.total +'Cookies';
//     ulEl.appendChild(totalEl);

//  }

// }
// console.log(Dubai);
// Dubai.randcushour();
// Dubai.getpurchased();
// Dubai.render();

// // FORTH SECTION



// let Paris =  {

// name :'Paris',
// mincus :23,
// maxcus :65,
// avgcookiescustomer :6.3,
// randomcustomer :[],
// cookiesinhour:[],
// total:0,

// randcushour: function (min, max){
    
//       for (let i=0;i < openhours.length;i++) {
          
//         let min = Math.ceil(this.mincus);
//         let max = Math.floor(this.maxcus);
//       let randomcustomer =   Math.floor(Math.random() * (max - min + 1) + min);
 
//     this.randomcustomer.push (randomcustomer);

//       }
      
// },


// getpurchased: function () {
//     for (let i = 0 ; i < openhours.length; i++) {

//  this.cookiesinhour[i]=Math.ceil(this.randomcustomer[i] * this.avgcookiescustomer);
//  this.total = this.total + this.cookiesinhour[i];
 
// }

// },

// render:function(){

//     let divEl=document.getElementById('deleciuscookes');
//     let h2El =document.createElement('h2');
//     divEl.appendChild(h2El);
//     h2El.textContent=this.name;

//     let ulEl=document.createElement('ul');
//     divEl.appendChild(ulEl);
//     for (let i=0;i<openhours.length;i++) {
//         let liEl=document.createElement('li')
        
//         liEl.textContent=`${openhours[i]} ${this.cookiesinhour[i]}`;
//         ulEl.appendChild(liEl);
//     }


//     let totalEl=document.createElement('li');
//     totalEl.textContent="total" + this.total +'Cookies';
//     ulEl.appendChild(totalEl);

//  }

// }
// console.log(Paris);
// Paris.randcushour();
// Paris.getpurchased();
// Paris.render();

// // 5 SECTION


// let Lima =  {

// name :'Lima',
// mincus :23,
// maxcus :65,
// avgcookiescustomer :6.3,
// randomcustomer :[],
// cookiesinhour:[],
// total:0,

// randcushour: function (min, max){
    
//       for (let i=0;i < openhours.length;i++) {
          
//         let min = Math.ceil(this.mincus);
//         let max = Math.floor(this.maxcus);
//       let randomcustomer =   Math.floor(Math.random() * (max - min + 1) + min);
 
//     this.randomcustomer.push (randomcustomer);

//       }
      
// },


// getpurchased: function () {
//     for (let i = 0 ; i < openhours.length; i++) {

//  this.cookiesinhour[i]=Math.ceil(this.randomcustomer[i] * this.avgcookiescustomer);
//  this.total = this.total + this.cookiesinhour[i];
 
// }

// },

// render:function(){

//     let divEl=document.getElementById('deleciuscookes');
//     let h2El =document.createElement('h2');
//     divEl.appendChild(h2El);
//     h2El.textContent=this.name;

//     let ulEl=document.createElement('ul');
//     divEl.appendChild(ulEl);
//     for (let i=0;i<openhours.length;i++) {
//         let liEl=document.createElement('li')
        
//         liEl.textContent=`${openhours[i]} ${this.cookiesinhour[i]}`;
//         ulEl.appendChild(liEl);
//     }


//     let totalEl=document.createElement('li');
//     totalEl.textContent="total" + this.total +'Cookies';
//     ulEl.appendChild(totalEl);

//  }

// }
// console.log(Lima);
// Lima.randcushour();
// Lima.getpurchased();
// Lima.render();