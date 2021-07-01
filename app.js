'use strict';


let container = document.getElementById('deleciuscookes');
let tableEl = document.createElement('table');
    container.appendChild(tableEl);

let openhours = ['6am', '7am', '8am', '9am', '10am', '11am', '12bm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let locations = [];

function Location (name , mincus ,maxcus , avgcookiescustomer) {

    this.name = name;
    this.mincus = mincus;
    this.maxcus = maxcus;
    this.avgcookiescustomer = avgcookiescustomer;
    this.randomcustomer =[];
    this.cookiesinhour = [];
    this.total=0;

    locations.push(this);
};


Location.prototype.randCushour = function  () {
    
      for (let i=0;i < openhours.length;i++) {
          
        let min = Math.ceil(this.mincus);
        let max = Math.floor(this.maxcus);
        let randomC =   Math.floor(Math.random() * (max - min + 1) + min);
 
        this.randomcustomer.push(randomC);

      }
      
};


Location.prototype.getpurchased= function () {
 
    for (let i = 0 ; i < openhours.length; i++) {

 this.cookiesinhour[i]=Math.ceil(this.randomcustomer[i] * this.avgcookiescustomer);
 
 this.total = this.total + this.cookiesinhour[i];
}

}

Location.prototype.render = function () {
           
  let trEl = document.createElement('tr');
  let tdEl=document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  
  for (let i=0 ; i < openhours.length ; i++ ) {
   
     let tdEl=document.createElement('td');
     tdEl.textContent =this.cookiesinhour[i];
     trEl.appendChild(tdEl)
   }
   let tdtotEl=document.createElement('td');
   tdtotEl.textContent = this.total;
   trEl.appendChild(tdtotEl);
   tableEl.appendChild(trEl);
 }
 

// Location.prototype.render=function(){

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
    
    //  }
    





    
     //------------------------------------------------------header of the table
    function createTableHeader() {

        let trEl = document.createElement('tr');
        let thShopNameEl = document.createElement('th');
        thShopNameEl.textContent = ' ';
        trEl.appendChild(thShopNameEl)

         for (let i=0; i < openhours.length ;i++) {

            let thEl = document.createElement('th');
        thEl.textContent = openhours[i];
        trEl.appendChild(thEl);
         } 

         let thDailyTotalEl = document.createElement('th');
         thDailyTotalEl.textContent = 'Daily Location Total';
         trEl.appendChild(thDailyTotalEl)
         tableEl.appendChild(trEl);
        };

        
         

       //---------------------------------------------footer of the table

        function createFooter() {

          let trfooEl =document.createElement('tr');
          let tdEl=document.createElement('td');
          tdEl.textContent = 'Totals';
          trfooEl.appendChild(tdEl);
          tableEl.appendChild(trfooEl);
          let megaTotal = 0;

          for (let h=0 ; h < openhours.length ; h++ ) {

            let tdEl=document.createElement('td');
            let sum=0;
          
             for (let s=0 ; s < locations.length ; s++){


               sum = sum + locations[s].cookiesinhour[h];

           }
           megaTotal += sum;
           tdEl.textContent = sum;
           trfooEl.appendChild(tdEl);

          }
          let totalTdEl = document.createElement('td');
          totalTdEl.textContent = megaTotal;
          trfooEl.appendChild(totalTdEl);
        }

        let seattle = new Location('Seattle', 23, 65, 6.3);
        let tokyo = new Location('Tokyo', 3, 24, 1.2);
        let dubai = new Location('Dubai', 11, 38, 3.7);
        let paris = new Location('Paris', 20, 38, 2.3);
        let lima = new Location('Lima', 2, 16, 4.6);

        createTableHeader();


        seattle.randCushour();
        seattle.getpurchased();
        seattle.render();
        tokyo.randCushour();
        tokyo.getpurchased();
        tokyo.render();
        dubai.randCushour();
        dubai.getpurchased();
        dubai.render();
        paris.randCushour();
        paris.getpurchased();
        paris.render();
        lima.randCushour();
        lima.getpurchased();
        lima.render();

        createFooter();


//--------------------------------------------------------form
 let myForm =document.getElementById('myForm');
 myForm.addEventListener('submit',addlocation);
 
 function addlocation(event){
  event.preventDefault();


  let name = event.target.name.value;
  console.log(name);
  let mincus = event.target.mincus.value;
  console.log(mincus);
  let maxcus = event.target.maxcus.value;
  console.log(maxcus);
  let avgcookiescustomer = event.target.avgcookiescustomer.value;
  console.log(avgcookiescustomer);

  let newLoc =new Location(name,mincus,maxcus,avgcookiescustomer)
  newLoc.randCushour();
  newLoc.getpurchased();
  newLoc.render();
 
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