import react from "react"

class Searchbar extends react.Component {
    state = { term: " " };

    onFromSubmit = (event) => {
        event.preventDefault()

        this.props.onSubmit(this.state.term)
        // console.log(this.state.term)
    }
    render() {
        return (
            <div className="ui segment container">
                <form onSubmit={this.onFromSubmit} className="ui form">
                    <div className="field">
                        <label>Enter Here!</label>
                        <input type="text" placeholder="Search..." onChange={(e) => this.setState({ term: e.target.value })}
                            value={this.state.term} />
                        {/* <button className="ui button">Search here!</button> */}
                    </div>
                </form>
            </div>
        );
    }
}
export default Searchbar