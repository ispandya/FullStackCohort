//2 different ways for fetch


//1st way
function main(){
    fetch("https://sum-server.100xdevs.com/todos")
        .then(async (response) =>{
            const json = await response.json();
            console.log(json.todos.length);
        });
}

//2nd way
async function main(){
    const response = await fetch("https://sum-server.100xdevs.com/todos")
    const json = await response.json();
    console.log(json.todos.length);
}