import {todoInterface} from './todoInterface';

class Todo implements todoInterface
{
    constructor() {}
    tasks: Array<string> = [];

    addTask(task:string):number
    {
        this.tasks.push(task);
        console.log("___________ New Task Added_______________");
        console.log("Task " +task+ " inserted in the list");
        return this.tasks.length;
    }

    listAllItems():void
    {
        this.tasks.forEach((task) => {
            console.log(task);
        })
    }

    deleteTask(task:string):number
    {
        let index:number = this.tasks.indexOf(task);
    if(index > -1)
    {
        this.tasks.splice(index,1);
        console.log("______________Task Removed ______________");
        console.log("Task " +task+ " removed from list.")
    }
    return this.tasks.length;
    }
}

let myTodos = new Todo();

myTodos.addTask("Work");
myTodos.addTask("sleep");

myTodos.listAllItems();

myTodos.deleteTask("sleep");