/**
 * Akcja wywoływana po pozytywnym odczycie z API
 */
const randomUserFetched = randomUser => ({
    type: "RANDOM_USER_FETCHED",
    randomUser
});

/**
 * Akcja odpowiedzialna za pobranie wartości z API i po uzyskaniu wyniku wywołanie następnej akcji
 */
export const fetchRandomUser = () => (dispatch) => {
    fetch("https://randomuser.me/api/?format=json")
        .then(res => res.json())
        .then(json => dispatch(randomUserFetched(json.results)))
};