import listener from "./Requests.js";
class html {
    constructor () {
        this.classDiv = document.getElementsByClassName ( 'liClass' )[ 0 ];
    }

    init (data) {
        if(localStorage.getItem('arr')){
          JSON.parse(localStorage.getItem('arr')).map((el)=>{
              this.addElement(el)
          })
        }else{
            listener.getTodos(data)
        }

    }

    editElement (e) {
        e.path[ 2 ].children[ 0 ].contentEditable = 'true';
        e.path[ 2 ].children[ 0 ].focus ();
    }



    addElement (data) {
        if(data) {
            let div = document.createElement ( 'div' );
            div.className = 'tuduElement';
            // div.style.border = 'solid'
            div.style.margin = '20px';
            this.classDiv.append ( div );
            let span1 = document.createElement ( 'span' );
            span1.innerText = data;
            listener.valueInput.value = '';
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
    }


};

const html1 = new html ();
html1.init(0)
html1.addElement()
listener.postTodos()
listener.getTodos()
listener.clearAll()
listener.inputEnter()
listener.input()
export default html1

