import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css'],
})
export class CharacterInfoComponent implements OnInit {
  id: string;

  resultado: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.http
      .get(`https://rickandmortyapi.com/api/character/${this.id}`)
      .subscribe(
        (result) => {
          this.resultado = result;
        },
        (error) => {
          console.log('Error al obtener la información');
        }
      );
  }
}
