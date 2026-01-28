import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  MY_EMAIL = 'chrimniyounes@gmail.com';
  MY_SUBJECT_PREFIX = '[Portfolio] ';
  MY_LINKEDIN = '#';
  MY_GITHUB = '#';
  MY_CV = '#';

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  copyEmail() {
    navigator.clipboard.writeText(this.MY_EMAIL);
    alert('Adresse copiée ✅');
  }

  submit() {
    if (this.form.invalid) return;
    const v = this.form.getRawValue();
    const mailto = `mailto:${encodeURIComponent(this.MY_EMAIL)}?subject=${encodeURIComponent(this.MY_SUBJECT_PREFIX + v.subject)}&body=${encodeURIComponent(`Nom: ${v.name}\nEmail: ${v.email}\n\n${v.message}`)}`;
    window.location.href = mailto;
  }
}
