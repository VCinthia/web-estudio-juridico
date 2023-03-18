import { HttpClient } from '@angular/common/http';
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


  constructor(private formBuilder : FormBuilder) { }

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

  sendEmail() {
    /* const emailData = {
      nombre: this.nombre,
      mail: this.mail,
      telefono: this.telefono,
      mensaje: this.mensaje,
    };

    this.http.post('/send-email', emailData).subscribe(response => {
      console.log(response);
    }); */
  }

  submitData( value : any ){
    console.log(value);
    this.isSubmit = true;
    this.submitMessage = 'Mensaje enviado.';
    setTimeout(()=>{
      this.isSubmit = false;
    },4000);
  }

}
