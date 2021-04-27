
const userName = 'kawagami';
const addLocation = '中興大學';
const action = '上課';


const VDOM = <h1>{userName}在{addLocation}{action}</h1>
ReactDOM.render(VDOM, document.getElementById('test'))

