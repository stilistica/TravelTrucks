export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;

export const selectCampers = (state) => state.campers.items;
export const selectCamperById = (state, id) => (state.campers.items ?? []).find(c => String(c.id) === String(id));

export const selectFavorites = (state) => state.campers.favoriteProducts;
export const selectFilter = (state) => state.campers.filter;
export const selectTotalItems = (state) => state.campers.totalItems;