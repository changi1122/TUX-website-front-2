export default async function getCurrentUser(dispatch) {
    const res = await fetch(`/api/auth`, {
        method: "GET",
        credentials: 'include'
    });
    
    if (res.ok) {
        const user = await res.json();
        dispatch({
            type: 'LOGIN',
            userId: user.id,
            username: user.username,
            nickname: user.nickname,
            role: user.role
        });
    }
}