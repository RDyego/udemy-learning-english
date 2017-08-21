import { Component, OnInit } from '@angular/core';
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
  public attempts = 3

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
      alert('Ok!')
    }else{
      this.attempts--
      if(this.attempts < 0){
        alert('Fail!')
      }
    }
  }

  private updateRound(): void {
    this.roundPhrase = this.phrases[this.round]
  }

}
