import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-drink-select',
  templateUrl: './drink-select.component.html',
  styleUrls: ['./drink-select.component.scss']
})
export class DrinkSelectComponent implements OnInit {
  drinkForm = this.fb.group({
    drinkName: ['', Validators.required],
    alcohol: [''],
    
  })

  @Output() formUpdate = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.drinkForm.valueChanges.subscribe(formVals => {
      console.log(formVals);
      this.formUpdate.emit(formVals);
    });
  }

}
