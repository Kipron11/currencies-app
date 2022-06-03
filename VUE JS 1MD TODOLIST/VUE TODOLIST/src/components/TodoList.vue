<script>
export default {
  name:'TodoList',
  data () {
    return{
      newTodo:'',
      idForTodo:3,
      beforeEditCache:'',
      filter:'all',
      toDos:[
        {
          'id':1,
          'title': 'Finis',
          'completed': false,
          'edited':false,
        },
        {
          'id':2,
          'title': 'Finis11111',
          'completed': false,
          'edited':false,
        }
      ],
    }
  },
  computed:{
    remaining(){
      return this.toDos.filter(todo => !todo.completed).length
    },
    anyRemaining(){
      return this.remaining !== 0
    },
    toDosFiltered(){
      if(this.filter==="all"){
        return this.toDos
      } else if (this.filter==="active"){
        return this.toDos.filter(todo => !todo.completed)
      } else if (this.filter==='completed'){
        return this.toDos.filter(todo => todo.completed)
      }
      return this.toDos
    },
    showClearCompletedButton(){
      return this.toDos.filter(todo => todo.completed).length > 0
    }
  },
directives:{
    focus:{
      inserted: function (el){
        el.focus()
      }
    }
}
,
  methods:{

    addTodo(){
      if(this.newTodo.trim().length === 0){
        return
      }
      this.toDos.push({
        id:this.idForTodo,
        title: this.newTodo,
        completed: false,
      })
      this.newTodo = ""
      this.idForTodo++
    },
    cancelEdit(todo){
      todo.title=this.beforeEditCache
      todo.edited = false
    },
    doneEdit(todo){
      if(this.newTodo.trim() === ''){
        todo.title = this.beforeEditCache
      }
      todo.edited=false

    },
    editTodo(todo){
      this.beforeEditCache=todo.title
      todo.edited=true
    },
    removeTodo(index){
      this.toDos.splice(index,1
      )
    },
    checkAllTodos(){
      this.toDos.forEach((todo)=> todo.completed = event.target.checked)
    },
    clearCompleted(){
      this.toDos=this.toDos.filter(todo => !todo.completed)
    }
  }
}
</script>

<template>
  <div>
    <input
        type="text"
        class="todo-input"
        placeholder="What i want to be done"
        v-model="newTodo"
        @keyup.enter="addTodo">

    <div
        v-for="(toDo,index) in toDosFiltered"
        :key="toDo.id"
        class="todo-item">

      <div class="todo-item-left">
        <input type="checkbox"  v-model="toDo.completed">

        <div
            v-if="!toDo.edited"
            @dblclick="editTodo(toDo)"
            class="todo-item-label"
            :class="{completed : toDo.completed}">
          {{toDo.title}}</div>
        <input
            v-else
            class="todo-item-edit"
            type="text"
            v-model="toDo.title"
            @blur="doneEdit(toDo)"
            @keyup.enter="doneEdit(toDo)"
            @keyup.esc="cancelEdit(toDo)"
            v-focus>
      </div>

     <div class="remove-item" @click="removeTodo(index)">
       &times;
     </div>
    </div>
    <div class="extra-container">
      <div><label><input type="checkbox" :checked="!anyRemaining" @change="checkAllTodos"> Check All</label></div>
      <div>{{ remaining }} items left</div>
    </div>

    <div class="extra-container">
      <div>
        <button :class="{ active: filter === 'all' }" @click="filter = 'all'">All</button>
        <button :class="{ active: filter === 'active' }" @click="filter = 'active'">Active</button>
        <button :class="{ active: filter === 'completed' }" @click="filter = 'completed'">Completed</button>
      </div>

      <div>
        <transition name="fade">
          <button v-if="showClearCompletedButton" @click="clearCompleted">Clear Completed</button>
        </transition>
      </div>
    </div>
</div>
</template>

<style>
.todo-input{
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
}
todo-list:focus{
  outline: 0;
}

.todo-item{
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.remove-item{
  cursor: pointer;
  margin-left: 14px;}
  .remove-item:hover{
  color: black;
   }

  .todo-item-left{
    display: flex;
    align-items: center;
    width: 100%;
  }

  .todo-item-label{

    font-size: 24px;
    color: #2c3e50;
    padding: 10px;
    border: 1px solid white;
    margin-left: 12px;
  }
  .todo-item-edit{
    font-size: 24px;
    color: #2c3e50;
    margin-left: 12px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;}
    .todo-item-edit:hover{
      outline: none;
    }
.completed{
  text-decoration: line-through;
  color: grey;
}

.extra-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  margin-bottom: 14px;
}

button {
  font-size: 14px;
  background-color: white;
  appearance: none;}
button:hover {
   background: lightgreen;
 }
button:focus {
   outline: none;
 }

.active {
  background: lightgreen;
}


/* CSS Transitions*/
   .fade-enter-active, .fade-leave-active {
     transition: opacity .2s;
   }
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
