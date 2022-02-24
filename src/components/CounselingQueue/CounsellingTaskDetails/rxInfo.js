import React, { useState } from 'react';
import styled from "styled-components";
import TextStyles from 'ui-core/dist/TextStyles';
import { Container, Row, Col } from "ui-core/dist/ContentGrid";
import Text from "ui-core/dist/Text";
import Button from "ui-core/dist/Button";
import ButtonGroup from "ui-core/dist/ButtonGroup";

const TextStyle = styled.div`
${TextStyles.small};
color:#fff;
text-align:center;
`
const LableStyle = styled.div`
div{
  color:#626D8A;
}
`;
const BoldLableStyle = styled.div`
div{
  color:#626D8A !important;
  ${TextStyles.xSmallCaps};
}
`;
const ButtonStyle = styled.div`
position: relative;
> div{
    position : absolute;
    right: 0px;
    top: -10px;
}
`

function RxInfo(props) {

    const [task, updatejson] = useState(props.task);

    return (
        <div className="rxInfoContainer">
            <div className="rxInfoHeader">
                <TextStyle>Rx Information</TextStyle>
            </div>
            <div className="highlightedRow">
                <Row>
                    <Col md={4}>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            RX Number</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplenumber}
                        </Text>
                    </Col>
                    <Col md={4}>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Refill</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                    <Col md={4}>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Rx Written</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                </Row>
            </div>
            <div className="rxDetailsSection">
                <Row>
                    <Col>
                        <BoldLableStyle>
                            <Text
                                singleLine
                                variant="xSmall">
                                patient</Text>
                        </BoldLableStyle>
                    </Col>
                    <Col>
                        <ButtonStyle>
                            <ButtonGroup>
                                <Button
                                    size="medium"
                                    buttonType="diminished"
                                    name="View RX Image" />
                            </ButtonGroup>
                        </ButtonStyle>
                    </Col>
                </Row>
            </div>
            <div className="rxDetailsSection">
                <Row className="panelRow">
                    <Col md={3}>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Name</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                    <Col md={3}>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Date of Birth</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                    <Col md={3}>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Gender</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                    <Col md={3}>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Age</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                </Row>
                <Row className="panelRow">
                    <Col>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Address</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                </Row>
            </div>
            <div className="rxDetailsSection">
                <Row>
                    <Col>
                        <BoldLableStyle>
                            <Text
                                singleLine
                                variant="xSmall">
                                Prescription</Text>
                        </BoldLableStyle>
                    </Col>
                </Row>
            </div>
            <div className="rxDetailsSection">
                <Row className="panelRow">
                    <Col>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Prescribed Drug</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                </Row>
                <Row className="panelRow">
                    <Col>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Despensed Drug</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                </Row>
                <Row className="panelRow">
                    <Col>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            DAW</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                </Row>
                <Row className="panelRow">
                    <Col>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            SIG Text</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </Col>
                </Row>
                <Row className="panelRow">
                    <Col md={4}>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Prescribed Quantity</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                    <Col md={4}>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Despensed Quantity</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                    <Col md={4}>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Remaining Quantity</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                </Row>
                <Row className="panelRow">
                    <Col md={4}>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Last Qty</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                    <Col md={4}>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Last Days Supply</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                    <Col md={4}>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Last Fill</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                </Row>
                <Row className="panelRow">
                    <Col md={4}>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Days Supply</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                    <Col md={4}>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Fill Remaining %</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                    <Col md={4}>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Refill Reamining</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                </Row>
                <Row className="panelRow">
                    <Col md={6}>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Refill Expires</Text>
                        </LableStyle>
                        <Text
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                </Row>
            </div>
            <div className="rxDetailsSection">
                <Row>
                    <Col>
                        <BoldLableStyle>
                            <Text
                                singleLine
                                variant="xSmall">
                                prescriber</Text>
                        </BoldLableStyle>
                    </Col>
                </Row>
            </div>
            <div className="rxDetailsSection">
                <Row className="panelRow">
                    <Col>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Name</Text>
                        </LableStyle>
                        <Text
                            singleLine
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                    <Col>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            DEA</Text>
                        </LableStyle>
                        <Text
                            singleLine
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                    <Col>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            NPI</Text>
                        </LableStyle>
                        <Text
                            singleLine
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                </Row>
                <Row className="panelRow">
                    <Col>
                        <LableStyle><Text
                            singleLine
                            variant="xSmall">
                            Address</Text>
                        </LableStyle>
                        <Text
                            singleLine
                            variant="small">
                            {task.samplevalue}
                        </Text>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default RxInfo;
