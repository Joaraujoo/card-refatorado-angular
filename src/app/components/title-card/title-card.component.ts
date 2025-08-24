import { Component, Input } from "@angular/core";
import { ITitleCard } from "../../interfaces/title.interface";

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.scss']
})
export class TitleCardComponent {
   @Input({ required: true }) content!: ITitleCard;

   bgOrange = {
     backgroundColor: 'rgb(233, 129, 50)',
   }

   bgBlue = {
     backgroundColor: 'rgb(36, 195, 201)',
   }
}
