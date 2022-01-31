import { GET_ALL_CONTRIES, GET_CONTRY_DETAIL, GET_COUNTRY } from "./query"


export const getAllContries = async () => {
    return new Promise(async (resolve, reject) => {
        await fetch('http://testefront.dev.softplan.com.br/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: GET_ALL_CONTRIES })
        }).then(response => response.json()).then(data => resolve(data.data))
    })
}

export const getCountry = async (filter: any) => {
    return new Promise(async (resolve, reject) => {
        await fetch('http://testefront.dev.softplan.com.br/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: GET_COUNTRY(filter) })
        }).then(response => response.json()).then(data => resolve(data.data))
    })
}

export const getCountryDetail = async (id: string) => {
    return new Promise(async (resolve, reject) => {
        await fetch('http://testefront.dev.softplan.com.br/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: GET_CONTRY_DETAIL(id) })
        }).then(response => response.json()).then(data => resolve(data.data))
    })
}