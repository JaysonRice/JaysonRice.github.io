import Technology from './Technology.js';
import { useTechnologies } from './TechnologyProvider.js';

const TechnologyList = () => {

    const technologyElement = document.querySelector(".technologiesContainer")
    const technologys = useTechnologies()

    let technologyHTMLRepresentations = ""
    for (const technologyObjects of technologys) {
        technologyHTMLRepresentations += Technology(technologyObjects)
    }

    technologyElement.innerHTML = `
        ${technologyHTMLRepresentations}
`
}

export default TechnologyList
TechnologyList()