import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-faker-create',
  templateUrl: './faker-create.component.html',
  styleUrls: ['./faker-create.component.css']
})
export class FakerCreateComponent implements OnInit {

  form: FormGroup  = this.fb.group({
    name: ["", {validators: []}],
    image: ["", {validators: []}],
    species: ["", {validators: []}],
    gender: ["", {validators: []}],
    status: ["", {validators: []}],
    location: ["", {validators: []}],
  })

  constructor(private fb: FormBuilder, private http: HttpClient,) { }

  ngOnInit(): void {
  }

  crearClickado(){

    const body = {
      name: this.form.controls['name'].value,
      image: this.form.controls['image'].value,
      species: this.form.controls['species'].value,
      gender: this.form.controls['gender'].value,
      status: this.form.controls['status'].value,
      location: this.form.controls['location'].value,
    }

    this.http
    .post(`http://localhost:3000/characters/`, body)
    .subscribe(
      (result: any) => {
        console.log('resultado de crear: ', result);
      },
      (error) => {
        console.log('Error al obtener la información');
      }
    );
  }

}
