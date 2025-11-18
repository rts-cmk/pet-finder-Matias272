export default async function petsLoader(){
    const resPets = await fetch("http://localhost:3000/dogs");
    return resPets.json()
}
