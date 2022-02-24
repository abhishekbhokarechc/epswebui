import React, { useState } from 'react';
import styled from "styled-components";
import { Container, Row, Col } from "ui-core/dist/ContentGrid";
import RadioGroup from "ui-core/dist/RadioGroup";
import TextStyles from 'ui-core/dist/TextStyles';
import Button from "ui-core/dist/Button";
import ButtonGroup from "ui-core/dist/ButtonGroup";
import Card from "ui-core/dist/Card";

import './counsellingTaskDetails.scss'
import TopNavigationHeader from "../../Common/TopNavigationHeader/topNavigationHeader";
import BreadcrumbContainer from '../../Common/Breadcrumb/breadcrumbContainer';

import TaskDetailGrid from './taskDetailGrid';
import TaskDetailPanel from './taskDetailPanel';
import TaskList from './counsellingTaskJSON'

const LabelStyle = styled.div`
${TextStyles.xxSmallCaps};
`
const ButtonStyle = styled.div`
position: relative;
> div{
    position : absolute;
    right: 0px;
}
button:first-child:hover{
    text-decoration:underline;
}
`
const CardStyle = styled.div`
height: 220px;
overflow-y: scroll;
padding: 15px;
`
const CardContainerStyle = styled.div`
margin-top: 20px;
`
const breadcrumbArray = [
    {
        title: "Home",
        path: "/items/item-one",
    },
    {
        title: "Counselling Queue",
        path: "/items/item-one",
    },
    {
        title: "Task Details",
        path: "/items/item-one",
    }
];

function CounsellingTaskDetails() {
    const [showAdditionalTrans, toggleAdditionalTransVal] = useState(true);
    const [currentInvokingIndex, updateIndex] = useState(0);

    const receiveIndex = (index) => {
        updateIndex(index)
    }

    return (
        <>
            <TopNavigationHeader />
            <BreadcrumbContainer breadcrumbItems={breadcrumbArray} />

            <Container data-testid="test-container">
                <Row>
                    <Col md={1}>
                    { showAdditionalTrans == true ? <LabelStyle>
                            select range
                    </LabelStyle> : '' }
                    </Col>
                    <Col md={6}>
                    { showAdditionalTrans == true ? <RadioGroup
                            dataTestId="test-radioError"
                            errorMessage="Error message"
                            items={[
                                {
                                    id: "id1",
                                    isChecked: true,
                                    label: "Last 30 Days",
                                },
                                {
                                    id: "id2",
                                    isChecked: false,
                                    label: "Last 60 Days",
                                },
                                {
                                    id: "id3",
                                    isChecked: false,
                                    label: "Last 90 Days",
                                },
                                {
                                    id: "id4",
                                    isChecked: false,
                                    label: "Last 120 Days",
                                }
                            ]}
                            // label="Counseling Options"
                            onChange={() => { }}
                            orientation="horizontal"
                            size="small"
                        /> : ''}
                    </Col>
                    <Col md={5}>
                        <ButtonStyle>
                            <ButtonGroup>
                                <Button
                                    size="medium"
                                    buttonType="diminished"
                                    name="Select Additional Transactions"
                                    onClick={ () => toggleAdditionalTransVal(!showAdditionalTrans) } />
                                <Button
                                    size="medium"
                                    buttonType="standard"
                                    name="Patient File" />
                                <Button
                                    size="medium"
                                    buttonType="emphasized"
                                    name="Search Result" />
                            </ButtonGroup>
                        </ButtonStyle>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardContainerStyle>
                            <Card

                                cardBody={() => {
                                    return (
                                        <>
                                            { showAdditionalTrans == true ? <><CardStyle>
                                                <TaskDetailGrid />
                                            </CardStyle> 
                                            <div className="justify-content-center">
                                                <ButtonGroup>
                                                    <Button
                                                        size="medium"
                                                        buttonType="deEmphasized"
                                                        name="Cancel" />
                                                    <Button
                                                        size="medium"
                                                        buttonType="emphasized"
                                                        name="Select" />
                                                </ButtonGroup>
                                            </div></> : ''}
                                        </>
                                    )
                                }}
                            />
                        </CardContainerStyle>
                    </Col>
                </Row>
                {TaskList.map((task, i) => {
                    return (
                        <Row>
                        <Col>
                            <CardContainerStyle>
                                <Card
                                    cardBody={() => {
                                        return (
                                            <>
                                                <TaskDetailPanel 
                                                receiveIndex={receiveIndex} 
                                                currentInvokingIndex={currentInvokingIndex} 
                                                index={i} 
                                                task={task} />
                                            </>
                                        )
                                    }}
                                />
                            </CardContainerStyle>
                        </Col>
                    </Row>
                    )
                })}
            </Container>




        </>
    )
}

export default CounsellingTaskDetails;
