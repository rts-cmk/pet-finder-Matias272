export default async function userLoader(){
    const resPets = await fetch("http://localhost:3000/user");
    return resPets.json()
}