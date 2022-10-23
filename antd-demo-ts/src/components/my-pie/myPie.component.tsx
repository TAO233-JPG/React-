import style from "./myPie.module.scss";

// 前端工程师进阶10日谈 第二天
// 故事三 用CSS绘制静态饼图

/* 
现在，我们需要思考的是：如何让两种颜色，按照给定的进度数据，显示对应的比例呢？

它的基本思路是这样的：

在这个元素上叠加一层饼图；
初始状态下，我们将这张饼图的右半边（即，上、右边框）的颜色设置为蓝色；左半边（即，下、左边框）的颜色设置为透明色。这样初始情况下，.pie元素右半边绿色的部分，被这一叠加层覆盖为蓝色，从视觉上看.pie元素此时的进度是0；
根据需求，以不同角度旋转这个叠加层，这样就实现了不同百分比的饼图。

当转到50%（180°）我们只需要将原来是透明色的下、左边框设置为绿色，将原来是蓝色的上、右边框设置为透明色，就能解决超过上面的问题。
*/
// 静态的
const MyPie = () => {
  return (
    <>
      <div className={style["pie"]} style={{ "animationDelay": "-1s" }}></div>
      <div className={style["pie"]} style={{ "animationDelay": "-2.5s" }}></div>
      <div className={style["pie"]} style={{ "animationDelay": "-9s" }}></div>
    </>
  );
};

export default MyPie;
