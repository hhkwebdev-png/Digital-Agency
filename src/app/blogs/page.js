'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedSubFilter, setSelectedSubFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Define your active categories and authors.
  const categoriesList = ['Web Architecture', 'AI Engineering', 'UI/UX Design', 'Growth Systems'];
  const authorsList = ['Alex Vance', 'Elena Rostova', 'Marcus Thorne'];

  const subFilters = {
    ALL: ['All', 'Latest', 'Featured', 'Trending'],
    CATEGORIES: ['All', ...categoriesList],
    AUTHOR: ['All', ...authorsList]
  };

  /* UPLOAD NEW BLOGS HERE:
    Any blog added to this array will automatically:
    1. Appear on the main page (under ALL -> 'All' or respective tags like 'Latest', 'Featured', 'Trending').
    2. Route and show under the CATEGORIES tab according to its category property.
    3. Route and show under the AUTHOR tab according to its author property.
  */
  const blogPosts = [
    // Example format when you add a blog:
    // {
    //   id: 1,
    //   title: 'Your Blog Title',
    //   excerpt: 'Short description of the article...',
    //   category: 'Web Architecture', // Must match one of the categoriesList above
    //   author: 'Alex Vance',         // Must match one of the authorsList above
    //   tag: 'Latest',                // Must be 'Latest', 'Featured', or 'Trending'
    //   image: 'IMAGE_URL_HERE',
    //   slug: '#'
    // }
  ];

  const filteredPosts = blogPosts.filter(post => {
    let matchesTab = true;
    if (activeTab === 'ALL') {
      if (selectedSubFilter !== 'All') {
        matchesTab = post.tag === selectedSubFilter;
      }
    } else if (activeTab === 'CATEGORIES') {
      if (selectedSubFilter !== 'All') {
        matchesTab = post.category === selectedSubFilter;
      }
    } else if (activeTab === 'AUTHOR') {
      if (selectedSubFilter !== 'All') {
        matchesTab = post.author === selectedSubFilter;
      }
    }

    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#1C3636] text-white py-6 px-6 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      
      {/* Immersive Background Radiance */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[180px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.07, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[160px] pointer-events-none" 
      />

      <main className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Editorial Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-teal-500/20 pb-12"
        >
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.08]">
              <span className="text-[#F9FAFA]">Explore Our </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                Latest Publications
              </span>
            </h1>
          </div>
          <div className="w-full md:w-80">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles & guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#172D2D]/80 backdrop-blur-md border border-teal-500/30 rounded-xl py-3.5 pl-4 pr-11 text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition text-sm outline-none shadow-xl"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-emerald-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Filter Navigation Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {/* Main Filter Buttons (Left-aligned) */}
          <div className="flex items-center justify-start gap-3 overflow-x-auto pb-2 scrollbar-none">
            {['ALL', 'CATEGORIES', 'AUTHOR'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedSubFilter('All');
                }}
                className={`px-5 py-3 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 whitespace-nowrap shadow-lg cursor-pointer ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-300 text-[#0E1B1B] shadow-emerald-500/20 scale-105'
                    : 'bg-[#172D2D]/60 text-slate-300 border border-teal-500/20 hover:border-emerald-400/50 hover:text-white backdrop-blur-md'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Subheading / Subfilter Buttons (Left-aligned) */}
          <div className="flex items-center justify-start gap-2.5 overflow-x-auto pb-2 pt-2 scrollbar-none">
            {subFilters[activeTab].map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubFilter(sub)}
                className={`px-5 py-3 rounded-xl text-xs font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedSubFilter === sub
                    ? 'bg-teal-500/20 border border-emerald-400 text-emerald-300 shadow-md'
                    : 'bg-[#172D2D]/30 border border-teal-500/10 text-slate-400 hover:text-slate-200 hover:border-teal-500/30'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.article 
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-[#172D2D]/40 backdrop-blur-xl rounded-xl border border-teal-500/20 overflow-hidden shadow-2xl flex flex-col justify-between hover:border-emerald-400/60 hover:bg-[#172D2D]/70 transition-colors duration-500 group hover:-translate-y-1.5"
                >
                  <div>
                    {/* Dynamic Image Container */}
                    <div className="h-56 w-full relative overflow-hidden bg-[#112222]">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#172D2D] via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-8 space-y-4">
                      <h2 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-[1.3] line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer with Custom Minimalist Arrow Button */}
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 mt-auto">
                    <div className="pt-5 border-t border-teal-500/20 flex items-center justify-between">
                      <a 
                        href={post.slug}
                        className="inline-flex items-center gap-3 text-xs font-bold text-emerald-400 hover:text-teal-200 transition-all duration-300 group/btn"
                      >
                        <span className="tracking-wide uppercase text-[11px]">Read Article</span>
                        <div className="w-8 h-8 rounded-xl bg-[#112222] border border-teal-500/30 flex items-center justify-center group-hover/btn:bg-emerald-400 group-hover/btn:border-emerald-400 group-hover/btn:text-[#0E1B1B] text-emerald-400 transition-all duration-300 shadow-md">
                          <svg className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-20 text-center bg-[#172D2D]/40 backdrop-blur-2xl rounded-xl border border-teal-500/20"
              >
                <p className="text-slate-400 text-sm">No articles found. Add your first blog to the database array to display it here.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </main>
    </div>
  );
};

export default BlogPage;