import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/service/email.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  title = 'contactWeb';
  

  contactForm!: FormGroup;
  isSubmit = true;
  submitMessage = '';

  constructor(
     private formBuilder: FormBuilder /*,
    private emailServ : EmailService */ ) {
      this.contactForm = this.formBuilder.group({
        nombre: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        telefono: [null, Validators.required],
        mensaje: [null, Validators.required]
      });
    }

  ngOnInit() {}

  //! METODOS PARA FORMSUBMIT.CO
  // public submitData(value: any) {
  //   console.log(value);
  //   this.isSubmit = true;

  //   // const httpOptions = {
  //   //   url : 'https://formsubmit.co/el/ceduxo',
  //   //   method: "POST",
  //   //   headers: {
  //   //     "Access-Control-Allow-Headers": "Content-Type",
  //   //     "Access-Control-Allow-Origin": "*",
  //   //     /* "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT" */
  //   //   },
  //   //   data: JSON.stringify(
  //   //     value
  //   //   ),
  //   //   dataType: 'json'
  //   // };
  
  //   this.emailServ.postEmail(value).subscribe(
  //     (response: any) => {
  //       console.log(response);
  //       this.submitMessage = 'Mensaje enviado.';
  //       setTimeout(() => {
  //         this.isSubmit = false;
  //       }, 4000);
  //     },
  //     (error: any) => {
  //       console.log(error);
  //       this.submitMessage = 'Error al enviar mensaje.';
  //       setTimeout(() => {
  //         this.isSubmit = false;
  //       }, 4000);
  //     }
  //   );
  // }

  //! METODOS PARA EMAILJS

  public submitData(e: Event) {
    //click.preventDefault();
    this.isSubmit = true;
    emailjs.sendForm('service_37fpdye', 'template_veocf7g', e.target as HTMLFormElement , 'yxY4wLK-97r8FTbM8')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.submitMessage = 'Mensaje enviado.';
        setTimeout(() => {
          this.isSubmit = false;
        }, 4000);
      }, (error) => {
        console.log(error.text);
        this.submitMessage = 'Error al enviar mensaje.';
        setTimeout(() => {
          this.isSubmit = false;
        }, 4000);
      });
  }

}
