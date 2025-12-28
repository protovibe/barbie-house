import React from 'react';
import { rooms, roomDecorations } from '../data/rooms.jsx';

const Room = ({ roomId }) => {
  const room = rooms.find(r => r.id === roomId);

  if (!room) return null;

  return (
    <div
      className="room-background"
      style={{ background: room.background }}
    >
      <div className="room-decorations">
        {room.decorations.map((dec, index) => (
          <svg
            key={index}
            className={`decoration decoration-${dec.type}`}
            style={{
              position: 'absolute',
              left: dec.x,
              top: dec.y,
              width: '150px',
              height: '120px',
              opacity: 0.8,
            }}
            viewBox="0 0 150 100"
          >
            {roomDecorations[dec.type]}
          </svg>
        ))}
      </div>

      {/* Floor */}
      <div className="room-floor" />
    </div>
  );
};

export default Room;
