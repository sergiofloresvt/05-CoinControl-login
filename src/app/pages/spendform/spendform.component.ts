import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

import { SpendService } from 'src/app/service/spend/spend.service';
import { SpendRequest } from 'src/app/service/spend/spendRequest';

@Component({
  selector: 'app-spendform',
  templateUrl: './spendform.component.html',
  styleUrls: ['./spendform.component.css']
})
export class SpendformComponent implements OnInit {
  inputForm: FormGroup
  inputError: string= ''

  constructor( private fb: FormBuilder,
               private spendService: SpendService ){


    this.inputForm = this.fb.group({
      idSpend: [null, Validators.required],
      user_id: [null, Validators.required],
      category_id: [null, Validators.required],
      monto: [null, Validators.required],
      resultado: [null]
    })

  }
  ngOnInit(): void {
  }

  // saveSpend(){
  //   if (this.inputForm.valid) {
      
  //     this.spendService.saveSpend(this.inputForm.value as SpendRequest).subscribe({
  //       next:(saveData)=>{
  //         console.log(saveData)
  //       },
  //       error:(errorData)=>{
  //         console.log(errorData)
  //         this.inputError =errorData
  //       },
  //       complete:()=>{
  //         console.info("Formulario correcto")
  //         this.inputForm.reset()
  //       }
  //     })
  //   }
  // }
}