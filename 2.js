/* Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false. */
student = {
   name: "Andrei", 
   surname: "Vlasov",
   age: 25
}
search = "Andrei";

function includes (obj, str) {
   for (let person in obj) {        //обходим циклом объект
      if(obj[person] == str) {      //сравниваем своства объекта и строку
         return true;               //возвращаем true, если условие выполнено
      } else {
         return false;
      }
   }
}
console.log(includes(student, search))