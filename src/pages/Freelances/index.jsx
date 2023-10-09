const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: 'https://via.placeholder.com/80',
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: 'https://via.placeholder.com/80',
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: 'https://via.placeholder.com/80',
    },
]

function Freelances() {
    return (
        <div>
            <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
        </div>
    )
}
 
export default Freelances