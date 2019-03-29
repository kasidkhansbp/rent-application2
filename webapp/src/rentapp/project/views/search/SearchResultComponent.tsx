import React from 'react';
import "../../../css/Search.css";
import { connect } from 'react-redux';
import SearchResultCard from './SearchResultCard';

export default class SearchResultComponent extends React.PureComponent<any> {
    
    static navigationOptions = {
        title: 'Search Result'
    }

    render() {
        
        return (
            <SearchResultContainer />
        );
    }
}


interface Props {
    searchResult: Array<any>
}

const mapStateToProps = (state: any) => {
    return {searchResult: state.searchResult}
};

class SearchResult extends React.PureComponent<Props> {
    
    render() {
        console.log('SearchResultComponent',this.props.searchResult);
        return (
            <div className = "Search-result-container">
                {this.props.searchResult.map((result, index) => <SearchResultCard key = {index} {...result} />)}
            </div>
        );
    }
}

const SearchResultContainer = connect(mapStateToProps)(SearchResult)
