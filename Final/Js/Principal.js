let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carruselDom = document.querySelector('.carrusel');
let SliderDom = carruselDom.querySelector('.carrusel .list');
let thumbnailBorderDom = document.querySelector('.carrusel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carrusel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 4000;
let timeAutoNext = 8000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carrusel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carrusel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carruselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carruselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carruselDom.classList.remove('next');
        carruselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

  document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function adjustGridColumns() {
        const videoGrids = document.querySelectorAll('.video-grid');
        const width = window.innerWidth;

        videoGrids.forEach(videoGrid => {
            if (width >= 1000) {
                videoGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
            } else if (width >= 800) {
                videoGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
            } else {
                videoGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
            }
        });
    }

    function showTab(tabId) {
        tabContents.forEach(tabContent => {
            tabContent.style.display = (tabContent.id === tabId) ? 'block' : 'none';
        });

        tabButtons.forEach(button => {
            button.classList.toggle('active', button.getAttribute('data-tab') === tabId);
        });
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            showTab(tabId);
        });
    });

    window.addEventListener('resize', adjustGridColumns);
    adjustGridColumns();

    // Show the first tab by default
    showTab('tab1');

      function showTab(tabId) {
      tabContents.forEach(tabContent => {
          tabContent.style.display = (tabContent.id === tabId) ? 'block' : 'none';
      });

      tabButtons.forEach(button => {
          button.classList.toggle('active', button.getAttribute('data-tab') === tabId);
      });
  }

  tabButtons.forEach(button => {
      button.addEventListener('click', () => {
          const tabId = button.getAttribute('data-tab');
          showTab(tabId);
      });
  });

  window.addEventListener('resize', adjustGridColumns);
  adjustGridColumns(); 
  showTab('tab1');
});


document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
      button.addEventListener('click', () => {
          const targetTab = button.getAttribute('data-tab');

          tabButtons.forEach(btn => {
              btn.classList.toggle('active', btn === button);
          });

          tabContents.forEach(content => {
              content.style.display = content.id === targetTab ? 'block' : 'none';
          });
      });
  });

  // Set the first tab as active on load
  document.querySelector('.tab-button[data-tab="tab1"]').click();
});



