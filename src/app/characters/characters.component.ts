import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  caracteres: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.http
      .get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8')
      .subscribe(
        (result) => {
          this.caracteres = result;
        },
        (error) => {
          console.log('Error al obtener la información');
        }
      );
  }

  detalleClickado(index: string | number) {
    this.router.navigate([`/character/${index}`], { relativeTo: this.route });
  }
}
