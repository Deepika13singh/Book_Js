const inputArr = inputObjArr.map((val)=>{
    return getTag(val);
})
const inputContainerRef = document.getElementById("inputContainer");
inputArr.forEach((val)=>{
    inputContainerRef.append(val);
})
// console.log(inputContainerRef);
// console.log(inputArr);

const butn = document.createElement("button");
// butn.id = "inputButn";
butn.innerHTML = "Save";
inputContainerRef.appendChild(butn);

const tablecontainer = document.getElementById("table_container");
const table = createTable();
tablecontainer.appendChild(table);

butn.addEventListener("click",adddata);