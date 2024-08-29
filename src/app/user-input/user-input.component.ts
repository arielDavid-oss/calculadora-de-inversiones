import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {


enteredInitialInvestment =signal ('0');
enteredAnualInvestment = signal ('0');
enteredExpectedReturn=signal ('5');
enteredDuration=signal ('10');

constructor(private investmenService: InvestmentService) {}

  onSubmit() {
    this.investmenService.CalculateInvestmentResults(
      {
        initialInvestment: +this.enteredInitialInvestment(),
        duration: +this.enteredDuration(),
        expectedReturn: +this.enteredExpectedReturn(),
         annualInvestment: +this.enteredAnualInvestment()
       }
    );
    // this.enteredInitialInvestment.set('0');
    // this.enteredAnualInvestment.set('0');
    // this.enteredExpectedReturn.set('5');
    // this.enteredDuration.set('10');
  }
}
