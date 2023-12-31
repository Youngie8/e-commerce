
const Review = ({users}) => {
  return (
    <div className="container">
      <div className="review">
      <h3 className="review-header">Client's <span className="span-color-2">Reviews!</span></h3>
        <div className="grid">
            {users.map((user) => (
                <div className="grid-item" key={user.id}>
                    <img src={user.image} alt="" className="review-img" />
                    <h4>{user.name}</h4>
                    <p>{ user.comment}</p>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Review