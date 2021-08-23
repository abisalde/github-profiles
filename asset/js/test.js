const search_input = document.querySelector('#search');
let search_value = '';

search_input.addEventListener('input', (e) => {
    console.log((search_value = e.target.value));
});

// const search = (e) => {
//     e.preventDefault();
//     const search_value = search_input.value;
//     console.log(query);
//     // window.location.href = `/search?q=${query}`;
// };
