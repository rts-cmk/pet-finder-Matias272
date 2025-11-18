export default async function petsLoader(){
    const res = await fetch("http://localhost:3000/dogs");
    return res.json()
}
