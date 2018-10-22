function isSubstring(searchString, subString){
... let arr = searchString.split(" ");
... for(let i = 0; i < arr.length; i++){
..... if(arr[i] === subString){
....... return true;
....... }
..... }
... return false;
... }
