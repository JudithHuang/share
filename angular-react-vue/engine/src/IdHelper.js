export default class IdHelper {
  static generate = function (str) {
    if (!str) {
      return new Date().valueOf();
    }

    return new Date(str).valueOf();
  }
}
