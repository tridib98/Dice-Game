var lg = 0, rg = 0, ll = 0, rl = 0, i = 0,j=1;
    var col = "";
    const f = "first";
    const g = "second";
    var which=1;
    var imgArray = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = 'images/dice-1.png';

    imgArray[1] = new Image();
    imgArray[1].src = 'images/dice-2.png';

    imgArray[2] = new Image();
    imgArray[2].src = 'images/dice-3.png';

    imgArray[3] = new Image();
    imgArray[3].src = 'images/dice-4.png';

    imgArray[4] = new Image();
    imgArray[4].src = 'images/dice-5.png';

    imgArray[5] = new Image();
    imgArray[5].src = 'images/dice-6.png';
    var final = prompt("Enter Checkpoint",20);
    final = parseInt(final);
    var s1 = prompt("Enter Player 1 Name","PLAYER-1");
    var s2 = prompt("Enter Player 2 Name","PLAYER-2");
    document.getElementById("lname").innerHTML = s1;
    document.getElementById("Rname").innerHTML = s2;

    function paralyse(){
        document.getElementById("roll-dice").disabled = true;
        document.getElementById("hold").disabled = true;
    }
    function set_to_zero()
    {
        final = prompt("Enter Checkpoint",20);
    final = parseInt(final);
    s1 = prompt("Enter Player 1 Name","CONGRESS");
    s2 = prompt("Enter Player 2 Name","BJP");
        lg = 0;
        rg = 0;
        rl = 0;
        ll = 0;
        document.getElementById("left-global-score").innerHTML = lg;
        document.getElementById("left-current").innerHTML = ll;
        document.getElementById("right-global-score").innerHTML = rg;
        document.getElementById("right-current").innerHTML = rl;
        document.getElementById("roll-dice").disabled = false;
        document.getElementById("hold").disabled = false;
        document.getElementById("lname").innerHTML = s1;
        document.getElementById("Rname").innerHTML = s2;

        
    }
    function xyz() {
        var x = Math.floor(Math.random() * 6) + 0;
        console.log(`x is ${x}`);
        document.getElementById("a").src = imgArray[x].src;
        var y = Math.floor(Math.random() * 6) + 0;
        document.getElementById("b").src = imgArray[y].src;
        console.log(`y is ${y}`);
        x++;
        y++;
        var global = 0;
        if (x == y) {
            global = 0;
        }
        else {
            var global = x + y;
        }
        console.log(`global value is ${global}`);
        console.log("Next is..");
        // document.getElementById("res").innerHTML = global;
        return global;
    }
    
    function hold() {
        if (which == j) {
            lg = lg + ll;
            document.getElementById("left-global-score").innerHTML = lg;
            ll = 0;
            document.getElementById("left-current").innerHTML = ll;
            document.getElementById("right").style.backgroundColor = " rgba(238, 136, 136, 0.3)";
            document.getElementById("left").style.backgroundColor = "rgba(230, 222, 222, 0.3)";
            which = 0;
            if(lg >= final){
                document.getElementById("lname").innerHTML = "WINNER!";
                paralyse();
            }
          
        }
        else if(which == i) {
            rg = rg + rl;
            document.getElementById("right-global-score").innerHTML = rg;
            rl = 0;
            document.getElementById("right-current").innerHTML = rl;
            document.getElementById("left").style.backgroundColor = "rgba(238, 136, 136, 0.3)";
            document.getElementById("right").style.backgroundColor = "rgba(230, 222, 222, 0.3)";
            which = 1;
            if(rg >= final){
                document.getElementById("Rname").innerHTML = "WINNER!";
                paralyse();
            }
            
        }
    }
    function Roll() {
        var x = xyz();
        // var col = myFunction();
        // console.log(`Hello ${x}`);
        if (which == j) {
            if (x == 0) {
                x = -ll;
            }
            ll = ll + x;
            console.log(`this is ${ll}`);
            document.getElementById("left-current").innerHTML = ll;

        }
        else if(which == i) {
            if (x == 0) {
                x = -rl;
            }
            rl = rl + x;
            console.log(`this is ${rl}`);
            document.getElementById("right-current").innerHTML = rl;          
        }
    }