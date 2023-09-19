if(undefined){//false
    console.log("undefined Product found");
}else{
    console.log("undefined Product Not found");
}

if(0){//false
    console.log("0 Product found");
}else{
    console.log("0 Product Not found");
}

if(''){//false
    console.log("string Product found");
}else{
    console.log("string Product Not found");
}


if([] || {}){//true
    console.log("array Product found");
}else{
    console.log("array Product Not found");
}
