const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const { request } = require("express");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmi",function(request,response){
  response.sendFile(__dirname+"/index.html");
})

app.post("/bmi",function(request,response){
    weight=Number(request.body.weight);
    height=Number(request.body.height);
    BMI=weight/Math.pow(height,2);
    BMI=Math.round(BMI)
  if (BMI<18.5){response.send("<h1>體重過輕 | 柯南 <br>真相只有一個,就是太瘦了<h1><img src='https://cdn2.ettoday.net/images/6038/d6038649.jpg' alt='' width='30%'>")}
     if (BMI>=18.5 && BMI<24){response.send("<h1>你的BMI是"+BMI+"<br>正常範圍 | 胖虎級數！ <br>我是胖虎我是孩子王！<h1><img src='https://media-proc.ohpama.com/photo.php?s=https://cdn.ohpama.com/wp-content/uploads/master/2016/12/14676881260_01362500.jpg&f=webp&w=815&q=75' alt='' width='30%'>")}
     if (BMI>=24 && BMI<27){response.send("<h1>你的BMI是"+BMI+"<br>過重 | 花帶柑級數！<br>常常想着要減肥卻因為自己怠惰不積極的個性沒有一次成功過<h1><img src='https://lazycathealiving.com/wp-content/uploads/2022/08/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E5%AE%B6_%E8%8A%B1%E5%B8%B6%E6%9F%91.png' alt='' width='30%'>")}
     if (BMI>=27 && BMI<30){response.send("<h1>你的BMI是"+BMI+"<br>輕度肥胖 | 花爸級數！<br>上班族真辛苦，在電車裏搖搖晃晃……。<h1><img src='https://f32e9335-a-62cb3a1a-s-sites.googlegroups.com/site/s10510832/yan-jiu-zhu-ti/wo-men-zhe-yi-jia/110907513233.bmp_n.jpg?attachauth=ANoY7cr7U4DAT3hs3K_DmMLijpJzdu-ke2mQp74UaEr3-nnFfRerkYWbKUv1mi3tHMO6oF6YUdop6rgGGBb-rZRX1IUFOVUTxxNMRLjKsNxN2Lug9K28YNbctwLapnNK9BQUiRlgf9gYdE-9zHapG7KYbOwrNf41CNscBVXwrLVhuRh0b5LLvKkiyXM3GNKARd8txCYKuz9NrZvGB2pyIYBHPA9ppPe8vihsyQZhqAGKWDJFzQn1jiJ6X7O_Bab3HIqfH5nLUlwcO4d-9M_0SdCH0ehJL8OE0w%3D%3D&attredirects=0' alt='' width='30%'>")}
     if (BMI>=30 && BMI<35){response.send("<h1>你的BMI是"+BMI+"<br>中度肥胖 | 美伢級數！<br>大尼尼美伢三層肥肉老妖婆<h1><img src='https://p1-bk.byteimg.com/tos-cn-i-mlhdmxsy5m/d3819e6b57d9490699c70d8f1a56a302~tplv-mlhdmxsy5m-q75:0:0.image' alt='' width='30%'>")}
     if (BMI>=35){response.send("<h1>你的BMI是"+BMI+"<br>重度肥胖 | 花媽級數!<br>看來需要好好減重跟減脂了<h1><img src='https://f32e9335-a-62cb3a1a-s-sites.googlegroups.com/site/s10510832/yan-jiu-zhu-ti/wo-men-zhe-yi-jia/ATASHInCHI%20DB%2001.jpg?attachauth=ANoY7crpo2x4iRR27OSPReZ5Vey3KSPYmh0BC5kWMH4FBdZ_PHlbJoqQgiK8nRZcs307AVMTjftZSdTs8HPa5QqIFOHosL1Mune0QOSUfQAFXPhvZgwtaDtnmg1sIzWrmAStK-vNa1LSi4qMLhfXIuSCPfDHpbc8WxNxFkK_mE2f7LSVIf0syG6FP1MOi6qLhqZ9lffyDAmxGedaKAbt3fLMM4mAnapO6ZdYS9BJMSpB-BsLNet86cjLFE6nPrlNNyS6TQRAVQwSdTWjygXpWcqiHcVMRsALAQ%3D%3D&attredirects=0' alt='' width='30%'>")}
})

app.listen(3000, function(){
    console.log("😊主人,內容已更新✔, 愛你哦😘")
  });
  
