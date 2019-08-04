class Task {
	constructor(name){
		this.name=name;
		this.completed=false;
	}

		// It changes the task state from uncompleted to completed ones...
	isCompleted() {
		this.completed=!this.completed;
		alert(this.completed);
	}
}
task= new Task("Saludos!");

alert(task.completed);
task.isCompleted();