import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

const INITIAL_STATE: any = []

export const slice = createSlice({
    name: 'countries',
    initialState: INITIAL_STATE,
    reducers: {
        addCountry(state, { payload }) {
            return [...state, { country: payload }]
        },
        delCountry(state, { payload }) {
            let temp = state;
            temp.splice(payload)
            return temp
        },
        resetCountries() {
            return []
        },
    }
})

export const { addCountry, resetCountries, delCountry } = slice.actions

export const countriesSelector = (state: RootState) => state.countries

export default slice.reducer