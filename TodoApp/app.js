function add(){
    var input = document.getElementById('text')
    var get_list = document.getElementById('todo')
    var li = document.createElement('li')
    var list = document.createTextNode(input.value)
    li.appendChild(list)
    get_list.appendChild(li)

    var btn_remove = document.createElement('button')
    var btn_text = document.createTextNode('Remove')
    btn_remove.appendChild(btn_text)
    li.appendChild(btn_remove)
    btn_remove.addEventListener('click',function(){
        this.parentNode.remove()

    })

    var edit_btn = document.createElement('button')
    var edit_text = document.createTextNode('Edit')
    edit_btn.appendChild(edit_text)
    li.appendChild(edit_btn)
    edit_btn.addEventListener('click',function(){
        var input =prompt('Enter Updated Value')
        this.parentNode.firstChild.nodeValue = input
    })
      
}
function clear_delete(){
    document.getElementById("todo").innerHTML = "";
}
