// expense section
let totalExpenseList = [];

// footer element three total budget total expense and remaining
let budgetSetAmount = document.getElementById("budgetValue");
let totalExp = document.getElementById("totalExpense");
let totalBal = document.getElementById("totalBalance");
// footer element three total budget total expense and remaining

// this is the div element that conatin the form
let moudal = document.getElementById("moudal");
// this is the div element that conatin the form

// the generated list of expnse inside this div
let listingExpenseDivMain = document.getElementById("mappingList");
// the generated list of expnse inside this div

// info bar abive the list of expense element three element date noof transaction and remain value of budget
let date = document.getElementById("date");
date.innerText = new Date().toDateString();
let noOfTransaction = document.getElementById("noOfTransaction");
let upDatedBudgetValue = document.getElementById("upDatedBudget");
// info bar abive the list of expense element three element date noof transaction and remain value of budget

// expense form element

let perExpenseCategory = document.getElementById("eCategory");
let perExpenseDate = document.getElementById("eDate");
let perExpenseDiscription = document.getElementById("eDiscription");
let perExpenseAmount = document.getElementById("eAmount");
// expense form element

let budgetAmount = document.getElementById("budgetAmountField");
// setbudget button function
const setBudegt = () => {
  if (budgetAmount) {
    budgetSetAmount.innerText = Number(budgetAmount.value);
    upDatedBudgetValue.innerText = Number(budgetSetAmount.innerText);
    console.log(budgetSetAmount.innerText);
    budgetAmount.value = 0;
  } else {
    alert("enter the number only");
  }
};
// setbudget button function

// making class for store date in object
class Expense {
  constructor(date, discription, category, expenseAmount) {
    this.date = date;
    this.discription = discription;
    this.category = category;
    this.expenseAmount = expenseAmount;
  }
}

function makingList() {
  // list element create through dom

  let perExpenseDiv = document.createElement("div");
  let perExpenseInnerDiv = document.createElement("div");
  let perExpenseButtonDiv = document.createElement("div");
  let innerListCategory = document.createElement("p");
  let numberInList = document.createElement("p");

  numberInList.setAttribute("id", "listNumber");
  let innerListDate = document.createElement("p");
  let innerListAmount = document.createElement("p");

  let innerListDelete = document.createElement("button");
  innerListDelete.setAttribute("id", "deletebtn");
  // list element create through dom
  perExpenseDiv.className = "listingDivStyle";
  innerListDelete.className = "btnEditAndDelete";
  innerListDelete.setAttribute("onClick", "btnDelete(this)");
  perExpenseInnerDiv.append(innerListCategory);
  perExpenseInnerDiv.append(innerListDate);
  perExpenseButtonDiv.append(innerListDelete);
  perExpenseDiv.append(numberInList);
  perExpenseDiv.append(perExpenseInnerDiv);
  perExpenseDiv.append(innerListAmount);
  perExpenseDiv.append(perExpenseButtonDiv);
  listingExpenseDivMain.append(perExpenseDiv);
  totalExpenseList.forEach((value, index) => {
    perExpenseDiv.setAttribute("id", index);
    numberInList.innerText = index;
    innerListCategory.innerText = value.category;
    innerListDate.innerText = value.date;
    innerListAmount.innerText = `-$${value.expenseAmount}`;

    innerListDelete.innerText = "Delete";
  });
}

// open modual on btn click
function openMoudal() {
  moudal.className === "hidden"
    ? (moudal.className = "moudal")
    : (moudal.className = "hidden");
}

// expense submit button function
function expenxeSubmit() {
  let perExpenseList = new Expense(
    perExpenseDate.value,
    perExpenseDiscription.value,
    perExpenseCategory.value,
    perExpenseAmount.value
  );

  perExpenseDate.value = "";
  perExpenseDiscription.value = "";
  perExpenseCategory.value = "";
  perExpenseAmount.value = "";

  totalExpenseList.push(perExpenseList);

  // no of transction
  noOfTransaction.innerText = totalExpenseList.length;
  // mapping list

  makingList();
  // sun the total expense
  let expenseSum = totalExpenseList.reduce((total, value) => {
    return total + Number(value.expenseAmount);
  }, 0);
  totalExp.innerText = expenseSum;
  console.log(expenseSum);
  // balnce and value
  upDatedBudgetValue.innerText = Number(budgetSetAmount.innerText) - expenseSum;
  totalBal.innerText = Number(budgetSetAmount.innerText) - expenseSum;
  // moudal Off
  if (moudal.className === "moudal") {
    moudal.className = "hidden";
  }
  console.log(totalExpenseList);
}

// delete btn function
function btnDelete(value) {
  let deletingNode = value.parentNode.parentNode.childNodes[0].innerText;
  console.log(typeof deletingNode, Number(deletingNode));
  // console.log(expenseDiv);
  totalExpenseList.splice(Number(deletingNode), 1);

  noOfTransaction.innerText = totalExpenseList.length;
  value.parentNode.parentNode.remove();
  console.log(
    "no of transaction",
    (noOfTransaction.innerText = totalExpenseList.length)
  );

  let a = document.querySelectorAll("#listNumber");
  a.forEach((value, index) => {
    value.innerText = index;
  });
  console.log(a);
  console.log(totalExpenseList);

  let expenseSum = totalExpenseList.reduce((total, value) => {
    return total + Number(value.expenseAmount);
  }, 0);
  totalExp.innerText = expenseSum;
  console.log("expesess sum", expenseSum);
  upDatedBudgetValue.innerText = Number(budgetSetAmount.innerText) - expenseSum;
  totalBal.innerText = Number(budgetSetAmount.innerText) - expenseSum;
}
