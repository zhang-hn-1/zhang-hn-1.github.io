# 张航宁 / Hangning Zhang — Academic Homepage

白底蓝色链接、零依赖的个人学术主页，包含独立英文版 `index.html` 和独立简体中文版 `zh-cn.html`。点击右上角语言链接切换版本；两种语言均无需 JavaScript 即可完整显示。无需安装依赖或构建。

## 本地查看

直接用浏览器打开 `zh-cn.html` 查看简体中文版，或打开 `index.html` 查看英文版。也可在本目录执行 `python -m http.server 41873 --bind 127.0.0.1`，访问 `http://127.0.0.1:41873/zh-cn.html`。

## 上传到指定 GitHub 仓库

目标仓库：https://github.com/zhang-hn-1/zhang-hn-1.github.io

1. 解压交付的 ZIP，将 `index.html`、`zh-cn.html`、`styles.css`、`main.js`、`favicon.svg`、`.nojekyll` 和 `README.md` 放在仓库根目录。ZIP 不应作为单个文件上传。
2. 在仓库页面选择 **Add file → Upload files**，上传并提交到 `main`。如果空仓库没有 Add file，可点 **uploading an existing file**。
3. 打开 **Settings → Pages → Build and deployment**，Source 选择 **Deploy from a branch**，Branch 选择 **main**，目录选择 **/(root)**，点击 Save。
4. 等待 Pages 部署成功，以 Settings → Pages 中显示的最终地址为准。

当前仓库名与账号主页要求一致。启用 GitHub Pages 后，英文版地址为：

`https://zhang-hn-1.github.io/`

简体中文版地址为 `https://zhang-hn-1.github.io/zh-cn.html`。所有本地资源均使用相对路径。

## 修改内容

- `index.html`：英文版；`zh-cn.html`：独立简体中文版。更新内容时请同步修改两个文件；英文页面保留的 `data-zh` 为初始中文文案参考，不会自动覆盖独立中文版。
- `styles.css`：配色、字体、桌面和手机布局。
- `main.js`：随滚动更新目录状态。语言切换通过两个静态网页之间的链接完成，不依赖浏览器语言偏好。
- `favicon.svg`：姓名缩写图标。

## 内容核对

- 内容来源为本人提供的简历；研究成果与实验数据未经独立审查。
- 姓名英文拼写暂用 Hangning Zhang，如需其他拼写，请修改标题、页首、侧栏、页脚及脚本中的标题。
- 邮箱已按本人确认更新为 `24061733@hdu.edu.cn`；中英文页面的显示文本与邮件链接均已同步。
- L-RDTNet 标注为 IEEE TII「在投」，没有作为已接收/已发表论文。
- 医学图像项目的简历标题写「CMIG 在投」，正文写「正在撰写」，存在状态冲突。因此保守标注「研究进行中」，未展示期刊名，待本人确认。
- 简历提及国际会议第一作者论文，但没有题名、作者列表、年份和链接，暂不创建论文题录。提供正式题录后可添加。
- 原始简历含手机号、出生年月、政治身份；这些信息以及原 PDF 均未放入站点。未制作虚构论文 PDF、CV、Scholar 或代码链接。
- 导师英文姓名为拼音写法，建议公开前核对各位导师惯用的英文署名。

## 部署与权限

仓库保存完整静态网页文件。发布源应设为 `main` 分支、`/(root)` 目录；以 Settings → Pages 的部署状态为准。页面不依赖 Sites 或任何额外托管服务。

部署方式已对照 GitHub 官方说明核对：[GitHub Pages 站点类型](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)、[从分支发布站点](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。
