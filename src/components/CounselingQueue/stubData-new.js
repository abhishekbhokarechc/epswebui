
import SearchInput from "ui-core/dist/SearchInput";
import { useState, useRef } from 'react';
import { setStoreDetails } from "../store/redux/actions";
import { useDispatch } from "react-redux";

const ColumnHeader = (props) => {
    const dispatch = useDispatch();
    const [dataname] = useState(props.dataname);
    const initialValue = { formVal: "" };
    const [formData, setFormData] = useState(initialValue);
    const textInput = useRef(null);
    const handleSortGrid = (e) => {
        let val = e.target.defaultValue.length;
        setFormData({ ...formData, formVal: e.target.defaultValue });
        dispatch(setStoreDetails({ 'value': e.target.defaultValue, 'dataname': dataname }));
    }
    return (
        <>
            <span>{props.text}</span>
            <SearchInput
                dataTestId="test-quickSearch"
                domID="id1"
                id="id1"
                initialValue={formData.formVal}
                name="formVal"
                onButtonClick={() => { }}
                onKeyUp={handleSortGrid}
                size="small"
                type="text"
                ref={textInput}
            />
        </>
    );
}

export const gridProps = {
    columns: new Set([
        {
            dataName: 'quick',
            text: '',
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
            text: <ColumnHeader text='Amount' dataname='amount' />,
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