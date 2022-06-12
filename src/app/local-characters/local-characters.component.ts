import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-local-characters',
  templateUrl: './local-characters.component.html',
  styleUrls: ['./local-characters.component.css']
})
export class LocalCharactersComponent implements OnInit {

  caracteres: any = [];

  constructor(
    private charactersService: CharactersService
  ) {}

  ngOnInit(): void {
    this.caracteres = this.charactersService.retornar().characters;
  }
}
