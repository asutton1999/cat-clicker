// MODEL
var model = {
  currentCat: null,
 Cats: [
     {
       name: 'Bob Cat',
       src:'images/cat.jpg',
       catCounter: 0
     },
     {
       name:'Sam Stairs',
       src:'images/cat2.jpg',
       catCounter: 0
     },
     {
       name:'Chris and Christie Cat',
       src:'images/catscuddle.jpg',
       catCounter:0
     },
     {
       name: 'Moon Moon Cat',
       src:'images/catTongueOut.jpg',
       catCounter:0
     },
     {
       name: 'PikaCat',
       src: 'images/pikacat.jpg',
       catCounter:0
   }
 ]
};
//Octopus
var octopus = {
init: function() {
  model.currentCat = model.Cats[0];
  console.log(model.currentCat);
  catListView.init();
  view.init();
},


getcurrentCat:
  function () {
  return  model.currentCat;
},

getCats:
  function (){
  return  model.Cats;
  },
setcurrentCat:
  function (cat) {
    model.currentCat = cat;
  },
increaseCounter:
  function(){
    model.currentCat.catCounter++;
    view.render();
  }
};
//View
var view = {

  init: function() {
    this.section = document.getElementsByTagName('section');
    this.name = document.getElementById('catName');
    this.image = document.getElementById('catImage');
    this.counter = document.getElementById('catCounter');
// event  listener

  this.render();
},
render: function() {
  var currentCat = octopus.getcurrentCat();
  this.name.innerText = currentCat.catName;
  this.image.src = currentCat.src;
  this.counter.innerText = currentCat.catCounter;

  this.image.addEventListener('click',function(){
    octopus.increaseCounter();
});
}
};
var catListView = {
  init: function() {
    var currentCat = octopus.getcurrentCat();
   currentCat.name = this.name.innerText;
    this.image.src = currentCat.src;
    this.counter.innerText = currentCat.catCounter;
    this.catList = document.getElementById('catList');
    this.render();
  },
   render: function() {
     var cat;
     var i;
     var name;
     var cats = octopus.getCats;

     this.catList.innertext = '';


  for(i = 0; i<cats.length;i ++ ) {
  // sets cat variable
  cat = cats[i];
  // adds cat name to DOM
  name = document.createElement('li');
  name.innerText = cat.name;
  // Event listner for list

  $('li').addEventListener('click', function() { return function () {
    octopus.setcurrentCat(event.target.innerText);
    view.render();
  };});
  this.catList.appendChild(name);
}
}
};
octopus.init();
