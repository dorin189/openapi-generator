import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'openapi-generator/api/people.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PersonDto } from 'openapi-generator';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {
  public peopleForm: FormGroup;
  private newPerson: PersonDto

  constructor(
    private peopleService: PeopleService,
    private formBuilder: FormBuilder) {
    
  }
  ngOnInit(): void {
    this.peopleForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      birthDate: ''
    })
  
  }

  save() {
    if(this.peopleForm.valid) {
      this.newPerson = this.peopleForm.value;
      
      this.peopleService.apiPeoplePost(this.newPerson).subscribe(
        response => {
          console.log(response);
          alert('A fost creata persoana cu numele'+ ' ' +  response.firstName + ' ' + response.lastName);
        },
          
        err => console.log('err', err),
      )
    }
  }

}
