var currentGenerator;
var textElement, timestampElement, copyButtonElement;

function replacePlaceholdersWithRandomVariations(inputObject) {
  const { text, lookup } = inputObject;

  if (!text || !lookup || lookup.length === 0) {
    return text;
  }

  const updatedText = text.replace(/\|([^|]+)\|/g, (match, placeholder) => {
    const foundItem = lookup.find(item => item.id === placeholder);
    if (foundItem && foundItem.variations && foundItem.variations.length > 0) {
      const randomIndex = Math.floor(Math.random() * foundItem.variations.length);
      return foundItem.variations[randomIndex];
    } else {
      return match;
    }
  });

  return updatedText;
}

function replacePlaceholdersWithDefaults(inputObject) {
  const { text, lookup } = inputObject;

  if (!text || !lookup || lookup.length === 0) {
    return text;
  }

  const updatedText = text.replace(/\|([^|]+)\|/g, (match, placeholder) => {
    const foundItem = lookup.find(item => item.id === placeholder);
    return foundItem ? foundItem.default : match;
  });

  return updatedText;
}

function getRandomElementFromArray(array) {
  if (array.length === 0) {
    return undefined; // Return undefined if the array is empty
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateRandomTimestamp() {
  const hours = Math.floor(Math.random() * 12) + 1; // Random hour from 1 to 12
  const minutes = Math.floor(Math.random() * 60); // Random minute from 0 to 59
  const period = Math.random() < 0.5 ? 'am' : 'pm'; // Randomly choose 'am' or 'pm'

  // Format the time as 'h:mm[am|pm]'
  const time = `${hours}:${minutes.toString().padStart(2, '0')}${period}`;
  return time;
}

function getNewQuote() {
  currentGenerator = getRandomElementFromArray(GENERATORS);

  const quote = replacePlaceholdersWithDefaults(currentGenerator);

  return quote;
}

function getRandomizedQuote() {
  const quote = replacePlaceholdersWithRandomVariations(currentGenerator);

  return quote;
}

function handleClickNewQuote() {
  textElement.innerText = getNewQuote();
  timestampElement.innerText = `Today at ${generateRandomTimestamp()}`;
}

function handleClickRandomizeQuote() {
  textElement.innerText = getRandomizedQuote();
  timestampElement.innerText = `Today at ${generateRandomTimestamp()}`;
}

window.addEventListener('DOMContentLoaded', event => {
  textElement = document.getElementById('text');
  timestampElement = document.getElementById('timestamp');
  copyButtonElement = document.getElementById('copy-button');

  copyButtonElement.addEventListener('click', function() {
    const textToCopy = textElement.innerText;

    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    this.innerHTML = '<i class="fas fa-copy"></i> Copied!';

    setTimeout(() => {
      this.innerHTML = '<i class="fas fa-copy"></i> Copy To Clipboard';
    }, 800);
  });

  handleClickNewQuote()
});