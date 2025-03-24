function* tasksManager (tasks) {

    for (const task of tasks) 
        yield task
    
    yield 'all tasks done'

}

const tasks = [
    'read a book'         ,
    'finish js exercises' ,
    'call my friend'      ,
    'make lunch'          ,
    'study english'       , 
]

const tasksManagerIterator = tasksManager(tasks)

console.log(tasksManagerIterator.next().value)
console.log(tasksManagerIterator.next().value)
console.log(tasksManagerIterator.next().value)
console.log(tasksManagerIterator.next().value)
console.log(tasksManagerIterator.next().value)
console.log(tasksManagerIterator.next().value)
console.log(tasksManagerIterator.next().value) //undefined