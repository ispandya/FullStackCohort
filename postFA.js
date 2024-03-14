//axios vs fetch
const axios = require("axios")

//fetch
async function main(){
    const response = await fetch("https://www.toptal.com/developers/postbin/1706261117587-5522551864851",
    {
        method: "POST",
    },
    );
    const td = await response.text();
    console.log(td);
}

//axios
async function main(){
    const response = await axios.post("https://www.toptal.com/developers/postbin/1706261117587-5522551864851");
    console.log(response.data);
}