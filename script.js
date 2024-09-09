let start = document.getElementById('start');
let reset = document.getElementById('reset');
let pouse = document.getElementById('pouse');
let sPlus = document.getElementById('sessionPlus');
let sMinus = document.getElementById('sessionMinus');
let bPlus = document.getElementById('breakPlus');
let bMinus = document.getElementById('breakMinus');
let resume=document.getElementById('resume');

let bMinute = document.getElementsByClassName('bMinute')[0];
let sMinute = document.getElementsByClassName('sMinute')[0];

let min = document.getElementsByClassName('min')[0];
let sec = document.getElementsByClassName('sec')[0];


let b = 0;
let s = 0;

let write = document.getElementById('write_area');


sPlus.addEventListener('click', function () {
   
    s++;
    if (s >= 60) {
        s = 0;
    }
    if (s < 10) {
        sMinute.innerHTML = "0" + s;
    }
    else
        sMinute.innerHTML = s;
})
sMinus.addEventListener('click', function () {
    s--;
    if(s<0){
        s=0;
        alert("Already on Zero");
        return;
    }

    if (s < 10) {
        sMinute.innerHTML = "0" + s;
    }
    else
        sMinute.innerHTML = s;
})

bPlus.addEventListener('click', function () {
    b++;
    if (b >= 60) {
        b = 0;
    }
    if (b < 10) {
        bMinute.innerHTML = "0" + b;
    }
    else
        bMinute.innerHTML = b;

})
bMinus.addEventListener('click', function () {
    b--;
    if(b<0){
        b=0;
        alert("Already on Zero");
        return;
    }
    if (b < 10) {
        bMinute.innerHTML = "0" + b;
    }
    else
        bMinute.innerHTML = b;

})





let flag = 1;

start.addEventListener("click", function () {
    
    if(b==0 || s==0){
        alert("Enter Session and Break Time");
        return;
     

    }
    else{
    start.disabled=true;

        start.style.display="none";
        pouse.style.display="block";
        sPlus.disabled=true;
        sMinus.disabled=true;
        bPlus.disabled= true;
        bMinus.disabled=true;
    }
    start.disabled=true;

    flag = 1;
    let s1 = s * 60;
    let s2 = s;
    let b1 = b * 60;
    let b2 = b;
    let interval;
    let count = 1;
    startinterval();
    function startinterval(){
        
    if(b!=0 && s!=0){
            interval = setInterval(() => {
                if (flag == 1) {
                    if (s1 === 0 && b1 === 0) {
                        // clearInterval(interval);
                        s1 = s * 60;
                        s2 = s;
                        b1 = b * 60;
                        b2 = b;
                        // return;
                        count++;
                    }
        
                    if (s1 === 0) {
                        write.innerHTML = "BREAK " + count;
                        b1--;
                        b2 = Math.floor(b1 / 60);
        
                        b2 = b2 < 10 ? "0" + b2 : b2;
                        min.innerHTML = b2;
                        sec.innerHTML = (b1 % 60) < 10 ? "0" + (b1 % 60) : (b1 % 60);
                    } else {
                        write.innerHTML = "SESSION " + count;
                        s1--;
                        s2 = Math.floor(s1 / 60);
        
                        s2 = s2 < 10 ? "0" + s2 : s2;
                        min.innerHTML = s2;
                        sec.innerHTML = (s1 % 60) < 10 ? "0" + (s1 % 60) : (s1 % 60);
                    }
        
        
                }
                else if (flag == 0) {
                    clearInterval(interval);
                }
        
            }, 1000);
        }           
      
    }
   
  
    
    
        pouse.addEventListener("click",()=>{
        // start.style.display="block";
        pouse.style.display="none";
        resume.style.display="block";
        start.disabled=false;
        clearInterval(interval)
        pouse.disabled=true;
        resume.disabled=false;

        resume.addEventListener("click",()=>{
            pouse.style.display="block";
            resume.style.display="none";
            pouse.disabled=false;
            resume.disabled=true;
            clearInterval(interval);
            startinterval();

            
        })
    
    })

    
    
   
});



reset.addEventListener("click", () => {
    // clearInterval(interval);
    flag = 0;
    start.disabled=false;
    start.style.display="block";
    pouse.style.display="none";
    resume.style.display="none";

    sPlus.disabled=false;
    sMinus.disabled=false;
    bPlus.disabled= false;
    bMinus.disabled=false;
   

    min.innerHTML = "00";
    sec.innerHTML = "00";
    sMinute.innerHTML = "00";
    bMinute.innerHTML = "00";
    write.innerHTML="SESSION"
    s = 0;
    b = 0;
})



