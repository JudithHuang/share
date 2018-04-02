import axios from 'axios'
import _ from 'lodash'

import Engine from './Engine'

const debug = require('debug')('todos:rest')

export default class Rest {
  static init = () => {
    axios.interceptors.request.use((config) => {
      let url = config.url
      if (!/^(https:|http:)?\/\//.test(url)) {
        url = `${Engine.getApiEndpoint()}${config.url}`
      }

      _.merge(config, {
        timeout: 60 * 1000,
        url,
      })
      
      config.params = config.params || {}
      return config
    }, Rest.onError)

    axios.interceptors.response.use((response) => {
      return response.data
    }, Rest.onError)

    axios.getPagedListRecursively = async (url, config = {}, allItems = []) => {
      config.params = config.params || {}
      config.params.itemIndex = config.params.itemIndex || 1
      config.params.perPage = config.params.perPage || 1000

      const result = await axios.get(url, config)
      const newAllItems = allItems.concat(result.items)
      if (result._meta && newAllItems.length < result._meta.totalCount) {
        config.params.itemIndex += config.params.perPage
        return axios.getPagedListRecursively(url, config, newAllItems)
      }

      return newAllItems
    }
  }

  static onError = (error = {}) => {
    debug('Response error', `${error}`, error.response)
    return Promise.reject(error)
  }
}

Object.assign(Rest, axios)
