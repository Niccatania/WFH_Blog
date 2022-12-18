export const NavBar = () =>{
    return(
<div className="navbar bg-base-100">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl" href={`/`}>Work From Home Blog</a>
    <a className="btn btn-ghost normal-case text-xl" href={`/profile`}>Profile</a>
  </div>
  <div>
  <div>
      <div className="avatar">
        <div className="w-20 rounded-full">
          <img src="https://wwd.com/wp-content/uploads/2022/07/Ryan-Gosling-1-2.jpg" />
        </div>
      </div>
      </div>
    
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>
    )
}

export default NavBar;