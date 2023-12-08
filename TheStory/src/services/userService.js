const baseUrl = 'https://pureend.backendless.app/api/users';

export const registerUser = async (name, email, password) => {
    
    const response = await fetch(baseUrl + '/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    });

    const result = await response.json();

    return result;
};

export const loginUser = async (login, password) => {

    const response = await fetch(baseUrl + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({login, password})
    });

    const result = await response.json();

    return result;
}