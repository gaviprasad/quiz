$("document").ready(function(){
    //write a program to send request
     changeData = function(data){
    //    console.log("recvd data")
    //    console.log(data)
       $("#question").html(data["que"])
       $("#op1").html(data["ans"][0])
       $("#op2").html(data["ans"][1])
       $("#op3").html(data["ans"][2])
       $("#op4").html(data["ans"][3])
  
   
     }
     $.get("/question",changeData)
     $("#op1").click(function(){
       $.get("/answer/1",function(data){
         if(data["answer"]){
           alert("correct answer")
         }
         else{
           alert("wrong answer")
           
         }
       })
     });
     $.get("/question",changeData)
     $("#op2").click(function(){
       $.get("/answer/2",function(data){
         if(data["answer"]){
           alert("correct answer")
         }
         else{
           alert("wrong answer")
           
         }
       })
     });
     $.get("/question",changeData)
     $("#op3").click(function(){
       $.get("/answer/3",function(data){
         if(data["answer"]){
           alert("correct answer")
         }
         else{
           alert("wrong answer")
           
         }
       })
     });
     $.get("/question",changeData)
     $("#op4").click(function(){
       $.get("/answer/4",function(data){
         if(data["answer"]){
           alert("correct answer")
         }
         else{
           alert("wrong answer")
           
         }
       })
     });
   
   });