export const getTasks = () => {
    const loadTasks = localStorage.getItem('tasks')
        ? JSON.parse(localStorage.getItem('tasks'))
        : {}

    return loadTasks
}