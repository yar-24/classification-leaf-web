import Image from 'next/image';
import styles from '../styles';

const Phoma = () => {
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
        src="/phoma.jpg"
        alt=""
      />
      <h3 className={`text-2xl font-bold ${styles.yPaddings}`}>
        Kopi - Penyakit Phoma
      </h3>

      <div>
        <h4 className="font-semibold">Penyebab :</h4>
        <p>
          Penyakit phoma pada daun kopi yang disebabkan oleh jamur Phoma
          Costaricensis. Penyakit ini menyebabkan dahan kering, keguguran pada
          daun, jatuhnya tunas buah dan kelopak bunga yang dapat mempengaruhi
          tingkat produktivitas pada tanaman kopi.
        </p>
        <p className="my-5">
          Gejala yang timbul akibat penyakit ini adalah nampaknya noda lingkaran
          hitam pada permukaan daun kopi. Penyakit ini banyak terjadi pada
          tanaman dengan lingkungan yang memiliki tingkat cuaca angin besar dan
          dingin
        </p>
      </div>
      <div className="mt-5">
        <h4 className="font-semibold">Treatment :</h4>
        <p>
          Hindari penyiraman air secara berlebihan. Tingkat kerindangan
          dipertahankan sekitar 50%. Jarak tanam bibit dan tanaman harus sesuai
          agar memudahkan sirkulasi udara. Penggunaan pupuk yang cukup.
          Penggunaan fungisida kimiawi berbahan dasar copper. Misalnya copper
          cupravit 85WP dan copper oksiklorida dengan konsentrasi 80 g/20 l air.
          Atau menggunakan copper hidroksida dengan konsentrasi 40 g/20 l air.
        </p>
      </div>
    </div>
  );
};

export default Phoma;
