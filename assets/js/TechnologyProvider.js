const technologyCollection = [
    {
        name: "Git",
        link: "images/technologies/git.png"
    },
    {
        name: "React",
        link: "images/technologies/react.png"
    },
    {
        name: "JSX",
        link: "images/technologies/jsx.png"
    }
]

export const useTechnologies = () => {
    return technologyCollection.slice()
}