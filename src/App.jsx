import React, { useState, useCallback } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Barbie from './components/Barbie';
import Wardrobe from './components/Wardrobe';
import Sparkles from './components/Sparkles';
import { useSound } from './hooks/useSound';
import { rooms } from './data/rooms.jsx';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentRoom, setCurrentRoom] = useState('bedroom');
  const [sparklesTrigger, setSparklesTrigger] = useState(0);
  const [activeCategory, setActiveCategory] = useState('dress');
  const [hairColor, setHairColor] = useState('#F4D03F'); // Blonde default
  const [skinTone, setSkinTone] = useState('#FDBBB5'); // Light default
  const [hairStyle, setHairStyle] = useState('long');
  const [bangsStyle, setBangsStyle] = useState('side');
  const [eyeStyle, setEyeStyle] = useState('normal');
  const [eyeColor, setEyeColor] = useState('#5D4E37');
  const [noseStyle, setNoseStyle] = useState('small');
  const [mouthStyle, setMouthStyle] = useState('smile');
  const [outfit, setOutfit] = useState({
    dress: null,
    top: null,
    bottom: null,
    shoes: null,
    accessory: null,
    hair: null,
  });

  const { playSound, isMuted, toggleMute } = useSound();

  const handleStart = useCallback(() => {
    playSound('chime');
    setGameStarted(true);
  }, [playSound]);

  const handleSelectRoom = useCallback((roomId) => {
    if (roomId !== currentRoom) {
      playSound('whoosh');
      setCurrentRoom(roomId);
    }
  }, [currentRoom, playSound]);

  const handleSelectItem = useCallback((item) => {
    if (item.isSpecial) {
      playSound('chime');
    } else {
      playSound('sparkle');
    }

    setSparklesTrigger(prev => prev + 1);

    setOutfit(prev => {
      const newOutfit = { ...prev };

      if (item.category === 'dress') {
        newOutfit.dress = prev.dress?.id === item.id ? null : item;
        if (newOutfit.dress) {
          newOutfit.top = null;
          newOutfit.bottom = null;
        }
      } else if (item.category === 'top') {
        newOutfit.top = prev.top?.id === item.id ? null : item;
        if (newOutfit.top) {
          newOutfit.dress = null;
        }
      } else if (item.category === 'bottom') {
        newOutfit.bottom = prev.bottom?.id === item.id ? null : item;
        if (newOutfit.bottom) {
          newOutfit.dress = null;
        }
      } else if (item.category === 'shoes') {
        newOutfit.shoes = prev.shoes?.id === item.id ? null : item;
      } else if (item.category === 'accessory') {
        newOutfit.accessory = prev.accessory?.id === item.id ? null : item;
      } else if (item.category === 'hair') {
        newOutfit.hair = prev.hair?.id === item.id ? null : item;
      }

      return newOutfit;
    });
  }, [playSound]);

  const handleClearOutfit = useCallback(() => {
    playSound('whoosh');
    setOutfit({
      dress: null,
      top: null,
      bottom: null,
      shoes: null,
      accessory: null,
      hair: null,
    });
  }, [playSound]);

  const handleRandomOutfit = useCallback(() => {
    playSound('chime');
    setSparklesTrigger(prev => prev + 1);
    // Will be implemented in Wardrobe
  }, [playSound]);

  const currentRoomData = rooms.find(r => r.id === currentRoom);

  if (!gameStarted) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  return (
    <div className="app">
      {/* Top Bar */}
      <header className="app-header">
        <div className="header-left">
          <button className="icon-btn" onClick={toggleMute} title={isMuted ? 'Unmute' : 'Mute'}>
            {isMuted ? '🔇' : '🔊'}
          </button>
        </div>
        <h1 className="app-title">✨ Barbie Dream House ✨</h1>
        <div className="header-right">
          <button className="icon-btn action-btn" onClick={handleClearOutfit} title="Clear outfit">
            🔄
          </button>
        </div>
      </header>

      {/* Main Game Area */}
      <main className="game-area">
        {/* Room Tabs on Left */}
        <nav className="room-tabs">
          {rooms.map((room) => (
            <button
              key={room.id}
              className={`room-tab ${currentRoom === room.id ? 'active' : ''}`}
              onClick={() => handleSelectRoom(room.id)}
            >
              <span className="room-tab-icon">{room.icon}</span>
              <span className="room-tab-name">{room.name}</span>
            </button>
          ))}
        </nav>

        {/* Center - Barbie Stage */}
        <section
          className="barbie-stage"
          style={{ background: currentRoomData?.background }}
        >
          <div className="stage-decorations">
            {/* Room-specific decorations will go here */}
          </div>

          <div className="barbie-platform">
            <Barbie
              outfit={outfit}
              hairColor={hairColor}
              skinTone={skinTone}
              hairStyle={hairStyle}
              bangsStyle={bangsStyle}
              eyeStyle={eyeStyle}
              eyeColor={eyeColor}
              noseStyle={noseStyle}
              mouthStyle={mouthStyle}
            />
            <Sparkles trigger={sparklesTrigger} />
          </div>

          {/* Customization buttons below Barbie */}
          <div className="customize-bar">
            <div className="customize-row">
              <div className="customize-group">
                <span className="customize-label">Hair Color</span>
                <div className="color-options">
                  {['#F4D03F', '#8B4513', '#1a1a1a', '#FF6B6B', '#9B59B6'].map(color => (
                    <button
                      key={color}
                      className={`color-btn ${hairColor === color ? 'active' : ''}`}
                      style={{ background: color }}
                      onClick={() => { setHairColor(color); playSound('click'); }}
                    />
                  ))}
                </div>
              </div>
              <div className="customize-group">
                <span className="customize-label">Skin</span>
                <div className="color-options">
                  {['#FDEBD0', '#FDBBB5', '#D4A574', '#A0522D', '#8B4513'].map(color => (
                    <button
                      key={color}
                      className={`color-btn ${skinTone === color ? 'active' : ''}`}
                      style={{ background: color }}
                      onClick={() => { setSkinTone(color); playSound('click'); }}
                    />
                  ))}
                </div>
              </div>
              <div className="customize-group">
                <span className="customize-label">Eye Color</span>
                <div className="color-options">
                  {['#5D4E37', '#4A90D9', '#2ECC71', '#9B59B6', '#1a1a1a'].map(color => (
                    <button
                      key={color}
                      className={`color-btn ${eyeColor === color ? 'active' : ''}`}
                      style={{ background: color }}
                      onClick={() => { setEyeColor(color); playSound('click'); }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="customize-row">
              <div className="customize-group">
                <span className="customize-label">Hair Style</span>
                <div className="style-options">
                  {[
                    { id: 'long', icon: '💇‍♀️' },
                    { id: 'short', icon: '✂️' },
                    { id: 'curly', icon: '🌀' },
                    { id: 'ponytail', icon: '🎀' },
                    { id: 'pigtails', icon: '🎀🎀' },
                    { id: 'buns', icon: '🍡' },
                  ].map(style => (
                    <button
                      key={style.id}
                      className={`style-btn ${hairStyle === style.id ? 'active' : ''}`}
                      onClick={() => { setHairStyle(style.id); playSound('click'); }}
                      title={style.id}
                    >
                      {style.icon}
                    </button>
                  ))}
                </div>
              </div>
              <div className="customize-group">
                <span className="customize-label">Bangs</span>
                <div className="style-options">
                  {[
                    { id: 'side', icon: '↙️' },
                    { id: 'straight', icon: '➖' },
                    { id: 'none', icon: '⬆️' },
                    { id: 'curly', icon: '〰️' },
                  ].map(style => (
                    <button
                      key={style.id}
                      className={`style-btn ${bangsStyle === style.id ? 'active' : ''}`}
                      onClick={() => { setBangsStyle(style.id); playSound('click'); }}
                      title={style.id}
                    >
                      {style.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="customize-row">
              <div className="customize-group">
                <span className="customize-label">Eyes</span>
                <div className="style-options">
                  {[
                    { id: 'normal', icon: '👁️' },
                    { id: 'big', icon: '👀' },
                    { id: 'sparkly', icon: '✨' },
                    { id: 'cute', icon: '💕' },
                    { id: 'wink', icon: '😉' },
                  ].map(style => (
                    <button
                      key={style.id}
                      className={`style-btn ${eyeStyle === style.id ? 'active' : ''}`}
                      onClick={() => { setEyeStyle(style.id); playSound('click'); }}
                      title={style.id}
                    >
                      {style.icon}
                    </button>
                  ))}
                </div>
              </div>
              <div className="customize-group">
                <span className="customize-label">Nose</span>
                <div className="style-options">
                  {[
                    { id: 'small', icon: '·' },
                    { id: 'button', icon: '●' },
                    { id: 'cute', icon: '◉' },
                    { id: 'pointed', icon: '▼' },
                  ].map(style => (
                    <button
                      key={style.id}
                      className={`style-btn ${noseStyle === style.id ? 'active' : ''}`}
                      onClick={() => { setNoseStyle(style.id); playSound('click'); }}
                      title={style.id}
                    >
                      {style.icon}
                    </button>
                  ))}
                </div>
              </div>
              <div className="customize-group">
                <span className="customize-label">Mouth</span>
                <div className="style-options">
                  {[
                    { id: 'smile', icon: '😊' },
                    { id: 'bigSmile', icon: '😄' },
                    { id: 'kiss', icon: '😘' },
                    { id: 'happy', icon: '🙂' },
                    { id: 'tongue', icon: '😋' },
                  ].map(style => (
                    <button
                      key={style.id}
                      className={`style-btn ${mouthStyle === style.id ? 'active' : ''}`}
                      onClick={() => { setMouthStyle(style.id); playSound('click'); }}
                      title={style.id}
                    >
                      {style.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right - Wardrobe Panel (Always Visible) */}
        <aside className="wardrobe-panel">
          <Wardrobe
            outfit={outfit}
            onSelectItem={handleSelectItem}
            activeCategory={activeCategory}
            onChangeCategory={setActiveCategory}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
