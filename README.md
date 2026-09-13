# 余恩泽学术个人主页

这是一个可直接部署到 GitHub Pages 的纯静态网站，无需安装任何构建工具。

## 部署方式

1. 将 `index.html`、`data/` 和 `assets/` 完整复制到 `enzeyu.github.io` 仓库根目录。
2. 提交并推送到 GitHub Pages 使用的分支，一般为 `main` 或 `master`。
3. 在 GitHub 打开 **Settings → Pages**，选择 **Deploy from a branch**，并选择仓库根目录。

## 新增或修改论文

论文信息统一保存在 `data/publications.js`。修改论文题目、作者、年份、会议、级别或链接时，只需编辑这个文件。

新增带 PDF 的论文需要两步：

1. 将 PDF 放入 `assets/papers/`，例如 `paper12.pdf`。
2. 在 `data/publications.js` 的 `window.PUBLICATIONS` 数组中复制一条记录并修改：

```js
{
  tag: "会议简称 · 级别",
  year: "2027",
  title: "论文英文题目",
  authors: "Enze Yu, Other Authors",
  venue: "期刊或会议全称, 2027",
  link: "assets/papers/paper12.pdf"
}
```

如果没有 PDF 或外部链接，把 `link` 写成空字符串 `""`。仅向文件夹中添加 PDF 不会自动显示论文，因为纯静态 GitHub Pages 无法自动读取服务器目录。

## 访客统计

页脚已经接入不蒜子的站点统计，会显示独立访客数（UV）和页面访问量（PV）。统计在网站部署到 `enzeyu.github.io` 后生效；直接在电脑上双击打开网页或使用本地预览时，可能显示“暂未加载”，这是正常现象。

访客数据从启用统计后开始累积，无法补回启用前的历史访问量。如不希望使用第三方统计，可删除 `index.html` 中带有 `busuanzi` 的统计区域和脚本。

## 修改其他信息

- 个人简介、教育背景、研究方向、项目、荣誉和学术服务：编辑 `index.html` 中对应中文内容。
- 更换头像：替换 `assets/profile.png`，保持文件名不变。
- 更新简历：替换 `assets/resume.pdf`，保持文件名不变。
- 更新分享预览图：替换 `assets/og.png`，保持文件名不变。

页面不包含“科研观点”“校园经历”和“工作经历”栏目。
