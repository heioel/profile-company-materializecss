const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider,{
    height : 570,
    duration : 300,
    interval : 2000
});

const materialBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBox);

const collap = document.querySelectorAll('.collapsible');
M.Collapsible.init(collap);