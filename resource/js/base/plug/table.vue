<template id="task-template">
	    My LIST {{list.length}}
	    <ul>
	        <li @click="toggleTasks(task)" :class="{'completed':task.completed}"  v-for="task in list" >
	            {{task.body}}
	            <strong @click="deletedTask(task)">X</strong>
	        </li>
	    </ul>
</template>

<script>

    Vue.component("task-app",{
     	 template:"#task-template",
	     props    :["list"],
	     methods :{
	         toggleTasks:function(task){
	             task.completed = (!task.completed);
	         },
	         deletedTask:function(task){
	
	             this.list.$remove(task);
	         }
		     }
	 });
	
	 new Vue({
	     el:"#app",
	     data:{
	         tasks:[
	             {body:'gggggg1',completed:true},
	             {body:'gggggg2',completed:true},
	             {body:'gggggg3',completed:false},
	             {body:'gggggg4',completed:false}
	         ]
	     }
	 });
		 
     
</script>
