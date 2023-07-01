import React from 'react';
import Banner from '../LogInScreen/Banner';
import Stream from '../LogInScreen/Stream';
import Groupwatch from '../LogInScreen/Groupwatch';
import BlackPanther from '../LogInScreen/BlackPanther';
import GridTheme from '../LogInScreen/GridTheme';
import DownloadNow from '../LogInScreen/DownloadNow';
import Advertise from '../LogInScreen/Advertise';
import Devices from '../LogInScreen/Devices';
import useTitle from '../../Hooks/UseTitle/UseTitle';
const LogInScreen = () => {
    useTitle('BD-Flix')
    return (
        <>
            <Banner/>
            <Stream/>
            <Groupwatch/>
            <BlackPanther/>
            <GridTheme/>
            <DownloadNow/>
            <Advertise/>
            <Devices/>
        </>
    );
};

export default LogInScreen;
