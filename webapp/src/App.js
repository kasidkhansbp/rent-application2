import {
  createNavigator,
  SwitchRouter,
  getActiveChildNavigationOptions
} from '@react-navigation/core';
import {
  createBrowserApp
} from '@react-navigation/web'

import SearchBarComponent from './rentapp/project/views/search/SearchBarComponent';
import RentApplicationView from './rentapp/project/views/RentApplicationView';
import AdPostComponent from './rentapp/project/views/adPost/AdPostComponent';

const App = createNavigator(
  RentApplicationView,
  SwitchRouter({
    SearchBarComponent,   
    AdPostComponent,
  }),
  {
    navigationOptions: ({ navigation, screenProps }) => {
      const options = getActiveChildNavigationOptions(navigation, screenProps);
      return { title: options.title };
    }
  }
)

// class App extends Component<any> {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
        
//         </header>
//       </div>
//     );
//   }
// }

export default createBrowserApp(App);
