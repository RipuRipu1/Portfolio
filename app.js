// open the navigation from the hamburger menu

const navigation = document.querySelector('.nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navigation.classList.toggle('active');
}

// close the navigation when the link clicked

const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', function(e){
        console.log(e.target);
        navigation.classList.remove('active');
    })
});