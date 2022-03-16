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