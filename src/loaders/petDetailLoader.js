export default async function petDetailLoader({ params }) {
    const id = params.petId;
    const res = await fetch(`http://localhost:3000/dogs/${id}`);
    return res.json();
}