import { Component, OnInit } from '@angular/core';
import { Person } from 'openapi-generator';
import { PeopleService } from '../../../../openapi-generator/api/api';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  private _personList: Person[];
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
      this.peopleService.apiPeopleGet().subscribe(
        response => {
          this._personList = response;
          console.log(response)},
        err => console.log('err', err),
      );
  }

  public get personList(): Person[] {
    return this._personList;
  }

  public remove(person: Person) {
    this.peopleService.apiPeopleIdDelete(person.id).subscribe(
      response => {
        const item = this.personList.findIndex(item => item.id === person.id);
        if (item != -1) {
          this.personList.splice(item, 1);
        }  

        console.log(response)},
      err => console.log('err', err),
    );
  }


}
