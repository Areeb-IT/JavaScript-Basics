//console.log("hello world");
//let text = "john doe" 
//console.log(text);

//var areeb="bsIt"; //we can also use single '' quotes and double ""
//var areeb1='19 batch';
// console.log(text);
//console.log(areeb,areeb1);

//to find the lengt of a sting we use .length the length property returns the length value of a string
//var areeb="adhgddegygyjegfjyfyu";
//var length=areeb.length;
//console.log(length);

// escape characters, like if we want to add quotes ' "" or slash // will do it like that
// my name is areeb and i am a "student" at uog (if i want to execute this statement then ill have to use / for this )
//var text='my name is areeb and i am a \'student\' at uog ';
//console.log(text);
//var text= 'It\'s alright.';
//console.log(text);
//var text = "The character \\ is called backslash.";
//console.log(text);

//string mathods three types slice,substring,substr
//slice(incase of slice negative cout it will start from end to start ans with positive number it will start from start to end)
//let fruits="banana pineapple melon apple";
//let find=fruits.slice(9,13);
//console.log(find);
//substring(it cannt work with negative count)
//let fruits="banana pineapple melon apple";
//let find=fruits.substring(11,10);
//console.log(find);
//substr (it only requires one address  it will drop the values behind it )
//let fruits="banana pineapple melon apple";
//let find = fruits.substr(7,6);
//console.log(find);

//replacing string content
//let text = "Please visit Microsoft!";
//let newtext=text.replace("microsoft","google");
//console.log(newtext);
//for case sensitive we use /i
//let text = "Please visit microsoft";
//let newtext=text.replace(/MICROSOFT/i,"w3school");
//console.log(newtext);
//in case if A world is being repeated saveral time then we use /g to replae them all
//let text = "Please visit microsoft and microsoft";
//let newtext=text.replace(/microsoft/g,"w3school");
//console.log(newtext);
//to change cases we use toUpperCase and toLowerCase
//let text1 = "Hello World!";       
//let text2 = text1.toLowerCase();
//console.log(text2);
//let text1 = "Hello World!";      
//let text2 = text1.toUpperCase();
//console.log(text2);
//to join to texts we use concat function or we can also use + operator
//let text1 = "Hello";
//let text2 = "World";
//let text3 = text1.concat(" ", text2);
//console.log(text3);
//let text1 = "Hello";
//let text2 = "World";
//let text3 = text1 +" "+ text2;
//console.log(text3);
//inoder to remove extra spaces we use trim function
//let text1 = "      Hello World!      ";
//let text2 = text1.trim();
//console.log(text2);

//string search methods 
//Both indexOf(), and lastIndexOf() return -1 if the text is not found , Both methods accept a second parameter as the starting position for the search
//index of
//let text= "hello, my name is areeb and i am areeb";
//text.indexOf("am");
//console.log(text.indexOf("am"));
//lastindexof
//The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string
//let text="hello, my name is areeb and i am areeb";
//text.lastIndexOf("areeb");
//console.log(text.lastIndexOf("areeb"));
//string search
//let text="hello, my name is areeb and i am areeb";
//text.search("am");
//console.log(text.search("am"));
//string match
//for not casesensitive
//let text="LOG logue logurithm matlog";
//text.match(/log/g);
//console.log(text.match(/log/g));
///for case sensitive
//let text="LOG logue logurithm matlog";
//text.match(/log/g);
//console.log(text.match(/log/gi));
//The includes() method returns true if a string contains a specified value.
//let text="hello, my name is areeb and i am areeb";
//text.includes("hello");
//console.log(text.includes("hello"));
//Check if a string includes "world", starting the search at position 12:
//let text=("hello, my name is areeb and i am areeb");
//text.includes("hello",6);
//console.log(text.includes("hello",6));
//The startsWith(),endswith() method returns true if a string begins or ends with a specified value, otherwise false:

