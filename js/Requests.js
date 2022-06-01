import html1 from "./Script.js";
class listeners {
    constructor () {
        this.save = document.querySelector ( '#save' );
        this.addLi = document.querySelector ( '#addLi' );
        this.clear = document.querySelector('#clear')
        this.valueInput = document.querySelector ( 'input' );

    }
    input(){
        this.valueInput.addEventListener('keydown', (e)=>{
            debugger
            let modal = `<div> Нажмите Enter чтобы добавить задачу </div>`
            document.querySelector('.modal').innerHTML = modal
        })
    }
    postTodos () {
        let arr = []
        this.save.addEventListener ( 'click', () => {
            document.querySelectorAll ( '.tuduElement' )
                .forEach ( (el, i) => {
                    arr.push(el.firstChild.innerHTML)
                } )
            localStorage.setItem ( 'arr', JSON.stringify ( arr ) )
            alert('СОХРАНЕНО!')
        } )
    }

    getTodos (data) {
        this.addLi.addEventListener ( 'click', () => {
            html1.addElement ( this.valueInput.value )
        } )
        fetch ( `https://jsonplaceholder.typicode.com/todos` )
            .then ( (response) => response.json () )
            .then ( (json) => ( json.map ( (item, index) => {
                if ( index < data ) html1.addElement ( item.title )
            } ) ) )
    }
    clearAll(){
        this.clear.addEventListener('click', ()=> {
            localStorage.removeItem('arr')
            location.reload()
        } )
    }
    inputEnter(){
        this.valueInput.addEventListener('keypress', (e)=>{
            if(e.key==='Enter') html1.addElement(this.valueInput.value)
        })
    }

 
}
const listener  = new listeners()
export default listener
