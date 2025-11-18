export default async function petsLoader(){
    const resPets = await fetch("");
    return resPets.json()
}