import React from 'react';
import PageLayout from 'ui-core/dist/PageLayout';
import Diamond0 from 'ui-core/dist/Diamond0';
import styled from "styled-components";

import './counsellingQueue.scss';
import TopNavigationHeader from "../Common/TopNavigationHeader/topNavigationHeader";
import LeftStripContent from './leftStripContent';
import ListPaneGrid from './listPaneGrid';
import DetailPane from './detailPane'

function CounselingQueue({ title }){
    const LayoutContainer = styled.div`
    header{
      display:none !important;
    }
    > div{
      z-index: 0;
    }
    main > div > div:nth-child(2){
      overflow-y: clip;
    }
    
  `;
  return (
    <>
    <TopNavigationHeader />
    <LayoutContainer>
    <PageLayout
      navigationPaneProps={{
        headerProps: {
          title,
          icon: Diamond0,
        },
      }}
      navigationPaneContent={<LeftStripContent />}
      listPaneContent={<ListPaneGrid />}
      detailPaneContent={<DetailPane />}
      dataTestId="list-pane-with-grid"
    />
    </LayoutContainer>
  </>
  )
}
export default CounselingQueue;