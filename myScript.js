const sudhirButton = document.getElementById("sudhirButton");
sudhirButton.addEventListener('click' , showDeveloperProfile);
function showDeveloperProfile() {
    document.getElementById("devContainer").style.display="block";
    document.getElementById("headerContainer").style.opacity="0.3";
    document.getElementById("footerContainer").style.opacity="0.3";   
    fetch("https://api.github.com/users/jnsudhir").then((response)=>{
        console.log("response received" ,response);
        return response.json();
    }).then(data=>{
        // developer Image
        const devImage = document.getElementById("devImage");
        devImage.src = data.avatar_url;
        // developer Name
        const devName = document.getElementById("devName");
        devName.innerHTML = data.name;
        // developer Bio
        const devBio = document.getElementById("devBio");
        devBio.innerHTML = data.bio;
        // developer Location
        const devLocation = document.getElementById("devLocation");
        devLocation.innerHTML = data.location;
        //developer company
        const devCompany = document.getElementById("devcompany");
        devCompany.innerHTML = data.company;
        // developer Link
        const devLink = document.getElementById("devLink");
        devLink.innerHTML = data.blog;
        // github link
        const githubLink = document.getElementById("githubLink");
        githubLink.href = "https://www.github.com/jnsudhir";
        // linkedin link
        const linkedinLink = document.getElementById("linkedinLink");
        linkedinLink.href = "https://www.linkedin.com/in/jnsudhir";
        // codechef link
        const codechefLink = document.getElementById("codechefLink");
        codechefLink.href = "https://www.codechef.com/";
        // Hackerrank link
        const hackerRankLink = document.getElementById("hackerRankLink");
        hackerRankLink.href = "https://www.hackerrank.com/";
        // twitter link
        const twitterLink = document.getElementById("twitterLink");
        twitterLink.href = "https://twitter.com/explore";
        // medium link
        const mediumLink = document.getElementById("mediumLink");
        mediumLink.href = "https://medium.com/@nagasudhir28";

        console.log(data);
    }).then((err)=>{
        console.log("Error");
    })
    fetch("https://api.github.com/users/jnsudhir/repos").then((response)=>{
        console.log("repos received" ,response);
        return response.json();
    }).then(repoData=>{
        for(let i in repoData) {          
            // creating anchor tag
            let a = document.createElement('a');
            let link = document.createTextNode(repoData[i].name);
            a.setAttribute('class' , 'devRepos')
            a.appendChild(link);          
            a.href = repoData[i].html_url;
            a.title = repoData[i].name;
            document.getElementById('repos').appendChild(a);
            // creating repo last updated at
            let p = document.createElement('p');
            let text = "Last updated on : ";
            p.innerHTML = text + " " +new Date(repoData[i].updated_at).toDateString();
            p.setAttribute('class' , 'repoUpdatedat');
            a.appendChild(p);
            // creating repo description
            let description = document.createElement('h3');
            description.innerHTML = repoData[i].description;
            description.setAttribute('class' , "repodescription");
            a.appendChild(description);
            // creating horizontal line for each repo
            let hr = document.createElement('hr');
            hr.style.width="90%"
            hr.style.color ="#2F2E41";
            a.appendChild(hr);
            console.log("URL" , repoData[i].html_url);
            console.log("updatedAt" , repoData[i].updated_at)
        }
        console.log(repoData);
    }).then((err)=>{
        console.log("Error");
    })
    document.getElementById('goBackButon').addEventListener('click' ,goBack);
    function goBack()
    {
        document.getElementById('devContainer').style.display="none";
        document.getElementById("headerContainer").style.opacity="1";
        document.getElementById("footerContainer").style.opacity="1";
    }
}
                        //Meta developer Profile
const MetaButton = document.getElementById("MetaButton");
MetaButton.addEventListener('click' , showMetaDeveloperProfile);
function showMetaDeveloperProfile()
{
    document.getElementById("devContainer").style.display="block";
    document.getElementById("headerContainer").style.opacity="0.3";
    document.getElementById("footerContainer").style.opacity="0.3";
    fetch("https://api.github.com/users/facebook").then((result)=>{
        console.log("Result received" , result);
        return result.json();
    }).then((metaData)=>{
        const devImage = document.getElementById("devImage");
        devImage.src = metaData.avatar_url;
        // developer Name
        const devName = document.getElementById("devName");
        devName.innerHTML = metaData.name;
        // developer Bio
        const devBio = document.getElementById("devBio");
        devBio.innerHTML = metaData.bio;
        // developer Location
        const devLocation = document.getElementById("devLocation");
        devLocation.innerHTML = metaData.location;
        //developer company
        const devCompany = document.getElementById("devcompany");
        devCompany.innerHTML = metaData.company;
        // developer Link
        const devLink = document.getElementById("devLink");
        devLink.innerHTML = metaData.blog;
        // github link
        const githubLink = document.getElementById("githubLink");
        githubLink.href = "https://github.com/facebook";
        // linkedin link
        const linkedinLink = document.getElementById("linkedinLink");
        linkedinLink.href = "https://www.linkedin.com/company/meta/";
        // codechef link
        const codechefLink = document.getElementById("codechefLink");
        codechefLink.href = "https://www.codechef.com/";
        // Hackerrank link
        const hackerRankLink = document.getElementById("hackerRankLink");
        hackerRankLink.href = "https://www.hackerrank.com/";
        // twitter link
        const twitterLink = document.getElementById("twitterLink");
        twitterLink.href = "https://twitter.com/Facebook";
        // medium link
        const mediumLink = document.getElementById("mediumLink");
        mediumLink.href = "https://medium.com/";

        console.log(metaData);
    }).then((err)=>{
        console.log(err);
    })
    fetch("https://api.github.com/users/facebook/repos").then((repoResult)=>{
        console.log("Repos received" , repoResult);
        return repoResult.json();
    }).then((metaRepoData)=>{
        for(let j in metaRepoData) {
            // creating anchor tag
            let a = document.createElement('a');
            let link = document.createTextNode(metaRepoData[j].name);
            a.setAttribute('class' , 'devRepos')
            a.appendChild(link);          
            a.href = metaRepoData[j].html_url;
            a.title = metaRepoData[j].name;
            document.getElementById('repos').appendChild(a);
            // creating repo last updated at
            let p = document.createElement('p');
            let text = "Last updated on : ";
            p.innerHTML = text + " " +new Date(metaRepoData[j].updated_at).toDateString();
            p.setAttribute('class' , 'repoUpdatedat');
            a.appendChild(p);
            // creating repo description
            let description = document.createElement('h3');
            description.innerHTML = metaRepoData[j].description;
            description.setAttribute('class' , "repodescription");
            a.appendChild(description);
            // creating horizontal line for each repo
            let hr = document.createElement('hr');
            hr.style.width="90%"
            hr.style.color ="#2F2E41";
            a.appendChild(hr);
            console.log("URL" , metaRepoData[j].html_url);
            console.log("updatedAt" , metaRepoData[j].updated_at)

        }
        console.log("metaRepoData")
    })
    document.getElementById('goBackButon').addEventListener('click' ,goBack);
    function goBack()
    {
        document.getElementById('devContainer').style.display="none";
        document.getElementById("headerContainer").style.opacity="1";
        document.getElementById("footerContainer").style.opacity="1";
    }
}
const addDevBtn = document.getElementById('addDevBtn');
addDevBtn.addEventListener('click' , openForm)
function openForm()
{
    document.getElementById('formContainer').style.display="block";
    document.getElementById("headerContainer").style.opacity="0.3"; 
    const cancelForm = document.getElementById('cancelForm'); 
    cancelForm.addEventListener('click' ,formClose)
    function formClose() {
        document.getElementById('formContainer').style.display="none";
    }
}
let devForm = document.getElementById("devForm");
devForm.addEventListener('submit' , addProfile);
function addProfile(e) {
    e.preventDefault();
    document.getElementById("formContainer").style.display="none";
    document.getElementById("headerContainer").style.opacity="1";
    let githubText = document.getElementById("githubText");
    let githubUserName = githubText.value;
    fetch("https://api.github.com/users/"+githubUserName).then((userResponse)=>{
        console.log("Reponse received" , userResponse);
        return userResponse.json();
    }).then((userData)=>{
        let button = document.createElement('button');
        let img = document.createElement('img');
        img.src = userData.avatar_url;
        img.setAttribute('ID' , 'userprofileImage');   
        button.append(img)
        let textNode = document.createTextNode(userData.name);
        button.appendChild(textNode);
        button.setAttribute('ID' , 'userButton');
        document.getElementById('devButtons').appendChild(button);
        let userButton = document.getElementById("userButton");
        userButton.addEventListener('click' , displayUserProfile)
        function displayUserProfile() {
            document.getElementById("devContainer").style.display="block";
            document.getElementById("headerContainer").style.opacity="0.3";
            document.getElementById("footerContainer").style.opacity="0.3";
            // userImage
            let userImage = document.getElementById("devImage");
            userImage.src = userData.avatar_url;
            // userName
            let userName = document.getElementById("devName");
            userName.innerHTML = userData.name;
            // userBio
            let userBio = document.getElementById("devBio");
            userBio.innerHTML = userData.bio;
            // github link
            let userGithubValue = document.getElementById("githubText");
            let gitUserName = userGithubValue.value;
            let userGithubLink = document.getElementById("githubLink");
            userGithubLink.href = "https://www.github.com/"+gitUserName;
            // linkedin link
            let userLinkedinValue = document.getElementById("linkedinText").value;
            if(userLinkedinValue !=="") {
                let userLinkedinLink = document.getElementById("linkedinLink");
                userLinkedinLink.href = "https://www.linkedin.com/in/"+userLinkedinValue;
            }
            else if(userLinkedinValue ==="") {
                let userLinkedinLink = document.getElementById("linkedinLink");
                userLinkedinLink.href = "https://www.linkedin.com"
            }
            // codechef Link
            let userCodechefValue = document.getElementById("codechefText").value;
            if(userCodechefValue !=="") {
                let userCodechefLink = document.getElementById("codechefLink");
                userCodechefLink.href = "https://www.codechef.com/users/"+userCodechefValue;
            }
            else if(userCodechefValue ==="") {
                let userCodechefLink = document.getElementById("codechefLink");
                userCodechefLink.href = "https://www.codechef.com/"
            }
            // hackerrank link
            let userHackerrankValue = document.getElementById("hackerrankText").value;
            if(userHackerrankValue !=="") {
                let userHackerrankLink = document.getElementById("hackerRankLink");
                userHackerrankLink.href = "https://www.hackerrank.com/"+userHackerrankValue;
            }
            else if(userHackerrankValue ==="") {
                let userHackerrankLink = document.getElementById("hackerRankLink");
                userHackerrankLink.href = "https://www.hackerrank.com/";
            }
            //twitter link
            let userTwitterValue = document.getElementById("twitterText").value;
            if(userTwitterValue !=="") {
                let userTwitterLink = document.getElementById("twitterLink");
                userTwitterLink.href = "https://twitter.com/"+userTwitterValue;
            }
            else if(userTwitterValue === "") {
                let userTwitterLink = document.getElementById("twitterLink");
                userTwitterLink.href = "https://twitter.com/explore";
            }
            // medium link
            let userMediumValue = document.getElementById("mediumText").value;
            if(userMediumValue !=="") {
                let userMediumLink = document.getElementById("mediumLink");
                userMediumLink.href = "https://medium.com/@"+userMediumValue;
            }
            else if(userMediumValue === "") {
                let userMediumLink = document.getElementById("mediumLink");
                userMediumLink.href = "https://medium.com/";
            }
            // userLocation
            let userdevLocation = document.getElementById("devLocation");
            userdevLocation.innerHTML = userData.location;
            // userCompany
            let userdevcompany = document.getElementById("devcompany");
            userdevcompany.innerHTML = userData.company;
            // userLink
            let userdevLink = document.getElementById("devLink");
            userdevLink.innerHTML = userData.blog;
        }
        console.log(userData);
    }).then((err)=>{
        console.log(err , "Error");
    })
}