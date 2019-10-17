class Github {
  constructor(){
    this.client_id = '75cb0206f449d714cad0';
    this.client_secret = 'e3d84f245a1d123bf4cb494a332332d342a3be84';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }


  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const reposData = await reposResponse.json();
    return {
      //profileData: profileData
      profileData,
      // reposData:reposData
      reposData
    };
  }
}