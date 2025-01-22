// Parallax effect using GSAP
gsap.to('.parallax', {
    y: '50%', // This moves the background at half speed when scrolling
    ease: 'none',
    scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// Scroll animations for sections
gsap.from('.about', {
    opacity: 0,
    y: 100,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        end: 'top 60%',
        scrub: true,
    }
});

gsap.from('.project', {
    opacity: 0,
    y: 100,
    duration: 1.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.project',
        start: 'top 75%',
        end: 'top 60%',
        scrub: true
    }
});

gsap.from('.contact', {
    opacity: 0,
    y: 100,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 70%',
        end: 'top 50%',
        scrub: true
    }
});

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Show the button when the user scrolls down
  window.onscroll = function() {
    let button = document.querySelector('.top-btn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  };
  
  