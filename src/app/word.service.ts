import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character, Word } from './models/word';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private url = '/assets/words.json';
  countAsOne: string[] = ["aa", "ee", "oo", "uu"];

  constructor(private http: HttpClient) { }

  getWords(): Observable<Word[]> {
    return this.http.get<Word[]>(this.url);
  }

  breakWord(word: string): Character[] {
    let separated: Character[] = [];

    let combinedWord = '';
    let i = 0;

    while (i < word.length) {
      let character = word[i];

      if (i < word.length - 1) {
        const nextCharacter = word[i + 1];
        if ((character === 'a' || character === 'e' || character === 'o' || character === 'u') &&
          character === nextCharacter) {
          character += nextCharacter;
          i++;
        }
      }

      if(i === 0) {
      separated.push({content:character, hidden:false});
      } else {
        separated.push({content:character, hidden:false});
      }
      i++;
    }

    return separated;
  }
}
