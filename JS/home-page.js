
let totalAmount = parseFloat(document.getElementById('total-balance').innerText)
const forHome = document.getElementById('home');
const forCashIn = document.getElementById('cash-in');
const forCashOut = document.getElementById('cash-out');
// let addAmount = document.getElementById('add-amount').value;
// for cash in 
document.getElementById('btn-cash-in').addEventListener('click', function(event){
    event.preventDefault();


const login = document.getElementById('login-btn-cash-in');
forHome.classList.add('hidden');
forCashOut.classList.add('hidden');
forCashIn.classList.remove('hidden');
login.removeAttribute('disabled')

})

document.getElementById('login-btn-cash-in').addEventListener('click', function(event){
    event.preventDefault();
const addAmount = parseFloat(document.getElementById('add-amount-cash-in').value);
const pinNumber = document.getElementById('pin-number-1').value;
// console.log(addAmount)
// console.log(totalAmount)
if(pinNumber === '1234'){
   const nowAmount = totalAmount + addAmount;
    document.getElementById('total-balance').innerText = nowAmount;
} else{
    console.log('Wrong PIN')
}
document.getElementById('add-amount-cash-in').value='';
document.getElementById('pin-number-1').value='';
forHome.classList.remove('hidden');
forCashIn.classList.add('hidden');
forCashOut.classList.add('hidden');
})


document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
const forHome = document.getElementById('home');
const login = document.getElementById('login-btn-cash-out');
forHome.classList.add('hidden');
forCashIn.classList.add('hidden');
forCashOut.classList.remove('hidden');
login.removeAttribute('disabled')

})

document.getElementById('login-btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
const widrowAmount = parseFloat(document.getElementById('add-amount-cash-out').value);
const pinNumber = document.getElementById('pin-number-2').value;
// console.log(addAmount)
// console.log(totalAmount)
if(pinNumber === '1234'){
   const nowAmount = totalAmount - widrowAmount;
    document.getElementById('total-balance').innerText = nowAmount;
} else{
    console.log('Wrong PIN')
}
document.getElementById('login-btn-cash-out').value='';
document.getElementById('pin-number-2').value='';
forHome.classList.remove('hidden');
forCashIn.classList.add('hidden');
forCashOut.classList.add('hidden');
})

// document.getElementById('login-btn-cash-in').addEventListener('click', function(event) {
//     event.preventDefault();
    
//     const addAmount = parseFloat(document.getElementById('add-amount-cash-in').value);
//     const pinNumber = document.getElementById('pin-number').value;
    
//     // Assuming totalAmount is defined somewhere in your code
//     let totalAmount = parseFloat(document.getElementById('total-balance').innerText) || 0;

//     if (pinNumber === '1234') {
//         if (!isNaN(addAmount) && addAmount > 0) {
//             const nowAmount = totalAmount + addAmount;
//             document.getElementById('total-balance').innerText = nowAmount.toFixed(2);
//         } else {
//             alert('Please enter a valid amount.');
//         }
//     } else {
//         alert('Wrong PIN');
//     }
// });






// document.getElementById('btn-cash-in').addEventListener('click', function(event){
//     event.preventDefault();
// const forHome = document.getElementById('home');
// const forCashIn = document.getElementById('cash-in');
// forHome.classList.add('hidden');
// forCashIn.classList.remove('hidden');

// console.log("dsfjhg")

// })


