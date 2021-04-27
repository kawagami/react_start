
const shadow = {
    boxShadow: '0 0 10px 10px #eaeaea',
    padding: 20,
}


const VDOM = () => (
    // return
    <div className="container" style={shadow}>
        <div className="chevron chevron-up">
        </div>
        <div className="number">
            256
        </div>
        <div className="chevron chevron-down">
        </div>
    </div>
)
ReactDOM.render(<VDOM />, document.getElementById('root'))

