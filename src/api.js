export const fetchUser = (username) => {
    return fetchApi(`https://api.github.com/users/${username}`);
}

export const fetchRepos = (username) => {
    return fetchApi(`https://api.github.com/users/${username}/repos`);
}

export const fetchRepo = (username, reponame) => {
    return fetchApi(`https://api.github.com/repos/${username}/${reponame}`);
}

const fetchApi = async (url) => {
    let result = {data: {}, errorMsg: ''}
    try{
        const response = await fetch(url);
        const data = await response.json();
        if(response.status === 200){
           result = {data: data,  errorMsg: '', status: 200}
        } else {
            let errorMessage = '';
            let entity = url.includes('repos') ? 'Repository' : "User"
            switch(response.status){
                case 404:
                    errorMessage = `${entity} ${data.message}`
                break;
                case 403:
                    errorMessage = `Request ${data.message}`
                break;
                case 301:
                    errorMessage = `${entity} ${data.message}`
                break;
                case 304:
                    errorMessage = `${entity} ${data.message}`
                break;
                case 422:
                    errorMessage = `Request ${data.message}`
                break;
                default:  errorMessage = `${data.message}`
            }
           result = {data: {}, errorMsg: errorMessage, status: response.status}
        }
    }
      catch(e){
        result = {data: {}, errorMsg: e}
        console.log(e)
    }
    return result
}