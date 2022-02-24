import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import { Container, Row, Col } from "ui-core/dist/ContentGrid";
import Group from "ui-core/dist/Group";
import RadioGroup from "ui-core/dist/RadioGroup";
import TextStyles from 'ui-core/dist/TextStyles';
import Button from "ui-core/dist/Button";
import ButtonGroup from "ui-core/dist/ButtonGroup";
import Text from "ui-core/dist/Text";
import SelectDropdown from "ui-core/dist/SelectDropdown";
import TextArea from "ui-core/dist/TextArea";
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'ui-core/dist/Modal';
import Input from "ui-core/dist/Input";

import './counsellingTaskDetails.scss'
import DURtransactionsGrid from './DURtransactionsgrid';
import RxInfo from './rxInfo'

const ButtonStyle = styled.div`
position: relative;
> div{
    position : absolute;
    right: 0px;
}
`
const CardContainerStyle = styled.div`
margin-top: 20px;
`
const LableStyle = styled.div`
div{
  color:#626D8A;
}
`;
const BoldLableStyle = styled.div`
div{
  color:#626D8A;
  font-weight:800;
}
`;
const ModalBodyStyle = styled.div`
padding: 0px 50px 20px 50px;
`;
const AuthErrorMsgStyle = styled.div`
${TextStyles.xSmall};
`
const DispansedDrugStyle = styled.div`
    button{
        padding:0px !important;
        height: auto !important;
        div:nth-child(2){
            white-space: break-spaces;
        }
    color: #0F0F59 !important;
    font-weight: 100 !important;
    text-decoration: underline;
    }
`

const UserAuthComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <Modal
                buttonConfig={{
                    name: 'Complete',
                    buttonType: "emphasized",
                    onClick: () => setIsModalOpen(true),
                }}
                isOpen={isModalOpen}>
                <ModalHeader title="User Authentication" onClose={() => setIsModalOpen(false)} />
                <ModalBody>
                    <ModalBodyStyle>
                        <Row>
                            <Col>
                                <Input label="Username" hasError={true} domID="navigationPane-form-providerId" />
                            </Col>
                            <Col>
                                <Input label="Password" type="password" domID="navigationPane-form-providerId" />
                            </Col>
                        </Row>
                    </ModalBodyStyle>
                    <AuthErrorMsgStyle>
                        <div className="authErrorMsg">User credentials do not match with the logged in user.</div>
                    </AuthErrorMsgStyle>
                </ModalBody>
                <ModalFooter>
                    <ButtonGroup>
                        <Button
                            size="medium"
                            buttonType="diminished"
                            name="Cancel"
                            onClick={() => setIsModalOpen(false)}
                        />
                        <Button size="large" buttonType="emphasized" name="Authenticate" />
                    </ButtonGroup>
                </ModalFooter>
            </Modal>
        </>
    );
};

function TaskDetailPanel(props) {

    const [classVal, toggleClass] = useState(false);
    const [initialFlag, toggleFlag] = useState(true);
    const [currentInvokingIndex, updateCurrentInvokingIndex] = useState(props.currentInvokingIndex);
    const [index] = useState(props.index);
    
    useEffect(() => {
        updateCurrentInvokingIndex(props.currentInvokingIndex);
        if(index == 0 && initialFlag == true){
            toggleClass(true);
        }
        if(currentInvokingIndex != index){
           toggleClass(false);
        }
        // if(currentInvokingIndex == index){
        //     toggleClass(true);
        // }
    })

    const handleUpdate = () => {
        //if(currentInvokingIndex == index){
            toggleClass(!classVal);         
        //}
        toggleFlag(false);
        props.receiveIndex(index)
    }

    const [drugWarningClassVal, toggleDrugWarningClass] = useState(false);
    const handleDrugWarningContent = () => {
        toggleDrugWarningClass(!drugWarningClassVal);
    }

    const [allergyProfileClassVal, toggleAllergyProfileClass] = useState(false);
    const handleallergyProfileContent = () => {
        toggleAllergyProfileClass(!allergyProfileClassVal);
    }

    const [diagnosisProClassVal, toggleDiagnosisProClass] = useState(false);
    const handleDiagnosisProContent = () => {
        toggleDiagnosisProClass(!diagnosisProClassVal);
    }

    const [task] = useState(props.task);

    const [drugWarningHeight, updatedrugWarningHeight] = useState(0);
    const drugWarningRef = useRef(null);
    useEffect(() => {
        updatedrugWarningHeight(drugWarningRef.current.clientHeight)
    });

    const [allergyProHeight, updateAllergyProHeight] = useState(0);
    const allergyProRef = useRef(null);
    useEffect(() => {
        updateAllergyProHeight(allergyProRef.current.clientHeight);
        console.log(allergyProRef.current.clientHeight);
    });

    const [diagnosisProHeight, updateDiagnosisProHeight] = useState(0);
    const diagnosisProRef = useRef(null);
    useEffect(() => {
        updateDiagnosisProHeight(diagnosisProRef.current.clientHeight)
    });
    const ButtonContent = () => {
        return (
            <span>Notes <span className="notificationsCount">{task.notificationCount}</span></span>
        )
    }
    return (
        <>
            <div className={classVal ? 'divOpen' : 'divClose'}>
                <Container data-testid="test-container">
                    <Row>
                        <Col md={8}>
                            <Row>
                                <Col md={2}>
                                    <LableStyle><Text
                                        variant="xSmall">
                                        RX Number</Text>
                                    </LableStyle>
                                    <Text
                                        variant="small">
                                        {task.samplenumber}
                                    </Text>
                                </Col>
                                <Col md={2}>
                                    <LableStyle><Text
                                        variant="xSmall">
                                        TX Number</Text>
                                    </LableStyle>
                                    <Text
                                        variant="small">
                                        {task.samplenumber}
                                    </Text>
                                </Col>
                                <Col md={4}>
                                    <LableStyle><Text
                                        variant="xSmall">
                                        Dispensed Drug</Text>
                                    </LableStyle>
                                    <DispansedDrugStyle>
                                    <Button
                                    size="medium"
                                    buttonType="diminished"
                                    name="Coumadin 1 MG TAB B-MS"
                                    onClick={ () => {} } />
                                    </DispansedDrugStyle>                                    
                                </Col>
                                <Col md={4}>
                                    <LableStyle><Text
                                        variant="xSmall">
                                        Counseling Reason</Text>
                                    </LableStyle>
                                    <Text
                                        variant="small">
                                        {task.samplevalue}
                                    </Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <ButtonStyle>
                                <ButtonGroup>
                                    {classVal === true ? <Button
                                        buttonType="standard"
                                        name={<ButtonContent />}
                                        size="medium"
                                        type="button"
                                    /> : ''}
                                    <Button
                                        size="medium"
                                        buttonType="emphasized"
                                        onClick={handleUpdate}
                                        name="Conselling" />
                                </ButtonGroup>
                            </ButtonStyle>
                        </Col>
                    </Row>
<br></br>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col md={6}>
                                    <BoldLableStyle><Text
                                        variant="xSmall">
                                        Allergy Profile</Text>
                                    </BoldLableStyle>
                                    <div className="overflowContainer">
                                        <div className={allergyProfileClassVal ? 'overflowContentShow' : 'overflowContentHidden'}>
                                            <Text
                                                variant="small">
                                                {(task.allergyList.length == 0) ? <ul ref={allergyProRef}><li>-</li></ul> : <ol ref={allergyProRef}>
                                                    {task.allergyList.map((allergy) => {
                                                        return (
                                                            <li>{allergy}</li>
                                                        )
                                                    })}

                                                </ol>}
                                            </Text>
                                            <LableStyle><Text
                                                variant="xSmall">
                                                {allergyProHeight > 60 ?
                                                    <span onClick={handleallergyProfileContent} className="showMoreBtn">Show {allergyProfileClassVal ? 'Less' : 'More..'}</span> : ''}
                                            </Text></LableStyle>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <BoldLableStyle><Text
                                        variant="xSmall">
                                        Diagnosis Profile</Text>
                                    </BoldLableStyle>
                                    <div  className="overflowContainer">
                                        <div className={diagnosisProClassVal ? 'overflowContentShow' : 'overflowContentHidden'}>
                                            <Text
                                                variant="small">
                                                <ol ref={diagnosisProRef}>
                                                    {task.diagnosisList.map((diagnosis) => {
                                                        return (
                                                            <li>{diagnosis}</li>
                                                        )
                                                    })}

                                                </ol>
                                            </Text>
                                            <LableStyle><Text
                                                variant="xSmall">
                                                {diagnosisProHeight > 60 ?
                                                    <span onClick={handleDiagnosisProContent} className="showMoreBtn">Show {diagnosisProClassVal ? 'Less' : 'More..'}</span> : ''}
                                            </Text></LableStyle>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <BoldLableStyle><Text
                                        variant="xSmall">
                                        Drug Warnings</Text>
                                    </BoldLableStyle>
                                    <div className="overflowContainer">
                                        <div className={drugWarningClassVal ? 'overflowContentShow' : 'overflowContentHidden'}>
                                            <Text
                                                variant="small">
                                                <ol ref={drugWarningRef}>
                                                    {task.drugwarning.map((warning) => {
                                                        return (
                                                            <li>{warning}</li>
                                                        )
                                                    })}

                                                </ol>
                                            </Text>
                                            <LableStyle><Text
                                                variant="xSmall">
                                                {drugWarningHeight > 60 ?
                                                    <span onClick={handleDrugWarningContent} className="showMoreBtn">Show {drugWarningClassVal ? 'Less' : 'More..'}</span> : ''}
                                            </Text></LableStyle>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <BoldLableStyle><Text
                                        variant="xSmall">
                                        DURs for this transaction</Text>
                                    </BoldLableStyle>
                                    <div className="durTransactionGridContainer">
                                        <DURtransactionsGrid />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <BoldLableStyle>
                                        <Text
                                            variant="xSmall">
                                            Counseling Note</Text>
                                    </BoldLableStyle>
                                    <SelectDropdown
                                        ariaLabel="ARIA label"
                                        dataTestId="test-selectDropdownBasic"
                                        domID="test-id"
                                        label="Counseling Code"
                                        onChange={() => { }}
                                        options={[
                                            {
                                                label: 'Red',
                                                value: 'red'
                                            },

                                            {
                                                label: 'Yellow',
                                                value: 'yellow'
                                            },
                                            {
                                                label: 'Blue',
                                                value: 'blue'
                                            },
                                            {
                                                label: 'Purple',
                                                value: 'purple'
                                            }
                                        ]}
                                        placeholderText="Select One"
                                        size="medium"
                                    />

                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <TextArea
                                        className="test-classname"
                                        dataTestId="test-textAreaLabel"
                                        domID="test_id"
                                        label="Counseling Note"
                                        maxLength={100}
                                        onBlur={() => { }}
                                        placeholder="Placeholder"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <RadioGroup
                                        dataTestId="test-radioError"
                                        errorMessage="Error message"
                                        items={[
                                            {
                                                id: "id1",
                                                isChecked: true,
                                                label: "Accepted",
                                            },
                                            {
                                                id: "id2",
                                                isChecked: false,
                                                label: "Refused",
                                            }
                                        ]}
                                        onChange={() => { }}
                                        orientation="horizontal"
                                        size="small"
                                    />
                                </Col>
                                <Col md={6}>
                                    <ButtonStyle>
                                        <ButtonGroup>
                                            <Button
                                                buttonType="deEmphasized"
                                                name="Cancel"
                                                size="medium"
                                                type="button"
                                            />
                                            <UserAuthComponent />
                                        </ButtonGroup>
                                    </ButtonStyle>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Group
                                        dataTestId="simple-with-accordion"
                                        isAccordion
                                        // isCollapsed={true}
                                        initialIsCollapsed={true}
                                        title="Notes History"
                                        className="cqs-status">
                                        <Text variant="xSmall">{task.noteshistory}</Text>
                                    </Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <RxInfo task={task} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default TaskDetailPanel;
