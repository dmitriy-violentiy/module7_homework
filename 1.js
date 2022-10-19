/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение. */
student = {
   name: "Andrei", 
   surname: "Vlasov",
   age: 25
}

function keys (obj) {
   for (let person in obj) {                 //обходим циклом все элементы объекта
      if(obj.hasOwnProperty(person)) {       //если свойства собственные, выполняем условие и выводим в консоль результат
         console.log(person + ": " + obj[person]);
      }
   }
}
keys(student)