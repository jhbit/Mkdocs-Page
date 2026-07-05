# MMY's Notebook

基于 [MkDocs](https://www.mkdocs.org/) + [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) 主题的个人知识库站点，涵盖 Digital IC 设计、拉康精神分析、NEMU PA、蓝牙芯片选型等内容。

**仓库地址：** [github.com/jhbit/Mkdocs-Page](https://github.com/jhbit/Mkdocs-Page)

---

## 技术栈

| 组件 | 用途 |
|------|------|
| [MkDocs](https://www.mkdocs.org/) | 静态站点生成器 |
| [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) | 主题框架 |
| [PDF.js](https://mozilla.github.io/pdf.js/) (v5.4.394) | 浏览器内嵌 PDF 查看器 |
| [MathJax 3](https://www.mathjax.org/) | LaTeX 数学公式渲染 |
| [JetBrains Mono](https://www.jetbrains.com/lp/mono/) | 顶栏和正文等宽字体 |
| [NerdFonts](https://www.nerdfonts.com/) | 图标字体（用于导航栏图标） |
| [pymdown-extensions](https://facelessuser.github.io/pymdown-extensions/) | Markdown 增强扩展 |

---

## 目录结构

```
test-prj/
├── mkdocs.yml                      # MkDocs 主配置文件
├── docs/
│   ├── index.md                    # 首页（Hero 区域）
│   ├── about/
│   │   └── index.md                # 关于页（操作说明）
│   ├── Digital_backend/            # Digital IC 笔记
│   │   ├── index.md
│   │   ├── python.md
│   │   ├── tcl.md
│   │   ├── Perl.md
│   │   └── reference.md            # 参考书（PDF 嵌入）
│   ├── Lacan/                      # 拉康精神分析
│   │   ├── index.md
│   │   ├── SeminarI.md             # 研讨班1（PDF 嵌入）
│   │   ├── 因为.md                 # 多 PDF 嵌入 + 跳转
│   │   ├── 欲望图.md
│   │   ├── Graph1.md
│   │   ├── Graph2.md
│   │   └── Graph3.md
│   ├── PA/                         # NEMU PA 项目
│   │   ├── index.md
│   │   ├── PA1/                    # PA1 各章节
│   │   └── PA2/                    # PA2 各章节
│   ├── Bluetooth/                  # 蓝牙芯片选型
│   │   ├── index.md
│   │   └── 芯片选型.md
│   ├── songs/                      # 音乐播放
│   │   ├── index.md
│   │   └── *.mp3                   # 音频文件
│   ├── css/                        # 自定义样式
│   │   ├── pages.css               # 主样式（布局/动画/标题/暗色模式）
│   │   └── fold_toc.css            # 目录折叠效果
│   ├── javascripts/                # 自定义脚本
│   │   ├── toc.js                  # 目录高亮 + 折叠
│   │   ├── pdf-nav.js              # PDF 跨页面页码跳转
│   │   └── extra.js
│   ├── pdf/                        # PDF 文件存放目录
│   │   ├── 绝对反冲.pdf
│   │   ├── 视差之见.pdf
│   │   ├── 斜目而视.pdf
│   │   ├── 延迟的否定.pdf
│   │   ├── seminarI.pdf
│   │   └── 数字集成电路物理设计.pdf
│   └── pdfjs/                      # PDF.js 查看器（v5.4.394）
│       ├── web/
│       │   ├── viewer.html         # ← 需要修改：添加 postMessage 监听器
│       │   ├── viewer.mjs
│       │   ├── viewer.css
│       │   └── ...
│       └── build/
│           ├── pdf.mjs
│           └── pdf.worker.mjs
└── site/                           # 构建输出（gitignore）
```

---

## 快速开始

### 安装

```bash
pip install mkdocs mkdocs-material pymdown-extensions
```

### 本地预览

```bash
mkdocs serve
```

访问 `http://127.0.0.1:8000`

### 构建站点

```bash
mkdocs build
```

### 部署到 GitHub Pages

```bash
mkdocs gh-deploy
```

---

## mkdocs.yml 详细配置

### 基础配置

```yaml
site_name: MMY's Notebook          # 站点名称
repo_url: https://github.com/jhbit/Mkdocs-Page  # GitHub 仓库地址
repo_name: Mkdocs-Page             # 仓库显示名称
```

### 主题配置（Material for MkDocs）

```yaml
theme:
  name: material
  font: false                      # 禁用 Google Fonts，使用本地字体

  # 三套配色方案：亮色 / 暗色 / 跟随系统
  palette:
    - media: "(prefers-color-scheme: light)"
      scheme: default              # 亮色方案
      primary: blue                # 主色调：蓝色
      accent: indigo               # 强调色：靛蓝
      toggle:
        icon: material/brightness-7
        name: 亮色模式
    - media: "(prefers-color-scheme: dark)"
      scheme: slate                # 暗色方案
      primary: black               # 主色调：黑色
      accent: indigo
      toggle:
        icon: material/brightness-4
        name: 暗色模式
    - media: "(prefers-color-scheme)"
      toggle:
        icon: material/brightness-auto
        name: 跟随系统

  # 图标配置
  icon:
    logo: material/book            # 顶栏左侧网站图标
    repo: fontawesome/brands/github # GitHub 仓库图标

  # 功能特性
  features:
    - navigation.tabs              # 顶层导航分栏
    - content.code.copy            # 代码块右上角复制按钮
    - toc.follow                   # 右侧目录跟随滚动
    - navigation.top               # 回到顶部按钮
    - header.autohide              # 顶栏滚动时自动隐藏
    - navigation.path              # 面包屑导航
    - navigation.indexes           # 索引页面支持
```

**配色方案说明：**
- `scheme: default` — 亮色背景
- `scheme: slate` — 暗色背景
- `primary` — 导航栏、按钮等主色调
- `accent` — 链接、选中状态等强调色

**图标资源：**
- Material Design Icons：`material/xxx`（如 `material/book`、`material/home`）
- Font Awesome：`fontawesome/xxx`（如 `fontawesome/brands/github`）
- 可用图标列表：https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/

### Markdown 扩展

```yaml
markdown_extensions:
  # 目录
  - toc:
      title: "导航"
      permalink: True              # 标题旁显示永久链接锚点
      baselevel: 1                 # 目录起始级别（1 = 包含 h1）
      toc_depth: 6                 # 目录深度（包含 h1-h6）

  # 代码高亮
  - pymdownx.highlight:
      anchor_linenums: true        # 为代码行号添加锚点
      linenums: true               # 显示行号
      auto_title: true             # 自动显示语言标签
      linenums_style: pymdownx-inline  # 行号样式
  - pymdownx.superfences           # 增强代码块（支持嵌套、围栏等）
  - pymdownx.snippets              # 代码嵌入（从文件中引用代码）

  # 数学公式
  - pymdownx.arithmatex:
      generic: true                # 使用 MathJax 渲染

  # 告警框
  - admonition                     # 分级告警（note/tip/warning/danger）
  - pymdownx.details               # 可折叠的告警框

  # 其他增强
  - pymdownx.mark                  # ==高亮标记==
  - pymdownx.emoji:                # Emoji 支持
      emoji_index: !!python/name:material.extensions.emoji.twemoji
      emoji_generator: !!python/name:material.extensions.emoji.to_svg
  - attr_list                      # 属性列表（支持自定义 HTML 属性）
```

**告警框语法：**
```markdown
!!! note "标题"
    内容

!!! tip
    提示内容

!!! warning
    警告内容

!!! danger
    危险内容

??? details "可折叠"
    点击展开的内容
```

### 外部资源加载

```yaml
extra_javascript:
  - https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js  # MathJax
  - javascripts/toc.js              # 目录高亮脚本
  - javascripts/pdf-nav.js          # PDF 页码跳转脚本

extra_css:
  - css/pages.css                   # 主样式表
  - css/fold_toc.css                # 目录折叠样式
  - https://cdn.jsdelivr.net/npm/nerdfonts-web@1.0.1/nf.css  # NerdFonts 图标
```

### 导航配置

```yaml
nav:
  - Home: index.md
  - Digital IC:
      - Introdunction: Digital_backend/index.md
      - Scripts:
          - Python: Digital_backend/python.md
          - TCL: Digital_backend/tcl.md
          - Perl: Digital_backend/Perl.md
      - Books: Digital_backend/reference.md
  - Lacan:
      - Introduction: Lacan/index.md
      - 研讨班1: Lacan/SeminarI.md
      - 欲望图: Lacan/欲望图.md
      - 因为: Lacan/因为.md
      # ...
  - NEMU PA:
      - Introdunction: PA/index.md
      - PA1: [...]
      - PA2: [...]
  - Bluetooth:
      - Introduction: Bluetooth/index.md
      - 选型: Bluetooth/芯片选型.md
  - Song:
      - Home: songs/index.md
  - About: about/index.md
```

**注意事项：**
- `nav` 中引用的文件必须存在于 `docs/` 目录下
- 如果文件不存在，`mkdocs serve` 会输出 WARNING
- 文件路径相对于 `docs/` 目录

---

## 自定义样式详解（css/pages.css）

### 页面布局

```css
/* 整体最大宽度 */
.md-grid {
  max-width: 75rem;  /* 1200px */
}

/* 正文区域居中 */
.md-content__inner {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

/* 左侧导航栏宽度 */
.md-sidebar--primary {
  width: 12rem !important;
}

/* 右侧目录栏宽度 */
.md-sidebar--secondary {
  width: 12rem !important;
  padding-top: 1.5rem !important;
}
```

**调整方法：**
- 修改 `max-width` 改变正文宽度
- 修改 `width` 改变侧栏宽度
- 修改 `font-size` 改变目录字体大小

### 标题渐变色

```css
.md-typeset h1 { color: #1a5276 !important; }  /* 深蓝 */
.md-typeset h2 { color: #2874a6 !important; }  /* 蓝 */
.md-typeset h3 { color: #17a589 !important; }  /* 青绿 */
.md-typeset h4 { color: #d4ac0d !important; }  /* 金黄 */
.md-typeset h5 { color: #8e44ad !important; }  /* 紫 */
.md-typeset h6 { color: #7f8c8d !important; }  /* 灰 */
```

**暗色模式适配：**
```css
[data-md-color-scheme="slate"] .md-typeset h1 { color: #5dade2 !important; }
[data-md-color-scheme="slate"] .md-typeset h2 { color: #85c1e9 !important; }
/* ... */
```

### 顶栏打字机动画

```css
.md-header__title .md-ellipsis {
  width: 0;
  animation: headerTyping 2s steps(14) forwards;
}

@keyframes headerTyping {
  from { width: 0; }
  to { width: 16ch; }   /* ch = 字符宽度单位 */
}
```

**调整方法：**
- 修改 `steps(14)` 和 `width: 16ch` 中的数字（应与站点名称字符数一致）
- 修改 `2s` 改变打字速度

### 首页 Hero 区域

```html
<!-- docs/index.md 中 -->
<div class="hero-container">
  <h1 class="hero-title">Welcome to Espacio Vacío.</h1>
  <p class="hero-subtitle">副标题</p>
  <div class="hero-links">
    <a href="Digital_backend/" class="hero-btn">Digital IC</a>
    <a href="Lacan/" class="hero-btn">Lacan</a>
    <!-- ... -->
  </div>
</div>
```

**Hero 动画效果：**
1. 标题打字机效果（2秒）
2. 副标题淡入（延迟2.2秒）
3. 按钮淡入（延迟2.8秒）

**调整方法：**
- 修改 `hero-title` 中的文字改变标题
- 修改 `heroTyping` 的 `steps()` 和 `ch` 值适配新标题长度
- 修改延迟时间调整动画顺序

---

## 自定义 JavaScript 详解

### toc.js — 目录高亮和折叠

**功能：**
- 使用 `IntersectionObserver` 监听标题进入视口
- 自动高亮右侧目录中对应的条目
- 点击目录项平滑滚动到标题位置

**工作原理：**
1. 遍历右侧目录中的所有一级链接
2. 为每个链接找到对应的标题元素
3. 使用 `IntersectionObserver` 监听标题可见性
4. 当标题进入视口时，高亮对应目录项

### fold_toc.css — 目录折叠

```css
/* 默认隐藏子目录 */
.md-sidebar--secondary .md-nav > .md-nav__list > li > a + .md-nav {
  display: none;
}

/* 当前标题的子目录展开 */
.md-sidebar--secondary .md-nav > .md-nav__list > li > a.is-active + .md-nav {
  display: block;
}
```

### pdf-nav.js — PDF 页码跳转

**功能：** 从其他页面跳转到本页面的 PDF 指定页码。

**工作原理：**
```javascript
document.addEventListener("DOMContentLoaded", function () {
  var params = new URLSearchParams(window.location.search);
  var pdfName = params.get("pdf");      // 读取 ?pdf=xxx
  var pageNum = parseInt(params.get("page"));  // 读取 &page=N
  if (pdfName && pageNum) {
    setTimeout(function () {
      var iframe = document.getElementById("pdf-" + pdfName);
      if (iframe) {
        iframe.contentWindow.postMessage({ type: "goToPage", page: pageNum }, "*");
      }
    }, 2000);  // 等待 PDF 加载
  }
});
```

**使用方法：**
```html
<!-- 从其他页面跳转 -->
<a href="/Lacan/因为/?pdf=Absolute Recoil&page=651">跳到绝对反冲第651页</a>
```

---

## PDF 嵌入功能详解

### 架构概览

```
docs/
├── pdfjs/              # PDF.js 查看器（从 mozilla/pdf.js 下载）
│   ├── web/
│   │   ├── viewer.html # ← 需要修改
│   │   ├── viewer.mjs
│   │   └── viewer.css
│   └── build/
│       ├── pdf.mjs
│       └── pdf.worker.mjs
└── pdf/                # PDF 文件存放目录
    ├── 绝对反冲.pdf
    ├── 视差之见.pdf
    └── ...
```

### 步骤 1：下载 PDF.js

从 [PDF.js Releases](https://github.com/nicolo-ribaudo/pdf.js/releases) 下载预构建版本，解压到 `docs/pdfjs/`。

### 步骤 2：修改 viewer.html

在 `docs/pdfjs/web/viewer.html` 的 `</body>` 前添加 postMessage 监听器：

```html
<script>
  window.addEventListener("message", function(event) {
    if (event.data && event.data.type === "goToPage") {
      PDFViewerApplication.page = event.data.page;
    }
  });
</script>
```

**⚠️ 重要：** 必须修改 `docs/pdfjs/web/viewer.html`，不是项目根目录的 `pdfjs/web/viewer.html`。

### 步骤 3：嵌入 PDF

#### 基本嵌入

```html
<iframe 
    src="../../pdfjs/web/viewer.html?file=../../pdf/文件名.pdf&zoom=page-width" 
    width="100%" 
    height="750px" 
    frameborder="0" 
    style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>
```

**路径说明：**
- `../../pdfjs/web/viewer.html` — 从当前 md 文件到 viewer.html 的相对路径
- `../../pdf/文件名.pdf` — 从 viewer.html 到 PDF 文件的相对路径
- 如果 md 文件在 `docs/Lacan/` 下，viewer 在 `docs/pdfjs/` 下，PDF 在 `docs/pdf/` 下，都需要 `../../`

#### 带 id 的嵌入（用于页码跳转）

```html
<iframe 
    id="pdf-Absolute Recoil"
    src="../../pdfjs/web/viewer.html?file=../../pdf/绝对反冲.pdf#page=2&zoom=page-width" 
    width="100%" 
    height="750px" 
    frameborder="0" 
></iframe>
```

**id 命名规则：** 建议使用 `pdf-` 前缀 + 英文名，如 `pdf-Absolute Recoil`。

#### 带初始页码的嵌入

```html
<!-- 初始跳转到第 2 页 -->
src="../../pdfjs/web/viewer.html?file=../../pdf/xxx.pdf#page=2&zoom=page-width"

<!-- 初始跳转到第 10 页 -->
src="../../pdfjs/web/viewer.html?file=../../pdf/xxx.pdf#page=10&zoom=page-width"
```

**⚠️ 注意：** 如果需要通过 URL 参数控制页码跳转，初始 src 中**不要**加 `#page=2`，否则会干扰跳转。

### 步骤 4：同页面页码跳转

```html
<a href="javascript:void(0)" 
   onclick="document.getElementById('pdf-Absolute Recoil')
     .contentWindow.postMessage({type:'goToPage', page:651}, '*')">
  跳到绝对反冲第651页
</a>
```

**原理：**
1. 通过 `getElementById` 获取 iframe 元素
2. 通过 `contentWindow.postMessage` 向 iframe 发送消息
3. viewer.html 中的监听器接收消息，调用 `PDFViewerApplication.page = pageNum`

### 步骤 5：跨页面页码跳转

**源页面（如 about/index.md）：**
```html
<a href="/Lacan/因为/?pdf=Absolute Recoil&page=651">跳到绝对反冲第651页</a>
```

**目标页面（因为.md）：**
- iframe 必须有对应的 id：`id="pdf-Absolute Recoil"`
- `pdf-nav.js` 会自动读取 URL 参数并发送 postMessage

**URL 参数格式：**
```
/目标页面路径/?pdf=iframe的id后半部分&page=页码
```

例如 `id="pdf-Absolute Recoil"`，URL 中写 `pdf=Absolute Recoil`。

### PDF 嵌入完整示例

```markdown
### 绝对反冲：

<iframe 
    id="pdf-Absolute Recoil"
    src="../../pdfjs/web/viewer.html?file=../../pdf/绝对反冲.pdf#page=2&zoom=page-width" 
    width="100%" 
    height="750px" 
    frameborder="0" 
    style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

### 延迟的否定：

<a href="javascript:void(0)" 
   onclick="document.getElementById('pdf-Tarrying')
     .contentWindow.postMessage({type:'goToPage', page:46}, '*')">
  跳到第46页
</a>

<iframe 
    id="pdf-Tarrying"
    src="../../pdfjs/web/viewer.html?file=../../pdf/延迟的否定.pdf&zoom=page-width" 
    width="100%" 
    height="750px" 
></iframe>
```

---

## 音乐播放功能

将 MP3 文件放在 `docs/songs/` 目录下，在 md 文件中使用 HTML `<audio>` 标签嵌入：

```html
<audio controls src="../../songs/歌名.mp3"></audio>
```

**注意路径：** src 路径需要比同级 md 文件多向上一级（因为构建后 URL 结构变化）。

---

## 常用命令

| 命令 | 说明 |
|------|------|
| `mkdocs new [目录名]` | 创建新项目 |
| `mkdocs serve` | 启动本地预览服务器 |
| `mkdocs build` | 构建静态站点到 `site/` |
| `mkdocs gh-deploy` | 构建并部署到 GitHub Pages |
| `mkdocs -h` | 查看帮助 |

---

## 常见问题

### 1. WARNING: reference not found

```
WARNING - A reference to 'Digital_backend/python.md' is included in the 'nav' 
configuration, which is not found in the documentation files.
```

**原因：** `nav` 中引用的文件不存在于 `docs/` 目录下。

**解决：** 创建对应文件，或从 `nav` 中移除该项。

### 2. PDF 页面 404 错误

```
"GET /Lacan/因为/?pdf=xxx&page=651 HTTP/1.1" code 404
```

**原因：** URL 路径错误。

**解决：**
- 确认路径正确：`/Lacan/因为/`（带尾部斜杠）
- MkDocs 默认使用 `use_directory_urls: true`，`因为.md` → `因为/index.html`
- URL 末尾必须加 `/`

### 3. PDF 页码跳转不生效

**排查步骤：**
1. 确认 `docs/pdfjs/web/viewer.html` 已添加 postMessage 监听器
2. 确认 iframe 有正确的 `id` 属性
3. 确认 id 与 URL 参数或 onclick 中的名称匹配
4. 检查浏览器控制台是否有 JS 错误
5. 确认 `pdf-nav.js` 已在 `mkdocs.yml` 的 `extra_javascript` 中

### 4. 样式不生效

**排查步骤：**
1. 确认 CSS 文件在 `docs/css/` 目录下
2. 确认 `mkdocs.yml` 中 `extra_css` 已包含对应文件
3. 清除浏览器缓存（Ctrl+Shift+R）

### 5. 视频/音频路径错误

嵌入视频/音频时，`src` 路径需要比同级 md 文件**多向上一级**。

```javascript
// md 文件在 docs/Digital_backend/reference.md
// 媒体文件在 docs/pdf/xxx.pdf
// 路径需要 ../../pdf/xxx.pdf
```

---

## 部署到 GitHub Pages

1. 确保代码已推送到 GitHub 仓库

2. 运行部署命令：
   ```bash
   mkdocs gh-deploy
   ```

3. 访问 `https://jhbit.github.io/Mkdocs-Page/`

**注意：** 如果仓库名不是 `username.github.io`，访问路径会包含仓库名：
`https://jhbit.github.io/Mkdocs-Page/`

---

## License

MIT
