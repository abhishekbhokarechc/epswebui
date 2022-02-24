import React from 'react';
import Grid from 'ui-core/dist/Grid';
import DURgridProps from './stubDataDUR';
import useLayout from 'ui-core/dist/useLayout';
import CircleCheck from 'ui-core/dist/CircleCheck';

function DURtransactionsGrid() {

    const {
        expandCollapseListPaneButtonConfig,
        openDetailPane,
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
        <Grid
          {...DURgridProps}
          records={listPaneGridRecords}
          focusedItem={selectedRecord}
          dataTestId="list-pane-grid"
        />
  )
}

export default DURtransactionsGrid;
