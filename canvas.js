//获取画布  
           var clock=document.getElementById('clock');  
           //设置绘图环境  
           var cxt=clock.getContext('2d');    
  
       function drawClock(){      
           //清除画布  
           cxt.clearRect(0,0,200,200);  
           //获取时间，  
            var now =new Date();  
            var second =now.getSeconds();  
            var minute =now.getMinutes();  
            var hour1 =now.getHours();  
            //将24小时进制转为12小时，且为浮点型  
            var hour=hour1+minute/60;  
            hour=hour>12 ?hour-12:hour;  
            //获取全部时间  
            var time=now.toLocaleString( );  
              
           //表盘  
                //开始新路径  
                cxt.beginPath();  
                cxt.lineWidth=8;  
                cxt.strokeStyle="#555";  
                //路径函数 x,y,r,角度范围,顺时针/逆时针  
                cxt.arc(100,100,80,0,360,false);  
                cxt.stroke();   
                cxt.closePath();  
            //刻度,利用旋转  
               //时刻度  
                for(var i=0;i<12;i++){  
                    //保存当前状态  
                    cxt.save();  
                    //刻度粗细  
                     cxt.lineWidth=5;  
                    //刻度颜色  
                    cxt.strokeStyle="black"  
                    //设置00点,以画布中心为00  
                    cxt.translate(100,100);  
                    //设置旋转角度 参数是弧度，角度 0--360 弧度角度*Math.PI/180  
                    cxt.rotate(i*30*Math.PI/180);  
                    cxt.beginPath();  
                    //刻度起始点  
                    cxt.moveTo(0,-180);  
                    //刻度结束点  
                    cxt.lineTo(0,-195);  
                    cxt.closePath();  
                    cxt.stroke();  
                    //将旋转后的图片返回原画布  
                    cxt.restore();  
                }  
  
               //分刻度  
                 for(var i=0;i<60;i++){  
                    //保存当前状态  
                    cxt.save();  
                    //刻度粗细  
                    cxt.lineWidth=3;  
                    //刻度颜色  
                    cxt.strokeStyle="black"  
                    //设置00点,以画布中心为00  
                    cxt.translate(100,100);  
                    //设置旋转角度 参数是弧度，角度 0--360 弧度角度*Math.PI/180  
                    cxt.rotate(i*6*Math.PI/180);  
                    cxt.beginPath();  
                    //起始点  
                    cxt.moveTo(0,-188);  
                    cxt.lineTo(0,-195);  
                    cxt.closePath();  
                    cxt.stroke();  
                    //将旋转后的图片返回原画布  
                    cxt.restore();  
                }  
            //表盘中心  
                cxt.beginPath();  
                cxt.lineWidth=1;  
                cxt.strokeStyle="red";  
                cxt.fillStyle="red";  
                //路径函数 x,y,r,角度范围,顺时针/逆时针  
                cxt.arc(100,100,4,0,360,false);  
                cxt.fill();  
                cxt.stroke();   
                cxt.closePath();  
            //时针  
                //保存当前状态  
                 cxt.save();  
                 cxt.lineWidth=2;  
                 cxt.strokeStyle="black";  
                 //设置异次元空间00点  
                 cxt.translate(100,100);  
                 //设置旋转角度 参数是弧度，角度 0--360 弧度角度*Math.PI/180  
                 cxt.rotate(hour*30*Math.PI/180);  
                 cxt.beginPath();       
                 cxt.moveTo(0,-60);  
                 cxt.lineTo(0,5);  
                 cxt.closePath();  
                 cxt.stroke();  
                 cxt.restore();  
            //分针  
                 cxt.save();  
                 cxt.lineWidth="3";  
                 cxt.strokeStyle="black";  
                 cxt.translate(100,100);  
                 cxt.rotate(minute*6*Math.PI/180);  
                 cxt.beginPath();       
                 cxt.moveTo(0,-75);  
                 cxt.lineTo(0,10);  
                 cxt.closePath();  
                 cxt.stroke();  
                 cxt.restore();  
            //秒针  
                 cxt.save();  
                 cxt.lineWidth="1.5";  
                 cxt.strokeStyle="red";  
                 cxt.translate(100,100);  
                 cxt.rotate(second*6*Math.PI/180);  
                 cxt.beginPath();       
                 cxt.moveTo(0,-80);  
                 cxt.lineTo(0,15);  
                 cxt.closePath();  
                 cxt.stroke();  
                 //秒针前端小点  
                 cxt.beginPath();  
                 //外环为红色  
                 cxt.strokeStyle="red";  
                 //灰色填充  
                 cxt.fillStyle="gray";  
                 cxt.arc(0,-145,4,0,360,false);  
                   cxt.fill();  
                 cxt.closePath();  
                 cxt.stroke();  
                 cxt.restore();  
            //表盘中心  
                cxt.beginPath();  
                cxt.lineWidth=1;  
                //外环为红色  
                cxt.strokeStyle="red";  
                //灰色填充  
                cxt.fillStyle="gray";  
                //路径函数 x,y,r,角度范围,顺时针/逆时针  
                cxt.arc(100,100,4,0,360,false);  
                cxt.fill();  
                cxt.stroke();   
                cxt.closePath();  
           }        
           //使用setInterval(代码，毫秒时间)使时钟转起来;  
           drawClock();  
           setInterval(drawClock,1000);  