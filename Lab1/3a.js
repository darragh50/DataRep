// 3a. Array of strings
let Tasks = ["Walking", "Hiking"];

//3b. Create an addTask function
//(i)Recieves a string as a param
let addTask = (task) => {
    //(ii)Add task to tarray
    Tasks.push(task);
    //(iii)Print out message
    console.log(task + " has been added to the array");
    //(iv)Find number of elements in the array
    console.log(Tasks.length);
}

addTask("Work");

//3c. Create a listAllTasks function
let listAllTasks = () => {
    //(i) Iterates over all the tasks in the array
    Tasks.forEach((element) => {
        //(ii)Print out
        console.log(element);
    })
}

addTask("Cooking");
listAllTasks();

//3d. Delete task function
//(i)Recieve a string as a parameter
let deleteTask = (task) => {
    let index = Tasks.indexOf(task);

    //(ii)Remove the string from the array
    if (index > -1) {
        Tasks.splice(index, 1);
        //(iii) Prints a message indicating deletion
        console.log(task + " has been removed from the array");
    }
    else {
        console.log(task + " has not been found in the array");
    }
}

//Call deleteTask function
addTask("Work");
deleteTask("Cooking");