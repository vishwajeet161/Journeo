import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../shared-module/components/navbar/navbar.component";
@Component({
  selector: 'journeo-user-registration',
  imports: [NgIf],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss'
})
export class UserRegistrationComponent {

  
  signInForm: FormGroup;
  showPassword: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  ngOnInit(): void {
    // Check if user is already logged in
    this.checkExistingSession();
  }

  /**
   * Check for existing user session
   */
  private checkExistingSession(): void {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      this.signInForm.patchValue({
        email: rememberedEmail,
        rememberMe: true
      });
    }
  }

  /**
   * Handle form submission
   */
  onSubmit(): void {
    if (this.signInForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const formData = this.signInForm.value;

    // Handle remember me
    if (formData.rememberMe) {
      localStorage.setItem('rememberedEmail', formData.email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      
      // Mock authentication - Replace with actual API call
      if (formData.email === 'demo@journeo.com' && formData.password === 'password') {
        // Successful login
        localStorage.setItem('authToken', 'mock-jwt-token');
        localStorage.setItem('user', JSON.stringify({
          name: 'Demo User',
          email: formData.email
        }));
        
        this.router.navigate(['/dashboard']);
      } else {
        // Failed login
        this.errorMessage = 'Invalid email or password. Please try again.';
      }
    }, 1500);
  }

  /**
   * Mark all form fields as touched to show validation errors
   */
  private markFormGroupTouched(): void {
    Object.keys(this.signInForm.controls).forEach(key => {
      this.signInForm.get(key)?.markAsTouched();
    });
  }

  /**
   * Toggle password visibility
   */
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    if (passwordInput) {
      passwordInput.type = this.showPassword ? 'text' : 'password';
    }
  }

  /**
   * Handle forgot password
   */
  forgotPassword(): void {
    const email = this.signInForm.get('email')?.value;
    
    if (email && this.signInForm.get('email')?.valid) {
      // Navigate to forgot password page with email pre-filled
      this.router.navigate(['/forgot-password'], { queryParams: { email } });
    } else {
      // Navigate to forgot password page without email
      this.router.navigate(['/forgot-password']);
    }
  }

  /**
   * Sign in with Google
   */
  signInWithGoogle(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    // Simulate Google OAuth process
    setTimeout(() => {
      this.isLoading = false;
      console.log('Google sign-in initiated');
      // Implement actual Google OAuth here
    }, 1000);
  }

  /**
   * Sign in with Facebook
   */
  signInWithFacebook(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    // Simulate Facebook OAuth process
    setTimeout(() => {
      this.isLoading = false;
      console.log('Facebook sign-in initiated');
      // Implement actual Facebook OAuth here
    }, 1000);
  }

  /**
   * Get form field error message
   */
  getFieldError(fieldName: string): string {
    const field = this.signInForm.get(fieldName);
    
    if (field?.errors?.['required'] && field.touched) {
      return `${this.getFieldLabel(fieldName)} is required`;
    }
    
    if (field?.errors?.['email'] && field.touched) {
      return 'Please enter a valid email address';
    }
    
    if (field?.errors?.['minlength'] && field.touched) {
      return `${this.getFieldLabel(fieldName)} must be at least ${field.errors['minlength'].requiredLength} characters`;
    }
    
    return '';
  }

  /**
   * Get human-readable field label
   */
  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      email: 'Email address',
      password: 'Password'
    };
    
    return labels[fieldName] || fieldName;
  }
}