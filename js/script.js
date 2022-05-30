class html {
    constructor () {
        this.classDiv = document.getElementsByClassName ( 'liClass' )[ 0 ];
        this.valueInput = document.querySelector ( 'input' );
        this.addLi = document.querySelector ( '#addLi' );
    }

    editElement (e) {
        e.path[ 2 ].children[ 0 ].focus ();
        e.path[ 2 ].children[ 0 ].contentEditable = 'true';
    }

    getTodos () {
        const promise = new Promise ( (resolve) =>
            setTimeout ( () => {
                resolve ( 'one' );
            }, 2000 ),
        );
        promise.then ( (data) => {
            console.log ( data );
        } )
            .then ( () => console.log ( 'two' ) )
            .then ( () => setTimeout ( () => {
                console.log ( 'three' )
            }, 1000 ) )
        this.addLi.addEventListener('click', ()=>this.addElement(this.valueInput.value))
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => json.map((el, index)=>{
                  if (index<100)  this.addElement(el.title)
            }));
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
}

const html1 = new html ();
html1.getTodos ();
// document.addEventListener('DOMContentLoaded', html1.getTodos)
