export default async function postUser({ username, password, email, nickname, department, studentNumber, phoneNumber }) {
    const res = await fetch(`/api/user`, {
        method: "POST",
        body: JSON.stringify({
            username, password, email, nickname, department, studentNumber, phoneNumber
        }),
        headers: {
            "content-type": "application/json",
        },
    });
    
    if (res.ok) {
        return "";
    } else {
        return "회원가입 중 오류가 발생하였습니다."
    }
}