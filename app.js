//init Github
const github = new Github;
//init UI
const ui = new UI;


const searchUser = document.getElementById('search-user');

//search user event listener
searchUser.addEventListener('keyup', (e)=>{
  //get the text being typed
  const userText = e.target.value;

  if(userText!==''){
    // console.log(userText)
    //make http call
    github.getUser(userText)
    .then((data)=>{
      if(data.profileData.message==='Not Found'){
        //show alert
        ui.showAlert('user not found', 'alert alert-danger')
      }else{
      //show profile
      console.log(data.profileData)
      ui.showProfile(data.profileData)
      //show repos
      ui.showRepos(data.reposData)
      }
    })
  }else{
    //clear profile ui
    ui.clearProfile()
  }

  e.preventDefault()
})