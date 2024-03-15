const BASE_URL = "http://18.191.164.25/api" 

async function login(loginObject) {
    try {
        const url =`${BASE_URL}/auth/login`;

        const response = await fetch(url, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginObject) 
        });

        if (!response.ok) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();
        
        return data;
    } catch (error) {
        throw error; 
    }
}

export default{
    login
}