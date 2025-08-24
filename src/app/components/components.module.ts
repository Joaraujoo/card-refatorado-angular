import { NgModule } from "@angular/core";

import { BalanceCardComponent } from "./balance-card/balance-card.component";
import { CreditCardComponent } from "./credit-card/credit-card.component";
import { DebitCardComponent } from "./debit-card/debit-card.component";
import { ClientInfosCardComponent } from "./client-infos-card/client-infos-card.component";
import { TitleCardComponent } from "./title-card/title-card.component";
import { BrowserModule } from "@angular/platform-browser";
import { ItemCardComponent } from "./item-card/item-card.component";

@NgModule({
  declarations: [
    BalanceCardComponent,
    CreditCardComponent,
    DebitCardComponent,
    ClientInfosCardComponent,
    TitleCardComponent,
    ItemCardComponent,
  ],
  exports: [
    BalanceCardComponent,
    CreditCardComponent,
    DebitCardComponent,
    ClientInfosCardComponent,
    TitleCardComponent,
    ItemCardComponent,
  ],
  imports: [BrowserModule],
})
export class ComponentsModule {}
