import { notoSerif } from '@/utils/fonts';

function Greeting() {
  return (
    <div>
      <h1 className={`text-2xl leading-5 ${notoSerif.className} `}>
        hello, my name is <br />
        <span className="text-5xl text-primary"> Ronnie Kaito</span>.
      </h1>
    </div>
  );
}

export default Greeting;
