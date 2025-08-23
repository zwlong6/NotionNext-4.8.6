/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    // 设置plog主题的字体为Mono字体
    #theme-plog {
      font-family: 'JetBrains Mono', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Menlo, Consolas, 'Liberation Mono', monospace !important;
    }

    // 标题栏字体设置
    #theme-plog .font-bold,
    #theme-plog .font-black,
    #theme-plog .font-semibold {
      font-family: 'JetBrains Mono', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Menlo, Consolas, 'Liberation Mono', monospace !important;
    }

    // 底色
    .dark body{
        background-color: black;
    }
  `}</style>
}

export { Style }
