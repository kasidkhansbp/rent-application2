import React from 'react';
import "../../../css/Search.css";
import {
    FormControl
} from 'react-bootstrap';

import api from '../../remote/api';
import { addSearchResult } from '../../redux/redux-actions/action';
import { connect } from 'react-redux';
import SearchResultComponent from './SearchResultComponent';

export default class SearchBarComponent extends React.PureComponent<any> {

    static navigationOptions = {
        title: 'SearchBar'
    }
    
    render() {
        return (
            <div className = 'Searchbar-Container'>
                <SearchBarContainer />
                <SearchResultComponent />
            </div>
        );
    }
}

interface Props {
    addSearchResult: (searchResult: Array<any>) => void
}

interface State {
    searchText: string
}

const mapDispatchToProps = (dispatch: any) => (
    {
        addSearchResult: (searchResult: Array<any>) => dispatch(addSearchResult(searchResult))
    }
);

class SearchBar extends React.PureComponent<Props, State> {
    
    state: State = {
        searchText: ''
    };

    updateSearchText = (evt: any) => {
        this.setState({searchText: evt.target.value});
    }

    onEnter = async (evt: any) => {
        if(evt.key === 'Enter') {
            let {searchText} = this.state;
            let result = await api.getSearchResult(searchText);
            this.props.addSearchResult(result.data);
            console.log('result', result);
        }        
    }
    
    render() {
        return (
            <div className = "Search-container">
                <FormControl placeholder = "Search your heart out"
                autoFocus
                value = {this.state.searchText}
                onChange = {this.updateSearchText}
                onKeyUp = {this.onEnter}/>
                {/* <input className = "form-control" 
                placeholder = "Search your heart out" 
                autoFocus 
                value = {this.state.searchText}
                onChange = {this.updateSearchText}
                onKeyUp = {this.onEnter}
                ></input> */}
            </div>
        )
    }
}

const SearchBarContainer = connect(null, mapDispatchToProps)(SearchBar);