import React from 'react';
import '../../css/App.css';
import { SceneView } from "@react-navigation/core";

import HeaderNavigationComponent from './header/HeaderNavigationComponent';

export default function RentApplicationView({ descriptors, navigation }) {
    
    const activeKey = navigation.state.routes[navigation.state.index].key;
    const descriptor = descriptors[activeKey];
        
    return (
        <div className = "Rent-ApplicationView">
            <HeaderNavigationComponent />
            
            <div className = "Application-Container">
                <SceneView 
                    navigation={descriptor.navigation}
                    component = {descriptor.getComponent()}/>
            </div>
        </div>
    );

}