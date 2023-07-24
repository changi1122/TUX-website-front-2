export default async function getCanUseAsUsername(username) {
    const res = await fetch(`/api/user/check/username?username=${username}`);
    return res.json();
} 