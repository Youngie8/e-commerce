import useFetch from './usefetch';

const Review = () => {
  const {data: users, error} = useFetch('http://localhost:8000/users')  
  return (
    <div className="review">
        <div className="grid">
            {error && <div> { error } </div>}
            { users && users.map((user) => (
                <div className="grid-item" key={user.id}>
                    <img src={user.image} alt="" className="review-img" />
                    <h4>{user.name}</h4>
                    <p>{ user.comment}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Review