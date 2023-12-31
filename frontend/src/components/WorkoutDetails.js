const WorkoutDetails = ({ workout }) => {

    return (
      <div className="workout-details">
        <h4 className = 'workout-title'>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Number of reps: </strong>{workout.reps}</p>
        <p>{workout.date}</p>
      </div>
    )
  }
  
  export default WorkoutDetails