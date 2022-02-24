
import Filter from 'ui-core/dist/Filter';
import MicroModal from 'ui-core/dist/MicroModal';
import SearchInput from "ui-core/dist/SearchInput";
import styled from "styled-components";
import {useState} from 'react';

const ModalContainer = styled.div`
    padding: 1.25rem 1rem;
    width: 150px;
    display: flex;
    flex-direction: column;
    color: #0F0F59;
    
  `;
const MicroModalStyle = styled.div`
  z-index:3;
    div > button.medium{
      padding-left: 10px;
      fill:#0F0F59;
    }
    div > button > div > svg.icon {
      filter: brightness(0) saturate(100%) invert(9%) sepia(79%) saturate(2460%) hue-rotate(233deg) brightness(98%) contrast(112%);
    } 
  `;

  export const SearchColumnRecordwithIcon = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <MicroModalStyle>
      <MicroModal
        initialIsOpen={isOpen}
        orientation='bottom'
        anchorProps={{
          buttonType: 'diminished',
          size: 'medium',
          icon: Filter,
          fillColor:  '#0F0F59',
          }
        }
        // keep external state up to date with internal state
        onClick={(e, state) => setIsOpen(state.isOpen)}
        domID="test-id-confirm"
        dataTestId="test-microModal-confirm"
      >
        <ModalContainer>
          <SearchInput
            dataTestId="test-quickSearch"
            domID="basic-test-id"
            initialValue=""
            onButtonClick={() => { }}
            onChange={function noRefCheck() { }}
            onEnterPress={function noRefCheck() { }}
            size="small"
          />
        </ModalContainer>
      </MicroModal>
      </MicroModalStyle>
    );
  };

const ColumnHeader = (props) => {
  return <><span>{props.text}</span><SearchColumnRecordwithIcon /></>;
}

export const gridProps = {
    records: [
      {
        jobId: 'GE South',
        layouts: '2',
        docs: '276',
        amount: 50000,
        emboldened: true,
        subRecords: [
          {
            documentId: '1029653',
            pages: '2',
            amount: 10000,
            layoutType: 'Check Layout',
            claimId: '1035810392',
          },
          {
            documentId: '1029654',
            pages: '2',
            amount: 10000,
            layoutType: 'Check Layout',
            claimId: '1035810392',
          },
          {
            documentId: '1029655',
            pages: '2',
            amount: 10000,
            layoutType: 'Check Layout',
            claimId: '1035810392',
          },
        ],
      },
      {
        jobId: 'Wells Fargo New England',
        layouts: '2',
        docs: '276',
        amount: 50000,
        emboldened: true,
        subRecords: [
          {
            documentId: '1029656',
            pages: '2',
            amount: 10000,
            layoutType: 'Check Layout',
            claimId: '1035810392',
          },
          {
            documentId: '1029657',
            pages: '2',
            amount: 10000,
            layoutType: 'Check Layout',
            claimId: '1035810392',
          },
          {
            documentId: '1029658',
            pages: '2',
            amount: 10000,
            layoutType: 'Check Layout',
            claimId: '1035810392',
          },
        ],
      },
      {
        jobId: 'Wells Fargo West',
        layouts: '2',
        docs: '276',
        amount: 50000,
        emboldened: true,
        subRecords: [
          {
            documentId: '1029650',
            pages: '2',
            amount: 10000,
            layoutType: 'Check Layout',
            claimId: '1035810392',
          },
          {
            documentId: '1029653',
            pages: '2',
            amount: 10000,
            layoutType: 'Check Layout',
            claimId: '1035810392',
          },
          {
            documentId: '1029660',
            pages: '2',
            amount: 10000,
            layoutType: 'Check Layout',
            claimId: '1035810392',
          },
        ],
      },
      {
        jobId: 'GE North',
        layouts: '2',
        docs: '276',
        amount: 50000,
        subRecords: [
          {
            documentId: '1029661',
            pages: '2',
            amount: 40000,
            layoutType: 'Check Layout',
            claimId: '1035810392',
          },
          {
            documentId: '1029662',
            pages: '5',
            amount: 5000,
            layoutType: 'Check Layout',
            claimId: '1035810392',
          },
          {
            documentId: '1029663',
            pages: '89',
            amount: 5000,
            layoutType: 'Check Layout',
            claimId: '1035810392',
          },
        ],
      },
      {
        jobId: 'IBM Northwest',
        layouts: '2',
        docs: '276',
        amount: 50000,
        subRecords: [
          {
            documentId: '1029666',
            pages: '2',
            amount: 10000,
            layoutType: 'Check Layout',
            claimId: '1035810392',
          },
          {
            documentId: '1029667',
            pages: '2',
            amount: 10000,
            layoutType: 'Check Layout',
            claimId: '1035810392',
          },
          {
            documentId: '1029668',
            pages: '2',
            amount: 10000,
            layoutType: 'Check Layout',
            claimId: '1035810392',
          },
        ],
      },
    ],
    columns: new Set([
      {
        dataName: 'jobId',
        text: <ColumnHeader text='Job Id' />,
        sortable: false,
        isSorted: 0,
      },
      {
        dataName: 'layouts',
        text: <ColumnHeader text='Layout' />,
        sortable: false,
        isSorted: 0,
      },
      {
        dataName: 'docs',
        text: <ColumnHeader text='Docs' />,
        sortable: false,
        isSorted: 0,
      },
      {
        dataName: 'amount',
        text: <ColumnHeader text='Amount' />,
        sortable: false,
        isSorted: 0,
        isCurrency: true,
      },
      {
        dataName: 'jobId',
        text: <ColumnHeader text='Job Id' />,
        sortable: false,
        isSorted: 0,
      },
      {
        dataName: 'layouts',
        text: <ColumnHeader text='Layout' />,
        sortable: false,
        isSorted: 0,
      },
      {
        dataName: 'docs',
        text: <ColumnHeader text='Docs' />,
        sortable: false,
        isSorted: 0,
      },
      {
        dataName: 'amount',
        text: <ColumnHeader text='Amount' />,
        sortable: false,
        isSorted: 0,
        isCurrency: true,
      }
    ]),
    selectedItemIds: new Set([]),
    selectionKey: 'jobId',
    domId: 'grid',
    onSortTableColumn: () => {alert('Sort table column');},
    onRowSelect: () => {},
    onSelectAll: () => {},
    onLinkClick: () => {},
    onSettingsCancel: () => {},
    supportSelection: true,
    isConfigurable: false,
  };

  export default gridProps;