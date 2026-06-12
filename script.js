// 项目详情数据
// 你可以在这里修改每个项目的详细内容
const projectData = {
    1: {
        title: "校园绿化管理小程序",
        tag: "原型设计 · 前端开发",
        content: `
            <div style="text-align:center; margin-bottom:24px; background:#f1f5f9; border-radius:12px; padding:20px;">
                <img src="photo/demo.gif" alt="项目演示GIF" style="max-width:100%; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
                <p style="color:var(--text-secondary); font-size:0.85rem; margin-top:12px;">👆 项目功能演示（GIF自动播放）</p>
            </div>
            <h3>背景与问题</h3>
            <p>在调研中发现，校园绿化管理长期依赖纸质档案和人工记忆，植物信息分散且静态化，师生和游客难以获取准确的植被分布与生态资讯，后勤部门也面临数据随人员流动而丢失的风险。</p>
            
            <h3>我的职责</h3>
            <p>我负责整个小程序前端及管理后台的开发，使用 Taro + React 技术栈实现了互动式地图、植物资源库、公告发布与搜索、用户权限管理等核心模块，并完成前后端 API 对接与多平台适配。</p>
            
            <h3>过程与难点</h3>
            <p>开发过程中最大的挑战是同时适配微信小程序与 H5 双端。由于两个平台的网络请求 API 与静态资源引用机制不同，我封装了 HttpRequest 层，在 H5 端使用 axios、在小程序端使用 Taro.request，并统一拦截处理 Token 与 401 跳转；另外，地图弹窗中的 CoverView 组件在双端的层级渲染表现不一致，我通过调整弹窗触发逻辑与地图标记的 callout 配置解决了覆盖遮挡问题。在对接后端分页接口时，我还需要将 Spring Boot 返回的 { content, totalElements } 结构转换为前端无限滚动列表可用的格式，并针对搜索场景加了 500ms 防抖，避免频繁请求。</p>
            
            <h3>成果与反思</h3>
            <p>我独立交付了包含地图交互、管理后台、公告与植物库在内的完整前端系统，实现了从需求对接到真实 API 对接的全流程落地。这次经历让我深刻体会到跨端开发中"平台差异"的隐蔽性，后续我会在项目初期就建立更完善的双端自动化测试覆盖。</p>
            
            <h3>相关链接</h3>
            <p><a href="https://modao.cc/proto/NwGYhccGsswugzAERvYiS/sharing?view_mode=read_only&screen=rbpTdwxzmGG86uF9y" target="_blank">🔵 点击体验原型交互</a></p>
        `
    },
    2: {
        title: "更多项目",
        tag: "待补充",
        content: `
            <div class="placeholder-img">项目截图</div>
            <h3>项目背景</h3>
            <p>此处可补充你的课程设计、比赛项目、实习作品或其他个人项目。</p>
            
            <h3>建议补充方向</h3>
            <p>如果你有其他作品（如网页设计、数据库课程项目、运营策划案等），可以替换此卡片内容，让作品集更丰富。</p>
            
            <h3>相关链接</h3>
            <p><a href="#" target="_blank">项目链接</a></p>
        `
    },
    3: {
        title: "拼豆小程序 — 图纸扫描与库存管理",
        tag: "前端开发 · AI 应用",
        content: `
            <div class="placeholder-img">扫描功能演示图/GIF</div>
            <h3>背景与问题</h3>
            <p>拼豆玩家拿到图纸后，需手工抄写底部色号表格的"色号-数量"清单，耗时易错。且不同商家使用不同色号体系（MARD、CoCo 等），库存管理混乱。因此我开发了微信小程序，用 AI 图像识别自动提取色号需求，并与个人库存联动。</p>
            
            <h3>我的职责</h3>
            <p><strong>前端</strong>：图纸上传页（相册/拍照、裁剪框选）、扫描结果预览（逐条编辑删除）、库存对比弹窗（缺货量降序）、保存计划（可扣减库存）、品牌库存管理页（创建品牌、批量初始化、低库存预警）。</p>
            <p><strong>数据层</strong>：设计 <code>scanPlans</code>、<code>inventory</code>、<code>aiConfig</code>、<code>customBrands</code> 本地存储结构；封装 <code>utils/aiService.js</code>，实现图片压缩 → Base64 → Prompt → Kimi API → JSON 提取的 pipeline；编写 <code>utils/api.js</code> 智能兼容层，后端不可用时自动降级到本地存储，业务代码零改动。</p>
            
            <h3>过程与难点</h3>
            <p><strong>难点一：AI 色号识别准确率</strong></p>
            <p>Kimi 模型对密集小字体识别不理想：<code>A23(5)</code> 误读为 181，155 误读为 15，相邻色号串行。测试 15 张图纸 11 张出错。我从三层优化：Prompt 增加读取顺序和混淆数字提醒；前端增加裁剪框选，Canvas 导出压缩；产品层增加警示文案，支持逐条修正，并加入 429 限流指数退避重试（3→6→12→24→48 秒，最多 5 次）。</p>
            <p><strong>难点二：前后端路线不一致</strong></p>
            <p>项目中期后端接口调整较频繁，尚未完全稳定，为了保证功能可用性，我重写 <code>api.js</code>，在请求失败时按 URL 路径执行本地存储 fallback，并将本地数据包装为后端标准格式 <code>{ code: 200, data: ... }</code> 返回。所有页面无需修改，后端启动后自动切换。</p>
            
            <h3>成果与反思</h3>
            <p>支持 4 种色号体系识别、自定义品牌（6 种颜色模式）、库存对比联动扣减、历史计划管理。本地存储保证离线可用，AI 请求 120 秒超时，429 限流自动重试。</p>
            <p>收获：理解了"图像处理→数据结构→前端交互"闭环；体会到多人协作中技术路线不一致的风险，"中间层兼容"思路可复用。</p>
            <p>不足：密集图纸准确率仍有提升空间，后续可尝试 OCR 预处理 + 大模型校验的组合方案。</p>
            
            <h3>相关链接</h3>
            <p><a href="#" target="_blank">功能演示（请替换）</a></p>
        `
    },
    4: {
        title: "招聘岗位数据采集与技能共现网络分析",
        tag: "数据分析",
        content: `
            <div class="placeholder-img">数据分析可视化图表</div>
            <h3>背景与问题</h3>
            <p>为分析招聘市场数据，爬取实习僧平台岗位信息，构建技能共现网络并开展社区检测，揭示产业人才需求规律。</p>
            
            <h3>我的职责</h3>
            <p>我负责项目中的<strong>数据采集、清洗与技能网络建模分析</strong>环节：开发爬虫获取岗位数据，设计清洗规则处理异常值，基于技能标签构建共现网络并使用 Louvain 算法进行社区检测。</p>
            
            <h3>过程与难点</h3>
            <p><strong>难点一：反爬机制</strong></p>
            <p>实习僧列表页使用自定义字体加密（将数字映射至 Unicode 私用区 U+E000-U+F8FF），导致职位名与薪资出现乱码。我通过正则清洗掉乱码，再对详情页进行多线程补爬（5 线程并发、7.3 分钟完成 2217 条），技能与薪资覆盖率均提升至 86% 以上。</p>
            <p><strong>难点二：数据源受限</strong></p>
            <p>51job 跨页重复率极高（去重后仅 244 条），BOSS/拉勾/智联均被 WAF 封锁，最终 1912 条有效记录全部来自实习僧，89.2% 为实习岗。我在分析中如实说明样本结构并讨论其局限性。</p>
            <p><strong>数据清洗</strong></p>
            <p>薪资统一折算为月薪（日薪 × 22 天，年薪 ÷ 12），城市标准化，最终得到 1912 条结构化记录（86.4% 含技能信息，76.8% 含月薪）。</p>
            <p><strong>技能网络</strong></p>
            <p>基于 jieba 与 150+ 自定义技能词典，从职位名称与描述中提取技能标签，构建 59 节点、274 条边的技能共现网络，使用 Louvain 算法检测出 11 个社区，揭示技能聚类规律。</p>
            
            <h3>核心发现</h3>
            <p>中心性分析显示，Python 横跨数据分析、算法与后端等多个社区，是连接不同技术栈的"桥梁技能"；SQL 与 Excel 出现频率最高，构成岗位描述中的基础能力底座。Louvain 检测出的 11 个社区中，"数据分析"社区以 Python-SQL-Excel 为核心，"前端开发"社区要求 React-Vue-Node 组合，"算法"社区则围绕 Python-TensorFlow-PyTorch 聚集。</p>
            <p>城市层面，北京岗位技术栈组合更丰富，深圳/上海实习岗平均月薪高于中西部城市，但核心技能要求重叠度较高，说明地域差异更多体现在薪资与岗位密度，而非技术栈本身。</p>
            
            <h3>成果与反思</h3>
            <p>交付 1912 条有效招聘数据、带技能标签的结构化数据集，以及可复用的多线程补爬框架。技能共现网络揭示了技术栈聚类规律，为产业人才需求分析提供了实证依据。</p>
            <p>反思：样本仅覆盖实习僧平台且 89% 为实习岗，社招市场可能存在差异；后续可加入时间维度追踪技能需求变化。</p>
            
            <h3>相关链接</h3>
            <p><a href="#" target="_blank">分析报告（请替换）</a> | <a href="#" target="_blank">代码仓库</a> | <a href="#" target="_blank">数据集样本</a></p>
        `
    }
};

// DOM 元素
const modal = document.getElementById('projectModal');
const modalBody = modal.querySelector('.modal-body');
const modalClose = modal.querySelector('.modal-close');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// 项目卡片点击事件
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.dataset.project;
        const data = projectData[projectId];
        
        if (data) {
            modalBody.innerHTML = `
                <span class="project-tag" style="display: inline-block; margin-bottom: 12px;">${data.tag}</span>
                <h2>${data.title}</h2>
                ${data.content}
            `;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            initCarousels();
        }
    });
});

// 关闭弹窗
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC 键关闭弹窗
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// 移动端菜单切换
menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    
    if (navLinks.style.display === 'flex') {
        navLinks.style.position = 'absolute';
        navLinks.style.top = '64px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.flexDirection = 'column';
        navLinks.style.background = 'white';
        navLinks.style.padding = '16px 24px';
        navLinks.style.borderBottom = '1px solid var(--border-color)';
        navLinks.style.gap = '16px';
        navLinks.style.boxShadow = 'var(--shadow)';
    }
});

// 点击导航链接后关闭移动端菜单
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// 轮播图初始化
function initCarousels() {
    document.querySelectorAll('.carousel').forEach(carousel => {
        if (carousel.dataset.initialized) return;
        carousel.dataset.initialized = 'true';
        
        const track = carousel.querySelector('.carousel-track');
        const slides = carousel.querySelectorAll('img');
        const prev = carousel.querySelector('.carousel-prev');
        const next = carousel.querySelector('.carousel-next');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        let current = 0;
        
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goTo(i));
            dotsContainer.appendChild(dot);
        });
        
        function goTo(index) {
            current = index;
            track.style.transform = `translateX(-${current * 100}%)`;
            dotsContainer.querySelectorAll('span').forEach((d, i) => {
                d.classList.toggle('active', i === current);
            });
        }
        
        prev.addEventListener('click', () => {
            goTo((current - 1 + slides.length) % slides.length);
        });
        
        next.addEventListener('click', () => {
            goTo((current + 1) % slides.length);
        });
    });
}

// 导航栏滚动效果
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});
