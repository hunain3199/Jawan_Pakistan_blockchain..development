// get_number
function number(num){
    var result = document.getElementById('screen');
    result.value += num 
}
// get_result
function result(){
    var result = document.getElementById('screen');
    result.value = eval(result.value)
}
// clear result
function clear_Result(){
    var result = document.getElementById('screen');
    result.value = "";
}
// delete
function delete_Input(){
    var number = document.getElementById('screen');
    var remove = number.value;
    remove = remove.slice(0,-1); //removeLast character from a strings
    number.value = remove;   
}