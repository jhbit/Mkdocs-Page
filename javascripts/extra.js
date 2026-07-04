document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.md-sidebar--primary');
  if (!sidebar) return;

  // 获取主内容区，用来调整边距
  const main = document.querySelector('.md-main');
  const container = document.querySelector('.md-container');

  // 初始状态：侧边栏隐藏，主内容区占满宽度
  sidebar.style.position = 'fixed';
  sidebar.style.left = '-300px';  // 隐藏在左侧之外，宽度稍大于侧边栏宽
  sidebar.style.top = '0';
  sidebar.style.height = '100vh';
  sidebar.style.zIndex = '1000';
  sidebar.style.transition = 'left 0.2s ease';
  sidebar.style.backgroundColor = 'var(--md-default-bg-color)';
  sidebar.style.overflowY = 'auto';

  // 给主区域添加过渡效果，避免内容跳动（我们不移动主区域，让侧边栏覆盖）
  if (main) main.style.transition = 'margin-left 0.2s ease';

  // 创建一个隐形的触发区域在左侧边缘
  const trigger = document.createElement('div');
  trigger.style.position = 'fixed';
  trigger.style.left = '0';
  trigger.style.top = '0';
  trigger.style.width = '15px';    // 鼠标靠近左边缘15px就触发
  trigger.style.height = '100vh';
  trigger.style.zIndex = '999';
  document.body.appendChild(trigger);

  let sidebarVisible = false;

  // 鼠标进入触发区域或侧边栏本身时，滑入侧边栏
  function showSidebar() {
    sidebar.style.left = '0';
    sidebarVisible = true;
  }

  // 鼠标离开侧边栏且不在触发区域时，隐藏
  function hideSidebar(e) {
    // 如果鼠标移动到侧边栏内部，不隐藏；否则隐藏
    if (!sidebar.contains(e.relatedTarget) && !trigger.contains(e.relatedTarget)) {
      sidebar.style.left = '-300px';
      sidebarVisible = false;
    }
  }

  trigger.addEventListener('mouseenter', showSidebar);
  sidebar.addEventListener('mouseenter', showSidebar); // 保持侧边栏显示
  trigger.addEventListener('mouseleave', hideSidebar);
  sidebar.addEventListener('mouseleave', hideSidebar);
});
