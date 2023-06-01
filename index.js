const express = require("express");
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Hi All');
})

const xlsx=require('xlsx');
const excel=xlsx.readFile('./Authentication.xlsx');
let data=[];
const sheets=excel.SheetNames;
for (let i = 0; i < sheets.length; i++) {
    const sheetdata=xlsx.utils.sheet_to_json(excel.Sheets[excel.SheetNames[i]]);
    sheetdata.forEach((line)=>{
        data.push(line);
    });
}

app.get('/data',(req,res)=>{
   res.send(data);
})



app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});