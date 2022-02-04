import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

type Country = {
    _id: number;
    name: string;
    capital: string;
    nativeName: string;
    area: string;
    population: number;
    alpha2Code: string;
    alpha3Code: string;
    location: { latitude: number; longitude: number; }
    borders: { name: string; location: { latitude: number; longitude: number; } }[]
    distanceToOtherCountries: { countryName: string; distanceInKm: number; }[]
    topLevelDomains: { name: string; }[]
    subregion: { name: string; }

}

const INITIAL_STATE: Country = {
    _id: 0,
    name: "",
    capital: "",
    nativeName: "",
    area: "",
    population: 0,
    alpha2Code: "",
    alpha3Code: "",
    location: { latitude: 0, longitude: 0 },
    borders: [],
    distanceToOtherCountries: [],
    topLevelDomains: [{ name: "" }],
    subregion: { name: '' }
}
export const slice = createSlice({
    name: 'country',
    initialState: INITIAL_STATE,
    reducers: {
        setCountry(state, { payload }) {
            return { ...state, ...payload }
        },
        resetCountry() {
            return { ...INITIAL_STATE }
        },
    }
})

export const { setCountry, resetCountry } = slice.actions

export const countrySelector = (state: RootState) => state.country

export default slice.reducer