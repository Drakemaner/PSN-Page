import {Component, Input, OnInit} from '@angular/core';
import {games} from "../../shared/games/games";
import {Games} from "../../Interfaces/Games";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
   game! : Games

  constructor() { }

  ngOnInit(): void {

  }

}
