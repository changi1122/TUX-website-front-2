export default async function getCommunity(id) {
    const res = await fetch(`http://localhost:4001/api/community/${id}`);
    return res.json();
} 