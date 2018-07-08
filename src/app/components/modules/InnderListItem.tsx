import styled from 'styled-components';

export const InnerListItem = styled.li`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  color: darkolivegreen;
  padding: 4px;
  margin-bottom: 8px;
  background: burlywood;
  border-radius: 3px;
  &:hover {
    background: lightsteelblue;
    cursor: pointer;
  }
`;
