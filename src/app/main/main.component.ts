import { Component, OnInit } from '@angular/core';
import {games} from "../shared/games/games";
import {Games} from "../Interfaces/Games";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  games : Games[] = games

  constructor() { }

  ngOnInit(): void {
  }

}
