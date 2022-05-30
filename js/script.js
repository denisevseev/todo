class html {
    constructor () {
        this.classDiv = document.getElementsByClassName ( 'liClass' )[ 0 ];
        this.valueInput = document.querySelector ( 'input' );
        this.addLi = document.querySelector ( '#addLi' );
        this.save = document.querySelector ( '#save' );
        this.clear = document.querySelector('#clear')
    }

    init (data) {
        if(localStorage.getItem('arr')){
          JSON.parse(localStorage.getItem('arr')).map((el)=>{
              this.addElement(el)
          })
        }else{
            this.getTodos(data)
        }

    }
    inputEvent(){
        this.valueInput.addEventListener('keypress', (e)=>{
           if(e.key==='Enter') this.addElement(this.valueInput.value)
        })
    }

    editElement (e) {
        e.path[ 2 ].children[ 0 ].contentEditable = 'true';
        e.path[ 2 ].children[ 0 ].focus ();
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
            this.addElement ( this.valueInput.value )
        } )
        fetch ( `https://jsonplaceholder.typicode.com/todos` )
            .then ( (response) => response.json () )
            .then ( (json) => ( json.map ( (item, index) => {
                if ( index < data ) this.addElement ( item.title )
            } ) ) )
    }
    clearAll(){
            this.clear.addEventListener('click', ()=> {
                localStorage.removeItem('arr')
                location.reload()
            } )
    }

    addElement (data) {
        let div = document.createElement ( 'div' );
        div.className = 'tuduElement';
        // div.style.border = 'solid'
        div.style.margin = '20px';
        this.classDiv.append ( div );
        let span1 = document.createElement ( 'span' );
        span1.innerText = data;
        this.valueInput.value = '';
        div.append ( span1 );
        let div2 = document.createElement ( 'div' );
        div2.className = 'icons';
        div.append ( div2 );
        let span = document.createElement ( 'span' );
        span.className = 'editSpan';
        span.innerText = '✎';
        span.onclick = (e) => this.editElement ( e );
        div2.append ( span );
        let span2 = document.createElement ( 'span' );
        span2.className = 'deleteSpan';
        span2.innerText = '🗑';
        span2.onclick = (e) => e.target.parentNode.parentElement.remove ();
        span2.style.margin = '20px';
        div2.append ( span2 );
    }
};

const html1 = new html ();
html1.init(2)
html1.postTodos()
html1.getTodos()
html1.clearAll()
html1.inputEvent()


// document.addEventListener('DOMContentLoaded', html1.getTodos)
