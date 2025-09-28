import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var emailjs: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitMessageType: 'success' | 'error' | '' = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.initEmailJS();
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  initEmailJS() {
    // Initialize EmailJS with your public key
    emailjs.init("h8XmpP6BLBdcDt3yM"); // Replace with your EmailJS public key
  }

  async onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitMessage = '';

      try {
        const formData = this.contactForm.value;

        // EmailJS send
        const result = await emailjs.send(
          "service_44xq62h", // Your EmailJS service ID
          "template_qq8pwxg", // Replace XXXXXXX with your actual template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject || 'Portfolio Contact Form',
            message: formData.message,
            to_email: 'harshatha19@gmail.com' // Your email
          }
        );

        this.submitMessage = 'Message sent successfully! I\'ll get back to you soon.';
        this.submitMessageType = 'success';
        this.contactForm.reset();

      } catch (error) {
        console.error('Email send error:', error);
        this.submitMessage = 'Sorry, there was an error sending your message. Please try again or contact me directly.';
        this.submitMessageType = 'error';
      } finally {
        this.isSubmitting = false;
        // Clear message after 5 seconds
        setTimeout(() => {
          this.submitMessage = '';
          this.submitMessageType = '';
        }, 5000);
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  // Helper methods for form validation
  getErrorMessage(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (control?.errors && control.touched) {
      if (control.errors['required']) return `${fieldName} is required`;
      if (control.errors['email']) return 'Please enter a valid email';
      if (control.errors['minlength']) return `${fieldName} is too short`;
    }
    return '';
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.contactForm.get(fieldName);
    return !!(control?.invalid && control.touched);
  }
}
