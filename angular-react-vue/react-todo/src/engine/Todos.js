import rest from './rest';

export default class Todos {
  static _store = null

  static getList = async () => {
    if (Todos._store) {
      return Todos._store;
    }
    
    Todos._store = await Todos._fetchList();
    return Todos._store;
  }

  static add = async (todo) => {
    const newTodo = await rest.post('/todos', todo);
    Todos._addToStore(newTodo);
  }

  static edit = async (todo) => {
    const newTodo = await rest.put(`/todos/${todo.objectId}`, todo);
    Todos._editInStore(newTodo);
  }

  static del = async (id) => {
    await rest.delete(`/todos/${id}`);
    Todos._delFromStore(id);
  }

  static get = async (id) => {
    return await rest.get(`/todos/${id}`);
  }

  static _fetchList = async () => {
    console.log('fetch list')
    return await rest.get('/todos');
  }

  static _delFromStore = (id) => {
    Todos._store = Todos._store.filter((item) => {
      return item.objectId !== id;
    });
  }

  static _editInStore = (todo) => {
    Todos._store = Todos._store.map((item) => {
      if (item.objectId === todo.objectId) {
        return todo;
      }
      return item;
    });
  }

  static _addToStore = (todo) => {
    Todos._store = [...Todos._store, todo];
  }
}
