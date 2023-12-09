// const hamburger = document.querySelector('.hamburger');
// const nav = document.querySelector('nav');

// hamburger.addEventListener('click', function() {
//     // nav.style.visibility = nav.style.visibility === 'none' ? 'flex' : 'none';
//     nav.classList.toggle('active');
// });

const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

function pageTransition() {
    let tl = gsap.timeline();
    tl.to('ul.transition li', {
        duration: 0.5,
        scaleY: 1,
        transformOrigin: 'bottom left',
        stagger: 0.2
    });
    tl.to('ul.transition li', {
        duration: 0.5,
        scaleY: 0,
        transformOrigin: 'bottom left',
        stagger: 0.1,
        delay: 0.1
    });
};



function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function contentAanimation() {
    let tl = gsap.timeline();
    tl.from('.left', {
        duration: 1.5,
        translateY: 50,
        opacity: 0
    });
    tl.to('img', {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
    }, "-1.1");
    // tl.from('nav', {
    //     duration: 1,
    //     translateY: -100,
    //     opacity: 0
    // });
    // tl.from('.right', {
    //     duration: 1.5,
    //     translateY: 50,
    //     opacity: 0
    // });

barba.hooks.after(() => {
    scroller.init();
});

barba.init({
    sync: true,
    transitions: [ {
        async leave(data) {
            const done = this.async();
            pageTransition();
            await delay(1000);
            done();
        },
        async enter(data) {
            contentAanimation();
        },

        async once(data) {
            contentAanimation();
        }
    }]
})};

/* Custom event */
window.addEventListener("scrollEvent", (e) => {
    const { target, way } = e.detail;
  
    if (way === "enter") {
      target.style.color = "pink";
      console.log("enter");
    } else {
      target.style.backgroundColor = "";
    }
  });
  
// change conic gradient center point to follow mouse
const conicGradient = document.querySelector(".dynamicBackground");
const conicGradientImg = document.querySelector("#heroImgContainer");

document.addEventListener("mousemove", (e) => {

    // const x = e.clientX - conicGradient.offsetLeft;
    // const y = e.clientY - conicGradient.offsetTop;
    // const x = e.clientX/window.innerWidth - conicGradient.offsetLeft;
    // const y = e.clientY/window.innerHeight - conicGradient.offsetTop;
    const x = e.clientX/window.innerWidth - conicGradient.offsetLeft;
    const y = e.clientY/window.innerHeight - conicGradient.offsetTop;
    console.log(e);

    conicGradient.style.background = "conic-gradient(from 180deg at " + (x * 100) + "%" + (y * 100) + "%, #CCEFFB 0deg, #B1FBD7 57.43deg, #FFFCBB 131.25deg, #FFCFF2 207.93deg, #E0B8FF 280.32deg, #CCEFFB 360deg)";
    // conicGradient.style.background = "conic-gradient(from 180deg at " + e.screenX + "px " + e.clientY + "px, #CCEFFB 0deg, #B1FBD7 57.43deg, #FFFCBB 131.25deg, #FFCFF2 207.93deg, #E0B8FF 280.32deg, #CCEFFB 360deg)";

    // conicGradientImg.setAttribute("style",  "conic-gradient(from 180deg at " + (x * 100) + "%" + (y * 100) + "%, #CCEFFB 0deg, #B1FBD7 57.43deg, #FFFCBB 131.25deg, #FFCFF2 207.93deg, #E0B8FF 280.32deg, #CCEFFB 360deg)");
} 
);

