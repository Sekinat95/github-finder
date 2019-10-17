class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }
// display profile in ui
  showProfile(user){
    // console.log(user)
    this.profile.innerHTML = `
    <div class="card card-body mb-3" >
      <div class="row" >
        <div class="col-md-3" >
          <img class="img-fluid mb-2" src="${user.avatar_url}" >
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3" >View Profile</a>
        </div>
        <div class="col-md-9" >
          <span class="badge badge-primary" >public repos: ${user.public_repos}</span>
          <span class="badge badge-secondary" >public gists: ${user.public_gists}</span>
          <span class="badge badge-success" >Followers: ${user.followers}</span>
          <span class="badge badge-warning" >following: ${user.following}</span>
          <br><br>
          <ul class="list-group" >
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-haeding mb-3" >Latest Repos</h3>
    <div id="repos" ></div>
    `
  }
  //Show Repos
  showRepos(repos){
    let output = '';
    repos.forEach(repo => {
      output+= `
      <div class="card card-body mb-2" >
        <div class="row" >
          <div class="col-md-6" >
            <a href="${repo.html_url}" target="_blank" >${repo.name}</a>
          </div>
          <div class="col-md-6" >
          <span class="badge badge-primary" >Stars: ${repo.stargazers_count}</span>
          <span class="badge badge-secondary" >forks: ${repo.forks_count}</span>
          <span class="badge badge-success" >watchers: ${repo.watchers_count}</span>
          <span class="badge badge-success" >size: ${repo.size}</span>
          </div>
        </div>
      </div>
      `
      document.getElementById('repos').innerHTML = output;
    });
  }
  //show alert message
  showAlert(message,classname){
    this.clearAlert();
    const div = document.createElement('div')
    div.className=classname;
    div.appendChild(document.createTextNode(message))
    //the parent we want to insert it in
    const container = document.querySelector('.search-container');
    //get the search box within this container parent
    const search = document.querySelector('.search');
    container.insertBefore(div,search)
    //timeout after 3 secs
    setTimeout(() => {
      this.clearAlert()
    }, 3000);
  }
  //clear alert message
  clearAlert(){
    const currentAlert = document.querySelector('.alert')
    if(currentAlert){
      currentAlert.remove()
    }
  }
  //clear profile
  clearProfile(){
    this.profile.innerHTML = '';
  }
}