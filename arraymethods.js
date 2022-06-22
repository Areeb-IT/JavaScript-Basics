//to convert an array into a string
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits.toString())
//The join() method also joins all array elements into a string it is more likely to tostring but we can add a specific seperastor
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits.join("*"));
//pop method is used to remove the last value in an aray
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit=fruits.pop()
//console.log(fruits.pop());
//the push method adds a new element to an array at last
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.push("kivi")
//console.log(fruits)       
//shifting and unshifting                                                                         
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits.shift());
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.unshift("Lemon");
//console.log(fruits);
//changing elements
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits[0]=("lemon")
//console.log(fruits);
//array length
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits[fruits.length]=("lemon")
//console.log(fruits);
//deleting array index push pop  ans shif un shit are more relayable than delete delete will leave extra spaces
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//delete fruits[1]
//console.log(fruits);
//merjing two arrays uning concatinate
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//const dryfruits=["almond","peanut","nuts"]
//const food = fruits.concat(dryfruits)
//console.log(food);
//merging value with array
//const arr1 = ["Emil", "Tobias", "Linus"];
//const myChildren = arr1.concat("Peter"); 
//console.log(myChildren);
//splice is used to substract elements od a specific index first value tells where to add and second one tells how many to remove
//const arr1 = ["Emil", "Tobias", "Linus","juni","jule"];
//arr1.splice(2,0,"alee","anee")
//console.log(arr1);
//we can also remove specific items from an array
//const arr1 = ["Emil", "Tobias", "Linus","juni","jule"];
//arr1.splice(2,2)
//console.log(arr1);
//The slice() method slices out a piece of an array into a new array.
//const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//const citrus = fruits.slice(1,3);
//console.log(citrus);
//The slice() method does not remove any elements from the source array.it simply creates a new array