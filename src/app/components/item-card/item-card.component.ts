import { Component, Input } from "@angular/core";
import { IItemCard } from "../../interfaces/item.interface";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {

  @Input({required: true}) items: IItemCard[] = []
  @Input() sumary?: IItemCard[]
}
