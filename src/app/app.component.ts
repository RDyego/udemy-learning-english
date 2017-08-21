import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public gameInProgress: boolean = true
  public typeFinish: string

  public finishGame(type: string): void {
    this.typeFinish = type
    this.gameInProgress = false
  }

}
