import React, {useState, useEffect} from 'react';
import StickyLayout from 'ui-core/dist/StickyLayout';
import { Container, Row, Col } from "ui-core/dist/ContentGrid";
import DatePicker from "ui-core/dist/DatePickerV2";
import Input from "ui-core/dist/Input";
import Checkbox from "ui-core/dist/Checkbox";
import Group from "ui-core/dist/Group";
import RadioGroup from "ui-core/dist/RadioGroup";
import NavigationPaneHeader from 'ui-core/dist/NavigationPaneHeader';
import { Chart } from "ui-core/dist/Chart"; // for icon
import styled from "styled-components";
import FormFooter from "ui-core/dist/FormFooter";
import Button from "ui-core/dist/Button";
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'ui-core/dist/Modal';
import ButtonGroup from "ui-core/dist/ButtonGroup";
import TextStyles from 'ui-core/dist/TextStyles';

const ModalBodyStyle = styled.div`
padding: 0px 50px 20px 50px;
${TextStyles.small};
`;

const ExpSearchComponent = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isChecked, setModalChecked] = useState(true);

    return (
      <>
            <Checkbox
                ariaLabelledBy=""
                dataTestId="test-checkboxDefault"
                label="Expanded Search"
                onChange={(e) => {   
                    if(isChecked == false){
                        setModalChecked(true);
                        setIsModalOpen(false);
                    }else{
                        setIsModalOpen(true);
                    }}
                }
            />
        <Modal isOpen={isModalOpen}>
          <ModalHeader title="Warning" onClose={() =>
            {
                setModalChecked(false)
                setIsModalOpen(false)}} />
                <ModalBody>
                    <ModalBodyStyle>
                        <span>The expanded search option allows the search criteria to add worked counseling tasks which will query the entire RxTx Table. </span>
                        <br></br><br></br>
                        <span>Is is recommended that the search include additional criteria in the filters selected as using the expanded search may cause performance issues.</span>
                    </ModalBodyStyle>
                </ModalBody>
          <ModalFooter>
            <ButtonGroup>
            <Button
              size="medium"
              buttonType="diminished"
              name="Cancel"
              onClick={() => setIsModalOpen(false)}
            />
            <Button size="large" buttonType="emphasized" name="Okey" />
            </ButtonGroup>
          </ModalFooter>
        </Modal>
      </>
    );
  };

function LeftStripContent() {

    const NavpaneHeadingStyle = styled.div`
    div > div {
      padding: 12px 10px 13px;
    }
  `;
    const navigationPaneHeader = {
        left: 10,
        top: 40,
    };
    const FormFooterStyle = {
        position: "sticky",
        bottom: 0,
        borderTop: 0,
        width: "auto",
    };
    const DatePickerStyle = styled.div`
    .DayPicker{
      position:fixed;
      z-index:1;
    }
    input{
        padding: 2px 0 9px 4px !important;
    }
    button{
        margin-right: 2px !important;
    }
`;
const RadioGroupStyle = styled.div`
    > div {
        position: relative;
    };
    > div > div:nth-child(3) {
        position: absolute;
        left: 50%;
        top: 25px;
    };
    > div > div:nth-child(5) {
        position: absolute;
        left: 50%;
        top: 50px;
    };
`
const initialValue = { username : "", birthdate : "" };
const [formValues,updateformValues] = useState(initialValue);

const onSelectedDateChange = (event) => {
    updateformValues({...formValues, birthdate : event.format()});
}

useEffect(() => {
    console.log(formValues)
})

    const NavigationPaneFooter = () => (
        <FormFooter style={FormFooterStyle}>
            <Button
                name="Cancel"
                buttonType="diminished"
                size="medium"
                dataTestId="test-buttonCancel"
            />
            <Button
                name="Save"
                buttonType="emphasized"
                size="medium"
                dataTestId="test-buttonSave"
            />
        </FormFooter>
    );

    return (
        <>
            <StickyLayout footerContent={<NavigationPaneFooter />}>
                <NavpaneHeadingStyle>
                    <NavigationPaneHeader title="Search" icon={Chart} />
                </NavpaneHeadingStyle>
                <Container leftPadding={navigationPaneHeader.left} data-testid="test-container">
                    <Row>
                        <Col>
                            <Input label="Last Name" domID="navigationPane-form-providerId" />
                        </Col>
                        <Col>
                            <Input label="First Name" domID="navigationPane-form-npi" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                label="Rx/Tx Number"
                                domID="navigationPane-form-Rx-Tx-Number"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <DatePickerStyle>
                                <DatePicker
                                    dataTestId="test-datePicker"
                                    domID="test"
                                    errorMessage="select another date"
                                    hasError={false}
                                    label="WC from Date"
                                    name="birthdate"
                                    value={formValues.birthdate}
                                    onDateChange={onSelectedDateChange}
                                />
                            </DatePickerStyle>
                        </Col>
                        <Col>
                            <DatePickerStyle>
                                <DatePicker
                                    dataTestId="test-datePicker"
                                    domID="test"
                                    errorMessage="select another date"
                                    hasError={false}
                                    label="WC to Date"
                                />
                            </DatePickerStyle>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* <Checkbox
                                ariaLabelledBy=""
                                dataTestId="test-checkboxLabel"
                                label="Expanded Search"
                                onChange={() => { }}
                                size="medium"
                            /> */}
                            <ExpSearchComponent />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Group
                                dataTestId="simple-with-accordion"
                                isAccordion
                                // isCollapsed={true}
                                initialIsCollapsed={true}
                                title="Counseling Options"
                                className="cqs-status">
                                    <RadioGroupStyle>
                                    <RadioGroup
                                    dataTestId="test-radioError"
                                    errorMessage="Error message"
                                    items={[
                                        {
                                            id: "id1",
                                            isChecked: true,
                                            label: "All",
                                        },
                                        {
                                            id: "id2",
                                            isChecked: false,
                                            label: "Accepted",
                                        },
                                        {
                                            id: "id3",
                                            isChecked: false,
                                            label: "Refused",
                                        },
                                        {
                                            id: "id4",
                                            isChecked: false,
                                            label: "Waived",
                                        },
                                        {
                                            id: "id5",
                                            isChecked: false,
                                            label: "Required",
                                        },
                                    ]}
                                    // label="Counseling Options"
                                    onChange={() => { }}
                                    orientation="vertical"
                                    size="small"
                                />
                                    </RadioGroupStyle>

                            </Group>
                            <Group
                                dataTestId="simple-with-accordion"
                                isAccordion
                                // isCollapsed={true}
                                initialIsCollapsed={true}
                                title="Status"
                                className="cqs-status">
                                    <RadioGroupStyle>
                                <RadioGroup
                                    dataTestId="test-radioError"
                                    errorMessage="Error message"
                                    items={[
                                        {
                                            id: "id1",
                                            isChecked: true,
                                            label: "All",
                                        },
                                        {
                                            id: "id2",
                                            isChecked: false,
                                            label: "Worked",
                                        },
                                        {
                                            id: "id3",
                                            isChecked: false,
                                            label: "Not Worked",
                                        },
                                    ]}
                                    // label="Status"
                                    onChange={() => { }}
                                    orientation="vertical"
                                    size="small"
                                /></RadioGroupStyle>
                            </Group>
                        </Col>
                    </Row>
                </Container>
            </StickyLayout>
        </>
    )
}

export default LeftStripContent;
