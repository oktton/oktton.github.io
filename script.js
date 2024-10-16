// 确保 DOM 完全加载后执行代码
document.addEventListener('DOMContentLoaded', () => {
    // 获取所有按钮和内容区域
    const buttons = document.querySelectorAll('.columns button');
    const contents = document.querySelectorAll('[id^="content"]');

    // 遍历每个按钮并添加点击事件
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // 隐藏所有内容
            contents.forEach(content => content.style.display = 'none');
            // 显示对应的内容
            contents[index].style.display = 'block';
        });
    });
});
