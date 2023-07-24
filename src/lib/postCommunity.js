export default async function postCommunity(type, title, body) {
    const res = await fetch(`/api/community?type=${type}`, {
        method: "POST",
        body: JSON.stringify({
            title, body
        }),
        headers: {
            "content-type": "application/json",
        },
    });
    
    return res;
}