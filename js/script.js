/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });

});
// $("#queston1").click(function{
//     var belgian == 60
//     var french == 50 
//     var chickenwaffle == 10
//     if(q1 == belgian){
//         totalScore = totalScore + 60
//     }else if(q1 == french){
//         totalScore = totalScore + 50
//     }
// })

function score1(input){
    if(input === "belgian"){
        return 1
    }else if(input === "french"){
        return 2
    }else if(input ==="chickenWaffle"){
        return 3
    }
}
function score2(input){
    if(input === "10"){
        return 1
    }else if(input === "20"){
        return 2
    }else if(input === "30"){
        return 3
    }else if(input === "40"){
        return 4
    }else if(input === "50"){
        return 5    
    }else if(input === "60"){
        return 6
    }else if(input === "70"){
        return 7
    }else if(input === "80"){
        return 8
    }
}
function score3(input){
    if(input === "butter"){
        return 1
    }else if(input === "sprinkles"){
        return 2
    }else if(input === "whipped cream"){
        return 3
    }
}
function megascore(){
    var totalscore = score1("#question1") + score2("#question2") + score3("#question3")
    if(totalscore > 10){
        alert("you are a good waffle iron")
    }else{
        alert("you are nothing")
    }
}