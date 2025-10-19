import { Component, Input } from '@angular/core';

@Component({
  selector: 'journeo-train-ticket',
  imports: [],
  templateUrl: './train-ticket.component.html',
  styleUrl: './train-ticket.component.scss'
})
export class TrainTicketComponent {

  @Input() navConf: any;

  constructor() {
  }
}
