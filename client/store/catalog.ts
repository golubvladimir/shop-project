import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators";
import { CatalogItem } from '@/ts/interfaces/CatalogItem.interface';

import { $axios } from '~/utils/axios'

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
    const result = await $axios.$get('/products');

    return result;
  }
}
