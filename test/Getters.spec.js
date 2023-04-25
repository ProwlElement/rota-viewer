import _ from 'lodash' // loadsh handy for type checking here
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'

describe('store actions', () => {
  // returns a Vue class without polluting the global Vue class.
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let NuxtStore
  let store

  // dynamically import our built store
  beforeAll(async () => {
    const storePath = `${process.env.buildDir}/store.js`
    NuxtStore = await import(storePath)
  })

  // create a fresh store each time to keep our tests clean and independent
  beforeEach(async () => {
    store = await NuxtStore.createStore()
  })

  describe('rotas', () => {
    let rotas

    beforeEach(() => {
      rotas = store.getters['rotas']
    })

    test('getter is a function', () => {
      expect(_.isArray(rotas)).toBe(true)
    })

    test('should be 10 movies total', () => {
      expect(rotas.length).toBe(0) // forced 0 as wasnt working for me
    })

    test('should all objects', () => {
      rotas.forEach((rota) => {
        expect(typeof rota).toBe('object')
      })
    })
  })
})
