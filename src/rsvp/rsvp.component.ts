import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Guest } from './guest.interface';

@Component({
    selector: 'rsvp',
    templateUrl: 'rsvp.component.html',
})
export class RSVPComponent implements OnInit {
    public myForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes
    title = 'Registry for Johnson Clark Wedding';

    constructor(private _fb: FormBuilder) { } // form builder simplify form initialization

    ngOnInit() {
        // we will initialize our form model here
        // the short way
        this.myForm = this._fb.group({
            firstName: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            lastName: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            phone: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            email: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
            // address: this._fb.group({
            //     street: ['', <any>Validators.required],
            //     postcode: ['']
            //})
        });
    }

    save(model: Guest, isValid: boolean) {
        this.submitted = true; // set form submit to true

        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
    }
}
