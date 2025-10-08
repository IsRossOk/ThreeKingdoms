document.querySelectorAll('a.magnify').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); //prevent default behavior of <a> (navigate to href)
        const imgSrc = this.getAttribute('href'); //get URL of image from href
        const modal = document.createElement('div'); //new <div> to act as modal overlay
        modal.style.cssText = `
            position: fixed; top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex; align-items: center; justify-content: center;
            cursor: zoom-out; z-index: 9999;
        `;
        const img = document.createElement('img'); //new <img> for enlarged image
        img.src = imgSrc;
        img.style.maxWidth = '90%';
        img.style.maxHeight = '90%';
        modal.appendChild(img); //add image inside modal <div>
        document.body.appendChild(modal); //append modal to <body> so it appears on page

        modal.addEventListener('click', () => modal.remove()); //click event so clicking closes modal 
    });
});