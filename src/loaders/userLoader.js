export default async function userLoader(){
    const res = await fetch("http://localhost:3000/user");
    return res.json()
}