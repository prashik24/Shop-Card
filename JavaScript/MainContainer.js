
function changeBike(image, desc, price, mrp, clickedThumb) {
    // Find the container of the clicked thumbnail
    const container = clickedThumb.closest('.container');

    // Update only elements inside this container
    const mainImage = container.querySelector('.main-img');
    const descElem = container.querySelector('.desc');
    const priceElem = container.querySelector('.price');
    const mrpElem = container.querySelector('.mrp-value');

    // Update content dynamically
    mainImage.style.backgroundImage = `url(${image})`;
    descElem.innerText = desc;
    priceElem.innerHTML = price; // innerHTML so <sup> stays
    mrpElem.innerText = mrp;

    // Remove active class from all thumbnails in this container
    container.querySelectorAll('.thumb').forEach(thumb => {
        thumb.classList.remove('active');
    });

    // Add active class to the clicked thumbnail
    clickedThumb.classList.add('active');}