import { notoSerifJapanese } from '@/utils/fonts';

function Kanji() {
  return (
    <div className="col-start-2 col-end-4 row-start-2 flex items-center justify-center">
      <div
        className={`${notoSerifJapanese.className} block  text-center text-[9rem] sm:text-[14rem] md:text-[16rem] lg:text-[21rem]`}
        title="Imagawa in Japanese Kanji"
      >
        今川
      </div>
      <p
        className="text-center text-lg text-secondary"
        style={{ writingMode: 'vertical-rl' }}
      >
        &#40; imagawa &#41;
      </p>
    </div>
  );
}

export default Kanji;
