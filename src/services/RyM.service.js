import { API_RM } from './../constants/API.constants';
class rickandmorty {


    async getCharacters() {
    const response = await fetch(API_RM.CHARACTERS());
  
    return response.json();
    
    }

    async getCharacterById(id) {
        const response = await fetch(API_RM.CAHARACTER_BY_ID(id));
        return response.json();
        }
}

export default new rickandmorty()