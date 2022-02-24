
import React from 'react';
import Breadcrumb from "ui-core/dist/Breadcrumb";
import styled from "styled-components";

function BreadcrumbContainer(props) {

  const BreadCrumStyle = styled.div`
  margin-top: 48px;
`;

const consoleLogged = () => {

}

  return (
    <BreadCrumStyle>
      <Breadcrumb
        breadcrumbItems={props.breadcrumbItems}
        dataTestId="test-breadcrumbBasic"
        domID="test-id"
        onBreadcrumbItemClick={() => {
          consoleLogged();
        }}
      />
    </BreadCrumStyle>
  )
}

export default BreadcrumbContainer;
