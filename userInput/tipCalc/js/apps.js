let bill = document.getElementById("bill");

function calc() {
    billNum = Number(bill.value);
    console.log(bill.value);

    let tip = billNum * .20;

    let billTotal = tip + billNum;

    console.log("Tip: $" + tip + ". " + "Total: $" + billTotal);

    bill.value = "";
}

/*
Make a page with one input and one button 
When the button is clicked 
(assuming the value typed into the input
is numerical), calculate both the tip and
the full value of the bill to be paid.
Output both to the console, formatted as such:

"Tip: $X. Total: $X" 
*/