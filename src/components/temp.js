import React, {useState, useEffect} from 'react';
import DatePicker from "ui-core/dist/DatePickerV2";
import TabContainer from "ui-core/dist/TabContainer";
import './temp.scss'

function Temp() {
    const today = new Date().getTime();
    const initialValue = { birthdate : "" };
    const [formValues,updateformValues] = useState(initialValue);
    const [hasError, updateHasError] = useState(false);
    
    const onSelectedDateChange = (event) => {
        updateformValues({...formValues, birthdate : new Date(event.format())});
    }

    useEffect(() => {
        if(new Date(formValues.birthdate).getTime() > today){
            updateHasError(true)
        } else {
            updateHasError(false)
        }
    })

  return (
    <div>
      <DatePicker
                dataTestId="test-datePicker"
                domID="test"
                errorMessage="Future date selection is not allowed"
                hasError={hasError}
                label="WC from Date"
                name="birthdate"
                value={formValues.birthdate}
                onDateChange={onSelectedDateChange}
            />

      {/* <TabContainer
        className="verticalTabContainer"
        contentClass="tab_content_classname"
        dataTestId="test-tabBasic"
        domID="tab-container-basic"
        onTabChange={() => { }}
        tabs={[
          {
            domID: 'id-1',
            label: 'Tab 1',
            tabContent: 'Tab Content 1'
          },
          {
            domID: 'id-2',
            label: 'Tab 2',
            tabContent: <div>Tab Content 2</div>
          },
          {
            domID: 'id-3',
            label: 'Tab 3',
            tabContent: <div>Tab Content 3</div>
          }
        ]}
      /> */}
    </div>
  )
}

export default Temp;