export default async function login(username, password) {
    const res = await fetch(`/api/auth`, {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({
            username, password
        }),
        headers: {
            "content-type": "application/json",
        },
    });

    return res;
}