window.onload=function(){function e(e,t){var n=e.innerHTML;e.innerHTML="<span style=\"font-family: 'entypo'\">"+t+"</span>"+n}var t,n,i,a,r={"icon-play":"&#xe101;","icon-pause":"&#xe102;","icon-cw":"&#xe103;","icon-ccw":"&#xe104;","icon-arrow-left":"&#xe105;","icon-arrow-right":"&#xe106;","icon-resize-enlarge":"&#xe107;","icon-resize-shrink":"&#xe108;","icon-volume":"&#xe109;","icon-sound":"&#xe10a;","icon-mute":"&#xe10b;","icon-ellipsis":"&#xe10c;"},s=document.getElementsByTagName("*");for(t=0;s.length>t;t+=1)a=s[t],n=a.getAttribute("data-icon"),n&&e(a,n),i=a.className,i=i.match(/icon-[^\s'"]+/),i&&r[i[0]]&&e(a,r[i[0]])};