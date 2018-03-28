import ObjectIDHelper from './IdHelper';

const _defaultStore = [{
  id: ObjectIDHelper.generate(new Date().valueOf()),
  title: 'Angular',
  completed: false
}, {
  id: ObjectIDHelper.generate(new Date().valueOf()),
  title: 'React',
  completed: false
}, {
  id: ObjectIDHelper.generate(new Date().valueOf()),
  title: 'Vue',
  completed: false
}];

export default class Todos {
  static _store = _defaultStore

  static getList = function () {
    return Todos._store;
  }

  static add = function (todo) {
    Todos._store = [...Todos._store, todo];
  }

  static edit = function (todo) {
    Todos._store = Todos._store.map(function (item) {
      if (item.id === todo.id) {
        return todo;
      }
      return item;
    });
  }

  static del = function (id) {
    Todos._store = Todos._store.filter(function (item) {
      return item.id !== id;
    });
  }

  static view = function (id) {
    Todos._store.find(function (item) {
      return item.id === id;
    })
  }
}
