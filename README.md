# 张航宁 / Hangning Zhang — Academic Homepage

参考 caihanlin.com 的简洁学术排版：横向导航、学校与联系信息侧栏、手写感字体及宽留白。包含六个栏目和中英文各六个静态页面，正文无需 JavaScript 即可阅读。原单页章节链接由 main.js 兼容跳转。无需安装依赖或构建。

## 本地查看

直接用浏览器打开 `zh-cn.html` 查看简体中文版，或打开 `index.html` 查看英文版。也可在本目录执行 `python -m http.server 41873 --bind 127.0.0.1`，访问 `http://127.0.0.1:41873/zh-cn.html`。

## 上传到指定 GitHub 仓库

目标仓库：https://github.com/zhang-hn-1/zhang-hn-1.github.io

1. 解压交付的 ZIP，将全部 HTML、styles.css、main.js、favicon.svg、.nojekyll、README.md 及 assets 文件夹放在仓库根目录。请保留 assets 中的字体与许可证文件。ZIP 不应作为单个文件上传。
2. 在仓库页面选择 **Add file → Upload files**，上传并提交到 `main`。如果空仓库没有 Add file，可点 **uploading an existing file**。
3. 打开 **Settings → Pages → Build and deployment**，Source 选择 **Deploy from a branch**，Branch 选择 **main**，目录选择 **/(root)**，点击 Save。
4. 等待 Pages 部署成功，以 Settings → Pages 中显示的最终地址为准。

当前仓库名与账号主页要求一致。启用 GitHub Pages 后，英文版地址为：

`https://zhang-hn-1.github.io/`

简体中文版地址为 `https://zhang-hn-1.github.io/zh-cn.html`。所有本地资源均使用相对路径。

## 页面与资源

| 栏目 | 英文版 | 简体中文版 |
| --- | --- | --- |
| 主页 | index.html | zh-cn.html |
| 论文 | publications.html | publications-zh.html |
| 项目 | projects.html | projects-zh.html |
| 经历与专利 | experience.html | experience-zh.html |
| 荣誉 | awards.html | awards-zh.html |
| 服务与技能 | services.html | services-zh.html |

- 修改正文时请同步对应的两种语言页面。
- styles.css 控制排版；main.js 兼容旧版单页的章节书签。
- 字体为 LXGW WenKai 的本站字符子集，内部名称 Academic Script Subset，采用 SIL Open Font License 1.1。原作者项目：https://github.com/lxgw/LxgwWenKai；许可证见 assets/OFL-WenKai.txt。子集仅覆盖当前页面字符，添加新字时可重新生成子集，或由系统楷体回退显示。
- 视觉参考：https://caihanlin.com/。未使用参考站的个人照片、机构图标、个人介绍或研究内容。

## 本次内容更新（2026-11-07）

- 论文共 7 篇：ICIBA 第一作者录用、ITOEC 第三作者录用；PRCV 第二作者、CMIG 第一作者、Measurement 第一作者、TREL 总第三作者／学生第二作者、JMI 第一作者在投。
- 状态和作者顺序采用本人最新确认；Measurement 对应原 TII 稿件、TREL 对应原 TIM 稿件。保留本人提供的 TREL、JMI 缩写，不推断期刊全名。
- 论文条目含正式题名、可核实的作者列表、作者身份、研究摘要与可展开的方法细节；匿名 PRCV 稿件不补造完整作者列表，也不链接匿名评审仓库。
- 项目页保留机器人、智能车、OminiBerry 与 CAD 四项工程经历；论文相关研究统一放于论文页。另展示 3 项创新训练项目，以及经材料区分状态的授权专利与公开申请；软件设计材料不作已获软著登记声明。
- 奖学金次数采用较新的材料：4 次校级一等奖学金、2 次省政府奖学金。综合测评专业第一仅指大一学年，不等同 GPA 排名。奖学金条目置顶，其他奖项按国家级、省级（含区域赛）、校级排序，同级按特等、一等、二等、三等排列。
- 联系邮箱已确认：24061733@hdu.edu.cn。
- 稿件实验结果来自其各自研究设置，未独立复核；医学图像研究保留外部验证等限制，不作临床性能承诺。雷达项目采用当前稿件的 RK3588 描述，不混用旧版 Jetson 指标。
- 未将原始稿件、审稿或录用通知、身份证件、个人表格、证书扫描件、私人通信和受试者级数据放入公开站点。

## 部署与权限

仓库保存完整静态网页文件。发布源应设为 `main` 分支、`/(root)` 目录；以 Settings → Pages 的部署状态为准。页面不依赖 Sites 或任何额外托管服务。

部署方式已对照 GitHub 官方说明核对：[GitHub Pages 站点类型](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)、[从分支发布站点](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。
