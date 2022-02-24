import React, { useState, useRef, useEffect } from 'react';
import DetailPaneHeader from 'ui-core/dist/DetailPaneHeader';
import useLayout from 'ui-core/dist/useLayout';
import CircleCheck from 'ui-core/dist/CircleCheck';
import Group from "ui-core/dist/Group";
import styled from "styled-components";
import { Container, Row, Col } from "ui-core/dist/ContentGrid";
import Text from "ui-core/dist/Text";
import SelectDropdown from "ui-core/dist/SelectDropdown";
import RadioGroup from "ui-core/dist/RadioGroup";
import TextArea from "ui-core/dist/TextArea";
import Button from "ui-core/dist/Button";
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'ui-core/dist/Modal'
import ButtonGroup from "ui-core/dist/ButtonGroup";
import Input from "ui-core/dist/Input";
import TextStyles from 'ui-core/dist/TextStyles';

import './detailsPane.scss'

const GroupStyle = styled.div`
padding : 0px 40px;
> section > div:first-child > div > button{
  margin-left: -25px;
}
`;
const LableStyle = styled.div`
div{
  color:#626D8A;
}
`;
const ModalBodyStyle = styled.div`
padding: 0px 50px 20px 50px;
`;
const AuthErrorMsgStyle = styled.div`
${TextStyles.xSmall};
`;
const IconStyling = styled.div`
svg{
  filter: brightness(0) saturate(100%) invert(59%) sepia(82%) saturate(1019%) hue-rotate(175deg) brightness(107%) contrast(101%);
}
`;

const noRefCheck = () => { }

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

const HeaderWithIcon = () => {
  return (
    <>
    <IconStyling>
    <CircleCheck name="ChartIn" size="medium" /> Quick Counselling
    </IconStyling>    
    </>
  )
}

function DetailPane() {

  const allergyList= ["Sample allrergy 1","Sample allrergy 2","Sample allrergy 3","Sample allrergy 4","Sample allrergy 5","Sample allrergy 6","Sample allrergy 7","Sample allrergy 8"];
  const diagnosisList= ["Diagnosis 1","Diagnosis 1"];

  const [allergyProfileClassVal, toggleAllergyProfileClass] = useState(false);
  const handleallergyProfileContent = () => {
      toggleAllergyProfileClass(!allergyProfileClassVal);
  }
  const [allergyProHeight, updateAllergyProHeight] = useState(0);
  const allergyProRef = useRef(null);
  useEffect(() => {
      updateAllergyProHeight(allergyProRef.current.clientHeight);
  });
  const [diagnosisProClassVal, toggleDiagnosisProClass] = useState(false);
  const handleDiagnosisProContent = () => {
      toggleDiagnosisProClass(!diagnosisProClassVal);
  }
  const [diagnosisProHeight, updateDiagnosisProHeight] = useState(0);
  const diagnosisProRef = useRef(null);
    useEffect(() => {
      updateDiagnosisProHeight(diagnosisProRef.current.clientHeight);
  });
  setTimeout(() => {
    updateAllergyProHeight(allergyProRef.current.clientHeight);
    updateDiagnosisProHeight(diagnosisProRef.current.clientHeight);
  }, 1000)

  

  const {
    expandCollapseDetailPaneButtonConfig,
    closeDetailPaneButtonConfig,
    detailProps = {},
  } = useLayout();
  const headerProps = {
    icon: CircleCheck,
    // title: detailProps?.jobId || 'Detail Pane Title',
    title: <HeaderWithIcon />,
    category: '',
    description: '',
    layoutControls: [
      expandCollapseDetailPaneButtonConfig,
      closeDetailPaneButtonConfig,
    ],
  };

  return (
    <>
      {/* <div className="detailPaneOverlay"></div> */}
      <DetailPaneHeader {...headerProps} dataTestId="test-detailPane" />
      <GroupStyle>
        <Group
          dataTestId="simple-with-accordion"
          isAccordion
          // isCollapsed={true}
          initialIsCollapsed={false}
          title="Patient Details"
          className="cqs-status">
          <Row>
            <Col md={4}>
              <LableStyle><Text
                singleLine
                variant="xSmall">
                Name</Text></LableStyle>
              <Text
                singleLine
                variant="small">
                {detailProps?.jobId?.props?.rxnumber}</Text>
            </Col>
            <Col md={4}>
              <LableStyle><Text
                singleLine
                variant="xSmall">
                Date of Birth</Text></LableStyle>
              <Text
                singleLine
                variant="small">
                10-06-1991</Text>
            </Col>
            <Col md={4}>
              <LableStyle><Text
                singleLine
                variant="xSmall">
                Gender</Text></LableStyle>
              <Text
                singleLine
                variant="small">
                Male</Text>
            </Col>
          </Row>
          <Row>
          <Col md={8}>
              <LableStyle><Text
                singleLine
                variant="xSmall">
                Address</Text></LableStyle>
              <Text
                variant="small">
                A-101 Zx Street , Dallas TX 123456789</Text>
            </Col>
            <Col md={4}>
              <LableStyle><Text
                singleLine
                variant="xSmall">
                Phone</Text></LableStyle>
              <Text
                singleLine
                variant="small">
                989898989898</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <LableStyle><Text
                singleLine
                variant="xSmall">
                Allergy Profile</Text></LableStyle>

              <div className="overflowContainer">
                <div className={allergyProfileClassVal ? 'qcoverflowContentShow' : 'qcoverflowContentHidden'}>
                  <Text
                    variant="small">
                    <ol ref={allergyProRef}>
                      {allergyList.map((allergy) => {
                        return (
                          <li>{allergy}</li>
                        )
                      })}

                    </ol>
                  </Text>
                  <LableStyle><Text
                    variant="xSmall">
                      {allergyProHeight}
                    {allergyProHeight > 60 ?
                      <span onClick={handleallergyProfileContent} className="showMoreBtn">Show {allergyProfileClassVal ? 'Less' : 'More..'}</span> : ''}
                  </Text></LableStyle>
                </div>
              </div>

            </Col>
            <Col>
              <LableStyle><Text
                singleLine
                variant="xSmall">
                Diagnosis Profile</Text></LableStyle>


              <div className="overflowContainer">
                <div className={diagnosisProClassVal ? 'qcoverflowContentShow' : 'qcoverflowContentHidden'}>
                  <Text
                    variant="small">
                    <ol ref={diagnosisProRef}>
                      {diagnosisList.map((diagnosis) => {
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

        </Group>
        <Group
          dataTestId="simple-with-accordion"
          isAccordion
          // isCollapsed={true}
          initialIsCollapsed={false}
          title="Rx Details"
          className="cqs-status">
          <Row>
            <Col md={4}>
              <LableStyle><Text
                singleLine
                variant="xSmall">
                Tx Number</Text></LableStyle>
              <Text
                singleLine
                variant="small">
                1001715</Text>
            </Col>
            <Col md={4}>
              <LableStyle><Text
                singleLine
                variant="xSmall">
                Counseling Reason</Text></LableStyle>
              <Text
                singleLine
                variant="small">
                Dispensing Rule</Text>
            </Col>
            <Col md={4}>
              <LableStyle><Text
                singleLine
                variant="xSmall">
                Dispensed Drug</Text></LableStyle>
              <Text     
                variant="small">
                Morphine Sulfate ER 12HR 60 MG TAB MALL</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <LableStyle><Text
                singleLine
                variant="xSmall">
                Prescribed Qty.</Text></LableStyle>
              <Text
                singleLine
                variant="small">
                3.0</Text>
            </Col>
            <Col>
              <LableStyle><Text
                singleLine
                variant="xSmall">
                Refill(s) Authorized</Text></LableStyle>
              <Text
                singleLine
                variant="small">
                1</Text>
            </Col>
            <Col>
              <LableStyle><Text
                singleLine
                variant="xSmall">
                Daw</Text></LableStyle>
              <Text
                singleLine
                variant="small">
                1 - Dispense as Written</Text>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <LableStyle><Text
                singleLine
                variant="xSmall">
                Durs</Text></LableStyle>
              <Text
                singleLine
                variant="small">
                Yes</Text>
            </Col>
            <Col md={8}>
              <LableStyle><Text
                singleLine
                variant="xSmall">
                Sig Text</Text></LableStyle>
              <Text
                variant="small">
                TAKE ONE TABLET TWO TIMES A DAY UNTIL GONE TAKE ONE TABLET TWO TIMES A DAY UNTIL GONE</Text>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <LableStyle><Text
                singleLine
                variant="xSmall">
                Prescriber Name</Text>
              </LableStyle>
              <Text
                singleLine
                variant="small">
                Smith Randall</Text>
            </Col>
            <Col md={8}>
              <LableStyle>
                <Text
                  singleLine
                  variant="xSmall">
                  Counseling Note</Text>
              </LableStyle>
              <Text
                singleLine
                variant="small">
                *</Text>
            </Col>
          </Row>       
        </Group>
        <br></br>
        <Row>
            <Col md={5}>
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
              <br></br>
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
                // label="Counseling Options"
                onChange={() => { }}
                orientation="horizontal"
                size="small"
              />
            </Col>
            <Col md={7}>
              <TextArea
                className="test-classname"
                dataTestId="test-textAreaLabel"
                domID="test_id"
                label="Counseling Note"
                maxLength={100}
                onBlur={() => { }}
                onChange={function noRefCheck() { }}
                onClick={function noRefCheck() { }}
                onFocus={function noRefCheck() { }}
                onKeyDown={function noRefCheck() { }}
                onKeyPress={function noRefCheck() { }}
                onKeyUp={function noRefCheck() { }}
                onMouseOut={function noRefCheck() { }}
                onMouseOver={function noRefCheck() { }}
                placeholder="Value"
              />
            </Col>
          </Row>
      </GroupStyle>
      <Row>
            <div className="buttonContainer">
            <UserAuthComponent />
            </div>   
          </Row>
    </>

  )
}

export default DetailPane;
