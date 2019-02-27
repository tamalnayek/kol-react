

//----------------------------------------
//  clocks
//----------------------------------------

//--------------
// by react lib
//--------------


let indiaClockEle1 = document.querySelector('#box1 .india')
let usClockEle1 = document.querySelector('#box1 .us')


function clockUI1(zone) {
    let timeZone
    if (zone === 'india')
        timeZone = 'Asia/Kolkata'
    if (zone === 'us')
        timeZone = 'America/New_York'
    let time = new Date().toLocaleTimeString("en-US", { timeZone })
    return (
        <div>
            <div className="card card-default">
                <div className="card-header">{zone}</div>
                <div className="card-body">
                    {time}
                </div>
            </div>
        </div>
    )
}


setInterval(() => {
    ReactDOM.render(clockUI1('india'), indiaClockEle1);
}, 1000)

setInterval(() => {
    ReactDOM.render(clockUI1('us'), usClockEle1);
}, 1000)



//--------------
// by plain js
//--------------

let indiaClockEle2 = document.querySelector('#box2 .india')
let usClockEle2 = document.querySelector('#box2 .us')

function clockUI2(zone) {
    let timeZone
    if (zone === 'india')
        timeZone = 'Asia/Kolkata'
    if (zone === 'us')
        timeZone = 'America/New_York'
    let time = new Date().toLocaleTimeString("en-US", { timeZone })
    let clockUI = `
        <div>
        <div class="card card-default">
            <div class="card-header">${zone}</div>
            <div class="card-body">
                ${time}
            </div>
        </div>
        </div>
    `
    return clockUI;
}

setInterval(() => {
    indiaClockEle2.innerHTML = clockUI2('india')
}, 1000)
setInterval(() => {
    usClockEle2.innerHTML = clockUI2('us')
}, 1000)



//----------------------------------------
// web component spec
//----------------------------------------

/*
// Template
const template = document.createElement('template');
template.innerHTML = `
    <style>
        .alert{
            padding:20px;
            margin:5px;
        }
        .alert-info{
            background-color:#DEF;
        }
    </style>
    <div class="alert alert-info">
        <button class="btn btn-success">+</button>
        <span class="badge badge-dark">0</span>
        <button class="btn btn-danger">-</button>
    </div>
`


// Web compoennnt
class XCounter extends HTMLElement {

    static get observedAttributes() {
        return ['value']
    }

    constructor() {
        super()

        this._value = 0;

        this.root = this.attachShadow({ mode: 'closed' })

        this.root.appendChild(template.content.cloneNode(true))

        this.valueElement = this.root.querySelector('span');
        this.incrementBtn = this.root.querySelectorAll('button')[0];
        this.decrementBtn = this.root.querySelectorAll('button')[1];

        this.incrementBtn.addEventListener('click', e => {
            this._value++
            this.value = this._value;
        })
        this.decrementBtn.addEventListener('click', e => {
            this._value--
            this.value = this._value;
        })
    }

    set value(value) {
        this.valueElement.innerText = value;
        this.dispatchEvent(new CustomEvent('valueChange', { detail: this._value }))
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === 'value') {
            this._value = Number.parseInt(newValue, 10)
            this.valueElement.innerText = this._value;
        }
    }
}


customElements.define('x-counter', XCounter)


var xCounter = document.querySelector('x-counter');
xCounter.addEventListener('valueChange', e => {
    console.log(e.detail);
})


*/