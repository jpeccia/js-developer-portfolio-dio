async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/jpeccia/js-developer-portfolio-dio/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()

}