import shuffle from 'lodash.shuffle';
import React from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import { companies as _companies } from '../../Content';

const CompanyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  align-content: space-between;
  margin-top: 40px;
`;

const Company = styled.div`
  margin: 20px 20px;
  resize: horizontal;
  height: auto;
  max-width: 200px;
  min-width: 100px;
`;

const Thanks = styled.h2`
  margin-top: 40px;
  font-size: 22px;
`;

export const Companies = () => {
  let companies = shuffle(_companies);
  const companyList = companies.map((c) => (
    <Company key={c.name}>
      <a href={c.link} target="_blank" rel="noopener noreferrer" alt={c.name}>
        <ReactSVG src={c.logo} />
      </a>
    </Company>
  ));
  return (
    <>
      <Thanks>Takk til våre flotte bedrifter!</Thanks>
      <CompanyWrapper>{companyList}</CompanyWrapper>
    </>
  );
};
