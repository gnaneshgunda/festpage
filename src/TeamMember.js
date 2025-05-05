import { useParams, Link } from 'react-router-dom';
import './TeamMember.css';

const TeamMember = ({ teamMembers }) => {
    const { id } = useParams();
    const member = teamMembers.find((m) => m.id === parseInt(id));

    if (!member) {
        return <p>Team member not found.</p>;
    }

    return (
        <div className="team-member-container">
            <img src={member.img} alt={member.name} className="team-member-img" />
            <h2>{member.name}</h2>
            <p><b>Role:</b> {member.role}</p>
            <Link to="/teams" className="back-button">Back to Teams</Link>
        </div>
    );
};

export default TeamMember;