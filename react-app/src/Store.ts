import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './SearchSlice'
import sideBarReducer from './SideBarSlice'


type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: {
        searchBar: searchReducer,
        sideBar: sideBarReducer
    },
})
export default store;
export const selectSearchResults = (state: RootState) => state.searchBar.searchResults;
export const selectLastSearches = (state: RootState) => state.sideBar.lastSearches;
