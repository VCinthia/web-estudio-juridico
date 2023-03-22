import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContactoComponent } from '../components/body/contacto/contacto.component';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

 /*  url = 'https://formsubmit.co/el/ceduxo'

  constructor(private http: HttpClient) { }

  postEmail(contactForm : FormGroup) : Observable <FormGroup> {
    return this.http.post<any>(this.url, contactForm);
  } */
}
