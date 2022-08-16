import { createSlice } from '@reduxjs/toolkit';

const initState = {
    searchResults: [],
};

const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState: initState,
    reducers: {
        setSearchResults: (state, action) => {
            console.log(action);
            state.searchResults = action.payload;
        }
    }
}
);

export default searchBarSlice.reducer;
export const { setSearchResults } = searchBarSlice.actions;