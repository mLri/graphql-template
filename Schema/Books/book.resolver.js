const books = [
  {
    title: 'Spy',
    author: 'mLri'
  },
  {
    title: 'Family',
    author: 'mLri'
  }
]

module.exports = {
  Query: {
    books: () => books,
  }
}