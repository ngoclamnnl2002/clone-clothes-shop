//MOBILE BUTTON
var header = document.querySelector('.header-on-mobile');
var mobileMenu = document.querySelector('.mobile-menu-icon');
var mobileClose = document.querySelector('.mobile-close-icon');
var headerHeight = header.clientHeight;
//MOBILE BUTTON -- Open/Close menu when you click
mobileMenu.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if(isClose) {
        header.style.height = "700px";
        mobileMenu.style.display = "none";
        mobileClose.style.display = 'block';
        header.style.background = "rgba(17, 14, 14, 0.9)";
    }
    else {
        header.style.height = null;
    }
}
//MOBILE BUTTON -- close when click on close icon
mobileClose.onclick = function () {
    header.style.height = null;
    mobileClose.style.display = "none";
    mobileMenu.style.display = 'block';
    header.style.background = "#404040";
}

/*CONTROL SLIDE*/
var slideIndex = 0;
function showDots() {
    const slide = document.querySelector('.slide');
    if(slide) {
        var slideImages = document.querySelectorAll('.slide-image');
        for (var i = 0; i < slideImages.length; i++) {
            slideImages[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slideImages.length) {slideIndex = 1}
        slideImages[slideIndex-1].style.display = "block";  
        setTimeout(showDots, 6000)
    }
}
showDots();

/*SCROLL TO TOP*/
var btnScrollTop = document.querySelector('.scroll-to-top');
window.onscroll = function() {
   if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        btnScrollTop.style.display = "block";
   }
   else {
        btnScrollTop.style.display = "none";
   }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* CLOSE - OPEN TOOLBAR */
function toolbar() {
    const toolbar = document.querySelector('.toolbar');
    if(toolbar) {
        var toolbarOption = document.querySelector('.toolbar-option');
        var toolbarOptionList = document.querySelector('.toolbar-option-list');
        var screen = document.querySelector('.App');
        function showToolbarOption() {
            toolbarOptionList.classList.toggle('active');
        }
        function closeToolbarOption() {
            toolbarOptionList.classList.remove('active');
        }
        toolbarOption.addEventListener('click', showToolbarOption);
        screen.addEventListener('click', closeToolbarOption);
        toolbarOption.onclick = (e) => (e.stopPropagation());
    }
}
toolbar();

/*PRODUCTS*/
const products = [
    {
        name: 'Gigi Dress',
        price: '590,000đ',
        img: './images/products/Gigi Dress-1.jpeg',
        overlay: './images/products/Gigi Dress-2.jpeg'
    },
    {
        name: 'Karina Dress',
        price: '570,000đ',
        img: './images/products/Karina Dress-1.jpeg',
        overlay: './images/products/Karina Dress-2.jpeg'
    },
    {
        name: 'Vincy Dress',
        price: '590,000đ',
        img: './images/products/Vincy Dress-1.jpeg',
        overlay: './images/products/Vincy Dress-2.jpeg'
    },
    {
        name: 'Blink Dress',
        price: '590,000đ',
        img: './images/products/Blink Dress-1.jpeg',
        overlay: './images/products/Blink Dress-2.jpeg'
    },
    {
        name: 'Long Checked Dress',
        price: '540,000đ',
        img: './images/products/Long Checked Dress-1.jpeg',
        overlay: './images/products/Long Checked Dress-2.jpeg'
    },
    {
        name: 'Dottie Top',
        price: '380,000đ',
        img: './images/products/Dottie Top-1.jpeg',
        overlay: './images/products/Dottie Top-2.jpeg'
    },
    {
        name: 'Barbie Dress',
        price: '690,000đ',
        img: './images/products/Barbie Dress-1.jpeg',
        overlay: './images/products/Barbie Dress-2.jpeg'
    },
    {
        name: 'White Candy Dress',
        price: '590,000đ',
        img: './images/products/White Candy Dress-1.jpeg',
        overlay: './images/products/White Candy Dress-2.jpeg'
    },
    {
        name: 'Monica Top',
        price: '440,000đ',
        img: './images/products/Monica Top-1.jpeg',
        overlay: './images/products/Monica Top-2.jpeg'
    },
    {
        name: 'Monica Skirt',
        price: '370,000đ',
        img: './images/products/Monica Skirt-1.jpeg',
        overlay: './images/products/Monica Skirt-2.jpeg'
    },
    {
        name: 'Monica Dress',
        price: '590,000đ',
        img: './images/products/Monica Dress-1.jpeg',
        overlay: './images/products/Monica Dress-2.jpeg'
    },
    {
        name: 'Dreamer Top',
        price: '390,000đ',
        img: './images/products/Dreamer Top-1.jpeg',
        overlay: './images/products/Dreamer Top-2.jpeg'
    },
    {
        name: 'Dona Daisy Top',
        price: '310,000đ',
        img: './images/products/Dona Daisy Top-1.jpeg',
        overlay: './images/products/Dona Daisy Top-2.jpeg'
    },
    {
        name: 'Mia Rose Top',
        price: '420,000đ',
        img: './images/products/Mia Rose Top-1.jpeg',
        overlay: './images/products/Mia Rose Top-2.jpeg'
    },
    {
        name: 'Blue Dana Top',
        price: '390,000đ',
        img: './images/products/Blue Dana Top-1.jpeg',
        overlay: './images/products/Blue Dana Top-2.jpeg'
    },
    {
        name: 'White Kylie Top',
        price: '420,000đ',
        img: './images/products/White Kylie Top-1.jpeg',
        overlay: './images/products/White Kylie Top-2.jpeg'
    },
    {
        name: 'Dona Furry Top',
        price: '310,000đ',
        img: './images/products/Dona Furry Top-1.jpeg',
        overlay: './images/products/Dona Furry Top-2.jpeg'
    },
    {
        name: 'Green Dona Top',
        price: '310,000đ',
        img: './images/products/Green Dona Top-1.jpeg',
        overlay: './images/products/Green Dona Top-2.jpeg'
    },
    {
        name: 'Lava Dress',
        price: '510,000đ',
        img: './images/products/Lava Dress-1.jpeg',
        overlay: './images/products/Lava Dress-2.jpeg'
    },
    {
        name: 'Light Blue Mary Dress',
        price: '490,000đ',
        img: './images/products/Light Blue Mary Dress-1.jpeg',
        overlay: './images/products/Light Blue Mary Dress-2.jpeg'
    },
    {
        name: 'Red Velvet Dress',
        price: '490,000đ',
        img: './images/products/Red Velvet Dress-1.jpeg',
        overlay: './images/products/Red Velvet Dress-2.jpeg'
    },
    {
        name: 'Darling Dress',
        price: '490,000đ',
        img: './images/products/Darling Dress-1.jpeg',
        overlay: './images/products/Darling Dress-2.jpeg'
    },
    {
        name: 'Darcie Dress',
        price: '520,000đ',
        img: './images/products/Darcie Dress-1.jpeg',
        overlay: './images/products/Darcie Dress-2.jpeg'
    },
    {
        name: 'Brown Lyla Skort',
        price: '350,000đ',
        img: './images/products/Brown Lyla Skort-1.jpeg',
        overlay: './images/products/Brown Lyla Skort-2.jpeg'
    },
    {
        name: 'Carol Top',
        price: '390,000đ',
        img: './images/products/Carol Top-1.jpeg',
        overlay: './images/products/Carol Top-2.jpeg'
    },
    {
        name: 'Icy Top',
        price: '470,000đ',
        img: './images/products/Icy Top-1.jpeg',
        overlay: './images/products/Icy Top-2.jpeg'
    },
    {
        name: 'Golden Dress',
        price: '660,000đ',
        img: './images/products/Golden Dress-1.jpeg',
        overlay: './images/products/Golden Dress-2.jpeg'
    },
    {
        name: 'Ruby Top',
        price: '390,000đ',
        img: './images/products/Ruby Top-1.jpeg',
        overlay: './images/products/Ruby Top-2.jpeg'
    },
    {
        name: 'Nikki Top',
        price: '420,000đ',
        img: './images/products/Nikki Top-1.jpeg',
        overlay: './images/products/Nikki Top-2.jpeg'
    },
    {
        name: 'Cherry Top',
        price: '380,000đ',
        img: './images/products/Cherry Top-1.jpeg',
        overlay: './images/products/Cherry Top-2.jpeg'
    },
    {
        name: 'Blue Eira Dress',
        price: '520,000đ',
        img: './images/products/Blue Eira Dress-1.jpeg',
        overlay: './images/products/Blue Eira Dress-2.jpeg'
    },
    {
        name: 'Furla Top',
        price: '390,000đ',
        img: './images/products/Furla Top-1.jpeg',
        overlay: './images/products/Furla Top-2.jpeg'
    },
    {
        name: 'Furla Skirt',
        price: '350,000đ',
        img: './images/products/Furla Skirt-1.jpeg',
        overlay: './images/products/Furla Skirt-2.jpeg'
    },
    {
        name: 'Bubble Dress',
        price: '640,000đ',
        img: './images/products/Bubble Dress-1.jpeg',
        overlay: './images/products/Bubble Dress-2.jpeg'
    },
    {
        name: 'Mori Dress',
        price: '590,000đ',
        img: './images/products/Mori Dress-1.jpeg',
        overlay: './images/products/Mori Dress-2.jpeg'
    },
    {
        name: 'Vicky Top',
        price: '390,000đ',
        img: './images/products/Vicky Top-1.jpeg',
        overlay: './images/products/Vicky Top-2.jpeg'
    },
    {
        name: 'Lyla Skort',
        price: '350,000đ',
        img: './images/products/Lyla Skort-1.jpeg',
        overlay: './images/products/Lyla Skort-2.jpeg'
    },
    {
        name: 'Golden Top',
        price: '390,000đ',
        img: './images/products/Golden Top-1.jpeg',
        overlay: './images/products/Golden Top-2.jpeg'
    },
    {
        name: 'Rita Top',
        price: '540,000đ',
        img: './images/products/Rita Top-1.jpeg',
        overlay: './images/products/Rita Top-2.jpeg'
    },
    {
        name: 'Skylar Dress',
        price: '480,000đ',
        img: './images/products/Skylar Dress-1.jpeg',
        overlay: './images/products/Skylar Dress-2.jpeg'
    },
    {
        name: 'Red Callie Dress',
        price: '510,000đ',
        img: './images/products/Red Callie Dress-1.jpeg',
        overlay: './images/products/Red Callie Dress-2.jpeg'
    },
    {
        name: 'Jia Top',
        price: '350,000đ',
        img: './images/products/Jia Top-1.jpeg',
        overlay: './images/products/Jia Top-2.jpeg'
    },
    {
        name: 'Doris Top',
        price: '380,000đ',
        img: './images/products/Doris Top-1.jpeg',
        overlay: './images/products/Doris Top-2.jpeg'
    },
    {
        name: 'Eris Top',
        price: '380,000đ',
        img: './images/products/Eris Top-1.jpeg',
        overlay: './images/products/Eris Top-2.jpeg'
    },
    {
        name: 'Caven Top',
        price: '390,000đ',
        img: './images/products/Caven Top-1.jpeg',
        overlay: './images/products/Caven Top-2.jpeg'
    },
    {
        name: 'Olivia Dress',
        price: '460,000đ',
        img: './images/products/Olivia Dress-1.jpeg',
        overlay: './images/products/Olivia Dress-2.jpeg'
    },
    {
        name: 'Janet Top',
        price: '240,000đ',
        img: './images/products/Janet Top-1.jpeg',
        overlay: './images/products/Janet Top-2.jpeg'
    },
    {
        name: 'Susan Top',
        price: '270,000đ',
        img: './images/products/Susan Top-1.jpeg',
        overlay: './images/products/Susan Top-2.jpeg'
    },
    {
        name: 'Red Velvet Dress',
        price: '610,000đ',
        img: './images/best-seller/Red Velvet Dress-1.jpeg',
        overlay: './images/best-seller/Red Velvet Dress-2.jpeg'
    },
    {
        name: 'Lily Dress',
        price: '620,000đ',
        img: './images/best-seller/Lily Dress-1.jpeg',
        overlay: './images/best-seller/Lily Dress-2.jpeg'
    },
    {
        name: 'Candy Dress',
        price: '450,000đ',
        img: './images/best-seller/Candy Dress-1.jpeg',
        overlay: './images/best-seller/Candy Dress-2.jpeg'
    },
    {
        name: 'Blue Eira Dress',
        price: '520,000đ',
        img: './images/best-seller/Blue Eira Dress-1.jpeg',
        overlay: './images/best-seller/Blue Eira Dress-2.jpeg'
    },
    {
        name: 'Hazel Dress',
        price: '550,000đ',
        img: './images/best-seller/Hazel Dress-1.jpeg',
        overlay: './images/best-seller/Hazel Dress-2.jpeg'
    },
    {
        name: 'Lauren Dress',
        price: '450,000đ',
        img: './images/best-seller/Lauren Dress-1.jpeg',
        overlay: './images/best-seller/Lauren Dress-2.jpeg'
    },
    {
        name: 'Joly Dress',
        price: '470,000đ',
        img: './images/best-seller/Joly Dress-1.jpeg',
        overlay: './images/best-seller/Joly Dress-2.jpeg'
    },
    {
        name: 'Furla Top',
        price: '390,000đ',
        img: './images/best-seller/Furla Top-1.jpeg',
        overlay: './images/best-seller/Furla Top-2.jpeg'
    },
    {
        name: 'Evelyn Top',
        price: '320,000đ',
        img: './images/best-seller/Evelyn Top-1.jpeg',
        overlay: './images/best-seller/Evelyn Top-2.jpeg'
    },
    {
        name: 'Dona Top',
        price: '310,000đ',
        img: './images/best-seller/Dona Top-1.jpeg',
        overlay: './images/best-seller/Dona Top-2.jpeg'
    },
    {
        name: 'Carol Top',
        price: '390,000đ',
        img: './images/best-seller/Carol Top-1.jpeg',
        overlay: './images/best-seller/Carol Top-2.jpeg'
    },
    {
        name: 'Adelina Dress',
        price: '640,000đ',
        img: './images/best-seller/Adelina Dress-1.jpeg',
        overlay: './images/best-seller/Adelina Dress-2.jpeg'
    },
    {
        name: 'Caven Top',
        price: '390,000đ',
        img: './images/best-seller/Caven Top-1.jpeg',
        overlay: './images/best-seller/Caven Top-2.jpeg'
    },
    {
        name: 'Mori Dress',
        price: '590,000đ',
        img: './images/best-seller/Mori Dress-1.jpeg',
        overlay: './images/best-seller/Mori Dress-2.jpeg'
    },
    {
        name: 'Nikki Top',
        price: '420,000đ',
        img: './images/best-seller/Nikki Top-1.jpeg',
        overlay: './images/best-seller/Nikki Top-2.jpeg'
    },
    {
        name: 'Darcie Top',
        price: '360,000đ',
        img: './images/best-seller/Darcie Top-1.jpeg',
        overlay: './images/best-seller/Darcie Top-2.jpeg'
    },
    {
        name: 'Furla Skirt',
        price: '350,000đ',
        img: './images/best-seller/Furla Skirt-1.jpeg',
        overlay: './images/best-seller/Furla Skirt-2.jpeg'
    },
    {
        name: 'Golden Dress',
        price: '660,000đ',
        img: './images/best-seller/Golden Dress-1.jpeg',
        overlay: './images/best-seller/Golden Dress-2.jpeg'
    },
    {
        name: 'Icy Top',
        price: '470,000đ',
        img: './images/best-seller/Icy Top-1.jpeg',
        overlay: './images/best-seller/Icy Top-2.jpeg'
    },
    {
        name: 'Rita Top',
        price: '540,000đ',
        img: './images/best-seller/Rita Top-1.jpeg',
        overlay: './images/best-seller/Rita Top-2.jpeg'
    },
    {
        name: 'Red Callie Dress',
        price: '510,000đ',
        img: './images/best-seller/Red Callie Dress-1.jpeg',
        overlay: './images/best-seller/Red Callie Dress-2.jpeg'
    },
    {
        name: 'Jia Top',
        price: '350,000đ',
        img: './images/best-seller/Jia Top-1.jpeg',
        overlay: './images/best-seller/Jia Top-2.jpeg'
    },
    {
        name: 'Vicky Top',
        price: '390,000đ',
        img: './images/best-seller/Vicky Top-1.jpeg',
        overlay: './images/best-seller/Vicky Top-2.jpeg'
    },
    {
        name: 'Bubble Dress',
        price: '640,000đ',
        img: './images/best-seller/Bubble Dress-1.jpeg',
        overlay: './images/best-seller/Bubble Dress-2.jpeg'
    },
    {
        name: 'Light Blue Mary Dres',
        price: '490,000đ',
        img: './images/collection-fall-winter/Light Blue Mary Dress-1.jpeg',
        overlay: './images/collection-fall-winter/Light Blue Mary Dress-2.jpeg'
    },
    {
        name: 'Mori Dress',
        price: '590,000đ',
        img: './images/collection-fall-winter/Mori Dress-1.jpeg',
        overlay: './images/collection-fall-winter/Mori Dress-2.jpeg'
    },
    {
        name: 'Cherry Top',
        price: '380,000đ',
        img: './images/collection-fall-winter/Cherry Top-1.jpeg',
        overlay: './images/collection-fall-winter/Cherry Top-2.jpeg'
    },
    {
        name: 'Skylar Dress',
        price: '480,000đ',
        img: './images/collection-fall-winter/Skylar Dress-1.jpeg',
        overlay: './images/collection-fall-winter/Skylar Dress-2.jpeg'
    },
    {
        name: 'Golden Dress',
        price: '660,000đ',
        img: './images/collection-fall-winter/Golden Dress-1.jpeg',
        overlay: './images/collection-fall-winter/Golden Dress-2.jpeg'
    },
    {
        name: 'Ruby Top',
        price: '390,000đ',
        img: './images/collection-fall-winter/Ruby Top-1.jpeg',
        overlay: './images/collection-fall-winter/Ruby Top-2.jpeg'
    },
    {
        name: 'Blue Eira Dress',
        price: '520,000đ',
        img: './images/collection-fall-winter/Blue Eira Dress-1.jpeg',
        overlay: './images/collection-fall-winter/Blue Eira Dress-2.jpeg'
    },
    {
        name: 'Rita Top',
        price: '540,000đ',
        img: './images/collection-fall-winter/Rita Top-1.jpeg',
        overlay: './images/collection-fall-winter/Rita Top-2.jpeg'
    },
    {
        name: 'Golden Top',
        price: '390,000đ',
        img: './images/collection-fall-winter/Golden Top-1.jpeg',
        overlay: './images/collection-fall-winter/Golden Top-2.jpeg'
    },
    {
        name: 'Vicky Top',
        price: '390,000đ',
        img: './images/collection-fall-winter/Vicky Top-1.jpeg',
        overlay: './images/collection-fall-winter/Vicky Top-2.jpeg'
    },
    {
        name: 'Red Callie Dress',
        price: '510,000đ',
        img: './images/collection-fall-winter/Red Callie Dress-1.jpeg',
        overlay: './images/collection-fall-winter/Red Callie Dress-2.jpeg'
    },
    {
        name: 'Bubble Dress',
        price: '640,000đ',
        img: './images/collection-fall-winter/Bubble Dress-1.jpeg',
        overlay: './images/collection-fall-winter/Bubble Dress-2.jpeg'
    },
    {
        name: 'Icy Top',
        price: '470,000đ',
        img: './images/collection-fall-winter/Icy Top-1.jpeg',
        overlay: './images/collection-fall-winter/Icy Top-2.jpeg'
    },
    {
        name: 'Jia Top',
        price: '350,000đ',
        img: './images/collection-fall-winter/Jia Top-1.jpeg',
        overlay: './images/collection-fall-winter/Jia Top-2.jpeg'
    },
    {
        name: 'Furla Top',
        price: '390,000đ',
        img: './images/collection-fall-winter/Furla Top-1.jpeg',
        overlay: './images/collection-fall-winter/Furla Top-2.jpeg'
    },
    {
        name: 'Furla Skirt',
        price: '350,000đ',
        img: './images/collection-fall-winter/Furla Skirt-1.jpeg',
        overlay: './images/collection-fall-winter/Furla Skirt-2.jpeg'
    },
    {
        name: 'Carol Top',
        price: '390,000đ',
        img: './images/collection-fall-winter/Carol Top-1.jpeg',
        overlay: './images/collection-fall-winter/Carol Top-2.jpeg'
    },
    {
        name: 'Darcie Top',
        price: '360,000đ',
        img: './images/collection-fall-winter/Darcie Top-1.jpeg',
        overlay: './images/collection-fall-winter/Darcie Top-2.jpeg'
    },
    {
        name: 'Lyla Skort',
        price: '390,000đ',
        img: './images/collection-fall-winter/Lyla Skort-1.jpeg',
        overlay: './images/collection-fall-winter/Lyla Skort-2.jpeg'
    },
    {
        name: 'Brown Lyla Skort',
        price: '350,000đ',
        img: './images/collection-fall-winter/Brown Lyla Skort-1.jpeg',
        overlay: './images/collection-fall-winter/Brown Lyla Skort-2.jpeg'
    },   
    {
        name: 'Light Blue Mary Dress',
        price: '490,000đ',
        img: './images/products-winter/Light Blue Mary Dress-1.jpeg',
        overlay: './images/products-winter/Light Blue Mary Dress-2.jpeg'
    },
    {
        name: 'Mori Dress',
        price: '590,000đ',
        img: './images/products-winter/Mori Dress-1.jpeg',
        overlay: './images/products-winter/Mori Dress-2.jpeg'
    },
    {
        name: 'Cherry Top',
        price: '380,000đ',
        img: './images/products-winter/Cherry Top-1.jpeg',
        overlay: './images/products-winter/Cherry Top-2.jpeg'
    },
    {
        name: 'Ruby Top',
        price: '390,000đ',
        img: './images/products-winter/Ruby Top-1.jpeg',
        overlay: './images/products-winter/Ruby Top-2.jpeg'
    },
    {
        name: 'Skylar Dress',
        price: '480,000đ',
        img: './images/products-winter/Skylar Dress-1.jpeg',
        overlay: './images/products-winter/Skylar Dress-2.jpeg'
    },
    {
        name: 'Golden Dress',
        price: '660,000đ',
        img: './images/products-winter/Golden Dress-1.jpeg',
        overlay: './images/products-winter/Golden Dress-2.jpeg'
    },
    {
        name: 'Ruby Top',
        price: '390,000đ',
        img: './images/best-seller/Ruby Top-1.jpeg',
        overlay: './images/best-seller/Ruby Top-2.jpeg'
    },
    {
        name: 'Golden Top',
        price: '390,000đ',
        img: './images/best-seller/Golden Top-1.jpeg',
        overlay: './images/best-seller/Golden Top-2.jpeg'
    },
    {
        name: 'Skylar Dress',
        price: '480,000đ',
        img: './images/best-seller/Skylar Dress-1.jpeg',
        overlay: './images/best-seller/Skylar Dress-2.jpeg'
    },
    {
        name: 'Cherry Top',
        price: '380,000đ',
        img: './images/best-seller/Cherry Top-1.jpeg',
        overlay: './images/best-seller/Cherry Top-2.jpeg'
    },
    {
        name: 'Light Blue Mary Dress',
        price: '490,000đ',
        img: './images/best-seller/Light Blue Mary Dress-1.jpeg',
        overlay: './images/best-seller/Light Blue Mary Dress-2.jpeg'
    },
    {
        name: 'Vincy Dress',
        price: '590,000đ',
        img: './images/products/Vincy Dress-1.jpeg',
        overlay: './images/products/Vincy Dress-2.jpeg'
    },
    {
        name: 'Blink Dress',
        price: '590,000đ',
        img: './images/products/Blink Dress-1.jpeg',
        overlay: './images/products/Blink Dress-2.jpeg'
    },
    {
        name: 'Long Checked Dress',
        price: '540,000đ',
        img: './images/products/Long Checked Dress-1.jpeg',
        overlay: './images/products/Long Checked Dress-2.jpeg'
    },
    {
        name: 'Dottie Top',
        price: '380,000đ',
        img: './images/products/Dottie Top-1.jpeg',
        overlay: './images/products/Dottie Top-2.jpeg'
    },
    {
        name: 'Barbie Dress',
        price: '690,000đ',
        img: './images/products/Barbie Dress-1.jpeg',
        overlay: './images/products/Barbie Dress-2.jpeg'
    },
    {
        name: 'White Candy Dress',
        price: '590,000đ',
        img: './images/products/White Candy Dress-1.jpeg',
        overlay: './images/products/White Candy Dress-2.jpeg'
    },
    {
        name: 'Monica Top',
        price: '440,000đ',
        img: './images/products/Monica Top-1.jpeg',
        overlay: './images/products/Monica Top-2.jpeg'
    },
    {
        name: 'Monica Skirt',
        price: '370,000đ',
        img: './images/products/Monica Skirt-1.jpeg',
        overlay: './images/products/Monica Skirt-2.jpeg'
    },
    {
        name: 'Monica Dress',
        price: '590,000đ',
        img: './images/products/Monica Dress-1.jpeg',
        overlay: './images/products/Monica Dress-2.jpeg'
    },
    {
        name: 'Dreamer Top',
        price: '390,000đ',
        img: './images/products/Dreamer Top-1.jpeg',
        overlay: './images/products/Dreamer Top-2.jpeg'
    },
    {
        name: 'Dona Daisy Top',
        price: '310,000đ',
        img: './images/products/Dona Daisy Top-1.jpeg',
        overlay: './images/products/Dona Daisy Top-2.jpeg'
    },
    {
        name: 'Mia Rose Top',
        price: '420,000đ',
        img: './images/products/Mia Rose Top-1.jpeg',
        overlay: './images/products/Mia Rose Top-2.jpeg'
    },
    {
        name: 'Blue Dana Top',
        price: '390,000đ',
        img: './images/products/Blue Dana Top-1.jpeg',
        overlay: './images/products/Blue Dana Top-2.jpeg'
    },
    {
        name: 'White Kylie Top',
        price: '420,000đ',
        img: './images/products/White Kylie Top-1.jpeg',
        overlay: './images/products/White Kylie Top-2.jpeg'
    },
    {
        name: 'Dona Furry Top',
        price: '310,000đ',
        img: './images/products/Dona Furry Top-1.jpeg',
        overlay: './images/products/Dona Furry Top-2.jpeg'
    },
    {
        name: 'Green Dona Top',
        price: '310,000đ',
        img: './images/products/Green Dona Top-1.jpeg',
        overlay: './images/products/Green Dona Top-2.jpeg'
    },
    {
        name: 'Lava Dress',
        price: '510,000đ',
        img: './images/products/Lava Dress-1.jpeg',
        overlay: './images/products/Lava Dress-2.jpeg'
    },
    {
        name: 'Light Blue Mary Dress',
        price: '490,000đ',
        img: './images/products/Light Blue Mary Dress-1.jpeg',
        overlay: './images/products/Light Blue Mary Dress-2.jpeg'
    },
    {
        name: 'Red Velvet Dress',
        price: '490,000đ',
        img: './images/products/Red Velvet Dress-1.jpeg',
        overlay: './images/products/Red Velvet Dress-2.jpeg'
    },
    {
        name: 'Darling Dress',
        price: '490,000đ',
        img: './images/products/Darling Dress-1.jpeg',
        overlay: './images/products/Darling Dress-2.jpeg'
    },
    {
        name: 'Darcie Dress',
        price: '520,000đ',
        img: './images/products/Darcie Dress-1.jpeg',
        overlay: './images/products/Darcie Dress-2.jpeg'
    },
];

/*PRODUCTS BEST SELLER*/
const productBestSeller = [
    {
        name: 'Red Velvet Dress',
        price: '610,000đ',
        img: './images/best-seller/Red Velvet Dress-1.jpeg',
        overlay: './images/best-seller/Red Velvet Dress-2.jpeg'
    },
    {
        name: 'Lily Dress',
        price: '620,000đ',
        img: './images/best-seller/Lily Dress-1.jpeg',
        overlay: './images/best-seller/Lily Dress-2.jpeg'
    },
    {
        name: 'Candy Dress',
        price: '450,000đ',
        img: './images/best-seller/Candy Dress-1.jpeg',
        overlay: './images/best-seller/Candy Dress-2.jpeg'
    },
    {
        name: 'Blue Eira Dress',
        price: '520,000đ',
        img: './images/best-seller/Blue Eira Dress-1.jpeg',
        overlay: './images/best-seller/Blue Eira Dress-2.jpeg'
    },
    {
        name: 'Hazel Dress',
        price: '550,000đ',
        img: './images/best-seller/Hazel Dress-1.jpeg',
        overlay: './images/best-seller/Hazel Dress-2.jpeg'
    },
    {
        name: 'Lauren Dress',
        price: '450,000đ',
        img: './images/best-seller/Lauren Dress-1.jpeg',
        overlay: './images/best-seller/Lauren Dress-2.jpeg'
    },
    {
        name: 'Joly Dress',
        price: '470,000đ',
        img: './images/best-seller/Joly Dress-1.jpeg',
        overlay: './images/best-seller/Joly Dress-2.jpeg'
    },
    {
        name: 'Furla Top',
        price: '390,000đ',
        img: './images/best-seller/Furla Top-1.jpeg',
        overlay: './images/best-seller/Furla Top-2.jpeg'
    },
    {
        name: 'Evelyn Top',
        price: '320,000đ',
        img: './images/best-seller/Evelyn Top-1.jpeg',
        overlay: './images/best-seller/Evelyn Top-2.jpeg'
    },
    {
        name: 'Dona Top',
        price: '310,000đ',
        img: './images/best-seller/Dona Top-1.jpeg',
        overlay: './images/best-seller/Dona Top-2.jpeg'
    },
    {
        name: 'Carol Top',
        price: '390,000đ',
        img: './images/best-seller/Carol Top-1.jpeg',
        overlay: './images/best-seller/Carol Top-2.jpeg'
    },
    {
        name: 'Adelina Dress',
        price: '640,000đ',
        img: './images/best-seller/Adelina Dress-1.jpeg',
        overlay: './images/best-seller/Adelina Dress-2.jpeg'
    },
    {
        name: 'Caven Top',
        price: '390,000đ',
        img: './images/best-seller/Caven Top-1.jpeg',
        overlay: './images/best-seller/Caven Top-2.jpeg'
    },
    {
        name: 'Mori Dress',
        price: '590,000đ',
        img: './images/best-seller/Mori Dress-1.jpeg',
        overlay: './images/best-seller/Mori Dress-2.jpeg'
    },
    {
        name: 'Nikki Top',
        price: '420,000đ',
        img: './images/best-seller/Nikki Top-1.jpeg',
        overlay: './images/best-seller/Nikki Top-2.jpeg'
    },
    {
        name: 'Darcie Top',
        price: '360,000đ',
        img: './images/best-seller/Darcie Top-1.jpeg',
        overlay: './images/best-seller/Darcie Top-2.jpeg'
    },
    {
        name: 'Furla Skirt',
        price: '350,000đ',
        img: './images/best-seller/Furla Skirt-1.jpeg',
        overlay: './images/best-seller/Furla Skirt-2.jpeg'
    },
    {
        name: 'Golden Dress',
        price: '660,000đ',
        img: './images/best-seller/Golden Dress-1.jpeg',
        overlay: './images/best-seller/Golden Dress-2.jpeg'
    },
    {
        name: 'Icy Top',
        price: '470,000đ',
        img: './images/best-seller/Icy Top-1.jpeg',
        overlay: './images/best-seller/Icy Top-2.jpeg'
    },
    {
        name: 'Rita Top',
        price: '540,000đ',
        img: './images/best-seller/Rita Top-1.jpeg',
        overlay: './images/best-seller/Rita Top-2.jpeg'
    },
    {
        name: 'Red Callie Dress',
        price: '510,000đ',
        img: './images/best-seller/Red Callie Dress-1.jpeg',
        overlay: './images/best-seller/Red Callie Dress-2.jpeg'
    },
    {
        name: 'Jia Top',
        price: '350,000đ',
        img: './images/best-seller/Jia Top-1.jpeg',
        overlay: './images/best-seller/Jia Top-2.jpeg'
    },
    {
        name: 'Vicky Top',
        price: '390,000đ',
        img: './images/best-seller/Vicky Top-1.jpeg',
        overlay: './images/best-seller/Vicky Top-2.jpeg'
    },
    {
        name: 'Bubble Dress',
        price: '640,000đ',
        img: './images/best-seller/Bubble Dress-1.jpeg',
        overlay: './images/best-seller/Bubble Dress-2.jpeg'
    },
    {
        name: 'Ruby Top',
        price: '390,000đ',
        img: './images/best-seller/Ruby Top-1.jpeg',
        overlay: './images/best-seller/Ruby Top-2.jpeg'
    },
    {
        name: 'Golden Top',
        price: '390,000đ',
        img: './images/best-seller/Golden Top-1.jpeg',
        overlay: './images/best-seller/Golden Top-2.jpeg'
    },
    {
        name: 'Skylar Dress',
        price: '480,000đ',
        img: './images/best-seller/Skylar Dress-1.jpeg',
        overlay: './images/best-seller/Skylar Dress-2.jpeg'
    },
    {
        name: 'Cherry Top',
        price: '380,000đ',
        img: './images/best-seller/Cherry Top-1.jpeg',
        overlay: './images/best-seller/Cherry Top-2.jpeg'
    },
    {
        name: 'Light Blue Mary Dress',
        price: '490,000đ',
        img: './images/best-seller/Light Blue Mary Dress-1.jpeg',
        overlay: './images/best-seller/Light Blue Mary Dress-2.jpeg'
    }
];

/************** PAGINATION **************/
function pagination() {
    const productAll = document.querySelector('.product-all');
    const bestSeller = document.querySelector('.product-best-seller');
    const btnNext = document.querySelector('.pagination-number-list-item.btn-next');
    const btnPrev = document.querySelector('.pagination-number-list-item.btn-prev');

    var itemPerPage = 24;       // Item tren 1 trang
    var currentPage = 1;        // Trang hien tai
    var start = 0;
    var end = itemPerPage;

    if(productAll) {
        const totalPage = Math.ceil(products.length / itemPerPage);
        
        //FUNCTION GET CURRENT PAGE
        function getCurrentPage(currentPage) {
            start = (currentPage - 1) * itemPerPage;
            end = currentPage * itemPerPage;
        }

        //FUNCTION RENDER PRODUCT
        function renderProduct() {
            var htmlsProducts = products.map((item, index) => {
                if(index >= start && index < end) {
                    return `
                        <div class="col l-3 c-6">
                            <div class="product">
                                <a href="#home" class="product-item">
                                    <div class="product-image">
                                        <img src="${item.img}" alt="${item.name}" class="product-img img-1"/>
                                        <div class="overlay">
                                            <img src="${item.overlay}" alt="${item.name}" class="product-img img-2"/>                                      
                                            <button type="button" class="btn btn-buy">XEM NHANH</button>
                                        </div>
                                    </div>
                                </a>
                                <div class="product-content">
                                    <a class="product-content-link" href="#home"><h2>${item.name}</h2></a>
                                    <div class="product-content-price">
                                        <span>${item.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                }
            });
            var htmlProducts = htmlsProducts.join('');
            productAll.innerHTML = htmlProducts;
        }

        //FUNCTION RENDER NUMBER PAGE
        function renderListPage() {
            var htmls = '<li class="pagination-number-list-item active">1</li>';
            for(var i = 2; i <= totalPage; i++) {
                htmls += `<li class="pagination-number-list-item">${i}</li>`;
            }
            document.querySelector('.page-number').innerHTML = htmls;
        }

        //FUNCTION CHANGE PAGE
        function changePage() {
            const currentPages = $('.page-number .pagination-number-list-item');
            for(let i = 0; i < currentPages.length; i++) {
                currentPages[i].onclick = function() {
                    $('.page-number .pagination-number-list-item').removeClass('active');
                    currentPages[i].classList.add('active');
                    let value = i + 1;
                    currentPage = value
                    if(currentPage > 1 && currentPage < totalPage) {
                        btnPrev.classList.remove('btn-un-active');
                        btnNext.classList.remove('btn-un-active');
                    }
                    if(currentPage === 1) {
                        btnPrev.classList.add('btn-un-active');
                        btnNext.classList.remove('btn-un-active');
                    }
                    if(currentPage === totalPage) {
                        btnNext.classList.add('btn-un-active');
                        btnPrev.classList.remove('btn-un-active');
                    }
                    getCurrentPage(currentPage);
                    renderProduct();
                }
            }
        }
        
        renderProduct();
        renderListPage();
        changePage();

        //NEXT PAGE
        btnNext.addEventListener('click', () => {
            currentPage++;
            if(currentPage > totalPage) {
                currentPage = totalPage;
            }
            if(currentPage === totalPage) {
                btnNext.classList.add('btn-un-active');
            }
            btnPrev.classList.remove('btn-un-active');
            $('.page-number .pagination-number-list-item').removeClass('active');
            $(`.page-number .pagination-number-list-item:eq(${currentPage-1})`).addClass('active');
            getCurrentPage(currentPage);
            renderProduct();
        });

        //PREV PAGE
        btnPrev.addEventListener('click', () => {
            currentPage--;
            if(currentPage <= 1) {
                currentPage = 1;
            }
            if(currentPage === 1) {
                btnPrev.classList.add('btn-un-active');
            }
            btnNext.classList.remove('btn-un-active');
            $('.page-number .pagination-number-list-item').removeClass('active');
            $(`.page-number .pagination-number-list-item:eq(${currentPage-1})`).addClass('active');
            getCurrentPage(currentPage);
            renderProduct();
        });
    }
    else if(bestSeller) {
        const totalPage = Math.ceil(productBestSeller.length / itemPerPage);

        //FUNCTION GET CURRENT PAGE
        function getCurrentPage(currentPage) {
            start = (currentPage - 1) * itemPerPage;
            end = currentPage * itemPerPage;
        }

        //FUNCTION RENDER PRODUCT
        function renderProduct() {
            var htmlsProducts = productBestSeller.map((item, index) => {
                if(index >= start && index < end) {
                    return `
                        <div class="col l-3 c-6">
                            <div class="product">
                                <a href="#home" class="product-item">
                                    <div class="product-image">
                                        <img src="${item.img}" alt="${item.name}" class="product-img img-1"/>
                                        <div class="overlay">
                                            <img src="${item.overlay}" alt="${item.name}" class="product-img img-2"/>                                      
                                            <button type="button" class="btn btn-buy">XEM NHANH</button>
                                        </div>
                                    </div>
                                </a>
                                <div class="product-content">
                                    <a class="product-content-link" href="#home"><h2>${item.name}</h2></a>
                                    <div class="product-content-price">
                                        <span>${item.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                }
            });
            var htmlProducts = htmlsProducts.join('');
            bestSeller.innerHTML = htmlProducts;
        }

        //FUNCTION RENDER NUMBER PAGE
        function renderListPage() {
            var htmls = '<li class="pagination-number-list-item active">1</li>';
            for(var i = 2; i <= totalPage; i++) {
                htmls += `<li class="pagination-number-list-item">${i}</li>`;
            }
            document.querySelector('.page-number').innerHTML = htmls;
        }

        //FUNCTION CHANGE PAGE
        function changePage() {
            const currentPages = $('.page-number .pagination-number-list-item');
            for(let i = 0; i < currentPages.length; i++) {
                currentPages[i].onclick = function() {
                    $('.page-number .pagination-number-list-item').removeClass('active');
                    currentPages[i].classList.add('active');
                    let value = i + 1;
                    currentPage = value
                    if(currentPage > 1 && currentPage < totalPage) {
                        btnPrev.classList.remove('btn-un-active');
                        btnNext.classList.remove('btn-un-active');
                    }
                    if(currentPage === 1) {
                        btnPrev.classList.add('btn-un-active');
                        btnNext.classList.remove('btn-un-active');
                    }
                    if(currentPage === totalPage) {
                        btnNext.classList.add('btn-un-active');
                        btnPrev.classList.remove('btn-un-active');
                    }
                    getCurrentPage(currentPage);
                    renderProduct();
                }
            }
        }

        renderProduct();
        renderListPage()
        changePage();

        //NEXT PAGE
        btnNext.addEventListener('click', () => {
            currentPage++;
            if(currentPage > totalPage) {
                currentPage = totalPage;
            }
            if(currentPage === totalPage) {
                btnNext.classList.add('btn-un-active');
            }
            btnPrev.classList.remove('btn-un-active');
            $('.page-number .pagination-number-list-item').removeClass('active');
            $(`.page-number .pagination-number-list-item:eq(${currentPage-1})`).addClass('active');
            getCurrentPage(currentPage);
            renderProduct();
        });

        //PREV PAGE
        btnPrev.addEventListener('click', () => {
            currentPage--;
            if(currentPage <= 1) {
                currentPage = 1;
            }
            if(currentPage === 1) {
                btnPrev.classList.add('btn-un-active');
            }
            btnNext.classList.remove('btn-un-active');
            $('.page-number .pagination-number-list-item').removeClass('active');
            $(`.page-number .pagination-number-list-item:eq(${currentPage-1})`).addClass('active');
            getCurrentPage(currentPage);
            renderProduct();
        });
    }
}
pagination()