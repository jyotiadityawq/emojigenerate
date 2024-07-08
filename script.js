const searchBar = document.getElementById('search-bar');
const emojiDisplay = document.getElementById('emoji-display');

const emojiMap = {
    smile: '😊',
    heart: '❤️',
    laugh: '😂',
    cry: '😭',
    wink: '😉',
    thumbs_up: '👍',
    clap: '👏',
    fire: '🔥',
    star: '⭐',
    poop: '💩',
    unicorn: '🦄',
    sun: '☀️',
    moon: '🌙',
    rocket: '🚀',
    alien: '👽',
    ghost: '👻',
    apple: '🍎',
    pizza: '🍕',
    coffee: '☕',
    beer: '🍺',
    soccer: '⚽',
    basketball: '🏀',
    car: '🚗',
    train: '🚆',
    airplane: '✈️',
    danger: '⚠️',
    skull: '💀',
    check: '✔️',
    x: '❌',
    question: '❓',
    exclamation: '❗',
    red_heart: '❤️',
    blue_heart: '💙',
    green_heart: '💚',
    yellow_heart: '💛',
    purple_heart: '💜',
    black_heart: '🖤',
    sunflower: '🌻',
    rose: '🌹',
    tulip: '🌷',
    four_leaf_clover: '🍀',
    tree: '🌳',
    cactus: '🌵',
    rainbow: '🌈',
    earth: '🌍',
    comet: '☄️',
    ring: '💍',
    camera: '📷',
    phone: '📱',
    computer: '💻',
    lightbulb: '💡',
    hourglass: '⌛',
    money: '💰',
    crown: '👑',
    trophy: '🏆',
    gift: '🎁',
    balloon: '🎈',
    party: '🎉',
    clapper: '🎬',
    music: '🎵',
    microphone: '🎤',
    headphones: '🎧',
    guitar: '🎸',
    trumpet: '🎺',
    drum: '🥁',
    medal: '🏅',
    baseball: '⚾',
    football: '🏈',
    tennis: '🎾',
    rugby: '🏉',
    golf: '⛳',
    skier: '⛷️',
    snowboarder: '🏂',
    swimmer: '🏊',
    surfer: '🏄',
    rower: '🚣',
    cyclist: '🚴',
    weightlifter: '🏋️',
    cartwheel: '🤸',
    celebration: '🥳'
};

searchBar.addEventListener('input', (e) => {
    const userInput = e.target.value.toLowerCase();
    if (emojiMap[userInput]) {
        emojiDisplay.innerHTML = `<span>${emojiMap[userInput]}</span>`;
    } else {
        emojiDisplay.innerHTML = '<span>Emoji not found 😔</span>';
    }
});

emojiDisplay.addEventListener('click', () => {
    const emoji = emojiDisplay.innerText;
    if (emoji !== 'Emoji not found 😔') {
        navigator.clipboard.writeText(emoji).then(() => {
            alert('Emoji copied to clipboard!');
        });
    }
});

const copyBtn = document.getElementById('copy-btn');
copyBtn.addEventListener('click', () => {
    const emoji = emojiDisplay.innerText;
    if (emoji !== 'Emoji not found 😔') {
        navigator.clipboard.writeText(emoji).then(() => {
            alert('Emoji copied to clipboard!');
        });
    } else {
        alert('No emoji to copy!');
    }
});