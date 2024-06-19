import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent{
  registerForm!: FormGroup; 

  constructor(private router: Router, private fb: FormBuilder) {}


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      fullName: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(8)],
      confirmPassword: ['', Validators.required],
      username: ['', Validators.required],
      date: ['', Validators.required],
    });
  }



  goToLogin() {
    this.router.navigate(['/login']);
  }

}
