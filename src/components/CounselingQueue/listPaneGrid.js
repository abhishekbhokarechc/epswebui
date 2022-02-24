import React, { useState, useEffect } from 'react';
import StickyLayout from 'ui-core/dist/StickyLayout';
import ListPaneHeader from 'ui-core/dist/ListPaneHeader';
import Grid from 'ui-core/dist/Grid';
import GridProps from './stubData-new';
import useLayout from 'ui-core/dist/useLayout';
import CircleCheck from 'ui-core/dist/CircleCheck';
import Chip from 'ui-core/dist/Chip';
import styled from 'styled-components';
import Tooltip from 'ui-core/dist/Tooltip';
import ChartIn from 'ui-core/dist/ChartIn';
import GridCell from 'ui-core/dist/GridCell';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const GridStyle = styled.div`
table tr th:nth-child(1) {
  display : none;
}
table tr td:nth-child(1) {
  display : none;
}
table tr.empty-row td:nth-child(1) {
  display : revert !important;
}
table tr th:nth-child(2) {
  padding-left : 12px;
  width: 0px;
  overflow: hidden;
  .spacer{
    width: 5px;
  }
}
table tr td:nth-child(2) {
  padding-left : 20px;
}
.chip-label{
  min-width: 75px;
}
table thead th:last-child > * {
  padding-right: 0px !important;
}
table thead th:last-child > * {
  padding: 0px !important;
}
.resetBtn{
  text-align:right;
}
table td span > div{
  min-height: auto;
}
table tr th > div > div {
  position:relative;
  > svg{
    position: absolute;
    right:0px;
    top:12px;
  }
}
// for all time visible search input
table tr th > div{
  flex-direction: column;
  align-items: flex-start;
  margin-bottom:5px;
}
table tr th > div > div {
  width: 90%;
}
`

function ListPaneGrid() {

  const navigate = useNavigate();
  const [recordObj, updateRecord] = useState(null);
  const [storeRegistrationVal, updateStoreVal] = useState('');
  const [originalArray, updateOriginalArray] = useState([]);
  const [initialFlag, updateInitialFlag] = useState(false);

  const storeRegistration = useSelector((state) => state).storeDetails.StoreRegistration;

  const DetailPaneIcon = () => {
    const {
      expandCollapseListPaneButtonConfig,
      openDetailPane,
      detailProps: selectedRecord,
    } = useLayout();
    return (
      <GridCell
        cellType="button"
        data={{
          name: <ChartIn name="ChartIn" size="medium" />,
          buttonType: "diminished",
          onClick: () => {
            console.log('working');
            openDetailPane(recordObj);  
          }
        }}
      />
    )
  }

  const RxNumber = (props) => {
    return (
      <GridCell
        cellType="button"
        data={{
          name: props.rxnumber,
          buttonType: "diminished",
          onClick: () => {
              navigate("/counselingTask");
          }
        }}
      />
    )
  }

  const onExit = () => {
    console.log('closed')
    closeDetailPane();
  }; 

  const {
    expandCollapseListPaneButtonConfig,
    detailProps: selectedRecord,
    closeDetailPane
  } = useLayout();
  const headerProps = {
    dataTestId: 'list-pane-header',
    icon: CircleCheck,
    title: 'List Pane Title',
    count: 10,
    layoutControls: [expandCollapseListPaneButtonConfig,
      {
        buttonType: "close",
        onButtonClick: () => {
          onExit();
        },
        buttonTooltipPosition: "bottom-center",
      },
    ],
  };

  const [listPaneGridRecords, updatelistPaneGridRecords] = useState(Array(50)
  .fill(0)
  .map((_, id) => ({
    quick: <DetailPaneIcon />,
    jobId: <RxNumber rxnumber={id} />,
    layouts: Math.floor(Math.random() * 10),
    docs: <Tooltip
      caretToAnchor={8}
      dataTestId="test-tooltip"
      domID="test-id"
      tooltipContent={Math.floor(Math.random() * 2000)}
      tooltipPosition="top-center"
      tooltipWidth={100}>{Math.floor(Math.random() * 2000)}</Tooltip>,
    amount: <Chip
      domID="test-id"
      label="not Worked"
      type="negative"
    />
  })));

  useEffect(() => {
    updateOriginalArray(listPaneGridRecords);
  },[])

  useEffect(() => {
    if ((storeRegistration.value != storeRegistrationVal && storeRegistrationVal != '') || initialFlag == true) {
        var temp;
      if(storeRegistration.value == ''){
        updateStoreVal('reset');
        updatelistPaneGridRecords(originalArray);
      } else{
        // for grid cells with tooltip
        if(storeRegistration.dataname == 'docs'){
          temp = listPaneGridRecords.filter((el) => {
            let elementToString = el[storeRegistration.dataname].props.children.toString();
            return elementToString.indexOf(storeRegistration.value) > -1 ;
          });  
          }
          // for custome cells
          if(storeRegistration.dataname == 'jobId'){
            temp = listPaneGridRecords.filter((el) => {
              let elementToString = el[storeRegistration.dataname].props.rxnumber.toString();
              return elementToString.toLowerCase().indexOf(storeRegistration.value.toLowerCase()) > -1 ;
            });
          }
          //for normal grid cells
          if(storeRegistration.dataname != 'docs' && storeRegistration.dataname != 'jobId'){
          temp = listPaneGridRecords.filter((el) => {
            let elementToString = el[storeRegistration.dataname].toString();
            return elementToString.indexOf(storeRegistration.value) > -1 ;
          });
          }
          updatelistPaneGridRecords(temp);
      }
    };
    updateInitialFlag(true);
  }, [storeRegistration])

  useEffect(() => {
    if(storeRegistration.value != ''){
      updateStoreVal(storeRegistration.value)
    }
  }, [storeRegistration.value])

  return (
    <StickyLayout headerContent={<ListPaneHeader {...headerProps} />}>
      <GridStyle>
        {/* <div className="resetBtn">
        <button onClick={ () => { updatelistPaneGridRecords(originalArray) }}>Reset</button>
        </div>         */}
        <Grid
          {...GridProps}
          records={listPaneGridRecords}
          emptyGridMessage=""
          onClickThrough={(e, record) => {
            updateRecord(record)
          }}
          focusedItem={selectedRecord}
          dataTestId="list-pane-grid"
        />
      </GridStyle>
    </StickyLayout>
  )
}
export default ListPaneGrid;
