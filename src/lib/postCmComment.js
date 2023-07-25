export default async function postCmComment(id, body) {
    const res = await fetch(`/api/community/${id}/comment`, {
        method: "POST",
        body: JSON.stringify({
            body
        }),
        headers: {
            "content-type": "application/json",
        },
    });
    
    return res;
}