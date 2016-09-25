import { Component } from '@angular/core';

 
@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h3>Type into inputs and watch form state update</h3>
             <h3>Press Add button to assign current form state to component property.</h3>
              <form #myform="ngForm" (submit)="add(myform.value)">
                      <label>Name</label>
                      <input type="text" ngModel name="name"><br>
                      <label>City</label>
                      <input type="text" ngModel name="city"><br>
                      <label>Country</label>
                      <input type="text" ngModel name="country"><br>
                      <button>Add</button>
              </form>
              <p>myform.value (local template variable) = {{myform.value | json}}</p>
              
              <h3>Submitted Form State: {{submittedState | json}}</h3>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  submittedState : Object;
  
  add(formObj){this.submittedState = formObj;}
  
}
