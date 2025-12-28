import React from 'react';
import { clothes } from '../data/clothes.jsx';

const categories = [
  { id: 'dress', name: 'Dresses', icon: '👗', items: clothes.dresses },
  { id: 'top', name: 'Tops', icon: '👚', items: clothes.tops },
  { id: 'bottom', name: 'Bottoms', icon: '👖', items: clothes.bottoms },
  { id: 'shoes', name: 'Shoes', icon: '👠', items: clothes.shoes },
  { id: 'accessory', name: 'Accessories', icon: '👑', items: clothes.accessories },
];

const Wardrobe = ({ outfit, onSelectItem, activeCategory, onChangeCategory }) => {
  const currentCategory = categories.find(c => c.id === activeCategory);

  const isItemSelected = (item) => {
    if (item.category === 'dress') return outfit.dress?.id === item.id;
    if (item.category === 'top') return outfit.top?.id === item.id;
    if (item.category === 'bottom') return outfit.bottom?.id === item.id;
    if (item.category === 'shoes') return outfit.shoes?.id === item.id;
    if (item.category === 'accessory') return outfit.accessory?.id === item.id;
    if (item.category === 'hair') return outfit.hair?.id === item.id;
    return false;
  };

  return (
    <div className="wardrobe">
      <h2 className="wardrobe-title">Closet</h2>

      {/* Category tabs */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => onChangeCategory(cat.id)}
            title={cat.name}
          >
            <span className="tab-icon">{cat.icon}</span>
          </button>
        ))}
      </div>

      {/* Items grid */}
      <div className="items-grid">
        {currentCategory?.items.map((item) => (
          <button
            key={item.id}
            className={`item-card ${isItemSelected(item) ? 'selected' : ''} ${item.isSpecial ? 'special' : ''}`}
            onClick={() => onSelectItem(item)}
            title={item.name}
          >
            <div
              className="item-preview"
              style={{
                background: `linear-gradient(135deg, ${item.thumbnail}88 0%, ${item.color || item.thumbnail} 100%)`,
              }}
            >
              {item.isSpecial && <span className="special-badge">⭐</span>}
            </div>
            <span className="item-name">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Wardrobe;
