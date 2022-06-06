import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interfaces/users.interfaces';
import { CrudService } from '../services/crud.service';
import { EmailValidatorService } from '../services/email-validator.service';
import { FormComponent } from '../form/form.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit{

  users: User[] = [];

  user!: User;

  editedUser!: User; 

  isEdit: boolean = false;

  @Input() newUser!: User; 


  @Output() onEditUser: EventEmitter<User> = new EventEmitter();

  constructor(
    private crudService: CrudService,
    private emailValidatorService: EmailValidatorService
  ) { }

  ngOnInit(): void {
    
    this.crudService.getAllUsers().subscribe(
      users => {
        this.users = users;
      }
    )


    this.crudService.userObservable$.subscribe(
      userEdit => {
        const list = this.users.filter(user => user.email === userEdit.email);
        if (list.length === 0) { // create

          this.users.push(userEdit)

        } else { // update
          // console.log('editar');
          
          this.users.forEach(user => {
            if (user.email === userEdit.email) {
              user.name = userEdit.name;
              user.email = userEdit.email;
              user.offer = userEdit.offer;
              user.country = userEdit.country;
              user.city = userEdit.city;
            }
          })
          
        }
        
      }
    )

    this.updateUser();
  }

  sendSelectedUser(user:User) {
    this.onEditUser.emit(user);
  }

  updateUser() {
    this.crudService.userObservable$.subscribe((user: User) => {
      this.newUser = user;
    })
  }

  editUser(user: User) {
    this.crudService.setUser(user);
    this.crudService.setUserSubject$(user);
  }

  deleteUser(user: User) {
    this.crudService.deleteUser(user.id!).subscribe(
      () => {
        this.ngOnInit();
      }
    );

    
    
  }

}
