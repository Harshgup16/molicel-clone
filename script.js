function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotive();





function canvas1(){
  const canvas = document.querySelector("#page1 canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
  });

  function files(index) {
      var data = `
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-000.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-001.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-002.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-003.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-004.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-005.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-006.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-007.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-008.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-009.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-010.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-011.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-012.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-013.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-014.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-015.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-016.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-017.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-018.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-019.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-020.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-021.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-022.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-023.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-024.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-025.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-026.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-027.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-028.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-029.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-030.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-031.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-032.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-033.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-034.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-035.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-036.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-037.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-038.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-039.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-040.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-041.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-042.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-043.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-044.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-045.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-046.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-047.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-048.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-049.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-050.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-051.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-052.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-053.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-054.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-055.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-056.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-057.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-058.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-059.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-060.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-061.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-062.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-063.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-064.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-065.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-066.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-067.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-068.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-069.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-070.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-071.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-072.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-073.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-074.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_1/hero_animation-d-075.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-075.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-076.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-077.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-078.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-079.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-080.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-081.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-082.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-083.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-084.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-085.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-086.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-087.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-088.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-089.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-090.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-091.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-092.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-093.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-094.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-095.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-096.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-097.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-098.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-099.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-100.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-101.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-102.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-103.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-104.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-105.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-106.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-107.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-108.jpg
      https://www.molicel.com/wp-content/themes/molicel/p50b//hero_animation/desktop/clip_2/hero_animation-d-109.jpg
      `;
  return data.split("\n")[index];
  }

  const frameCount = 112;

  const images = [];
  const imageSeq = {
  frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
  }


  /////// for which thing is to be pinned
  gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
      scrub: 0.15,
      trigger: `#page1`,
      start: `0% top`,  /////////////change start end according to preference
      end: `300% top`,    /////////////400% is the total height of the canvas and where the canvas ends
      scroller: `#main`,
      // markers:true
  },
  onUpdate: render,
  });

  images[1].onload = render;

  function render() {
  scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
  );
  }
  ScrollTrigger.create({

  trigger: "#page1",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`, 
  end: `300% top`,
});
}
canvas1();




function canvas2(){
  const canvas = document.querySelector("#page3 canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00000.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00001.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00002.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00003.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00004.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00005.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00006.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00007.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00008.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00009.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00010.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00011.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00012.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00013.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00014.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00015.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00016.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00017.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00018.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00019.png
    https://www.molicel.com/wp-content/themes/molicel/p50b//features_animation/clip_1/features_animation_00020.png
    `;
    return data.split("\n")[index];
  }

  const frameCount = 21;
  const images = [];
  const imageSeq = {
    frame: 1,
  };

  // Load sequence images
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  // Define overlay images
  const overlayUrls = [
    'https://www.molicel.com/wp-content/themes/molicel/p50b//img/battery/battery-xray_overlay_1.png',
    'https://www.molicel.com/wp-content/themes/molicel/p50b//img/battery/battery-xray_overlay_2.png',
    'https://www.molicel.com/wp-content/themes/molicel/p50b//img/battery/battery-xray_overlay_3.png',
    'https://www.molicel.com/wp-content/themes/molicel/p50b//img/battery/battery-xray_overlay_4.png',
    'https://www.molicel.com/wp-content/themes/molicel/p50b//img/battery/battery-xray_overlay_5.png',
    'https://www.molicel.com/wp-content/themes/molicel/p50b//img/battery/battery-xray_overlay_6.png'
  ];

  // Load overlay images
  const overlayImages = overlayUrls.map(url => {
    const img = new Image();
    img.src = url;
    return img;
  });

  // Create a single opacity controller and current overlay tracker
  const overlayControl = {
    opacity: 0,
    currentIndex: 0
  };

  // Animation for the sequence
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 0.15,
      trigger: "#page3 canvas",
      start: "0% top",
      end: "400% top",
      scroller: "#main",
    },
    onUpdate: render,
  });

  // Create animations for overlay transitions
  overlayUrls.forEach((_, index) => {
    const segmentSize = 500 / overlayUrls.length;
    const startPercent = 500 + (segmentSize * index);
    const endPercent = startPercent + segmentSize;

    gsap.timeline({
      scrollTrigger: {
        scrub: 0.15,
        trigger: "#page3 canvas",
        start: `${startPercent}% top`,
        end: `${endPercent}% top`,
        scroller: "#main",
        onEnter: () => {
          overlayControl.currentIndex = index;
        },
        onUpdate: (self) => {
          overlayControl.opacity = self.progress;
          render();
        }
      }
    });
  });

  images[1].onload = render;
  overlayImages[0].onload = render;

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw current frame
    scaleImage(images[imageSeq.frame], context);
    
    // Draw current overlay with its opacity if we're at the last frame
    if (imageSeq.frame === frameCount - 1) {
      context.globalAlpha = overlayControl.opacity;
      scaleImage(overlayImages[overlayControl.currentIndex], context);
      context.globalAlpha = 1;
    }
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  ScrollTrigger.create({
    trigger: "#page3 canvas",
    pin: true,
    scroller: "#main",
    start: "top top",
    end: "1069% top",
  });
}
canvas2();