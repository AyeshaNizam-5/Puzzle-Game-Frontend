//alert("js works")

$(function(){

    hint = false;
    selected = false;

    $("#PuzzleArea").each(function(i){

        //console.log($(this).text());
        
    })

    $("#bulb").click(function(){
        hint = !hint;
        if (hint ){
            $("#PuzzleArea > div > div").css({color: "lightgrey"});
        }
        else{
            $("#PuzzleArea > div > div").css("color","white");
        } 
    })


    $("#shuffle").click(function(){


       // $("#shuffle").effect("shake");
       if(selected === false) {
        letters = ["S","T","A","R","E"];
       var used=[];

       for(i = 0;i<5;i++){
        index0 = Math.floor(Math.random() * 5) ;
        index1 = Math.floor(Math.random() * 5) ;
        while(index1 == index0 )
        {
             index0 = Math.floor(Math.random() * 5) ;
        }
        temp = letters[index0];
        letters[index0]=letters[index1];
        letters[index1]=temp;
        }
 
       //used[0]=letters[index0];
       //console.log(letters);
       $("#letter1").html(letters[0]);
       $("#letter2").html(letters[1]);
       $("#letter3").html(letters[2]);
       $("#letter4").html(letters[3]);
       $("#letter5").html(letters[4]);
       }
       
    })

    clickArr=[true,true,true,true,true];

    $("#letter1").click(function(){
        if(clickArr[0]){
            c = $("#letter1").text();
            console.log(c);
            $("#wordPlace").append(c);
            selected = true;
        }
        clickArr[0]=false;
        $("letter1").effect("shake");
        
    })
    $("#letter2").click(function(){
        if(clickArr[1]){
            c = $("#letter2").text();
            console.log(c);
            $("#wordPlace").append(c);
            selected = true;
        }
        clickArr[1]=false;
    })
    $("#letter3").click(function(){
        if(clickArr[2]){
            c = $("#letter3").text();
            console.log(c);
            $("#wordPlace").append(c);
            selected = true;
        }
        clickArr[2]=false;
    })
    $("#letter4").click(function(){
        if(clickArr[3]){
            c = $("#letter4").text();
            console.log(c);
            $("#wordPlace").append(c);
            selected = true;
        }
        clickArr[3]=false;
    })
    $("#letter5").click(function(e){
        if(clickArr[4]){
            c = $("#letter5").text();
            console.log(c);
            $("#wordPlace").append(c);
            selected = true;
        }
        clickArr[4]=false;
    })

    wordArr = ["STAR","ART","STARE","EAT","TAR"];

    $("#mainArea").mousedown(function(e){
        if (e.which == 3){

            word =  $("#wordPlace").text();

            $("#wordPlace").html("");
            clickArr=[true,true,true,true,true];
            selected = false;

        }

    })


})