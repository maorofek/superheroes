import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SideBarState {
    lastSearches: string[];
}

const initState: SideBarState = {
    lastSearches: getLastSearchFromLocalStorage(),
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
            localStorage.setItem('lastSearches', JSON.stringify(state.lastSearches));
        }
    }
});

export default searchBarSlice.reducer;
export const { addLastSearch } = searchBarSlice.actions;

function getLastSearchFromLocalStorage() {
    const lastSearches = JSON.parse(localStorage.getItem('lastSearches') || '[]');
    return lastSearches;
}
