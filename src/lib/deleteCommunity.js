export default async function deleteCommunity(id) {
    const res = await fetch(`/api/community/${id}`, {
        method: "DELETE",
        credentials: 'include'
    });
    
    return res;
}