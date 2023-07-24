export default async function logout(dispatch) {
    const res = await fetch(`/api/auth`, {
        method: "DELETE",
        credentials: 'include',
    });

    if (res.ok) {
        dispatch({
            type: 'LOGOUT'
        });
    }
}