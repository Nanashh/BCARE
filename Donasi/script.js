const filterTitle = document.querySelectorAll('.filter-title');
const categoryTitle = document.querySelectorAll('.category-title');
const sortTitle = document.querySelectorAll('.sort-title')
const allCategoryPosts = document.querySelectorAll('.all');

for(let i = 0; i < filterTitle.length; i++){
    filterTitle[i].addEventListener('click', filterPosts.bind(this, filterTitle[i]));
}

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

for(let i = 0; i < categoryTitle.length; i++){
    sortTitle[i].addEventListener('click', filterPosts.bind(this, sortTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < filterTitle.length; i++){
        filterTitle[i].classList.remove('active');
    }
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    for(let i = 0; i < sortTitle.length; i++){
        sortTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};




