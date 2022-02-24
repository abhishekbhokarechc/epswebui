
import Filter from 'ui-core/dist/Filter';
import Clear from 'ui-core/dist/Clear';
import MicroModal from 'ui-core/dist/MicroModal';
import SearchInput from "ui-core/dist/SearchInput";
import styled from "styled-components";
import { useState, useEffect, useRef } from 'react';
import { setStoreDetails } from "../store/redux/actions";
import { useDispatch } from "react-redux";

const ModalContainer = styled.div`
    //padding: 1.25rem 1rem;
    padding: 5px;
    width: 150px;
    display: flex;
    flex-direction: column;
    color: #0F0F59;
  `;

const ColumnHeader = (props) => {

  const passiveFilter = 'brightness(0) saturate(100%) invert(9%) sepia(79%) saturate(2460%) hue-rotate(233deg) brightness(98%) contrast(112%);'
  const activeFilter = 'brightness(0) saturate(100%) invert(22%) sepia(96%) saturate(5076%) hue-rotate(356deg) brightness(100%) contrast(125%);'

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [containsValue, updateValue] = useState(false);
  const [dataname] = useState(props.dataname);
  //const storeRegistration = useSelector((state) => state).storeDetails.StoreRegistration;
  //const [formData, setFormData] = useState({formVal : storeRegistration.value});
  const initialValue = { formVal: "" };
  const [formData, setFormData] = useState(initialValue);
  const textInput = useRef(null);

  // useEffect(() => {
  //   setFormData(storeRegistration.value);
  // },[]);
  useEffect(() => {
    console.log('working');
    textInput.current && textInput.current.focus();
    document.getElementById("id1").focus();
  }, [textInput])
  const MicroModalStyle = styled.div`
    div > button.medium{
      padding-left: 10px;
      fill:#0F0F59;
    }
    div > div{
      z-index: 3;
    }
    div > div svg{
      display:none;
    }
    div > div svg.search-icon{
      display:block;
    }
    div > button > div > svg.icon {
      filter: ${(containsValue ? activeFilter : passiveFilter)}
    } 
    > div > div.bottom{
      top: 50%;
    }
  `;
  const handleSortGrid = (e) => {
    let val = e.target.defaultValue.length;
    setFormData({ ...formData, formVal: e.target.defaultValue });
    if (val > 0) {
      updateValue(true);
    } else if (val == 0) {
      updateValue(false);
    }
    dispatch(setStoreDetails({ 'value': e.target.defaultValue, 'dataname': dataname }));
    //textInput.current.focus();
    textInput.current && textInput.current.focus();
    setTimeout(() => {
      let abc = document.getElementById("id1");
      abc.focus();
    }, 1000)
  }
  return (
    <>
      <span>{props.text}</span>
      <MicroModalStyle>
        {containsValue ? <Clear
          name="Close"
          size="small"
        /> : null}
        <MicroModal
          initialIsOpen={isOpen}
          orientation='bottom'
          anchorProps={{
            buttonType: 'diminished',
            size: 'medium',
            icon: Filter,
            fillColor: { activeFilter },
          }
          }
          // keep external state up to date with internal state
          onClick={(e, state) => setIsOpen(state.isOpen)}
          domID="test-id-confirm"
          dataTestId="test-microModal-confirm">
          <ModalContainer>
            <SearchInput
              dataTestId="test-quickSearch"
              domID="id1"
              id="id1"
              initialValue={formData.formVal}
              name="formVal"
              //onChange={handleSortGrid}
              //initialValue=""
              onButtonClick={() => { }}
              onKeyUp={handleSortGrid}
              size="small"
              type="text"
              ref={textInput}
            //ref={ref => ref && ref.focus()}
            />
          </ModalContainer>
        </MicroModal>
      </MicroModalStyle>
    </>
  );

}

export const gridProps = {
  columns: new Set([
    {
      dataName: 'quick',
      text: 'Quick',
      sortable: false,
      isSorted: 0
    },
    {
      dataName: 'jobId',
      text: <ColumnHeader text='Job Id' dataname='jobId' />,
      sortable: false,
      isSorted: 0,
    },
    {
      dataName: 'layouts',
      text: <ColumnHeader text='Layout' dataname='layouts' />,
      sortable: false,
      isSorted: 0,
    },
    {
      dataName: 'docs',
      text: <ColumnHeader text='Docs' dataname='docs' />,
      sortable: false,
      isSorted: 0,
    },
    {
      dataName: 'amount',
      text: 'Amount',
      sortable: false,
      isSorted: 0,
      isCurrency: true,
    },
  ]),
  selectedItemIds: new Set([]),
  selectionKey: 'jobId',
  domId: 'grid',
  onSortTableColumn: () => { alert('Sort table column'); },
  onRowSelect: () => { },
  onSelectAll: () => { },
  onLinkClick: () => { },
  onSettingsCancel: () => { },
  supportSelection: false,
  isConfigurable: false,
};

export default gridProps;