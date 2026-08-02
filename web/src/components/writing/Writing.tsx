import { featuredPost } from '../../data/writing';
import { PostReveal } from './PostReveal';
import { RevealHeading } from '../common/RevealHeading';

export function Writing() {
  return (
    <section className="section" id="writing">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-tag">Writing</span>
          <RevealHeading className="section-title">Latest essay.</RevealHeading>
        </div>
        <PostReveal post={featuredPost} />
      </div>
    </section>
  );
}
