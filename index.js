var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", appendToDo);


  function appendToDo() {
    var toDo = $('.name').val();





  cardContainer.append(`
    <p class="name-card"> <input type="checkbox"class="checkbox"> ${toDo} </p>
`);
var checkbox = $('.checkbox');
checkbox.on("click", remove)
function remove(){
  event.target.parentNode.remove();
}
  $('.name').val("");

}
