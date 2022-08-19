document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-amount');
    const previousWithdrawTotal = getInputElementValueById('updateFromButton');
    const withdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    setTextElementValueById('updateFromButton', withdrawTotal);

    const previousWithdrawBalance = getInputElementValueById('balance-total');
    const balanaceTotal = previousWithdrawBalance - newWithdrawAmount;
    setTextElementValueById('balance-total', balanaceTotal);
})