import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { FeaturedPost } from '../../data/writing';
import './PostReveal.css';

export function PostReveal({ post }: { post: FeaturedPost }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="post-reveal">
      <span className="post-tag">{post.tag}</span>
      <h3 className="post-title">{post.title}</h3>
      <span className="post-date">{post.date}</span>
      <p className="post-teaser">{post.teaser}</p>
      <button className="post-toggle" onClick={() => setOpen((v) => !v)}>
        {open ? 'Close essay ↑' : 'Read the essay ↓'}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="post-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="post-body-inner" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
