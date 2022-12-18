export const Profile = () =>{
    return(
        <div>
<div className="card  w-96 glass 	flex justify-content: center;">
  <figure><img src="https://placeimg.com/400/225/arch" alt="car!"/></figure>
  <div className="card-body">
  <h1>You genius! You figured out routing</h1>
      <div className="avatar">
        <div className="w-20 rounded-full">
          <img src="https://wwd.com/wp-content/uploads/2022/07/Ryan-Gosling-1-2.jpg" />
        </div>
      </div>
    <h2 className="card-title">Your profile</h2>
    <p>Whats up Boss</p>
    <p>No posts yet</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><a href={'/'}>Back to Home</a></button>
    </div>
  </div>
</div>
</div>
    )
}
export default Profile