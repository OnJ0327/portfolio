// 项目详情数据
// 你可以在这里修改每个项目的详细内容
const projectData = {
    1: {
        title: "大创项目小程序原型设计",
        tag: "产品设计",
        content: `
            <div class="placeholder-img">项目截图/原型展示图</div>
            <h3>项目背景</h3>
            <p>[请填写：这个项目是解决什么问题的？目标用户是谁？]</p>
            
            <h3>我的职责</h3>
            <p>独立完成小程序全部页面的原型设计，包括信息架构梳理、页面流程设计、交互细节打磨。</p>
            
            <h3>设计过程</h3>
            <p>[请填写：你做了哪些页面？使用了什么工具（如 Axure/Figma/墨刀）？设计中有哪些思考和迭代？]</p>
            
            <h3>关键成果</h3>
            <p>[请填写：完成了多少个页面？是否获得了大创立项/奖项？用户反馈如何？]</p>
            
            <h3>相关链接</h3>
            <p><a href="#" target="_blank">原型链接（请替换）</a> | <a href="#" target="_blank">项目文档</a></p>
        `
    },
    2: {
        title: "小程序前端页面开发",
        tag: "前端开发",
        content: `
            <div class="placeholder-img">项目截图/页面效果展示</div>
            <h3>项目背景</h3>
            <p>[请填写：这是什么类型的小程序？你在团队中扮演什么角色？]</p>
            
            <h3>技术栈</h3>
            <p>[请填写：使用了什么技术？如微信小程序原生/Taro/uni-app，以及相关的 UI 库或框架]</p>
            
            <h3>我的职责</h3>
            <p>负责小程序前端页面的开发与实现，包括页面布局、交互逻辑、数据对接等。</p>
            
            <h3>开发亮点</h3>
            <p>[请填写：遇到了什么技术难点？如何解决的？有没有做性能优化？]</p>
            
            <h3>相关链接</h3>
            <p><a href="#" target="_blank">代码仓库（请替换）</a> | <a href="#" target="_blank">项目演示</a></p>
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
