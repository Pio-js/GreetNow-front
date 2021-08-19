export async function eventsList (state)  {

    const url = 'http://localhost:8080/data/events'
    const response = await fetch(url)
    const result = await response.json()
    state = result.data
    // console.log('events-state',state);

    return state
}

export async function categoriesList (state)  {

    const url = 'http://localhost:8080/data/categories'
    const response = await fetch(url)
    const result = await response.json()
    state = result.data

    return state
}
