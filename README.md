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

## 本次内容更新（2026-11-07）

- 论文共 7 篇：ICIBA 第一作者录用、ITOEC 第三作者录用；PRCV 第二作者、CMIG 第一作者、Measurement 第一作者、TREL 总第三作者／学生第二作者、JMI 第一作者在投。
- 状态和作者顺序采用本人最新确认；Measurement 对应原 TII 稿件、TREL 对应原 TIM 稿件。保留本人提供的 TREL、JMI 缩写，不推断期刊全名。
- 论文条目含正式题名、可核实的作者列表、作者身份、研究摘要与可展开的方法细节；匿名 PRCV 稿件不补造完整作者列表，也不链接匿名评审仓库。
- 展示 10 项研究与工程经历、3 项创新训练项目，以及经材料区分状态的授权专利与公开申请；软件设计材料不作已获软著登记声明。
- 奖学金次数采用较新的材料：4 次校级一等奖学金、2 次省政府奖学金。综合测评专业第一仅指大一学年，不等同 GPA 排名。
- 联系邮箱已确认：24061733@hdu.edu.cn。
- 稿件实验结果来自其各自研究设置，未独立复核；医学图像研究保留外部验证等限制，不作临床性能承诺。雷达项目采用当前稿件的 RK3588 描述，不混用旧版 Jetson 指标。
- 未将原始稿件、审稿或录用通知、身份证件、个人表格、证书扫描件、私人通信和受试者级数据放入公开站点。

## 部署与权限

仓库保存完整静态网页文件。发布源应设为 `main` 分支、`/(root)` 目录；以 Settings → Pages 的部署状态为准。页面不依赖 Sites 或任何额外托管服务。

部署方式已对照 GitHub 官方说明核对：[GitHub Pages 站点类型](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)、[从分支发布站点](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。
