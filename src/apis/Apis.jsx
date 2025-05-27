export const getGamesData = async () => {
    try {
        const response = await fetch('https://jsonfakery.com/games/paginated');
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`)
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('something went wrong', error)
    }
}

