import * as React from 'react';
import styled from 'styled-components';
import { InnerListItem } from 'app/components/modules/InnderListItem';
import { InnerList } from 'app/components/modules/InnerList';

const Param = styled.div`
  padding: 8px 0;
`;

class ListItem extends React.Component {
  shouldComponentUpdate = nextProps => {
    return this.props.starttime !== nextProps.starttime;
  };

  render() {
    const { onMouseOver, starttime, stoptime, tripduration, ...rest } = this.props;
    return (
      <InnerListItem onMouseOver={onMouseOver}>
        <Param>{`🚲 Начало поездки: ${starttime}`}</Param>
        <Param>{`🔒 Окончание поездки: ${stoptime}`}</Param>
        <Param>{`⏲ Длительность поездки: ${tripduration} минут`}</Param>
        <Param>{`🌇 Начальная точка: ${rest['start station name']}`}</Param>
        <Param>{`🌃 Конечная точка: ${rest['end station name']}`}</Param>
      </InnerListItem>
    );
  }
}

export const List = props => {
  return (
    <InnerList>
      {props.items.map((place, index) => (
        <ListItem
          onMouseOver={() => {
            props.updateSelectedRide(index);
          }}
          key={place.starttime + place.stoptime}
          {...place}
        />
      ))}
    </InnerList>
  );
};

export default List;
