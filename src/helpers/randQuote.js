import { quotes } from '../data/quote-data';

export default function randQuote() {
    let newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return `${newQuote.text} - ${newQuote.author}`;
}
