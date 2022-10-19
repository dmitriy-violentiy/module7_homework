/* Написать функцию, которая создает пустой объект, но без прототипа. */
function emptyObject() {
   const empty = Object.create(null); 
   console.log(empty);
}
emptyObject();