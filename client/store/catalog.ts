import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators";

import { $axios } from '~/utils/axios'

interface CatalogItem {
  id: number
  name: string,
  img: string,
  price: number
}

@Module({
  name: 'catalog',
  namespaced: true,
  stateFactory: true
})
export default class Catalog extends VuexModule {
  items: CatalogItem[] = [];

  @Mutation
  setItems(items: CatalogItem[]) {
    this.items = items;
  }

  @Action({ commit: 'setItems' })
  async getItems(): Promise<CatalogItem[]> {
    return $axios.$get('/catalog');
  }
}
