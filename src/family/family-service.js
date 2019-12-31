import axios from 'axios';

const BaseUrl = 'http://localhost:5000/family';

export async function getFamily() {
    return await axios.get(BaseUrl);
}

export async function deleteFamilyById(id) {
    return await axios.delete(`${BaseUrl}/${id}`)
}

