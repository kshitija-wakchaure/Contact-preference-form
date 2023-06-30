import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {

  firstName: string | any;
  lastName: string | any;
  selectedOption: string | any;
  showPhoneNumberInput: boolean | any;
  showEmailAddressInput: boolean | any;
  selectedOptionLabel: string | any;

  handleContactOptionChange() {
    this.showPhoneNumberInput = this.selectedOption === '1';
    this.showEmailAddressInput = this.selectedOption === '2';
    this.selectedOptionLabel = this.selectedOption === '1' ? 'Phone Number' : 'Email Address';
    if (this.selectedOption === '1') {
      this.showPhoneNumberInput = true;
      this.showEmailAddressInput = false;
      this.selectedOptionLabel = 'Phone Number';
    } else if (this.selectedOption === '2') {
      this.showPhoneNumberInput = false;
      this.showEmailAddressInput = true;
      this.selectedOptionLabel = 'Email Address';
    } else {
      this.showPhoneNumberInput = false;
      this.showEmailAddressInput = false;
      this.selectedOptionLabel = '';
    }
  }
}


