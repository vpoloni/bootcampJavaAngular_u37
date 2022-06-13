import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faker-update',
  templateUrl: './faker-update.component.html',
  styleUrls: ['./faker-update.component.css']
})
export class FakerUpdateComponent implements OnInit {

  form: FormGroup  = this.fb.group({
    name: ["", {validators: []}],
    image: ["", {validators: []}],
    species: ["", {validators: []}],
    gender: ["", {validators: []}],
    status: ["", {validators: []}],
    location: ["", {validators: []}],
  })

  id: string;

  resultado: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.obtener();
  }


  obtener(){
    this.http
      .get(` http://localhost:3000/characters/${this.id}`)
      .subscribe(
        (result: any) => {
          this.form.patchValue({
            name: result.name,
            image: result.image,
            species: result.species,
            gender: result.gender,
            status: result.status,
            location: result.location,
          })
        },
        (error) => {
          console.log('Error al obtener la información');
        }
      );
  }

  modificarClickado(){

    const body = {
      name: this.form.controls['name'].value,
      image: this.form.controls['image'].value,
      species: this.form.controls['species'].value,
      gender: this.form.controls['gender'].value,
      status: this.form.controls['status'].value,
      location: this.form.controls['location'].value,
    }

    this.http
    .put(`http://localhost:3000/characters/${this.id}`, body)
    .subscribe(
      (result: any) => {
        console.log('resultado de modificar: ', result);
      },
      (error) => {
        console.log('Error al obtener la información');
      }
    );
  }


}
