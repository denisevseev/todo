class getDataOnServer{
    getTodos (data) {
        return new Promise((resolve, reject) => {
            fetch ( `https://jsonplaceholder.typicode.com/todos` )
                .then ( (response) => response.json() )
                .then((json)=>resolve(json.map((item, index)=>{
                    if(index<data)  this.addElement(item.title)
                })))
                .catch((err)=>reject(err))
        })
    }
}
