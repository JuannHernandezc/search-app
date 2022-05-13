export const getUser = async ( word ) => {
    const url = `https://api.github.com/users/${word}`;
    const answer = await fetch(url);
    const { login, id, avatar_url, location, followers, public_repos, following } = await answer.json();
    const userInfo = () =>{
        return {
            id: id,
            username: login,
            avatar_url: avatar_url,
            location: location,
            followers: followers,
            repositories: public_repos,
            following: following
        };
    }
    return userInfo;
}
