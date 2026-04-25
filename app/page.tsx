'use client';

import React, { useState } from 'react';
import { Copy, Check, FileCode2 } from 'lucide-react';

const bloggerXML = `<?xml version="1.0" encoding="UTF-8" ?>
<html b:version='2' class='v2' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
    <meta content='width=device-width,initial-scale=1' name='viewport'/>
    <b:include data='blog' name='all-head-content'/>
    <title><data:blog.pageTitle/></title>
    
    <b:skin><![CDATA[
      /* --- Blogger Default CSS Overrides --- */
      body { margin: 0; padding: 0; }
      .hidden { display: none !important; }
    ]]></b:skin>
    
    <!-- Tailwind CSS (CDN) -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts & FontAwesome -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
    
    <!-- AOS Animation CSS -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
    
    <!-- Custom Theme Styles -->
    <style>
        body { 
            font-family: 'Inter', sans-serif; 
            background-color: #111111; 
            color: #ffffff;
            -webkit-font-smoothing: antialiased;
        }
        /* Hide scrollbar for cleaner look */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #dc2626; border-radius: 4px; }
    </style>
</head>
<body class="bg-[#111111] text-white">

    <!-- ======================= -->
    <!-- 1. HEADER (Sticky Navbar) -->
    <!-- ======================= -->
    <header class="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-[#111111] border-b border-white/10">
        <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-bold text-xs shadow-[0_0_15px_rgba(220,38,38,0.5)]">B</div>
            <a href="/" class="text-lg font-bold tracking-tight text-white hover:text-white">CRIMSON<span class="text-red-500">FLUX</span></a>
        </div>
        <!-- Desktop Nav -->
        <nav class="hidden md:flex bg-white/5 border border-white/10 rounded-full px-2 py-1 space-x-1">
            <a href="/" class="px-6 py-1.5 rounded-full bg-white/10 text-sm font-medium text-white hover:text-white transition-colors">Home</a>
            <a href="/p/products.html" class="px-6 py-1.5 rounded-full hover:bg-white/5 text-sm font-medium text-white/70 hover:text-white transition-colors">Products</a>
            <a href="/p/contact.html" class="px-6 py-1.5 rounded-full hover:bg-white/5 text-sm font-medium text-white/70 hover:text-white transition-colors">Contact</a>
        </nav>
        <!-- Right Action -->
        <div class="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full border border-white/10 hover:bg-white/10 cursor-pointer transition-colors shadow-sm">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
    </header>

    <!-- ======================= -->
    <!-- DYNAMIC JS RENDERED UI  -->
    <!-- ======================= -->
    <main id="app-root" class="px-6 py-6 space-y-4 max-w-7xl mx-auto">
    
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <!-- 2. Hero Section -->
            <section id="hero-section" class="lg:col-span-8 bg-gradient-to-br from-red-950 via-red-900 to-black rounded-3xl relative overflow-hidden border border-red-500/30 flex flex-col justify-end p-8 md:p-10 group min-h-[500px]">
                 <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/20 blur-[120px] rounded-full -mr-20 -mt-20"></div>
                 <div class="relative z-10 w-full hidden" id="hero-content" data-aos="fade-up">
                     <!-- JS Content goes here -->
                 </div>
                 <!-- Loading State -->
                 <div id="hero-loader" class="flex justify-center text-red-500 py-20 relative z-10">
                     <i class="fas fa-circle-notch fa-spin text-5xl"></i>
                 </div>
            </section>

            <div class="lg:col-span-4 flex flex-col gap-4">
                <!-- 3. Expert Team Snippet -->
                <section id="expert-team" class="bg-[#F7F5F0] rounded-3xl p-6 flex flex-col justify-between border border-white/5 shadow-inner flex-1 min-h-[240px]">
                     <div class="hidden h-full flex-col justify-between" id="team-content" data-aos="fade-up">
                         <!-- JS Content goes here -->
                     </div>
                     <div id="team-loader" class="flex items-center justify-center text-black h-full">
                         <i class="fas fa-circle-notch fa-spin text-3xl"></i>
                     </div>
                </section>
                
                <!-- Split Design Principles Box -->
                <section id="split-section" class="bg-[#F27D26] rounded-3xl p-6 relative overflow-hidden flex items-end group flex-1 min-h-[240px]">
                    <div class="absolute top-4 right-4 text-white/20">
                      <svg class="w-24 h-24 transform rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <div class="relative z-10 w-full hidden" id="split-content" data-aos="fade-up">
                         <!-- JS Content goes here -->
                    </div>
                    <!-- Loading State -->
                     <div id="split-loader" class="flex items-center justify-center text-white h-full relative z-10 w-full">
                         <i class="fas fa-circle-notch fa-spin text-3xl"></i>
                     </div>
                </section>
            </div>
        </div>

        <!-- 5. Bento Box Grid Section -->
        <section id="bento-grid" class="grid grid-cols-1 md:grid-cols-4 gap-4">
             <div class="hidden md:contents" id="bento-content">
                 <!-- JS Content goes here -->
             </div>
             <div id="bento-loader" class="col-span-4 flex justify-center text-white/50 py-10">
                 <i class="fas fa-circle-notch fa-spin text-5xl"></i>
             </div>
        </section>

        <!-- 6. FAQ Accordion Section -->
        <section id="faq-section" class="bg-black/40 border border-white/10 rounded-3xl p-8 md:p-12 mt-4">
             <div class="max-w-3xl mx-auto" data-aos="fade-up">
                 <h2 class="text-3xl md:text-5xl font-black text-white tracking-tight text-center mb-12 uppercase">Questions? Answers.</h2>
                 <div class="space-y-4">
                     <!-- FAQ Item 1 -->
                     <div class="bg-white/5 rounded-2xl p-6 cursor-pointer faq-item border border-white/10 hover:border-red-500/50 transition-colors">
                         <div class="flex justify-between items-center faq-header gap-6">
                            <h3 class="text-lg md:text-xl font-bold text-white">How does the headless Blogger setup work?</h3>
                            <div class="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center shrink-0 border border-red-500/30">
                                <i class="fas fa-plus text-red-500 text-sm toggle-icon transition-transform duration-300"></i>
                            </div>
                         </div>
                         <div class="faq-content hidden mt-6 text-sm text-white/60 leading-relaxed border-t border-white/10 pt-4">
                             We use the standard Blogger JSON Feed API to fetch your published posts entirely in the background. Vanilla JavaScript takes that JSON data—titles, images, and HTML content—and dynamically injects it into our modern Tailwind UI, giving you blazing fast performance and immense design flexibility.
                         </div>
                     </div>
                     <!-- FAQ Item 2 -->
                     <div class="bg-white/5 rounded-2xl p-6 cursor-pointer faq-item border border-white/10 hover:border-red-500/50 transition-colors">
                         <div class="flex justify-between items-center faq-header gap-6">
                            <h3 class="text-lg md:text-xl font-bold text-white">Do I need coding knowledge to use this theme?</h3>
                            <div class="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center shrink-0 border border-red-500/30">
                                <i class="fas fa-plus text-red-500 text-sm toggle-icon transition-transform duration-300"></i>
                            </div>
                         </div>
                         <div class="faq-content hidden mt-6 text-sm text-white/60 leading-relaxed border-t border-white/10 pt-4">
                             No! Once you paste the XML file into the Blogger Edit HTML window and hit save, the theme is live. To control what shows up where, simply write normal blog posts and assign them specific Labels (e.g., "Hero", "ExpertTeam", "BentoGrid"). The JS engine automatically handles the rest.
                         </div>
                     </div>
                     <!-- FAQ Item 3 -->
                     <div class="bg-white/5 rounded-2xl p-6 cursor-pointer faq-item border border-white/10 hover:border-red-500/50 transition-colors">
                         <div class="flex justify-between items-center faq-header gap-6">
                            <h3 class="text-lg md:text-xl font-bold text-white">Is this template mobile responsive?</h3>
                            <div class="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center shrink-0 border border-red-500/30">
                                <i class="fas fa-plus text-red-500 text-sm toggle-icon transition-transform duration-300"></i>
                            </div>
                         </div>
                         <div class="faq-content hidden mt-6 text-sm text-white/60 leading-relaxed border-t border-white/10 pt-4">
                             Absolutely. Leveraging the power of Tailwind CSS, every grid, typographic element, and navigation bar perfectly reflows to ensure exceptional legibility and touch accessibility on mobile phones, tablets, and massive desktop screens.
                         </div>
                     </div>
                 </div>
             </div>
        </section>
    </main>

    <!-- ======================= -->
    <!-- 7. FOOTER               -->
    <!-- ======================= -->
    <footer class="bg-[#111111] border-t border-white/10 pt-16 pb-8 px-8 mt-12">
         <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
             <div>
                 <h3 class="text-3xl font-black mb-4 text-white">JOIN THE <span class="text-red-500">REVOLUTION</span></h3>
                 <p class="text-white/60 mb-6 max-w-sm">Sign up for the newsletter to receive the latest updates, themes, and strategies straight to your inbox.</p>
                 <div class="flex w-full max-w-md">
                     <input type="email" placeholder="Your email address" class="bg-white/5 border border-white/10 rounded-l-full px-6 py-3 w-full outline-none focus:border-red-500 transition-colors text-white text-sm" />
                     <button class="bg-red-600 hover:bg-red-500 text-white rounded-r-full px-8 py-3 text-sm font-bold uppercase tracking-wider transition-colors shrink-0">Subscribe</button>
                 </div>
             </div>
             <div class="flex justify-start md:justify-end items-end pb-2">
                 <p class="text-white/30 text-xs font-bold uppercase tracking-widest">&copy; <span id="current-year"></span> CRIMSONFLUX. ALL RIGHTS RESERVED.</p>
             </div>
         </div>
    </footer>

    <!-- ======================= -->
    <!-- HIDDEN BLOGGER WIDGETS  -->
    <!-- ======================= -->
    <!-- 
       CRITICAL: Blogger engine strictly requires at least one 'Blog' 
       type widget in the XML skin to successfully save the theme. 
       We hide it using Tailwind's 'hidden' class so it doesn't 
       disrupt our custom JS frontend render below.
    -->
    <b:section class='hidden' id='hidden-default-blog' showaddelement='false'>
      <b:widget id='Blog1' locked='true' title='Blog Messages' type='Blog' version='1'>
        <b:includable id='main' var='top'>
          <!-- This empty includable circumvents standard Blogger DOM generation -->
        </b:includable>
      </b:widget>
    </b:section>

    <!-- Blogger Requires explicit main, header, sidebar sections -->
    <div class="hidden">
        <b:section id='header'/>
        <b:section id='main'/>
        <b:section id='sidebar'/>
    </div>

    <!-- ======================= -->
    <!-- JAVASCRIPT LOGIC        -->
    <!-- ======================= -->
    <!-- Scripts MUST be wrapped in CDATA for valid XML parsing -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
    //<![CDATA[
    document.addEventListener('DOMContentLoaded', () => {
        
        // 1. Initialize Scroll Animations (AOS)
        AOS.init({ 
            once: true, 
            duration: 800, 
            offset: 50,
            easing: 'ease-out-cubic'
        });
        
        // 2. Set Footer Year Dynamically
        const yearEl = document.getElementById('current-year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        // 3. FAQ Accordion Toggle Logic
        document.querySelectorAll('.faq-item').forEach(item => {
            item.addEventListener('click', () => {
                const content = item.querySelector('.faq-content');
                const icon = item.querySelector('.toggle-icon');
                
                // Toggle Hidden content
                const isHidden = content.classList.contains('hidden');
                
                // Close all others optionally? (Leave commented if multiple allowed)
                /*
                document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
                document.querySelectorAll('.toggle-icon').forEach(i => {
                    i.classList.remove('fa-minus');
                    i.classList.add('fa-plus');
                    i.style.transform = "rotate(0deg)";
                });
                */

                if(isHidden) {
                    content.classList.remove('hidden');
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                    icon.style.transform = "rotate(180deg)";
                } else {
                    content.classList.add('hidden');
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                    icon.style.transform = "rotate(0deg)";
                }
            });
        });

        // 4. headless CMS Data Fetching
        const blogUrl = window.location.origin; // e.g. "https://yourblog.blogspot.com"
        
        // Utility: Shuffle Array randomly for dynamic feeling UI
        function shuffleArray(array) {
            let currentIndex = array.length, randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
            return array;
        }

        // Utility: Extract first image from HTML content using DOMParser
        function extractImage(htmlContent) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, 'text/html');
            const img = doc.querySelector('img');
            return img ? img.src : ''; 
        }

        // Utility: Extract plain text snippet
        function extractSnippet(htmlContent, length = 150) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, 'text/html');
            let text = doc.body.textContent || "";
            text = text.replace(/\s+/g, ' ').trim();
            return text.length > length ? text.substring(0, length) + '...' : text;
        }

        // Core Blogger Feed API Fetcher
        async function fetchPostsByLabel(label, limit = 5) {
            try {
                // If testing locally out of Blogger, mock the base URL
                let isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
                let base = isLocalhost ? 'https://googleblog.blogspot.com' : window.location.origin;
                
                let encodedLabel = encodeURIComponent(label);
                let url = base + '/feeds/posts/default/-/' + encodedLabel + '?alt=json&max-results=' + limit;
                
                // If testing off Blogger where CORS might block, we fail gracefully
                const response = await fetch(url);
                if(!response.ok) throw new Error('Blogger API fetch failed.');
                
                const data = await response.json();
                
                if (data.feed && data.feed.entry) {
                    return data.feed.entry.map(entry => {
                        let publishedDate = new Date(entry.published.$t);
                        return {
                            title: entry.title.$t,
                            content: entry.content ? entry.content.$t : (entry.summary ? entry.summary.$t : ''),
                            link: entry.link.find(l => l.rel === 'alternate')?.href || '#',
                            author: entry.author && entry.author[0] ? entry.author[0].name.$t : 'Admin',
                            published: publishedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                        };
                    });
                }
                return [];
            } catch(e) {
                console.warn("Could not fetch Blogger label:", label, e);
                return []; 
            }
        }

        // Mock Fallback Generator if empty or fetching fails
        function getMockData(label, count, imagesArr) {
            return Array.from({length: count}).map((_, i) => ({
                title: label === 'Hero' ? 'High-Performance Headless CMS Powered by Blogger.' : 'Transforming UI Patterns with Tailwind & APIs.',
                content: '<img src="' + imagesArr[i % imagesArr.length] + '" /> <p>This is a dynamically generated CMS payload fetching from the Blogger V2 JSON feeds API. Everything here renders on the client side using Vanilla ES6 JavaScript.</p>',
                link: '#',
                author: 'System',
                published: 'Oct 24, 2024'
            }));
        }

        // 5. Render: HERO SECTION
        async function renderHero() {
            let posts = await fetchPostsByLabel('Hero', 5);
            if(posts.length === 0) {
                posts = getMockData('Hero', 1, ['https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80']);
            }
            
            posts = shuffleArray(posts);
            const post = posts[0];
            const imgUrl = extractImage(post.content) || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
            const snippet = extractSnippet(post.content, 180);

            const container = document.getElementById('hero-content');
            const loader = document.getElementById('hero-loader');
            
            container.innerHTML = \`
                <div class="space-y-4">
                    <span class="inline-block px-3 py-1 bg-red-600 text-[10px] font-bold uppercase tracking-widest rounded text-white shadow-[0_0_10px_rgba(220,38,38,0.4)]">Featured Article</span>
                    <h1 class="text-4xl md:text-5xl lg:text-show font-black leading-tight max-w-2xl text-white uppercase tracking-tighter drop-shadow-md">\${post.title}</h1>
                    <p class="text-white/60 max-w-xl text-sm md:text-base leading-relaxed hidden sm:block">\${snippet}</p>
                    <div class="pt-4 flex items-center space-x-4">
                        <a href="\${post.link}" class="px-6 py-2 bg-white text-black font-bold uppercase text-xs tracking-wider rounded-full hover:bg-gray-200 transition-colors shadow-lg">Read Post</a>
                    </div>
                </div>
            \`;
            if(loader) loader.classList.add('hidden');
            if(container) container.classList.remove('hidden');
        }

        // 6. Render: SPLIT SECTION
        async function renderSplit() {
            let posts = await fetchPostsByLabel('SplitSection', 5);
            if(posts.length === 0) {
                posts = getMockData('SplitSection', 1, ['https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80']);
            }
            
            posts = shuffleArray(posts);
            const post = posts[0];
            const imgUrl = extractImage(post.content) || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
            const snippet = extractSnippet(post.content, 100);

            const container = document.getElementById('split-content');
            const loader = document.getElementById('split-loader');
            
            container.innerHTML = \`
                <h3 class="text-2xl md:text-3xl font-black text-black leading-none uppercase max-w-[200px] hover:text-white transition-colors cursor-pointer">\${post.title}</h3>
                <a href="\${post.link}" class="absolute inset-0 z-20"></a>
            \`;
            if(loader) loader.classList.add('hidden');
            if(container) container.classList.remove('hidden');
            if(container) container.classList.add('block');
        }

        // 7. Render: EXPERT TEAM
        async function renderExpertTeam() {
            let posts = await fetchPostsByLabel('ExpertTeam', 3);
            if(posts.length === 0) {
                posts = getMockData('ExpertTeam', 3, ['https://i.pravatar.cc/150?img=11', 'https://i.pravatar.cc/150?img=12', 'https://i.pravatar.cc/150?img=13']);
            }
            
            const container = document.getElementById('team-content');
            const loader = document.getElementById('team-loader');
            
            let html = \`
                <div>
                     <span class="text-black/50 font-bold tracking-widest uppercase text-[10px] mb-2 block">Expert Team</span>
                     <div class="flex -space-x-4 mb-4">
            \`;
            
            posts.forEach((post, i) => {
                const imgUrl = extractImage(post.content) || \`https://i.pravatar.cc/150?img=\${i+11}\`;
                html += \`<img src="\${imgUrl}" class="w-10 h-10 rounded-full border-2 border-[#F7F5F0] object-cover shadow-sm" alt="\${post.title}" />\`;
            });
            
            html += \`
                     </div>
                     <h3 class="text-2xl font-black text-black leading-tight">THE TALENT <br/>BEHIND THE <span class="text-red-600">CODE</span></h3>
                </div>
                <a href="\${posts[0].link}" class="text-xs font-bold text-black uppercase tracking-wider hover:text-red-600 mt-4 flex items-center group relative z-20">Meet the team <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
            \`;
            
            if(container) container.innerHTML = html;
            if(loader) loader.classList.add('hidden');
            if(container) container.classList.remove('hidden');
            if(container) container.classList.add('flex');
        }

        // 8. Render: BENTO GRID
        async function renderBentoGrid() {
            let posts = await fetchPostsByLabel('BentoGrid', 2);
            if(posts.length === 0) {
                posts = getMockData('BentoGrid', 2);
            }

            const container = document.getElementById('bento-content');
            const loader = document.getElementById('bento-loader');
            
            let html = '';
            
            // First item: Dark Box
            if(posts[0]) {
                const post = posts[0];
                const snippet = extractSnippet(post.content, 90);
                html += \`
                    <div class="col-span-1 md:col-span-2 bg-[#1a1a1a] rounded-[2.5rem] p-8 border border-white/10 shadow-lg group relative overflow-hidden hidden md:block">
                        <div class="relative z-10 w-full h-full flex flex-col justify-between">
                             <div class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 font-bold text-red-500 shadow-inner group-hover:scale-110 transition-transform">01</div>
                             <div>
                               <h3 class="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-tight">\${post.title}</h3>
                               <p class="text-white/50 text-sm leading-relaxed max-w-sm">\${snippet}</p>
                             </div>
                             <a href="\${post.link}" class="absolute inset-0 z-20"></a>
                        </div>
                    </div>
                \`;
            }
            
            // Second item: Red Box
            if(posts[1]) {
                const post = posts[1];
                const snippet = extractSnippet(post.content, 90);
                html += \`
                    <div class="col-span-1 md:col-span-2 bg-red-600 rounded-[2.5rem] p-8 border border-red-500 shadow-lg text-white group relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-red-500 to-red-800 opacity-50"></div>
                        <div class="relative z-10 w-full h-full flex flex-col justify-between">
                            <div>
                               <h3 class="text-2xl md:text-3xl font-black mb-2 uppercase tracking-tight">\${post.title}</h3>
                               <p class="text-white/80 text-sm leading-relaxed max-w-sm">\${snippet}</p>
                            </div>
                            <div class="mt-8 flex justify-end">
                                <div class="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                                    <svg class="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </div>
                            </div>
                            <a href="\${post.link}" class="absolute inset-0 z-20"></a>
                        </div>
                    </div>
                \`;
            }

            if(container) container.innerHTML = html;
            if(loader) loader.classList.add('hidden');
            if(container) container.classList.remove('hidden');
            if(container) container.classList.add('contents');
        }

        // Execute Render Calls Sequence
        renderHero();
        renderSplit();
        renderExpertTeam();
        renderBentoGrid();

    });
    //]]>
    </script>
</body>
</html>`;

export default function BloggerDevGenerator() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bloggerXML);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] flex flex-col font-['Inter',_sans-serif] text-white">
      {/* App Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-[#111111] border-b border-white/10">
        <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-bold text-xs shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              <FileCode2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white block leading-tight">CRIMSON<span className="text-red-500">FLUX</span></span>
              <p className="text-[10px] font-bold text-white/40 tracking-widest uppercase leading-tight">Blogger XML Generator</p>
            </div>
        </div>
        
        <button
          onClick={handleCopy}
          className="inline-flex items-center px-6 py-1.5 bg-red-600 hover:bg-red-500 text-white text-sm font-bold tracking-wider uppercase rounded-full shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-colors"
        >
          {copied ? (
            <><Check className="w-4 h-4 mr-2" /> Copied!</>
          ) : (
            <><Copy className="w-4 h-4 mr-2" /> Copy XML</>
          )}
        </button>
      </header>

      {/* Main Layout */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-6 grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Sidebar Info */}
        <div className="w-full md:col-span-4 flex flex-col gap-4">
          <div className="bg-[#1a1a1a] rounded-3xl p-6 border border-white/10 shadow-inner sticky top-24">
            <h2 className="text-xl font-bold mb-4 text-white">Installation Guide</h2>
            <ol className="list-decimal list-outside ml-4 space-y-4 text-white/60 text-sm font-medium">
                <li>Click the <b className="text-white">Copy XML</b> button located at the top right.</li>
                <li>Log in to your <b className="text-white">Blogger Dashboard</b>.</li>
                <li>Go to the <b className="text-white">Theme</b> section in the left sidebar.</li>
                <li>Click the dropdown arrow next to Customize and select <b className="text-white">Edit HTML</b>.</li>
                <li>Delete ALL existing code in the editor.</li>
                <li>Paste the copied XML code and click the <b className="text-white">Save Icon</b>.</li>
            </ol>

            <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-sm font-bold mb-3 text-red-500 tracking-wider uppercase">Label Binding System</h3>
                <p className="text-xs text-white/50 mb-3">Create posts and add these specific labels so the JavaScript knows where to render them:</p>
                <ul className="space-y-3 mt-4">
                    <li className="flex items-center text-sm font-medium"><span className="w-2 h-2 rounded-full bg-red-600 mr-3 shadow-[0_0_8px_rgba(220,38,38,0.6)]"></span> <code className="bg-white/5 px-2 py-0.5 rounded text-white/80 mr-2">Hero</code> - Top section.</li>
                    <li className="flex items-center text-sm font-medium"><span className="w-2 h-2 rounded-full bg-[#F27D26] mr-3"></span> <code className="bg-white/5 px-2 py-0.5 rounded text-white/80 mr-2">SplitSection</code> - Image/Text grid.</li>
                    <li className="flex items-center text-sm font-medium"><span className="w-2 h-2 rounded-full bg-[#F7F5F0] mr-3"></span> <code className="bg-white/5 px-2 py-0.5 rounded text-white/80 mr-2">ExpertTeam</code> - Vertical cards.</li>
                    <li className="flex items-center text-sm font-medium"><span className="w-2 h-2 rounded-full bg-black mr-3 border border-white/20"></span> <code className="bg-white/5 px-2 py-0.5 rounded text-white/80 mr-2">BentoGrid</code> - Masonry features.</li>
                </ul>
            </div>
          </div>
        </div>

        {/* Code View */}
        <div className="w-full md:col-span-8 flex flex-col">
          <div className="bg-[#141414] rounded-3xl overflow-hidden border border-red-500/30 flex flex-col flex-1 shadow-[0_0_40px_rgba(220,38,38,0.05)] relative group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/10 blur-[120px] rounded-full -mr-20 -mt-20 pointer-events-none"></div>
            <div className="bg-[#111111] px-6 py-4 flex items-center justify-between border-b border-white/10 relative z-10">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                </div>
                <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase">theme.xml</span>
            </div>
            <div className="p-6 overflow-auto max-h-[700px] relative z-10 scrollbar-thin scrollbar-thumb-red-600/50 scrollbar-track-transparent">
              <pre className="text-xs font-mono text-white/70 font-medium leading-relaxed">
                <code>
                  {bloggerXML}
                </code>
              </pre>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
