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
            input.id = id;
            break;
        default:
            input = document.createElement("input");
            input.type = TEXT;
            input.name = key;
            input.id = id;
            break;
    }

    const inputTag = document.createElement('div');
    inputTag.classList.add('inputDiv');
    if(input){
        const inputLab = document.createElement("label");
        inputLab.setAttribute("for",id);
        inputLab.innerHTML=key;
        inputLab.classList.add("Inputlabel");
        input.classList.add("InputBox");
        inputTag.appendChild(inputLab);
        inputTag.appendChild(input);inputTag.classList.add("InputTag");
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
        if (tag.value){
            Info.push(tag.value);
            tag.value="";
        }
    }
    return Info;
}

function adddata(){
    const data = getInfo();
    if(data.length!=inputObjArr.length){
        alert("All data is not filled");
    }
    else{
        const row = document.querySelector("#tablecontainer table tbody");
        const tr = document.createElement('tr');
        for(let val of data){
            const td = document.createElement('td');
            td.innerHTML=val;
            tr.appendChild(td);
        }
        row.append(tr);
    }
}