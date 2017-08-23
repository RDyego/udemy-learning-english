import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Phrase } from "../shared/phrase.mode";
import { PHRASES } from "./phrase-mock";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public instruction = "Traduza a frase"
  public answer = ''
  public round: number = 0
  public roundPhrase: Phrase
  public phrases: Phrase[] = PHRASES
  public attempts: number = 3
  public progress: number = 0
  @Output() public finishGame: EventEmitter<string> = new EventEmitter

  constructor() {
    this.updateRound();
   }

  ngOnInit() {
  }

  public updateAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value
  }

  public checkAnswer(): void {
    if(this.answer == this.roundPhrase.phrasePtBr){
      this.round++
      this.progress += 100/this.phrases.length
      this.answer = ""
      if(this.round === this.phrases.length){
        this.finishGame.emit('won');
      }
      this.updateRound();
    }else{
      this.attempts--
      if(this.attempts < 0){
        this.finishGame.emit('lost');
      }
    }
  }

  private updateRound(): void {
    this.roundPhrase = this.phrases[this.round]
  }

}
