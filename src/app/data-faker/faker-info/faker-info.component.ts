import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faker-info',
  templateUrl: './faker-info.component.html',
  styleUrls: ['./faker-info.component.css']
})
export class FakerInfoComponent implements OnInit {

  id: string;

  resultado: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.http
      .get(` http://localhost:3000/characters/${this.id}`)
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
