import { photos } from '../../data/photography';
import { PhotoGrid } from './PhotoGrid';
import { RevealHeading } from '../common/RevealHeading';

export function Photography() {
  return (
    <section className="section" id="photography">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-tag">Photography</span>
          <RevealHeading className="section-title">A few frames from outside the editor.</RevealHeading>
        </div>
        <PhotoGrid photos={photos} />
      </div>
    </section>
  );
}
