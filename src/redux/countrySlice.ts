import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

const INITIAL_STATE = {
    _id: 0,
    name: "",
    capital: "",
    nativeName: "",
    area: "",
    population: 0,
    location: { latitude: 0, longitude: 0 },
    distanceToOtherCountries: [],
    topLevelDomains: [{ name: "" }],
    subregion: {}
}
export const slice = createSlice({
    name: 'country',
    initialState: INITIAL_STATE,
    reducers: {
        setCountry(state, { payload }) {
            return { ...payload }
        },
        resetCountry() {
            return { ...INITIAL_STATE }
        },
    }
})

export const { setCountry, resetCountry } = slice.actions

export const countrySelector = (state: RootState) => state.country

export default slice.reducer