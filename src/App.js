import React from 'react';
import './App.css';
import {TabView, Tab} from '@react/react-spectrum/TabView';
import BuyContainer from './buy_subscriptions/component/buyContainer';
import SellContainer from './sell_subcriptions/component/sellContainer'

function App() {
  return (
    <div className="App">
        <TabView className="AppContainerTabs">
            <Tab label="Buy Subscriptions">
                <BuyContainer />
            </Tab>
            <Tab label="Sell Subscriptions">
                <SellContainer />
            </Tab>
        </TabView>
    </div>
  );
}

export default App;
