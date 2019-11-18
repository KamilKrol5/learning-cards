const randomUserFetched = randomUser => ({
   type: "RANDOM_USER_FETCHED",
    randomUser
});

export const fetchRandomUser = () => (dispatch) => {
    fetch("https://randomuser.me/api/?format=json")
        .then(res => res.json())
        .then(json => dispatch(randomUserFetched(json.results)))
};