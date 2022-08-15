import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SideBarState {
    lastSearches: string[];
}

const initState: SideBarState = {
    lastSearches: [],
};

const searchBarSlice = createSlice({
    name: 'sideBar',
    initialState: initState,
    reducers: {
        addLastSearch: (state, action: PayloadAction<string>) => {
            state.lastSearches.push(action.payload);
            if (state.lastSearches.length > 5) {
                state.lastSearches.shift();
            }
        }
    }
});

export default searchBarSlice.reducer;
export const { addLastSearch } = searchBarSlice.actions;