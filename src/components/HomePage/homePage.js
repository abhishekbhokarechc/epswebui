import React from "react";
import styled from "styled-components";
import TextStyles from "ui-core/dist/TextStyles";
import Button from "ui-core/dist/Button";

import "./homePage.scss"; // css file;
import TopNavigationHeader from "../Common/TopNavigationHeader/topNavigationHeader";
import BreadcrumbContainer from '../Common/Breadcrumb/breadcrumbContainer';
import CardHeaderContainer from '../Common/CardHeader/cardHeaderContainer'

function HomePage({ }) {
  const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 16vh;
  button > div {
    ${TextStyles.xLarge};
  }
  button{
    box-shadow: 0px 0px 12px 0px #d1d6e1;
  }
  .row{
      padding: 0 12px;
  }
`;
  const breadcrumbArray = [
    {
      title: "Home",
      path: "/items/item-one",
    }
  ];

  return (
    <div>
      <TopNavigationHeader />
      <BreadcrumbContainer breadcrumbItems={breadcrumbArray} />
      <CardHeaderContainer description="Role - Admin" text="Hello, Clark Kent" />

      <CardContainer>
        <div className="row">
          <Button
            name="Counseling Queue"
            size="large"
            buttonType="deEmphasized"
            className="button-card"
          ></Button>
          <Button
            name="Edit After Sale"
            size="large"
            buttonType="deEmphasized"
            className="button-card"
          ></Button>
        </div>
        <div className="row">
          <Button
            name="Data Entry"
            size="large"
            buttonType="deEmphasized"
            className="button-card"
          ></Button>
          <Button
            name="Patient Profile"
            size="large"
            buttonType="deEmphasized"
            className="button-card"
          ></Button>
        </div>
      </CardContainer>
    </div>
  );
}

export default HomePage;
