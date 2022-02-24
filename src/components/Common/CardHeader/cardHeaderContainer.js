import React from 'react';
import CardHeader from "ui-core/dist/CardHeader";
import styled from "styled-components";
import TextStyles from "ui-core/dist/TextStyles";

function CardHeaderContainer(props) {

    const CardHeaderStyle = styled.div`
    padding-left: 1.2vw;
    padding: 20px 24px 12px;
    div > div > div {
      ${TextStyles.xLarge};
    }
  `;
    return (
        <CardHeaderStyle>
        <CardHeader
          dataTestId="test-cardHeader"
          description={props.description}
          text={props.text}
        />
      </CardHeaderStyle>
    )
}
export default CardHeaderContainer;
