import React from "react";

class SearchBar extends React.Component{
    state = {term: ''};

    onInputChange = event=> {
        this.setState({term: event.target.value});
    };
    onFormSubmit = event =>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
            <div className="search-bar ui segment" style={{marginTop:20}}>
                <form onSubmit={this.onFormSubmit} className="ui form" >
                    <div className="field">
                        <label> Search Video</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            placeholder="Search..."
                            onChange={this.onInputChange}
                        />

                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar; 