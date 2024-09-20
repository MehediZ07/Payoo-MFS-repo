document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    console.log("Login button click")
    const inputNumber = document.getElementById('mobile-number').value;
    const pinNumber = document.getElementById('pin-number').value;

if( inputNumber === "01816312962" && pinNumber ==="1234"){
    
    // window.location.href='../home-page.html';
    // window.location.assign('../Sub-pages/home-page.html');
    window.location.assign('/your-repo-name/Sub-pages/home-page.html');




}
else{
    console.log('Number and PIN not matched')
}
})

