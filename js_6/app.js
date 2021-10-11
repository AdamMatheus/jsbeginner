var ans1=prompt("Hangi ceviriciyi kullanmak istiyorsun? 1. Celsius>>Fahrenheit , 2.Fahrenheit>Celsius?");
if (ans1==1 || ans1==2) {
    var ans2=prompt("sicaklik degeri kac?");

    temp=()=>{return(ans1==1 ?
        alert(ans2*9/5 + 32):
        alert((ans2-32)*5/9));}             
    temp(ans2);
}
else{
    alert("lutfen 1 yada 2 seciniz");
}