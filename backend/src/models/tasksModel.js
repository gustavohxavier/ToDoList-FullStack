const connection = require('./connection');

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async (task) => {

    const { title } = task;

    //const dateUTC = new Date(Date.now()).toDateString;

    const [createdTask] = await connection.execute('INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)', [title, 'pendente', 'hoje']);

    return {insertId: createdTask.insertId};
};

module.exports = {
    getAll,
    createTask,
};