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
        title: "拼豆小程序 — 图纸扫描功能",
        tag: "前端开发",
        content: `
            <div class="placeholder-img">扫描功能演示图/GIF</div>
            <h3>项目背景</h3>
            <p>[请填写：拼豆是什么？为什么要做图纸扫描功能？]</p>
            
            <h3>核心功能</h3>
            <p>实现图片到像素图纸的自动转换，支持颜色识别、网格生成、尺寸调整等功能，降低拼豆爱好者的图纸制作门槛。</p>
            
            <h3>技术实现</h3>
            <p>[请填写：扫描识别用了什么技术？是调用现有 API 还是自研算法？前端如何处理图像？]</p>
            
            <h3>我的职责</h3>
            <p>负责图纸扫描核心功能的前端开发与交互设计，确保识别流程顺畅、结果准确可用。</p>
            
            <h3>项目难点与解决</h3>
            <p>[请填写：图像识别准确率如何保证？性能如何优化？用户交互怎么设计的？]</p>
            
            <h3>相关链接</h3>
            <p><a href="#" target="_blank">功能演示（请替换）</a> | <a href="#" target="_blank">代码仓库</a></p>
        `
    },
    4: {
        title: "招聘岗位数据爬虫与分析",
        tag: "数据分析",
        content: `
            <div class="placeholder-img">数据分析可视化图表</div>
            <h3>项目背景</h3>
            <p>为深入了解信管专业相关岗位的市场需求，爬取实习僧、51job 等招聘平台数据，进行系统性分析。</p>
            
            <h3>数据来源</h3>
            <p>实习僧、51job 等平台，共计爬取 2000+ 条岗位信息。</p>
            
            <h3>技术工具</h3>
            <p>Python (Requests/Scrapy)、Pandas (数据清洗)、Matplotlib/Tableau (可视化)、Jieba (文本分析)</p>
            
            <h3>分析维度</h3>
            <p>[请填写：你分析了哪些维度？如岗位数量趋势、薪资分布、技能要求词频、地域分布、学历要求等]</p>
            
            <h3>关键发现</h3>
            <p>[请填写：分析得出了什么结论？比如哪些技能最热门、哪些城市机会最多等]</p>
            
            <h3>数据清洗过程</h3>
            <p>[请填写：原始数据有什么问题？你是怎么清洗的？处理了多少异常数据？]</p>
            
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
