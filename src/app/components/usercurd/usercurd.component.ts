import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
  selector: 'app-usercurd',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './usercurd.component.html',
  styleUrls: ['./usercurd.component.css']
})
export class UsercurdComponent implements OnInit {
  
  users: any[] = [];
  isLoading = false;

  faTrash = faTrash;
  faEdit = faPenToSquare; 
  faCheck = faCheck;

  newUsers = {
    userId: '',
    userName: '',
    age: null,
    email: '',
    phoneNumber: ''
  };

  editMode = false;
  editUserId: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser() {
    this.isLoading = true;
    this.userService.getUsers().subscribe({
      next: (data: any) => {
        this.users = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching users', error);
        this.isLoading = false;
      }
    });
  }

  addUser() {
    this.userService.addUser(this.newUsers).subscribe(() => {
      this.fetchUser();
      this.newUsers = { userId: '', userName: '', age: null, email: '', phoneNumber: '' };
    });
  }

  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe(() => {
      this.fetchUser();
    });
  }

  editUser(user: any) {
    this.newUsers = { ...user };
    this.editMode = true;
    this.editUserId = user.id;
  }

  updateUser() {
    if (this.editUserId) {
      this.userService.updateUser(this.editUserId, this.newUsers).subscribe(() => {
        this.fetchUser();
        this.editMode = false;
        this.editUserId = null;
        this.newUsers = { userId: '', userName: '', age: null, email: '', phoneNumber: '' };
      });
    }
  }
}
