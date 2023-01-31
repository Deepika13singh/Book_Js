const constants = {
    NUMBER : "number",
    TEXT : "text",
    DATE : "date"
}

const {NUMBER, TEXT, DATE} = constants;

const inputObjArr = [
    {
        key: "ISBN",
        type : NUMBER,
        id : "ISBN"
    },
    {   
        key : "Author Name",
        type : TEXT,
        id : "Author_Name"
    },
    {
        key : "Book Name",
        type : TEXT,
        id : "BookName"
    },
    {
        key : "Price",
        type : NUMBER,
        id : "Price"
    },
    {
        key : "Pages",
        type : NUMBER,
        id : "Pages"
    },
    {
        key :  "Discount",
        type : NUMBER,
        id : "Discount"
    },
    {
        key : "Year of Publish",
        type : DATE,
        id : "Year_of_Publish"
    },
    {
        key : "In Stock",
        type : TEXT,
        id : "Stock"
    }
];