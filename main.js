let filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterName);

function filterName(e) {
    e.preventDefault();
    //GEt value of input 
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    //Get the ul
    let ul = document.getElementById('names');
    //Get lis from ul
    let li = ul.querySelectorAll('li.collection-item')
        //loop through collection item lis
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        //if matched 
        if (a.innerHTML.toLocaleUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}