let githubName =  localStorage.getItem('devGithubName');
let linkedinName = localStorage.getItem('devLinkedinName');
let codechefName = localStorage.getItem('devCodechefName');
let hackerrankName = localStorage.getItem('devHackerrankName');
let twitterName = localStorage.getItem('devTwitterName');
let mediumName = localStorage.getItem('devMediumName');
console.log(githubName);
fetch("https://api.github.com/users/"+githubName).then((response)=> {
    console.log("Developer response received" , response);
    return response.json();
}).then((developerData)=> {
    // displaying developer Image
    let developerImage = document.getElementById('developerImage');
    developerImage.src = developerData.avatar_url;
    console.log(developerData);
    // displaying developer Name
    let developerName = document.getElementById('devName');
    developerName.innerHTML = developerData.name;
    // displaying developer Bio
    let developerBio = document.getElementById('devBio');
    developerBio.innerHTML = developerData.bio;
    // displaying developer links
    //github Link
    let devGithubLink = document.getElementById('githubLink'); 
    devGithubLink.href = "https://github.com/"+githubName;
    // Linkedin Link
    let linkedinLink = document.getElementById('linkedinLink');
    if(linkedinName !== "") {
        linkedinLink.href = "https://www.linkedin.com/in/"+linkedinName
    }
    else if(linkedinName === "") {
        linkedinLink.href = "https://www.linkedin.com";
    }
    // codechef Link
    let codechefLink = document.getElementById('codechefLink');
    if(codechefName !== "") {
        codechefLink.href = "https://www.codechef.com/users/"+codechefName;
    }
    else if(codechefName === "") {
        codechefLink.href = "https://www.codechef.com/";
    }
    // Hackerrank Link
    let hackerRankLink = document.getElementById('hackerRankLink');
    if(hackerrankName !== "") {
        hackerRankLink.href = "https://www.hackerrank.com/"+hackerrankName;
    }
    else if(hackerrankName === "") {
        hackerRankLink.href = "https://www.hackerrank.com/";
    }
    // Twitter Link
    let twitterLink = document.getElementById('twitterLink');
    if(twitterName !== "") {
        twitterLink.href = "https://twitter.com/"+twitterName;
    }
    else if(twitterName === "") {
        twitterLink.href = "https://twitter.com/explore";
    }
    // Medium Link
    let mediumLink = document.getElementById('mediumLink');
    if(mediumName !== "") {
        mediumLink.href = "https://medium.com/@"+mediumName;
    }
    else if(mediumName === "") {
        mediumLink.href = "https://medium.com/";
    }
    // developer Location
    let developerLocation =  document.getElementById('devLocation');
    developerLocation.innerHTML = developerData.location;
    // developer Company
    let developerCompany = document.getElementById('devcompany');
    developerCompany.innerHTML = developerData.company;
    // developer Link
    let developerLink = document.getElementById('devLink');
    developerLink.innerHTML = developerData.blog;   
}).catch((err) => {
    console.log("error" , err);
})
fetch(`https://api.github.com/users/${githubName}/repos`).then((developerRepos)=> {
    console.log("Developer Repos fetched" , developerRepos);
    return developerRepos.json();
}).then((developerRepoData)=> {
    for(let j in developerRepoData) {
        // creating anchor tag
        let a = document.createElement('a');
        let link = document.createTextNode(developerRepoData[j].name);
        a.setAttribute('class' , 'devRepos')
        a.appendChild(link);          
        a.href = developerRepoData[j].html_url;
        a.title = developerRepoData[j].name;
        document.getElementById('repos').appendChild(a);
        // creating repo last updated at
        let p = document.createElement('p');
        let text = "Last updated on : ";
        p.innerHTML = text + " " +new Date(developerRepoData[j].updated_at).toDateString();
        p.setAttribute('class' , 'repoUpdatedat');
        a.appendChild(p);
        // creating repo description
        let description = document.createElement('h3');
        description.innerHTML = developerRepoData[j].description;
        description.setAttribute('class' , "repodescription");
        a.appendChild(description);
        // creating horizontal line for each repo
        let hr = document.createElement('hr');
        hr.style.width="90%"
        hr.style.color ="#2F2E41";
        a.appendChild(hr);
        console.log("URL" , developerRepoData[j].html_url);
        console.log("updatedAt" , developerRepoData[j].updated_at)
    }
    console.log(developerRepoData);
}).catch((err)=> {
    console.log("unable to Developers Repo data" , err);
})
let goBackButon = document.getElementById('goBackButon');
goBackButon.addEventListener('click' , closeWindow); {
    function closeWindow() {
        closeWindow();
    }
}