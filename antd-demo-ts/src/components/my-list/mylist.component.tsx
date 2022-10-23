import { MouseEventHandler, useCallback } from "react";
import style from "./myList.module.scss";

// 前端工程师进阶10日谈 第二天 
// 故事二 ：用CSS实现三角标
const MyList = () => {
  const clickTree: MouseEventHandler<HTMLUListElement> = useCallback((e) => {
    const target = e.target as HTMLLinkElement;
    if (target.tagName === "LI" && target.children.length) {
      if (target.className === style["expend"]) {
        target.className = "";
      } else {
        target.className = style["expend"];
      }
    }
    // console.log(target.tagName, target.className, target.children);
  }, []);

  return (
    <>
      <ul className={style["tree"]} onClick={clickTree}>
        <li>项目1</li>
        <li>项目2</li>
        <li className={style["expend"]}>
          项目3
          <ul>
            <li>子项3.1</li>
            <li>子项3.2</li>
            <li>子项3.3</li>
          </ul>
        </li>
        <li>
          项目4
          <ul>
            <li>子项4.1</li>
            <li>子项4.2</li>
          </ul>
        </li>
        <li>项目5</li>
      </ul>
    </>
  );
};

export default MyList;
