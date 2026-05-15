import styled from 'styled-components';
import { Event } from './Event';
import PropTypes from 'prop-types';

const BoardContainer = styled.div`
  background-color: #dbe2e8;
  border: 1px solid #bcc6cc;
  padding: 30px;
  border-radius: 4px;
`;

const Header = styled.div`
  background-color: #deeaf6;
  border: 1px solid #a1b8d1;
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  color: #444;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 колонки как на макете */
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const PageBoard = ({ events }) => {
  return (
    <BoardContainer>
      <Header>24th Core Worlds Coalition Conference</Header>
      <Grid>
        {events.map((event, index) => (
          <Event 
            key={index}
            name={event.name}
            location={event.location}
            speaker={event.speaker}
            start={event.time.start}
            end={event.time.end}
          />
        ))}
      </Grid>
    </BoardContainer>
  );
};

PageBoard.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};