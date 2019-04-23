static

定位是HTML元素的默认值，即没有定位，元素出现在正常的流中，因此，这种定位就不会收到top，bottom,left,right的影响。
如html代码如下：
<div class="wrap">
    <div class="content"></div>
</div>
　　css代码如下：

.wrap{width: 300px;height: 300px; background: red;}
.content{position: static; top:100px; width: 100px;height: 100px; background: blue;}




fixed
定位是指元素的位置相对于浏览器窗口是固定位置，即使窗口是滚动的它也不会滚动，且fixed定位使元素的位置与文档流无关，因此不占据空间，且它会和其他元素发生重叠。
　　html代码如下：

<div class="content">我是使用fix来定位的！！！所以我相对于浏览器窗口，一直不动。</div>
　　css代码如下：

body{height:1500px; background: green; font-size: 30px; color:white;}
.content{ position: fixed; right:0;bottom: 0; width: 300px;height: 300px; background: blue;}


relative
相对定位元素的定位是相对它自己的正常位置的定位。
hmtl如下：

<h2>这是位于正常位置的标题</h2>
<h2 class="pos_bottom">这个标题相对于其正常位置向下移动</h2>
<h2 class="pos_right">这个标题相对于其正常位置向右移动</h2>
css代码如下：

.pos_bottom{position:relative; bottom:-20px;}
.pos_right{position:relative;left:50px;}


absolute
绝对定位的元素相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>
当某个absolute定位元素的父元素具有position:relative/absolute/fixed时，定位元素都会依据父元素而定位，
而父元素没有设置position属性或者设置了默认属性，那么定位属性会依据html元素来定位。
