import Image from 'next/image';
import styles from '../styles';

const Miner = () => {
  return (
    <div
      className={`${styles.readPaddings} flex flex-col items-center bg-primary-black overflow-hidden text-white`}
    >
      <h1 className="font-bold text-2xl">
        Predict Coffee Leaf Disease & Get Cure
      </h1>
      <Image
        className="mt-5"
        width={500}
        height={500}
        src="/miner.jpg"
        alt=""
      />
      <h3 className={`text-2xl font-bold ${styles.yPaddings}`}>
        Kopi - Penyakit Miner
      </h3>

      <div>
        <h4 className="font-semibold">Penyebab :</h4>
        <p>
          Leaf Miner merupakan penyakit yang menyerang daun kopi yang disebabkan
          oleh serangan Leucoptera Caffeine atau yang biasa disebut hama
          penambang daun. Hama ini sering muncul pada area perkebunan yang
          rimbun dan memakan jaringan parenkim palisade pada daun yang
          menyebabkan kematian sel pada jaringan daun
        </p>
        <p className="my-5">
          Hal ini dapat mengurangi area daun dalam melakukan fotosintesis
          sehingga banyak daun yang gugur dan mati. Hama ini pertama kali
          ditemukan pada lahan perkebunan kopi di Brazil
        </p>
      </div>
      <div className="mt-5">
        <h4 className="font-semibold">Treatment :</h4>
        <p>
          Pengendalian penyakit ini dilakukan dengan mengendalikan hamanya
          menggunakan prosedur yang direkomendasikan. Tidak memerlukan
          pengendalian secara kimiawi.
        </p>
      </div>
    </div>
  );
};

export default Miner;
