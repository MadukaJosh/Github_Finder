class Github {
    constructor(){
        this.client_id = '4bed37b3275102de8434';
        this.client_secret = '43e99065a42a28759722f014d7430d35e3c49cb9 ';
        this.repos_count = 3;
        this.repos_sort = 'created: asc';
}

async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.$client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.$client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    
    return{
        profile,
        repos

    }
}
}

// // Waether API keys
// 8205b125edbf430f85b125edbf530f92