import React from 'react';
import "../../../App.css";
import api from '../remote/api';

interface Props {

}

interface State {
    searchText: string
}

export default class SearchBar extends React.PureComponent<Props> {

    state = {
        searchText: ''
    };

    updateSearchText = (evt: any) => {
        this.setState({searchText: evt.target.value});
    }

    onEnter = async (evt: any) => {
        if(evt.key === 'Enter') {
            let {searchText} = this.state;
            let result = await api.getSearchResult(searchText);
            console.log(result);
        }
        
    }

    render() {
        return (
            <div className = "Search-bar-container">
                <input className = "form-control" 
                placeholder = "Search your heart out" 
                autoFocus 
                value = {this.state.searchText}
                onChange = {this.updateSearchText}
                onKeyUp = {this.onEnter}
                ></input>
            </div>
        );
    }
}