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

db.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE TODO (id INTEGER PRIMARY KEY, content TEXT, finished INTEGER)',
    [],
    (err) => console.error('Unable to create table', err),
  );
});

export default {
  getState: new Promise((resolve) => {
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
  }),
  addTodo: (todo) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO TODO (id, content, finished) values(?,?,?)',
        [todo.id, todo.content, todo.finished],
        (err) => console.error('unable to input'),
      );
    });
  },
};
