/* Cobra intro — Islam Ali */
(function(){
  var KEY='cbIntroSeen';
  try{ if(sessionStorage.getItem(KEY) && location.search.indexOf('intro')<0) return; }catch(e){}
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches; if(reduce) return;
  var lines=[{t:'ISLAM',light:2},{t:'ALI',light:0}]; // أول حروف تقيلة والباقي أخف زي الفيديو
  var el=document.createElement('div'); el.id='cbIntro';
  el.innerHTML='<div class="cbi-photo"></div><div class="cbi-grid"></div>'+
    '<div class="cbi-tag"><img src="cobra-logo.jpg" alt=""><span>AKA &nbsp;COBRA</span></div>'+
    '<h1 class="cbi-name" aria-label="Islam Ali"></h1>'+
    '<div class="cbi-sub"><b>أنا اللي بدخل الأنظمة… عشان تفضل إنت بره.</b><small>ETHICAL HACKER • CYBER SECURITY • COBRA7</small></div>'+
    '<img class="cbi-logo" src="cobra-logo.jpg" alt="Cobra">'+
    '<div class="cbi-scan"></div><div class="cbi-bar"></div><div class="cbi-wipe"></div><div class="cbi-flash"></div>';
  document.documentElement.appendChild(el);
  var name=el.querySelector('.cbi-name'), chars=[], rows=[];
  lines.forEach(function(l){
    var row=document.createElement('span'); row.className='cbi-line';
    l.t.split('').forEach(function(c,i){var s=document.createElement('span'); s.className='cbi-ch'+(i>=l.light?'':'');s.textContent=c; s.dataset.c=c; if(l.light&&i>=l.light) s.classList.add('light'); row.appendChild(s); chars.push(s);});
    name.appendChild(row); rows.push(row);
  });
  var timers=[]; function T(f,ms){timers.push(setTimeout(f,ms));}
  var pool='ABCDEFGHIJKLMNOPQRSTUVWXYZ#@$%&01';
  function scramble(span,dur){var t0=Date.now(),orig=span.dataset.c;span.classList.add('glitch');var iv=setInterval(function(){if(Date.now()-t0>dur){clearInterval(iv);span.textContent=orig;span.classList.remove('glitch');return;}span.textContent=pool[Math.random()*pool.length|0];},55);}
  function finish(){timers.forEach(clearTimeout);el.classList.add('out');try{sessionStorage.setItem(KEY,'1')}catch(e){} setTimeout(function(){el.remove();document.documentElement.style.overflow='';},1000);}
  document.documentElement.style.overflow='hidden';
  var bar=el.querySelector('.cbi-bar'); bar.style.transition='width 12.6s linear'; requestAnimationFrame(function(){bar.style.width='100%'});
  // 1) الحروف تطير جوه بالتتابع
  chars.forEach(function(c,i){T(function(){c.classList.add('in')},400+i*170);});
  // 2) فلاش أبيض
  T(function(){el.classList.add('flash')},3600);
  // 3) مسحة النيون الأخضر
  T(function(){el.classList.add('wipe')},5800);
  // 4) الصورة تظهر بصبغة خضرا وبعدين تتحول أبيض واسود
  T(function(){el.classList.add('s3');el.querySelector('.cbi-photo').classList.add('tint')},6500);
  T(function(){el.querySelector('.cbi-photo').classList.remove('tint')},8300);
  // 5) glitch على الحروف عشوائي
  [7200,7700,8200,8800,9400,10000].forEach(function(ms){T(function(){for(var k=0;k<4;k++){scramble(chars[Math.random()*chars.length|0],380);}},ms);});
  // حرف أخضر بيفلكر زي الفيديو
  T(function(){var a=chars[chars.length-1];a.classList.add('lime');setTimeout(function(){a.classList.remove('lime')},300);},10200);
  T(function(){chars[chars.length-1].classList.add('lime')},11000);
  // 6) الشعار + الجملة
  T(function(){el.classList.add('s4')},8800);
  // 7) خروج
  T(finish,12100);
})();
