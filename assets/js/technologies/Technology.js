const Technology = (technology) => {
    return `
    <section class="technologyItem">
        <div class="technology__details">
            <p class="technology__name">${technology.name}</p>
            <img class="technology__logo" alt="${technology.name} Logo" src="${technology.link}">
        </div>
    </section> 
`
}

export default Technology

