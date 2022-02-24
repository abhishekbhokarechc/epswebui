import React from 'react';
import Grid from 'ui-core/dist/Grid';
import GridProps from './stubData';
import useLayout from 'ui-core/dist/useLayout';
import CircleCheck from 'ui-core/dist/CircleCheck';
import styled from "styled-components";

const TaskDetailGridStyle = styled.div`
table thead tr > th > span * {
  visibility: visible;
}
table tr > td > span * {
  visibility: visible;
}
table thead tr th:nth-child(2){
  width: 100px;
}
table thead tr th:nth-child(3){
  width: 100px;
}
`

function TaskDetailGrid() {

    const {
        expandCollapseListPaneButtonConfig,
        detailProps: selectedRecord,
      } = useLayout();
      const headerProps = {
        dataTestId: 'list-pane-header',
        icon: CircleCheck,
        title: 'List Pane Title',
        count: 10,
        layoutControls: [expandCollapseListPaneButtonConfig],
      };
      const listPaneGridRecords = Array(6)
      .fill(0)
      .map((_, id) => ({
        jobId: `IBM Northwest ${id}`,
        layouts: Math.floor(Math.random() * 10),      
        docs: `IBM Northwest`,
        amount:  `IBM Northwest`,
        jobId: `IBM Northwest ${id}`,
        layouts: Math.floor(Math.random() * 10),      
        docs: `IBM Northwest`,
        amount:  `IBM Northwest`
      }));

  return (
    <TaskDetailGridStyle>
      <Grid
        {...GridProps}
        records={listPaneGridRecords}
        focusedItem={selectedRecord}
        dataTestId="list-pane-grid"
      />
    </TaskDetailGridStyle>

  )
}

export default TaskDetailGrid;
