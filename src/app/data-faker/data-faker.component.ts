import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-faker',
  templateUrl: './data-faker.component.html',
  styleUrls: ['./data-faker.component.css']
})
export class DataFakerComponent implements OnInit {
  caracteres: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.http
    .get('http://localhost:3000/characters')
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
    this.router.navigate([`/faker-info/${index}`], { relativeTo: this.route });
  }

  eliminarClickado(index: string | number) {
    this.http
    .delete(`http://localhost:3000/characters/${index}`)
    .subscribe(
      (result) => {
        this.caracteres = this.caracteres.filter(caracter => caracter.id != index);
      },
      (error) => {
        console.log('Error al obtener la información');
      }
    );
  }

  editaClickado(index: string | number){
    this.router.navigate([`/faker-update/${index}`], { relativeTo: this.route });
  }

  crearClickado(){
    this.router.navigate([`/faker-create`], { relativeTo: this.route });
  }
}
