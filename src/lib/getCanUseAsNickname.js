export default async function getCanUseAsNickname(nickname) {
    const res = await fetch(`/api/user/check/nickname?nickname=${nickname}`);
    return res.json();
} 