let AllAns  = [];
Question("Do you like banana please answer Yes or No");
Question("Do you like apple please answer Yes or No");
Question("Do you like tomato please answer Yes or No");
function Question(theQus){
    let Qus= prompt(theQus);
    AllAns.push(Qus);
}
for (let i=0;i<AllAns.length;++i){
    if(AllAns[i]=="")
    console.log("invalid");
    else
    console.log(AllAns[i]);
}