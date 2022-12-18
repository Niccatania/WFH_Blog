export const Card =() => {
return(
<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-8/12"src="https://www.mymove.com/wp-content/uploads/2020/08/Abby-Dauchess.jpg" alt="
office"/></figure>
  <div className="card-body">
    <h2 className="card-title">First hardcoded post on the new blog!</h2>
    <p>Lets Look at cool Work From Home offices</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><a href={'/posts'}>Go to Post</a></button>
    </div>
  </div>

  <figure><img className="w-8/12" src="https://1924206.fs1.hubspotusercontent-na1.net/hubfs/1924206/bigstock-Posters-In-Natural-Home-Office-253947121.jpg" alt="
office"/></figure>
  <div className="card-body">
    <h2 className="card-title">Clean Space</h2>
    <p>This is a nice one.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Go to Post</button>
    </div>
  </div>
</div>

)
}
export default Card