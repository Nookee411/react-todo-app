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

const selectFromDB = new Promise((resolve) => {
  const state = [];
  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM TODO', [], (resTx, res) => {
      const { length } = res.rows;
      for (let i = 0; i < length; i += 1) {
        state.push(res.rows[i]);
      }
      resolve(state);
    });
  });
});

const insertIntoDB = ({ id, content, finished }) =>
  new Promise((resolve) => {
    const state = [];
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO TODO (id, content, finished) values(?, ?, ?)',
        [id, content, finished ? 1 : 0],
      );
      tx.executeSql('SELECT * FROM TODO', [], (resTx, res) => {
        const { length } = res.rows;
        for (let i = 0; i < length; i += 1) {
          state.push(res.rows[i]);
        }
        resolve(state);
      });
    });
  });

const removeFromBD = (id) =>
  new Promise((resolve) => {
    const state = [];
    db.transaction((tx) => {
      tx.executeSql('DELETE FROM TODO WHERE id=?', [id]);
      tx.executeSql('SELECT * FROM TODO', [], (resTx, res) => {
        const { length } = res.rows;
        for (let i = 0; i < length; i += 1) {
          state.push(res.rows[i]);
        }
        resolve(state);
      });
    });
  });

const editTodoInBd = ({ id, todo: { content, finished } }) =>
  new Promise((resolve) => {
    const state = [];
    db.transaction((tx) => {
      tx.executeSql('UPDATE TODO SET content=?, finished=?  WHERE id=?', [
        content,
        finished ? 1 : 0,
        id,
      ]);
      tx.executeSql('SELECT * FROM TODO', [], (resTx, res) => {
        const { length } = res.rows;
        for (let i = 0; i < length; i += 1) {
          state.push(res.rows[i]);
        }
        resolve(state);
      });
    });
  });

export default {
  getState: selectFromDB,
  addTodo: insertIntoDB,
  removeTodo: removeFromBD,
  editTodo: editTodoInBd,
};
