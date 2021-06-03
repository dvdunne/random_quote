// List of quotes to be shown to the user.
// Eventually this wil be moved to a database backend.

const quotes = [
  {
    _id: 1,
    quote: "A goal without a plan is just a wish",
    author: "Antoine de Saint-Exupéry",
  },

  {
    _id: 2,
    quote:
      "The impediment to action advances action. What stands in the way becomes the way",
    author: "Marcus Aurelius",
  },

  {
    _id: 3,
    quote:
      "Better for me to remain quiet and be thought a fool, then to open my mouth and remove all doubt",
    author: "Abraham Lincoln",
  },

  {
    _id: 4,
    quote:
      "But among the status-conscious, the word 'tourist' has come to mean 'anyone who travels in a style I consider inferior to the way I like to think I do it.'",
    author: "John Flinn",
  },

  {
    _id: 5,
    quote: "It’s not wise to upset a Wookiee",
    author: "Han Solo",
  },
];

export function getQuote(id) {
  return quotes.find((m) => m._id === id);
}
