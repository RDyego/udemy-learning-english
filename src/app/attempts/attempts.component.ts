import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Heart } from "../shared/heart.model";

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit, OnChanges {

  @Input() public attempts: number

  constructor() { }

  public hearts: Heart[] = [
    new Heart(true),
    new Heart(true),
    new Heart(true),
  ]

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.attempts !== this.hearts.length){
      let index = this.hearts.length - this.attempts - 1
      this.hearts[index].full = false
    }
  }

}
