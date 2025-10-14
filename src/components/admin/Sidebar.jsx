import React, { useState, useEffect } from 'react';
import logoSvg from "../../../public/img/logo.svg";
import Image from 'next/image';

const Sidebar = ({ setCurrentView }) => {
    const [isMyStoreOpen, setIsMyStoreOpen] = useState(false);
    const [isSalesManagementOpen, setIsSalesManagementOpen] = useState(false);
    const [isTableManagementOpen, setIsTableManagementOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('DashboardMain');

    const toggleMyStore = () => setIsMyStoreOpen(!isMyStoreOpen);
    const toggleSalesManagement = () => setIsSalesManagementOpen(!isSalesManagementOpen);
    const toggleTableManagement = () => setIsTableManagementOpen(!isTableManagementOpen);

    const handleItemClick = (view) => {
        setCurrentView(view);
        setActiveItem(view);
    };

    // Set DashboardMain as the initial view when the component mounts
    useEffect(() => {
        setCurrentView('DashboardMain');
    }, [setCurrentView]);

    return (
        <div className='sidebar'>
            <div className="logo">
                <Image src={logoSvg} width={30} alt="qbit logo" height={30} />
            </div>
            <div className="my_store">
                <div className="my_store_title" onClick={toggleMyStore}>
                    <h2>내 가게</h2>
                    <div className={isMyStoreOpen ? "icon-24-arrow-up" : "icon-24-arrow-down"}></div>
                </div>
                {isMyStoreOpen && (
                    <div className='my_store_info'>
                        <div
                            onClick={() => handleItemClick('DashboardMain')}
                            className={`dasiboard info ${activeItem === 'DashboardMain' ? 'active' : ''}`}
                        >
                            대시보드
                        </div>
                        <div
                            onClick={() => handleItemClick('StoreInformation')}
                            className={`store_information info ${activeItem === 'StoreInformation' ? 'active' : ''}`}
                        >
                            가게정보
                        </div>
                    </div>
                )}
            </div>
            <div className="sales_management">
                <div className="sales_management_title" onClick={toggleSalesManagement}>
                    <h2>매출 관리</h2>
                    <div className={isSalesManagementOpen ? "icon-24-arrow-up" : "icon-24-arrow-down"}></div>
                </div>
                {isSalesManagementOpen && (
                    <div className="sales_management_info">
                        <div
                            onClick={() => handleItemClick('MenuStatistics')}
                            className={`menu_statistics info ${activeItem === 'MenuStatistics' ? 'active' : ''}`}
                        >
                            메뉴별 통계
                        </div>
                        <div
                            onClick={() => handleItemClick('DateStatistics')}
                            className={`date_statistics info ${activeItem === 'DateStatistics' ? 'active' : ''}`}
                        >
                            날짜별 통계
                        </div>
                    </div>
                )}
            </div>
            <div className="menu_management">
                <div onClick={() => handleItemClick('MenuManagement')}>
                    메뉴관리
                </div>
            </div>
            <div className="table_management">
                <div className="table_management_title" onClick={toggleTableManagement}>
                    <h2>테이블 관리</h2>
                    <div className={isTableManagementOpen ? "icon-24-arrow-up" : "icon-24-arrow-down"}></div>
                </div>
                {isTableManagementOpen && (
                    <div className="table_management_info">
                        <div
                            onClick={() => handleItemClick('CheckQR')}
                            className={`check_QR info ${activeItem === 'CheckQR' ? 'active' : ''}`}
                        >
                            태이블 QR확인
                        </div>
                        <div
                            onClick={() => handleItemClick('EditTable')}
                            className={`edit info ${activeItem === 'EditTable' ? 'active' : ''}`}
                        >
                            테이블 편집
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
