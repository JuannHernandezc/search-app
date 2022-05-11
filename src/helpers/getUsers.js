export const getUsers = async ( word ) => {
    const url = `https://api.github.com/search/users?q=${word}`;
    console.log(url);
    const answer = await fetch(url);
    const { items } = await answer.json();
    const users = items.map( user => {
        return {
            id: user.id,
            username: user.login,
            avatar_url: user.avatar_url
        };
    });
    const usersModified = users.splice(0,10);
    return usersModified;
}