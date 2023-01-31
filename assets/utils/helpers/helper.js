// const {NUMBER, TEXT, DATE} = constants;

function getTag(obj){
    const {key, type,id} = obj;
    let input = null;
    switch(type){
        case NUMBER:
        case TEXT:
        case DATE:
            input = document.createElement("input");
            input.type = type;
            input.name = key;
            break;
        default:
            input = document.createElement("input");
            input.type = TEXT;
            input.name = key;
            break;
    }

    const inputTag = document.createElement('div');
    if(input){
        const inputLab = document.createElement("label");
        inputLab.setAttribute("for",id);
        inputLab.innerHTML=key;
        inputTag.appendChild(inputLab);
        inputTag.appendChild(input);
    }

    return inputTag;
}

function createTable(){
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    for(let {key} of inputObjArr){
        const head = document.createElement("th");
        head.textContent = key;
        thead.appendChild(head);
    }
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}

function getInfo(){
    const Info = [];
    for(let {type,id} of inputObjArr){
        const tag = document.getElementById(`${id}`);
        Info.push(tag.value);
        tag.value="";
    }
    console.log(Info);
    return Info;
}

function adddata(){
    const data = getInfo();
    console.log(data);
    if(data.length!=inputObjArr.length){
        alert("All data is not filled");
    }
    else{
        const row = document.querySelector("#table_container table tbody");
        const tr = document.createElement('tr');
        for(let val of data){
            const td = createElement('td');
            td.innerHTML=val;
            tr.appendChild(td);
        }
        row.append(tr);
    }
}