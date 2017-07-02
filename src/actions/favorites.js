const FAVORITES = 'FAVORITES'

export const favorites = () => {
  // NOTE: FOR TESTING ONLY
  let favorites = ['A','B','C','D']
  return { type: FAVORITES, favorites }
}
