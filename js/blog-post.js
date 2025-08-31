document.addEventListener('DOMContentLoaded', function() {
    // Get post ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    if (postId) {
        loadBlogPost(postId);
    } else {
        // Redirect to blog page if no ID is provided
        window.location.href = 'blog.html';
    }
});

function loadBlogPost(postId) {
    // In a real application, this would fetch data from a server
    // For this demo, we'll use hardcoded blog posts
    const blogPosts = {
        '1': {
            title: 'Effective Test Case Writing Techniques',
            date: 'June 15, 2023',
            image: 'https://via.placeholder.com/1200x600',
            content: document.getElementById('post-content').innerHTML // Keep existing content for post 1
        },
        '2': {
            title: 'Mobile Testing Best Practices',
            date: 'May 22, 2023',
            image: 'https://via.placeholder.com/1200x600',
            content: `
                <p>Mobile testing presents unique challenges compared to traditional web or desktop application testing. With the variety of devices, screen sizes, operating systems, and network conditions, ensuring a consistent user experience requires a strategic approach.</p>
                
                <h2>Key Challenges in Mobile Testing</h2>
                <p>Before diving into best practices, it's important to understand the challenges:</p>
                <ul>
                    <li><strong>Device Fragmentation</strong> - Thousands of different devices with varying specifications</li>
                    <li><strong>Multiple Operating Systems</strong> - iOS, Android, and their various versions</li>
                    <li><strong>Screen Sizes and Resolutions</strong> - From small phones to large tablets</li>
                    <li><strong>Network Conditions</strong> - Varying connectivity from 5G to offline scenarios</li>
                    <li><strong>Battery and Resource Constraints</strong> - Limited processing power and battery life</li>
                </ul>
                
                <h2>Best Practices for Mobile Testing</h2>
                
                <h3>1. Prioritize Devices Based on Your Target Audience</h3>
                <p>You can't test on every device, so analyze your target market and focus on the most common devices and OS versions used by your audience.</p>
                
                <h3>2. Combine Real Devices and Emulators</h3>
                <p>Use emulators/simulators for early-stage testing and real devices for final validation. Emulators are cost-effective but can't replicate all real-world conditions.</p>
                
                <h3>3. Test Under Different Network Conditions</h3>
                <p>Verify your app's behavior under various network scenarios: strong WiFi, weak cellular, airplane mode, and network transitions.</p>
                
                <h3>4. Focus on UI/UX Testing</h3>
                <p>Ensure your app looks and works well across different screen sizes and orientations. Test touch gestures, navigation patterns, and input methods thoroughly.</p>
                
                <h3>5. Implement Automated Testing</h3>
                <p>Use frameworks like Appium, XCTest, or Espresso to automate repetitive tests, especially for regression testing.</p>
                
                <h3>6. Monitor Performance Metrics</h3>
                <p>Track CPU usage, memory consumption, battery drain, and app launch time. Performance issues can significantly impact user satisfaction.</p>
                
                <h3>7. Test Installation and Updates</h3>
                <p>Verify the installation process, updates, and how your app handles data during updates.</p>
                
                <h3>8. Conduct Interruption Testing</h3>
                <p>Test how your app behaves when interrupted by calls, messages, notifications, or low battery warnings.</p>
                
                <h2>Tools for Mobile Testing</h2>
                <p>Several tools can help streamline your mobile testing process:</p>
                <ul>
                    <li><strong>Firebase Test Lab</strong> - For testing on a wide range of devices</li>
                    <li><strong>BrowserStack</strong> - Cloud-based real device testing</li>
                    <li><strong>Charles Proxy</strong> - For network testing and debugging</li>
                    <li><strong>Appium</strong> - Cross-platform automation framework</li>
                    <li><strong>XCTest</strong> - For iOS native app testing</li>
                    <li><strong>Espresso</strong> - For Android native app testing</li>
                </ul>
                
                <h2>Conclusion</h2>
                <p>Effective mobile testing requires a comprehensive approach that addresses the unique challenges of mobile environments. By following these best practices and leveraging appropriate tools, you can deliver a high-quality mobile application that provides a consistent experience across devices.</p>
            `
        },
        '3': {
            title: 'Automation vs Manual Testing: When to Use Each',
            date: 'April 10, 2023',
            image: 'https://via.placeholder.com/1200x600',
            content: `
                <p>The debate between automated and manual testing has been ongoing in the software testing community. Both approaches have their strengths and weaknesses, and understanding when to use each is crucial for an effective testing strategy.</p>
                
                <h2>Understanding Manual Testing</h2>
                <p>Manual testing involves human testers executing test cases without the use of automation tools. The tester takes on the role of an end user and verifies that all the features work as expected.</p>
                
                <h3>Strengths of Manual Testing:</h3>
                <ul>
                    <li><strong>Flexibility</strong> - Testers can adapt on the fly based on what they observe</li>
                    <li><strong>Exploratory Testing</strong> - Discovering issues that weren't anticipated in test plans</li>
                    <li><strong>UI/UX Evaluation</strong> - Subjective assessment of user experience</li>
                    <li><strong>Low Initial Investment</strong> - No need for automation infrastructure</li>
                    <li><strong>Ad-hoc Testing</strong> - Quick tests without extensive preparation</li>
                </ul>
                
                <h3>Limitations of Manual Testing:</h3>
                <ul>
                    <li><strong>Time-Consuming</strong> - Especially for regression testing</li>
                    <li><strong>Human Error</strong> - Prone to mistakes and oversights</li>
                    <li><strong>Not Ideal for Repetitive Tasks</strong> - Leads to tester fatigue</li>
                    <li><strong>Limited Coverage</strong> - Practical constraints on test scenarios</li>
                </ul>
                
                <h2>Understanding Automated Testing</h2>
                <p>Automated testing uses specialized tools to execute pre-scripted tests on software before it's released into production.</p>
                
                <h3>Strengths of Automated Testing:</h3>
                <ul>
                    <li><strong>Speed and Efficiency</strong> - Tests run much faster than manual execution</li>
                    <li><strong>Reusability</strong> - Scripts can be reused across multiple test cycles</li>
                    <li><strong>Consistency</strong> - Same tests executed exactly the same way every time</li>
                    <li><strong>Broader Coverage</strong> - Can execute thousands of complex test cases</li>
                    <li><strong>Regression Testing</strong> - Ideal for verifying existing functionality</li>
                    <li><strong>Performance Testing</strong> - Can simulate hundreds or thousands of users</li>
                </ul>
                
                <h3>Limitations of Automated Testing:</h3>
                <ul>
                    <li><strong>High Initial Investment</strong> - Requires time and resources to set up</li>
                    <li><strong>Maintenance Overhead</strong> - Scripts need updating when the application changes</li>
                    <li><strong>Limited to Predictable Outcomes</strong> - Only finds issues it's programmed to find</li>
                    <li><strong>Technical Expertise Required</strong> - Needs skilled resources to create and maintain</li>
                </ul>
                
                <h2>When to Use Manual Testing</h2>
                <p>Manual testing is most effective in these scenarios:</p>
                <ol>
                    <li><strong>Exploratory Testing</strong> - When you need to explore the application without predefined test cases</li>
                    <li><strong>Usability Testing</strong> - Evaluating how user-friendly the application is</li>
                    <li><strong>Ad-hoc Testing</strong> - Quick, one-time tests based on tester's intuition</li>
                    <li><strong>Visual Validation</strong> - Checking layout, colors, fonts, and overall appearance</li>
                    <li><strong>Early Development Phases</strong> - When the application is changing rapidly</li>
                </ol>
                
                <h2>When to Use Automated Testing</h2>
                <p>Automation shines in these scenarios:</p>
                <ol>
                    <li><strong>Regression Testing</strong> - Verifying existing functionality after changes</li>
                    <li><strong>Load and Performance Testing</strong> - Simulating many users or heavy data processing</li>
                    <li><strong>Repetitive Tasks</strong> - Tests that need to be run frequently</li>
                    <li><strong>Data-Driven Testing</strong> - Same test with multiple data sets</li>
                    <li><strong>Cross-Browser/Cross-Platform Testing</strong> - Testing on multiple environments</li>
                    <li><strong>Continuous Integration/Continuous Deployment</strong> - Automated build verification</li>
                </ol>
                
                <h2>The Balanced Approach</h2>
                <p>The most effective testing strategies combine both manual and automated testing:</p>
                <ul>
                    <li>Automate repetitive, stable test cases to free up manual testers</li>
                    <li>Use manual testing for exploratory and usability testing</li>
                    <li>Start with manual testing for new features, then automate once stable</li>
                    <li>Use automation for regression and performance testing</li>
                    <li>Leverage manual testing for areas where human judgment is valuable</li>
                </ul>
                
                <h2>Conclusion</h2>
                <p>Both manual and automated testing have their place in a comprehensive testing strategy. Understanding the strengths and limitations of each approach allows you to make informed decisions about when to use manual testing, when to automate, and how to achieve the optimal balance between the two for your specific project needs.</p>
            `
        }
    };
    
    const post = blogPosts[postId];
    
    if (post) {
        // Update page with post data
        document.title = post.title + ' - Nguyen Le Minh Tri';
        document.getElementById('post-title').textContent = post.title;
        document.getElementById('post-date').textContent = post.date;
        document.getElementById('post-image').src = post.image;
        
        // Only update content for posts 2 and 3, keep the existing content for post 1
        if (postId !== '1') {
            document.getElementById('post-content').innerHTML = post.content;
        }
        
        // Update navigation links
        updateNavigation(postId);
    } else {
        // Redirect to blog page if post not found
        window.location.href = 'blog.html';
    }
}

function updateNavigation(currentPostId) {
    const prevPostLink = document.querySelector('.prev-post');
    const nextPostLink = document.querySelector('.next-post');
    
    // Simple navigation logic based on post ID
    const currentId = parseInt(currentPostId);
    
    if (currentId > 1) {
        prevPostLink.href = `blog-post.html?id=${currentId - 1}`;
    } else {
        prevPostLink.style.visibility = 'hidden';
    }
    
    if (currentId < 3) { // Assuming we have 3 posts total
        nextPostLink.href = `blog-post.html?id=${currentId + 1}`;
    } else {
        nextPostLink.style.visibility = 'hidden';
    }
}