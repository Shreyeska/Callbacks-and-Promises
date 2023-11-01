function sum(n,callback){
    // 
    setTimeout(() => {
        if (n<=0){
            callback (new Error ("Invalid input."));
        }
        else{
            let sum=0;
            for(let i = 1; i<=n; i++){
                sum = sum + i;
            }
            callback (null,sum);
        }
    },1000); // for delay.
}

function Addition(n){
    return new Promise ((resolve, reject) => {
        sum (n, (error, result)=>{
            if (error){
                reject ("Rejected");
            }
            else {
                resolve (result);
            }
        });
    });
}

Addition (4)
    .then ((result)=> {
    //Printing in console
    console.log (result);
    //Printing in HTML
    document.getElementById("solution").innerHTML = result;
    })
    .catch ((error) => {
    // Printing in console
    console.error (error);
    //Printing in HTML
    document.getElementById("solution").innerHTML = error;
    });

    