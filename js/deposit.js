document.getElementById('deposit-button').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-amount');
    const previousDepositTotal = getInputElementValueById('updateByButton');

    const depositTotal = newDepositAmount + previousDepositTotal;
    // set deposit total value
    setTextElementValueById('updateByButton', depositTotal);

    const previousDepositBalance = getInputElementValueById('balance-total');
    const depositBalanceTotal = previousDepositBalance + newDepositAmount;
    setTextElementValueById('balance-total', depositBalanceTotal);
})