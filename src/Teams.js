import { Link, Route, Routes } from 'react-router-dom';
import TeamMember from './TeamMember';
import './Teams.css';

const Teams = () => {
    const teamMembers = [
        { id: 1, name: 'Head-1', role: 'Tech Lead', img: '/upendra.jpg' },
        { id: 2, name: 'Head-2', role: 'Design Lead', img: '/teja.jpg' },
        { id: 3, name: 'Head-3', role: 'Management Lead', img: '/prabhav.jpg' },
        { id: 4, name: 'Head-4', role: 'Operations Lead', img: '/guru.jpg' },
        { id: 5, name: 'Head-5', role: 'Marketing Lead', img: '/IMG20250225132853.jpg' },
        { id: 6, name: 'Head-6', role: 'Finance Lead', img: '/durga.jpeg' },
        { id: 7, name: 'Head-7', role: 'HR Lead', img: '/hr.jpg' },
        { id: 8, name: 'Head-8', role: 'Product Manager', img: '/product.jpg' },
    ]

    return (
        <div className="teams-container">
            <h2>Our Team</h2>
            <div className="team-cards">
                {teamMembers.map((member) => (
                    <Link to={`/teams/${member.id}`} key={member.id} className="team-card">
                        <img src={member.img} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </Link>
                ))}
            </div>

            {/* Child Routes */}
            <Routes>
                <Route path=":id" element={<TeamMember teamMembers={teamMembers} />} />
            </Routes>
        </div>
    );
};

export default Teams;