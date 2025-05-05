import './index.css';

const Schedule = () => {
  const scheduleData = [
    { day: 'Day 1', title: 'Opening Ceremony', description: 'Kickoff event with keynote speakers.' },
    { day: 'Day 2', title: 'Workshops', description: 'Hands-on sessions on various topics.' },
    { day: 'Day 3', title: 'Hackathon', description: 'Collaborate and build amazing projects.' },
    { day: 'Day 4', title: 'Closing Ceremony', description: 'Awards and closing remarks.' },
  ];

  return (
    <div className="schedule-container">
      <div className="schedule-grid">
        {scheduleData.map((event, index) => (
          <div key={index} className="schedule-card">
            <h2>{event.day}</h2>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;