import React from 'react';
import "../../../../App.css";
import { connect } from 'react-redux';

interface Props {
    searchResult: Array<any>
}

interface State {
    searchText: string
}

const mapStateToProps = (state: any) => {
    return {searchResult: state.searchResult}
};

class SearchResultComponent extends React.PureComponent<Props> {

    render() {
        console.log('SearchResultComponent',this.props.searchResult);
        return (
            <div className = "Search-result-container">
                
            </div>
        );
    }
}

export default connect(mapStateToProps)(SearchResultComponent);