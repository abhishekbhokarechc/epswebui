import React from 'react';
import Masthead from 'ui-core/dist/Masthead';
import Items from './hamburgerMenuList';
import Stores from './storeList';
import SupportMenuConfig from './supportMenuConfigList';
import styled from "styled-components";

const HeaderImgStyle = styled.div`
img{
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
a{
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
header{
    z-index: 0;
}

`;

function TopNavigationHeader({
    logoRedirect,
    timestamp,
    notifications,
    announcements,
    integrations
}) {

    const clientSwitchObject = {
        id: 1,
        label: "Select Store",
        path: "",
        labelDecoration: "DC",
        isSecondary: false,
    };

    const callBacknull = (a) => {

    };

    return (
        <div>
            <div>
                <HeaderImgStyle>
                <Masthead
                    theme="normal"
                    logoSrc="The Flash"
                    domID="test-masthead"
                    dataTestId="test-allMenus"
                    logoRedirect={logoRedirect}
                    initialSelectedMenuItemIds={[14]}
                    navMenuItems={Items}
                    clientSwitcherMenuItems={Stores}
                    initialClientSwitcherItem={clientSwitchObject}
                    currentProductName="EPS WEB"
                    productNameOneLine={true}
                    timestamp={timestamp}
                    showNotifications={true}
                    notifications={notifications}
                    announcements={announcements}
                    markAllAsRead={callBacknull("markAllAsRead")}
                    markAsRead={callBacknull("markAsRead")}
                    archive={callBacknull("archive")}
                    archiveAll={callBacknull("archiveAll")}
                    onNotificationClick={callBacknull("onNotificationClick")}
                    onProfileSave={callBacknull("onProfileSave")}
                    onNavMenuOpenClose={callBacknull("onNavMenuOpenClose")}
                    onNavMenuSelect={callBacknull("onNavMenuSelect")}
                    onProductMenuOpenClose={callBacknull("onProductMenuOpenClose")}
                    onProductMenuSelect={callBacknull("onProductMenuSelect")}
                    onAlertMenuOpenClose={callBacknull("onAlertMenuOpenClose")}
                    onSupportMenuOpenClose={callBacknull("onSupportMenuOpenClose")}
                    onSupportMenuSelect={callBacknull("onSupportMenuSelect")}
                    supportMenuConfig={SupportMenuConfig}
                    onDismissCard={callBacknull("onDismissCard")}
                    onAvatarMenuOpenClose={callBacknull("onAvatarMenuOpenClose")}
                    onAvatarMenuSelect={callBacknull("onAvatarMenuSelect")}
                    onLogOutSelect={callBacknull("onLogOutSelect")}
                    userFirstName="Barry"
                    userLastName="Allen"
                    userEmail="barry.allen@theFlash.com"
                    customUserMenuItems={[
                        {
                            sectionItems: new Array(3).fill(0).map((_, i) => ({
                                label: `Menu Item ${i + 1}`,
                                id: i + 1,
                                path: "/story/organisms-masthead--all-menus",
                            })),
                        },
                    ]}
                    initialSelectedMenuSectionIndex={1}
                    initialSelectedMenuItemIndex={0}
                    integrations={integrations}
                    appId={10}
                />
                </HeaderImgStyle>
            </div>
        </div>
    )
}

export default TopNavigationHeader;
