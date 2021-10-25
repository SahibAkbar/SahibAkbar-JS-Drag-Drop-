let click = document.querySelector("button");

click.addEventListener("click", function(e){
    e.preventDefault;
    let il = document.querySelectorAll(".test input")[0].value;
    let ay = document.querySelectorAll(".test input")[1].value;
    let gun = document.querySelectorAll(".test input")[2].value;


    let DateBirth = new Date(il,ay-1,gun,0,0,0,0);   
    console.log(DateBirth);
    let firstMS = DateBirth.getTime();
    let presenttense = new Date();
    let secondMS = presenttense.getTime();
    
    let lifems = secondMS-firstMS;
    let lifeyear = lifems/1000/60/60/24/30/12;
    let lifeday = (lifeyear%1)*365;
    let lifehour = (lifeday%1)*24;
    let lifemin = (lifehour%1)*60;
    let lifesec = (lifemin%1)*60;

    document.querySelectorAll(".stat input")[0].value = Math.floor(lifeyear);
    document.querySelectorAll(".stat input")[1].value = Math.floor(lifeday);
    document.querySelectorAll(".stat input")[2].value = Math.floor(lifehour);
    document.querySelectorAll(".stat input")[3].value = Math.floor(lifemin);
    document.querySelectorAll(".stat input")[4].value = Math.floor(lifesec);

})

