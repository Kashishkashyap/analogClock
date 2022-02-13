// var hours= document.getElementById("hour");
// // var minutes= document.getElementsByClassName("minute");
// // var seconds= document.getElementsByClassName("second");
setInterval(()=>{
    d= new Date();
    h= d.getHours();
    m= d.getMinutes();
    s= d.getSeconds();    
    hDeg= h*30+ m/2;
    mDeg= 6*m;
    sDeg= 6*s;
    hour.style.transform= `rotate(${hDeg}deg)`;
    minute.style.transform= `rotate(${mDeg}deg)`;
    second.style.transform= `rotate(${sDeg}deg)`;
},1000);