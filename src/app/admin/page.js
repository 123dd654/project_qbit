"use client";

import React, { useState } from 'react';
import Head from '@/components/admin/Head';
import Sidebar from '@/components/admin/Sidebar';
import DashboardMain from '@/components/admin/DashboardMain';
import StoreInformation from '@/components/admin/StoreInformation';
import MenuStatistics from '@/components/admin/MenuStatistics';
import DateStatistics from '@/components/admin/DateStatistics';
import CheckQR from '@/components/admin/CheckQR';
import EditTable from '@/components/admin/EditTable';

const Page = () => {
    const [currentView, setCurrentView] = useState('DashboardMain');

    const renderView = () => {
        switch (currentView) {
            case 'DashboardMain':
                return <DashboardMain />;
            case 'StoreInformation':
                return <StoreInformation />;
            case 'MenuStatistics':
                return <MenuStatistics />;
            case 'DateStatistics':
                return <DateStatistics />;
            case 'CheckQR':
                return <CheckQR />;
            case 'EditTable':
                return <EditTable />;
            default:
                return <DashboardMain />;
        }
    };

    return (
        <div id='wrap'>
            <Sidebar setCurrentView={setCurrentView} />
            <div className='main'>
                <Head />
                {renderView()}
            </div>
        </div>
    );
};

export default Page;
