// ES5,6,7,(8,9) task before the exam
// Create a JS program, where you just use as many of the first exam features as you
// can = learn them for the exam

// The business value of the app can be 0
// Create a UI if wish, or just play behind the scenes and print to
// console and use debugger to see what happens in the memory

// First adhoc object, later maybe ES6 etc. class syntax

// e.g. class Bill could extend class Cost (with e.g. dueDate and isPaid)

// daily, weekly, monthly, yearly
const costSpan = [  {span:"Daily", days:1},
                    {span:"Weekly", days:7},
                    {span:"Monthly", days:30.45},
                ];

const costs = [ {name:"Rent", amount:270.25, span:costSpan[2]},
                {name:"Food", amount:7.50, span:costSpan[0]},
                {name:"Eating out", amount:12.00, span:costSpan[1]},
                {name:"Travelling", amount:33.80, span:costSpan[2]},
                {name:"Cosmetics", amount:50.00, span:costSpan[2]},
                {name:"Cat food", amount:30.00, span:costSpan[2]},
              ];
console.log(costs);

//modify costSpan array
costSpan[2] = {span:"Monthly", days:30};
console.log(costs); //costSpan[2] still stay the same in costs array

//modify costs array
costs[0] = {name:"Renting", amount:270.25, span:costSpan[2]};
console.log(costs);// 'Rent' change to 'Renting', const cannot protect object in array

//Mapping arrow function
const newCosts = costs.map((_,index) => index % 2 === 0)
console.log(newCosts); //[true, false, true, false, true, false]

//Filter to select only costs amount >= 30.00 euros
const filteredCosts = costs.filter(cost => cost.amount >= 30);
console.log(filteredCosts);

//Spread
const clonedCostSpan = [...costSpan, {span:"Monthly", days:31}];
console.log(clonedCostSpan)

//class
class Cost {
    constructor(isPaid, span, days) {
      this.isPaid = false;
      this.span = span;
      this.days = days;
    }
  }
 
  class Bill extends Cost {
    constructor(name, amount, isPaid, span, days) {
      super(isPaid, span, days);
      this.name = name;
      this.amount = amount;
    }
    getIsPaid() {
      return this.isPaid;
    }
    setIsPaid(isPaid) {
      this.isPaid = isPaid;
    }
  }
  const billOfSnack = new Bill('snack', 10.50, true, 'Weekly', 7);
  console.log(billOfSnack);

//IIFE
console.log(
    (function addTerm(term) {
      return (
        costs.map(cost => cost.name + ' ' + term)
      )
  })('cost')
  )



 





// Then do whatever reports / analysis or so, with all the costs