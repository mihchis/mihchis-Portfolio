// Language translations
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        
        // Home page
        hero_greeting: "Hello, I'm",
        hero_name: "Nguyen Le Minh Tri",
        hero_title: "Manual Tester",
        hero_description: "I am a passionate Manual Tester with experience in functional testing, regression testing, and integration testing. I have worked with various testing tools and methodologies to ensure software quality.",
        hero_cta: "View My Work",
        skills_title: "My Skills",
        skills_description: "Here are some of my key skills and areas of expertise in software testing.",
        skill_testing: "Testing",
        skill_testing_desc: "Functional Testing, Regression Testing, Integration Testing, UI/UX Testing, Mobile Testing",
        skill_tools: "Bug Tracking Tools",
        skill_tools_desc: "Jira, ZenDao, Redmine, Azure",
        skill_api: "API & Database",
        skill_api_desc: "Postman, Basic SQL",
        
        // About page
        about_title: "About Me",
        about_description: "Learn more about my background, experience, and skills in software testing.",
        personal_info: "Personal Information",
        name: "Name",
        dob: "Date of Birth",
        location: "Location",
        email: "Email",
        phone: "Phone",
        experience_title: "Work Experience",
        education_title: "Education",
        skills_title_detailed: "Skills",
        testing_skills: "Testing Skills",
        soft_skills: "Soft Skills",
        
        // Portfolio page
        portfolio_title: "My Testing Experience",
        portfolio_description: "Below are some notable testing projects I have participated in. Each project demonstrates my skills and experience in the field of software testing.",
        filter_all: "All",
        filter_web: "Web Testing",
        filter_mobile: "Mobile Testing",
        filter_functional: "Functional Testing",
        project_details: "Details",
        
        // Contact page
        contact_title: "Contact Me",
        
        // Blog page
        nav_blog: "Blog",
        blog_title: "Blog",
        blog_description: "Sharing my experiences and knowledge in software testing and quality assurance.",
        blog_read_more: "Read More",
        back_to_blog: "Back to Blog",
        author_name: "Nguyen Le Minh Tri",
        blog_post1_date: "June 15, 2023",
        blog_post1_title: "Effective Test Case Writing Techniques",
        blog_post1_excerpt: "Learn how to write effective test cases that cover all aspects of software functionality and edge cases.",
        blog_post2_date: "May 22, 2023",
        blog_post2_title: "Mobile Testing Best Practices",
        blog_post2_excerpt: "Discover the best practices for testing mobile applications across different devices and operating systems.",
        blog_post3_date: "April 10, 2023",
        blog_post3_title: "Automation vs Manual Testing: When to Use Each",
        blog_post3_excerpt: "An in-depth analysis of when to use automated testing versus manual testing in your software development lifecycle.",
        blog_post_title: "Effective Test Case Writing Techniques",
        blog_post_date: "June 15, 2023",
        blog_post_author_prefix: "by",
        previous_post: "Previous Post",
        next_post: "Next Post",
        contact_description: "Do you have a suitable software testing position or collaboration opportunity? Contact me through the form below or other channels.",
        form_name: "Full Name",
        form_email: "Email",
        form_subject: "Subject",
        form_message: "Message",
        form_submit: "Send Message",
        contact_info: "Contact Information",
        address: "Address",
        social_media: "Social Media",
        
        // Footer
        copyright: "© 2023 Nguyen Le Minh Tri. All rights reserved."
    },
    vi: {
        // Navigation
        nav_home: "Trang Chủ",
        nav_about: "Giới Thiệu",
        nav_portfolio: "Dự Án",
        nav_contact: "Liên Hệ",
        
        // Home page
        hero_greeting: "Xin chào, tôi là",
        hero_name: "Nguyễn Lê Minh Trí",
        hero_title: "Manual Tester",
        hero_description: "Tôi là một Manual Tester đầy nhiệt huyết với kinh nghiệm trong kiểm thử chức năng, kiểm thử hồi quy và kiểm thử tích hợp. Tôi đã làm việc với nhiều công cụ và phương pháp kiểm thử để đảm bảo chất lượng phần mềm.",
        hero_cta: "Xem Dự Án",
        skills_title: "Kỹ Năng Của Tôi",
        skills_description: "Dưới đây là một số kỹ năng chính và lĩnh vực chuyên môn của tôi trong kiểm thử phần mềm.",
        skill_testing: "Kiểm Thử",
        skill_testing_desc: "Kiểm thử chức năng, Kiểm thử hồi quy, Kiểm thử tích hợp, Kiểm thử UI/UX, Kiểm thử di động",
        skill_tools: "Công Cụ Theo Dõi Lỗi",
        skill_tools_desc: "Jira, ZenDao, Redmine, Azure",
        skill_api: "API & Database",
        skill_api_desc: "Postman, SQL cơ bản",
        
        // About page
        about_title: "Giới Thiệu",
        about_description: "Tìm hiểu thêm về nền tảng, kinh nghiệm và kỹ năng của tôi trong lĩnh vực kiểm thử phần mềm.",
        personal_info: "Thông Tin Cá Nhân",
        name: "Họ và tên",
        dob: "Ngày sinh",
        location: "Địa chỉ",
        
        // Blog page
        nav_blog: "Blog",
        blog_title: "Blog",
        blog_description: "Chia sẻ kinh nghiệm và kiến thức của tôi trong lĩnh vực kiểm thử và đảm bảo chất lượng phần mềm.",
        blog_read_more: "Đọc Tiếp",
        back_to_blog: "Quay Lại Blog",
        author_name: "Nguyễn Lê Minh Trí",
        blog_post1_date: "15 Tháng 6, 2023",
        blog_post1_title: "Kỹ Thuật Viết Test Case Hiệu Quả",
        blog_post1_excerpt: "Học cách viết test case hiệu quả bao quát tất cả các khía cạnh của chức năng phần mềm và các trường hợp đặc biệt.",
        blog_post2_date: "22 Tháng 5, 2023",
        blog_post2_title: "Các Phương Pháp Hay Nhất Trong Kiểm Thử Di Động",
        blog_post2_excerpt: "Khám phá các phương pháp hay nhất để kiểm thử ứng dụng di động trên các thiết bị và hệ điều hành khác nhau.",
        blog_post3_date: "10 Tháng 4, 2023",
        blog_post3_title: "Kiểm Thử Tự Động và Thủ Công: Khi Nào Nên Sử Dụng",
        blog_post3_excerpt: "Phân tích sâu về thời điểm sử dụng kiểm thử tự động và kiểm thử thủ công trong vòng đời phát triển phần mềm của bạn.",
        blog_post_title: "Kỹ Thuật Viết Test Case Hiệu Quả",
        blog_post_date: "15 Tháng 6, 2023",
        blog_post_author_prefix: "bởi",
        previous_post: "Bài Trước",
        next_post: "Bài Tiếp",
        email: "Email",
        phone: "Điện thoại",
        experience_title: "Kinh Nghiệm Làm Việc",
        education_title: "Học Vấn",
        skills_title_detailed: "Kỹ Năng",
        testing_skills: "Kỹ Năng Kiểm Thử",
        soft_skills: "Kỹ Năng Mềm",
        
        // Portfolio page
        portfolio_title: "Kinh Nghiệm Kiểm Thử Của Tôi",
        portfolio_description: "Dưới đây là một số dự án kiểm thử tiêu biểu mà tôi đã tham gia. Mỗi dự án đều thể hiện kỹ năng và kinh nghiệm của tôi trong lĩnh vực kiểm thử phần mềm.",
        filter_all: "Tất cả",
        filter_web: "Web Testing",
        filter_mobile: "Mobile Testing",
        filter_functional: "Functional Testing",
        project_details: "Chi tiết",
        
        // Contact page
        contact_title: "Liên Hệ Với Tôi",
        contact_description: "Bạn có cơ hội hợp tác hoặc vị trí kiểm thử phần mềm phù hợp? Hãy liên hệ với tôi qua form bên dưới hoặc các kênh liên lạc khác.",
        form_name: "Họ và tên",
        form_email: "Email",
        form_subject: "Chủ đề",
        form_message: "Tin nhắn",
        form_submit: "Gửi Tin Nhắn",
        contact_info: "Thông Tin Liên Hệ",
        address: "Địa chỉ",
        social_media: "Mạng xã hội",
        
        // Footer
        copyright: "© 2023 Nguyễn Lê Minh Trí. Đã đăng ký bản quyền."
    }
};

// Default language
let currentLang = 'en';

// Function to change language
function changeLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        updateContent();
        // Save language preference
        localStorage.setItem('preferredLanguage', lang);
    }
}

// Function to update content based on current language
function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // Update attributes like placeholders
    const attributeElements = document.querySelectorAll('[data-i18n-attr]');
    attributeElements.forEach(element => {
        const data = element.getAttribute('data-i18n-attr').split(',');
        if (data.length === 2) {
            const attr = data[0];
            const key = data[1];
            if (translations[currentLang][key]) {
                element.setAttribute(attr, translations[currentLang][key]);
            }
        }
    });
}

// Initialize language based on saved preference or default
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    updateContent();
    
    // Add language switcher functionality
    const langSwitchers = document.querySelectorAll('.lang-switch');
    langSwitchers.forEach(switcher => {
        switcher.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = switcher.getAttribute('data-lang');
            changeLanguage(lang);
            
            // Update active class
            langSwitchers.forEach(el => el.classList.remove('active'));
            switcher.classList.add('active');
        });
        
        // Set active class based on current language
        if (switcher.getAttribute('data-lang') === currentLang) {
            switcher.classList.add('active');
        }
    });
});