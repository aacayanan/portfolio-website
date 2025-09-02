import {useState} from 'react';

const RadialMenu = () => {
    const [showRadialMenu, setShowRadialMenu] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState("💻");

    const emojiOptions = [
        {emoji: '🧗', angle: 90},    // Right
        {emoji: '🎾', angle: 45},    // Top-right
        {emoji: '💻', angle: 0}      // Top
    ];

    const handleButtonClick = () => {
        setShowRadialMenu(!showRadialMenu);
    };

    const handleEmojiSelect = (emoji) => {
        setSelectedEmoji(emoji);
        setShowRadialMenu(false);
    };

    const getRadialPosition = (angleDegrees) => {
        const angleRadians = (angleDegrees - 90) * (Math.PI / 180);
        const radius = 60;
        const x = Math.cos(angleRadians) * radius;
        const y = Math.sin(angleRadians) * radius;
        return {x, y};
    };

    return (
        <div>
            <div className="relative">
                <button
                    onClick={handleButtonClick}
                    className='absolute w-10 h-10 left-0 bottom-0.5 border border-gray-300 rounded-full p-1 text-center bg-white hover:bg-gray-100 transition-colors z-20'
                >
                    {selectedEmoji}
                </button>

                {showRadialMenu && (
                    <div className="absolute left-0 bottom-0.5 pointer-events-none z-10">
                        {emojiOptions.map((option, index) => {
                            const {x, y} = getRadialPosition(option.angle);
                            return (
                                <button
                                    key={option.emoji}
                                    onClick={() => handleEmojiSelect(option.emoji)}
                                    className="absolute left-0 bottom-0.5 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all duration-200 pointer-events-auto"
                                    style={{
                                        '--target-x': `${x}px`,
                                        '--target-y': `${y}px`,
                                        animation: `radialMenuAppear 0.3s ease-out forwards`
                                    }}
                                >
                                    {option.emoji}
                                </button>
                            );
                        })}
                    </div>
                )}

                <style>{`
                    @keyframes radialMenuAppear {
                        from {
                            opacity: 0;
                            transform: translate(0, 0) scale(0.5);
                        }
                        to {
                            opacity: 1;
                            transform: translate(var(--target-x), var(--target-y)) scale(1);
                        }
                    }
                `}</style>
            </div>

            {showRadialMenu && (
                <div
                    className="fixed inset-0 z-0"
                    onClick={() => setShowRadialMenu(false)}
                />
            )}
        </div>
    );
};

export default RadialMenu;