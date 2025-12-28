import React from 'react';
import { rooms } from '../data/rooms.jsx';

const RoomSelector = ({ currentRoom, onSelectRoom }) => {
  return (
    <div className="room-selector">
      {rooms.map((room) => (
        <button
          key={room.id}
          className={`room-btn ${currentRoom === room.id ? 'active' : ''}`}
          onClick={() => onSelectRoom(room.id)}
          title={room.name}
        >
          <span className="room-icon">{room.icon}</span>
          <span className="room-name">{room.name}</span>
        </button>
      ))}
    </div>
  );
};

export default RoomSelector;
