const authors = [
  {
    name: 'mLri'
  }
]

module.exports = {
  Query: {
    authors: () => authors
  },
  Mutation: {
    createAuthor(parent, args) {
      const newAuthor = args
      authors.push(args)
      return newAuthor
    }
  }
}