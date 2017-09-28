//define functions here
function getIt() {
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass("tasty");
  });
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    if(e.which === 71) {
      alert("You have pressed 'G'!");
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
    return;
  });
}

$(document).ready(function(){

// call functions here
<<<<<<< HEAD
getIt();
frameIt();
pressIt();
submitIt();
=======
function getIt() {
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass("tasty");
  });
}

function pressIt() {
  $('#typing').keydown(function(e) {
    if(e.which || e.detail === 71) {
      alert("You have pressed 'G' ");
    }
  });
}
function submitIt() {
  $('form').submit(function() {
    alert("Your form is going to be submitted now.");
  });
}
>>>>>>> 34286bb6d840617663f91e1b75b9c6a66c93848b

});
