import { Component, importProvidersFrom } from '@angular/core';
import { User } from '../user';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  name = new FormControl('');
users: any;

  updateName() {
    this.name.setValue('Nancy');
  }

  //
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }


  profileFormBuilder = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  onSubmitbuilder() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileFormBuilder.value);
  }


  ///
  profileFormBArray = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),

    aliases: this.formBuilder.array([this.formBuilder.control('')]),
    user :  this.formBuilder.array([this.formBuilder.control('')]),
  });

  ////
  onSubmitarray() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileFormBArray.value);
  }

  get aliases() {
    return this.profileFormBArray.get('aliases') as FormArray;
  }

  get user() {
    return this.profileFormBArray.get('user') as FormArray;
  }


  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }





  constructor(private formBuilder: FormBuilder) {}


}
