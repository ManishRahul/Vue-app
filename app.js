console.log("My Vue");
const x = new Vue({

        el : "#app",
        data : {
            
            title : "",
            titles : [],

            todo : "",  // a single todo
            todos : [] ,  // list of todos
        
            copytodos : [] , //copies the items from todos list
            task : "tasks", //this is an id created for the css
            selectedIndex : null, //if edit button is clicked, then this stores the index of the particular element.
                
            isEditing : false, //if edit button is clicked, then this becomes true
            isOkClicked : false //if OK button is clicked, then this becomes true. It is used in v-if condition.
        },
        methods : {
            addtodo(){
                this.todos.push(this.todo)
                this.todo=null
            },

            display_Title_and_Todo(){
               if(document.getElementById("textbox1").value != ""){
                    //document.getElementById("title_todos").innerHTML = null
                    this.titles.push(this.title)
                    this.copytodos = this.todos
                    this.title = ""
                     // this.todos = "" 
                     this.isOkClicked = true
                     // this.isEmpty = false
                }
                else if(document.getElementById("textbox1").value == ""){
                    //document.getElementById("title_todos").innerHTML = "working"
                    console.log(" It's working")
                }
                 
            },

            edit_Todo(index,copytodo){
                this.todo=copytodo
                this.selectedIndex = index
                this.isEditing = true
            },

            delete_Todo(index){
                this.todos.splice(index, 1)
            },

            updatetodo(){
                this.todos.splice(this.selectedIndex, 1, this.todo)
                this.isEditing = false
            }
            
        }
    })

    
