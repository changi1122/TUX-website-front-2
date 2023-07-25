export default async function deleteCmComment(id, commentId) {
    const res = await fetch(`/api/community/${id}/comment/${commentId}`, {
        method: "DELETE",
        credentials: 'include'
    });
    
    return res;
}