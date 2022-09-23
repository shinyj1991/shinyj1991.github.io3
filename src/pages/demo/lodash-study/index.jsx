import React from "react"
import styled from "styled-components"

import Layout from "components/Layout"

import _ from "lodash"





var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 
_.dropRightWhile(users, function(o) { return !o.active; });

console.log(_.dropRightWhile(users, user => !user.active))
 
// _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
 
// _.dropRightWhile(users, ['active', false]);
 
// _.dropRightWhile(users, 'active');






const Wrapper = styled.div`
  display: grid;
  row-gap: 50px;
  padding-block: 30px;
  color: ${props => props.theme.colors.text};

  h2 {
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 32px;
    line-height: 1.5;
  }
  h3 {
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    padding-inline: 15px;
  }
`

const PageDemoLodashStudy = () => {
  return (
    <Layout>
      <Wrapper>
        <section>
          <h2>Array</h2>
          <p></p>
        </section>
      </Wrapper>
    </Layout>
  )
}

export default PageDemoLodashStudy