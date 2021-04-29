console.log("My Vue");
const x = new Vue({

        el : "#app",
        data : {
            // message : "Hi I am Rahul!!!",
            // isDisable : true,
            // isBold : "<b>Text in Bold</b>",
            // status : "danger",
            // isPromoted : true,
            // isTrue : false,
            // highlight : "red",
            // names : ["Manish","Rahul","Brucelee"],
            title : "",
            titles : [],

            todo : "",  // a single todo
            todos : [] ,  // list of todos
        
            copytodos : [] , //copies the items from todos list
            task : "tasks",
            selectedIndex : null,
            isEditing : false,
            isTodoClicked : false
        },
        methods : {
            addtodo(){
                this.todos.push(this.todo)
                this.todo=null
            },

            display_Title_and_Todo(){
                this.titles.push(this.title)
                this.copytodos = this.todos
                this.title = ""
                // this.todos = "" 
                this.isTodoClicked = true
                 
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

    