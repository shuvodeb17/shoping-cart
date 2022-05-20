// // Increment start here
// var plusInc = document.getElementById('plus-inc');
// plusInc.addEventListener('click', function () {

//     if (document.getElementById('counter').innerHTML >= 5) {
//         alert('Five item is allow');
//     } else {
//         var counter = document.getElementById('counter').innerHTML;
//         var parseCouter = parseFloat(counter);
//         var addCounter = parseCouter + 1;
//         document.getElementById('counter').innerHTML = addCounter;
//     };
// });
// // Increment end here
// // decrement start here
// var decremet = document.getElementById('decrement');
// decremet.addEventListener('click', function () {

//     if (document.getElementById('counter').innerHTML <= 0) {
//         alert('Not allowed number');
//     } else {
//         var counter = document.getElementById('counter').innerHTML;
//         var conCounter = parseFloat(counter);
//         var addDecrement = conCounter - 1;
//         document.getElementById('counter').innerHTML = addDecrement;
//     }
// });
// // decrement end here




// increment start here
function increment(incDec, price, item, proAmount) {
    var counter = document.getElementById(incDec);
    var price = document.getElementById(price);
    var item = document.getElementById(item);
    var productAmount = document.getElementById(proAmount);
    var totalPAmount = document.getElementById('total-p-amount');
    var delivaryCrg = document.getElementById('delivary-crg');
    if (counter.value >= 5) {
        counter.value = 5
        alert('You can only buy 5 products');
    } else {
        counter.value++;
        var result = parseInt(price.innerHTML) + parseInt(item.innerHTML);
        item.innerHTML = result;

        // product amount
        var productAmountTotal = parseInt(productAmount.innerHTML) + parseInt(price.innerHTML);
        productAmount.innerHTML = productAmountTotal;

        // delivary crg
        var totalDeliCrg = parseInt(delivaryCrg.innerHTML) + parseInt(productAmount.innerHTML);
        totalPAmount.innerHTML = totalDeliCrg;

        // cupon
        if (totalPAmount.innerHTML >= 250) {
            var cuponCodeWrapper = document.getElementById('cupon-code-wrapper');
            cuponCodeWrapper.style.display = 'block';
        } else{
            cuponCodeWrapper.style.display = 'none';
        }

    };
};
// increment end here
// decrement start here
function decrement(incDec, price, item, proAmount) {
    var counter = document.getElementById(incDec);
    var price = document.getElementById(price);
    var item = document.getElementById(item);
    var productAmount = document.getElementById(proAmount);
    var totalPAmount = document.getElementById('total-p-amount');
    var delivaryCrg = document.getElementById('delivary-crg');
    if (counter.value <= 0) {
        counter.value = 0;
    } else {
        counter.value--;
        var result = parseInt(item.innerHTML) - parseInt(price.innerHTML);
        item.innerHTML = result;

        // product amount
        var productAmountTotal = parseInt(productAmount.innerHTML) - parseInt(price.innerHTML);
        productAmount.innerHTML = productAmountTotal;

        // total product amount
        var conTotalAmount = parseInt(totalPAmount.innerHTML) - parseInt(price.innerHTML);
        totalPAmount.innerHTML = conTotalAmount;

        // delivary crg
        var totalDeliCrg = parseInt(delivaryCrg.innerHTML) + parseInt(productAmount.innerHTML);
        totalPAmount.innerHTML = totalDeliCrg;
    }
};
// decrement end here

// cupon code start here

var cuponBtn = document.getElementById('cupon-btn');
var cuponCodeWrapper = document.getElementById('cupon-code-wrapper');
cuponCodeWrapper.style.display = 'none';
cuponBtn.addEventListener('click', function () {
    var cuponText = document.getElementById('cupon-text');
    var cuponTotalPAmount = document.getElementById('total-p-amount').innerHTML;
    if (cuponText.value == 'shuvo deb') {
        alert('Congratulions!!!!!!!');
        var resultCupon = cuponTotalPAmount - 50;
        document.getElementById('total-p-amount').innerHTML = resultCupon;
    } else {
        alert('Your Coupon code does not match');
    }
});

// cupon code end here