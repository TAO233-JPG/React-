import { Button, ButtonProps } from "antd";
import { FC, useEffect } from "react";
// import { FC } from "react";
import { withDefaultProps } from "../../utils/HOC/withDefaultProps";

/* 组件封装 */

// 组件类型
type MyButtonProps = {
  hello?: string;
} & ButtonProps;

// 默认属性

// 重置默认属性 - 方法1
// const MyButton: FC<MyButtonProps> = (props) => {
//   const { value, size = "large" } = props; // 重置默认值

//   return (
//     <Button {...props} size={size}>
//       {value}
//     </Button>
//   );
// };
// export default MyButton;

// 自定义属性
const MyButton: FC<MyButtonProps> = ({ hello, ...restProps }) => {
  useEffect(() => console.log(`hello change ${hello}`), [hello]);
  return <Button {...restProps}></Button>;
};

// 重置默认属性 - 方法2 封装高阶组件
export default withDefaultProps<MyButtonProps>({
  size: "large",
  type: "default",
  onClick: () => console.log("default click"), // 添加默认属性
})(MyButton);
