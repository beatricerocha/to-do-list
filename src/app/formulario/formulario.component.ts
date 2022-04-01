import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent implements OnInit {

  public testForm = new FormGroup({
    nomeUsuario: new FormControl('', Validators.minLength(2)),
    cpf: new FormControl('', Validators.minLength(11)),
  });

  constructor(
    private fbTest: FormBuilder
  ) {  }

  ngOnInit(): void {
    
    }
  
  editTeste() {
    console.log(this.testForm.value);  
  }
}
