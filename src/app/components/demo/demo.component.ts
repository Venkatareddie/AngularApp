import { Component } from '@angular/core';
import Snackbar from 'awesome-snackbar';
import Swal from 'sweetalert2';
import { EMPLOYEE_ADDED_MESSAGE } from '../../constants/message_constants';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  openSnackbar()
  {
    new Snackbar(EMPLOYEE_ADDED_MESSAGE,
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }

  openSweetAlert() {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }

  openSweetAlertConfirm() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

}
