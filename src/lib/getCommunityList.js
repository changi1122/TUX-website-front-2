export default async function getCommunityList(category, page, size) {
    const res = await fetch(`http://localhost:4001/api/community/list?${(category) ? 'type='+category+'&' : ''}page=${page - 1}&size=${size}`);
    return res.json();
} 