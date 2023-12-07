const baseUrl = 'https://pureend.backendless.app/api/data/Users';

export const registerUser = async (name, email, password) => {
    
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    });

    const result = await response.json();

    return result;
}