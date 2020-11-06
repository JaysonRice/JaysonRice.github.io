const technologyCollection = [
    {
        title: "Pets Please",
        techStack: "HTML, CSS, JS, React.js",
        bullets: [
            { info: "Front end capstone at NSS; I made a site where users can share pictures of their pets" },
            { info: "Required to have unique experience for every user, full CRUD funtionality, and built using React hooks" }
        ],
        video: "images/petsVideo.mp4",
        deployedLink: "https://pets-please.herokuapp.com/",
        modalParagraph: "I was tired of seeing social media posts by family and friends that were outrageous and dumb. Pet's Please is a single page application that allows users to save pictures of their pets to view on a main social media feed. Users can follow other users to see their pet pictures as well. You can tailor your experience by following good pet photographers and using the ability to filter by animal type. It makes for a great stress free social media app!",
        modalBullets: [
            { info: "Front end capstone project built in React using JSON server to store user and pet information" },
            { info: "Full CRUD functionality allows users to maintain pet info" },
            { info: "Photos stored using Cloudinary's image services" }
        ],
        projectLink: "https://github.com/JaysonRice/pets-please",

    }
]



export const useTechnologies = () => {
    return technologyCollection.slice()
}