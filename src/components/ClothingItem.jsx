import React from 'react';

const ClothingItem = ({ item, isSelected, onClick }) => {
  return (
    <button
      className={`clothing-item ${isSelected ? 'selected' : ''} ${item.isSpecial ? 'special' : ''}`}
      onClick={() => onClick(item)}
      title={item.name}
      style={{
        background: `linear-gradient(135deg, ${item.thumbnail} 0%, ${item.color || item.thumbnail} 100%)`,
      }}
    >
      <span className="clothing-name">{item.name}</span>
      {item.isSpecial && <span className="special-star">⭐</span>}
    </button>
  );
};

export default ClothingItem;
