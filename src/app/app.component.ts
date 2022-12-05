import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local-storage-app';
  constructor( private localStorageService: LocalStorageService) {}
  public email: string = '';
  public password: string = '';
  public queryKey: string = '';
  public removeKey: string = '';
  public queryResult: string = '';
  public person = {
    email: this.email, 
    password: this.password
  }
  
  public addPerson(){
    this.person.email = this.email
    this.person.password = this.password;
    this.localStorageService.setItem(this.email,  JSON.stringify(this.person))
  }

  // public getPerson(nameToRemove:string){
  //   this.queryResult = this.localStorageService.getItem(nameToRemove);
  // }

  // public deletePerson(nameToDelete:string){
  //   this.localStorageService.removeItem(nameToDelete);
  // }

  // public reset(){
  //   this.localStorageService.clear();
  // }
}