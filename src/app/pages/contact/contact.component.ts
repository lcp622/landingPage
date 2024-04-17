import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
 
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.contactForm = this.formBuilder.group({
      email : ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
  });

  }

  ngOnInit(): void {
      
  };


  enviar (event : Event) {
    event.preventDefault();
    console.log(this.contactForm.value);
    alert('Mensaje enviado correctamente');
  }

  hasErrors(field: string, typeError : string) {
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
  }

}

