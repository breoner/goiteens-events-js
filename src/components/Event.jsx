import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';

const Card = styled.div`
  background-color: #fde4d0; 
  border: 1px solid #e0b090;
  border-radius: 4px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #555;

  svg {
    color: #666;
    min-width: 16px;
  }
`;

export const Event = ({ name, location, speaker, start, end }) => {
  const startTime = new Date(start);
  const endTime = new Date(end);
  const durationInHours = Math.abs(endTime - startTime) / 36e5;

  return (
    <Card>
      <Title>{name}</Title>
      <Info><FaMapMarkerAlt /> {location}</Info>
      <Info><FaUserAlt /> {speaker}</Info>
      <Info>
        <FaCalendarAlt /> 
        {startTime.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}, {startTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </Info>
      <Info><FaClock /> {durationInHours} hours</Info>
    </Card>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};