import rest from './rest';
import Todos from './Todos';

export default class Engine {
  static init = async (option) => {
    Engine.option = option;
    await rest.init();
  }

  static getApiEndpoint = () => {
    return `${Engine.option.config.ajaxApiDomain}`;
  }
}