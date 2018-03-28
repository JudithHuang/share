import ObjectID from 'bson-objectid';

export default class ObjectIDHelper {
  static generate = function (str) {
    return ObjectID(str);
  }
}
