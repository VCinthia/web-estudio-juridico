import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import list from '../../../../assets/json/list.json';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  /* contactoEmail : any;
  contactoCinthia : any; */
  title = 'contactWeb';

  contactForm!: FormGroup;
  isSubmit = true;
  submitMessage = '';
  /* nombre: string = '';
  mail : string = '';
  telefono : string = '';
  seleccion : string = '';
  mensaje: string = ''; */


  constructor(private formBuilder : FormBuilder, private http : HttpClient) { }

  ngOnInit(){
    /* this.contactoEmail = list.abogados[0].mail;
    this.contactoCinthia = 'votacinthia@gmail.com'; */
    this.contactForm = this.formBuilder.group({
      nombre:[null,Validators.required],
      email:[null,[Validators.required, Validators.email]],
      telefono: [null,Validators.required],
      mensaje: [null,Validators.required]
    });
  }

  submitData(value: any) {
    console.log(value);
    this.isSubmit = true;
  
    /* const httpOptions = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json'
      })
    }; */
    
    const url = 'https://formsubmit.co/el/ceduxo'
    this.http.post(url, value/* , httpOptions */).subscribe(
      (response) => {
        console.log(response);
        this.submitMessage = 'Mensaje enviado.';
        setTimeout(() => {
          this.isSubmit = false;
        }, 4000);
      },
      (error) => {
        console.log(error);
        this.submitMessage = 'Error al enviar mensaje.';
        setTimeout(() => {
          this.isSubmit = false;
        }, 4000);
      }
    );
  }
  

}
