import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordService } from '../word.service';
import { Observable, filter, map, toArray } from 'rxjs';
import { Character, Word } from '../models/word';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-game.component.html',
  styleUrls: ['./read-game.component.css']
})
export class ReadGameComponent implements OnInit {
  words: Word[] = [];
  currentWordIndex = 0;
  currentWord: string = '';
  currentCharacters: Character[] = [];

  constructor(private wordService: WordService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.wordService.getWords().pipe(
      map((words: Word[]) => words.filter(word => word.moeilijkheidsgraad == +this.route.snapshot.paramMap.get('lvl')!))
    ).subscribe(result => {
      this.words = result;
      this.shuffleArray(this.words);
      this.setWordAndCharacters();
    });
  }

  setWordAndCharacters() {
    this.currentWord = this.words[this.currentWordIndex].woord;
    this.currentCharacters = this.breakWord(this.currentWord);
  }

  showNextWord() {
    this.currentWordIndex++;
    if (this.currentWordIndex >= this.words.length) {
      this.currentWordIndex = 0;
    }

    this.shuffleArray(this.words);
    this.setWordAndCharacters();
  }

  audioCharacter(c: Character) {
    let audio = new Audio();
    audio.src = `/assets/${c.content}.mp3`;
    audio.load();
    audio.play();
  }

  audioWord() {
    let audio = new Audio();
    audio.src = this.words[this.currentWordIndex].audio;
    audio.load();
    audio.play();
  }

  breakWord(word: string) {
    return this.wordService.breakWord(word);
  }

  shuffleArray(array: Word[]) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i (inclusive)
      const j = Math.floor(Math.random() * (i + 1));

      // Swap array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


}
