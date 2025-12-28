import React from 'react';
import Room from './Room';
import Barbie from './Barbie';
import RoomSelector from './RoomSelector';

const House = ({ currentRoom, onSelectRoom, outfit }) => {
  return (
    <div className="house-container">
      <Room roomId={currentRoom} />

      <div className="barbie-container">
        <Barbie outfit={outfit} />
      </div>

      <RoomSelector currentRoom={currentRoom} onSelectRoom={onSelectRoom} />
    </div>
  );
};

export default House;
