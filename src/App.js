import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBarCC, HeaderCC } from 'react-common-components';
import Home from './Pages/Home/Home';
import Navigation from './Pages/Navigation/Navigation';
import Forms from './Pages/Forms/Forms';
import Search from './Pages/Search/Search';
import Children from './Children/Children';
import Tables from './Pages/Tables/Tables';
import StandardTable from './Pages/Tables/StandardTable/StandardTable';
import AlternativeRowsTable from './Pages/Tables/AlternativeRowsTable/AlternativeRowsTable';
import VerticalLinesTable from './Pages/Tables/VerticalLinesTable/VerticalLinesTable';
import Modals from './Pages/Modals/Modals';
import StandardModal from './Pages/Modals/StandardModal/StandardModal';
import ActionsModal from './Pages/Modals/ActionsModal/ActionsModal';
import SuccessModal from './Pages/Modals/SuccessModal/SuccessModal';
import FailureModal from './Pages/Modals/FailureModal/FailureModal';
import WarningModal from './Pages/Modals/WarningModal/WarningModal';
import InformationModal from './Pages/Modals/InformationModal/InformationModal';
import Cards from './Pages/Cards/Cards';
import Alerts from './Pages/Alerts/Alerts';

class App extends Component {

  render() {

    const headerProps = {
      info: {
        product: {
          text: 'React Common Components'
        },
        user: {
          text: 'Repair Team | SSC | Atlanta, GA'
        }
      },
      search: {
        show: true,
        input: {
          type: 'search',
          placeholder: 'Search Here',
          className: ''
        }
      },
      actions: [{
          className: 'icon_home',
          text: 'Home',
          path: '/home'
        },
        {
          className: 'icon_navigation',
          text: 'Navigation',
          path: '/navigation'
        },
        {
          className: 'icon_note-list',
          text: 'Forms',
          path: '/forms'
        },
        {
          className: 'icon_search',
          text: 'Search',
          path: '/search'
        },
        {
          className: 'icon_applications',
          text: 'Tables',
          path: '/tables'
        },
        {
          className: 'icon_note-pad',
          text: 'Modals',
          path: '/modals'
        },
        {
          className: 'icon_bell-active',
          text: 'Alerts',
          path: '/alerts'
        },
        {
          className: 'icon_view-list',
          text: 'Cards',
          path: '/cards'
        }
      ]
    };

    return (
      <Router>
        <div className="App">
          <NavBarCC {...headerProps}/>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={Children} />
          <Route path="/home" component={Home} />
          <Route path="/navigation" component={Navigation} />
          <Route path="/Forms" component={Forms} />
          <Route path="/Search" component={Search} />
          <Route path="/Tables" component={Tables} />
          <Route path="/Standardtable" component={StandardTable} />
          <Route path="/alternativerowstable" component={AlternativeRowsTable} />
          <Route path="/verticallinestable" component={VerticalLinesTable} />
          <Route path="/modals" component={Modals} />
          <Route path="/standardmodal" component={StandardModal} />
          <Route path="/actionsmodal" component={ActionsModal} />
          <Route path="/successmodal" component={SuccessModal} />
          <Route path="/failuremodal" component={FailureModal} />
          <Route path="/warningmodal" component={WarningModal} />
          <Route path="/informationmodal" component={InformationModal} />
          <Route path="/cards" component={Cards} />
          <Route path="/alerts" component={Alerts} />
        </div>
      </Router>
    );
  }
}

export default App;
