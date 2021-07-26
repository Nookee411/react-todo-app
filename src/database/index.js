// Provide object of database methods for CRUD in webDB
const config = {
  name: 'TodoAppDB',
  version: '0.1',
  dispayname: 'TodoDB',
  size: 200000,
};

const db = openDatabase(
  config.name,
  config.version,
  config.dispayname,
  config.size,
);

// db.transaction((tx) => {
//   tx.executeSql('DROP TABLE TODO');
// });
// db.transaction((tx) => {
//   tx.executeSql(
//     'CREATE TABLE IF NOT EXISTS TODO (id TEXT PRIMARY KEY, content TEXT, finished INTEGER)',
//   );
// });
const fetchTodos = (tx) =>
  new Promise((resolve) => {
    const state = [];
    tx.executeSql('SELECT * FROM TODO', [], (resTx, res) => {
      const { length } = res.rows;
      for (let i = 0; i < length; i += 1) {
        state.push(res.rows[i]);
      }
      resolve(state);
    });
  });

const selectFromDB = new Promise((resolve) => {
  db.transaction((tx) => {
    fetchTodos(tx).then((res) => resolve(res));
  });
});

const insertIntoDB = ({ id, content, finished }) =>
  new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO TODO (id, content, finished) values(?, ?, ?)',
        [id, content, finished ? 1 : 0],
      );
      fetchTodos(tx).then((res) => resolve(res));
    });
  });

const removeFromBD = (id) =>
  new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql('DELETE FROM TODO WHERE id=?', [id]);
      fetchTodos(tx).then((res) => resolve(res));
    });
  });

const editTodoInBd = ({ id, todo: { content, finished } }) =>
  new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql('UPDATE TODO SET content=?, finished=?  WHERE id=?', [
        content,
        finished ? 1 : 0,
        id,
      ]);
      fetchTodos(tx).then((res) => resolve(res));
    });
  });

export default {
  getState: selectFromDB,
  addTodo: insertIntoDB,
  removeTodo: removeFromBD,
  editTodo: editTodoInBd,
};
