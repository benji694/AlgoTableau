export const minimum = (Array)=>{
    let min = Array[0];
    for(let i = 0; i < Array.length; i++){
        if(Array[i] < min){
            min = Array[i];
        }
    }
    return min; 
}

export const moyenne = (Array)=>{
    let moy = 0;
    for(let i = 0; i < Array.length; i++){
        moy += Array[i];
    }
    return moy/Array.length;
}

export const withoutString = (Array)=>{
    let newArr = [];
    for(let i = 0; i < Array.length; i++){
        if(typeof Array[i] == 'number'){
            newArr.push(Array[i]);
        }
    }
    return newArr;
}

export const pairImpair = (Array)=>{
    let newArr = [[],[]];
    for(let i = 0; i < Array.length; i++){
        if(Array[i]%2 == 1 || Array[i]%2 == -1){
            newArr[0].push(Array[i]);
        }
        else{
            newArr[1].push(Array[i]);
        }
    }
    return newArr;
}