export default async function getCommunityList(category, page, size, query) {
    if (category) {
        const res = await fetch(`http://localhost:4001/api/community/list/category?${(category) ? 'type='+category+'&' : ''}page=${page - 1}&size=${size}&${(query) ? "&query="+query : ''}`);
        return res.json();
    } else {
        const res = await fetch(`http://localhost:4001/api/community/list?page=${page - 1}&size=${size}&${(query) ? "&query="+query : ''}`);
        return res.json();
    }
} 