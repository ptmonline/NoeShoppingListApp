import { Component } from '@angular/core';

import { LlistatPage } from '../llistat/llistat';
import { ProductesPage } from '../productes/productes';

@Component({
  templateUrl: 'tabs.html',
  providers: [ProductesPage]
})
export class TabsPage {

  tab1Root = ProductesPage;
  tab3Root = LlistatPage;

  tab2Params: any;

  constructor() {
  }
}
