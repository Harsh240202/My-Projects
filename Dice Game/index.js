var num1 = Math.floor(Math.random()*11+2);
        
        function fun1(){
            var a = document.getElementById("p3");
            a.innerHTML = num1;

            var b = document.getElementById("btn1");
            b.disabled = true;
        }

        count1 = 10;
        function fun2(){
            var b = document.getElementById("btn1");
            if(b.disabled==false){
                alert("Click for Win Number");
            }else{
            var a1 = document.getElementById("btn2");
            var i = document.getElementById("p5");
                if(count1 > 0){
                    count1--;
                    i.innerHTML = count1;
                }
                else if(count1==0){
                    a1.disabled = true;
                }
                else{}

            var c = document.getElementById("img1");
            var d = document.getElementById("img2");

            var rnum1 = Math.floor(Math.random()*6+1);
            c.src = "Dice" + rnum1 + ".jpg";

            var rnum2 = Math.floor(Math.random()*6+1);
            d.src = "Dice" + rnum2 + ".jpg";

            var g = rnum1 + rnum2;
            
            var b1 = document.getElementById("div1");
            var h = document.getElementById("para2");
            if(g==num1){
                h.innerHTML = "You Won";
                a1.disabled = true;
                b1.style.backgroundImage = "url(win.gif)"; 
                b1.style.backgroundSize = "cover";
            }else{
            }   
            }
        }

        function fun3(){
            var b1 = document.getElementById("div1");
            b1.style.backgroundImage = "none";

            var h = document.getElementById("para2");
            h.innerHTML = "";

            var a = document.getElementById("p3");
            a.innerHTML = "_";

            var i = document.getElementById("p5");
            i.innerHTML = "_";

            var c = document.getElementById("img1");
            c.src = "Dice1.jpg";

            var d = document.getElementById("img2");
            d.src = "Dice1.jpg";

            var b = document.getElementById("btn1");
            b.disabled = false; 

            var a1 = document.getElementById("btn2");
            a1.disabled = false; 
        }