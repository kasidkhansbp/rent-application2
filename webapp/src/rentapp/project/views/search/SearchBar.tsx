import React from 'react';
import "../../../../App.css";
import api from '../../remote/api';
import { addSearchResult } from '../../redux/redux-actions/action';
import { connect } from 'react-redux';

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

export default connect(null, mapDispatchToProps)(SearchBar);