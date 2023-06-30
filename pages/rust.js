import Image from 'next/image';
import styles from '../styles';

const Rust = () => {
  return (
    <div
      className={`${styles.readPaddings} flex flex-col items-center bg-primary-black overflow-hidden text-white`}
    >
      <h1 className="font-bold text-2xl">
        Predict Coffee Leaf Disease & Get Cure
      </h1>
      <Image className="mt-5" width={500} height={500} src="/rust.jpg" alt="" />
      <h3 className={`text-2xl font-bold ${styles.yPaddings}`}>
        Kopi - Penyakit Rust
      </h3>

      <div>
        <h4 className="font-semibold">Penyebab :</h4>
        <p>
          Penyakit ini disebabkan oleh cendawan Hemileia vatatrix yang
          menyebabkan dedaunan mengalami keguguran cukup parah. Gejala serangan
          dimulai dengan munculnya spot-spot berukuran 3 mm berwarna kuning
          pucat pada permukaan daun bagian bawah.
        </p>
        <p className="my-5">
          Spot-spot ini kemudian melebar, muncul serbuk berwarna kuning sampai
          jingga, dengan diameter mencapai 20 mm. Seringkali, keseluruhan daun
          tertutup oleh spot-spot karat daun. Karat yang sudah tua akan menjadi
          coklat pada bagian tengah, dikelilingi spot-spot berwarna jingga.{' '}
        </p>
        <p>
          Dedaunan yang terinfestasi parah akan mengalami keguguran, dapat
          menyebabkan kematian tanaman serta kehilangan hasil buah kopi, baik
          secara kuantitas maupun kualitas. Buah kopi akan cenderung kecil,
          tidak matang semputna dan berubah menjadi hitam.
        </p>
      </div>
      <div className="mt-5">
        <h4 className="font-semibold">Treatment :</h4>
        <p>
          Pengendalian penyakit ini sebaiknya dengan menanam varietas kopi yang
          tahan terhadap penyakit ini, terutama pada areal pertanaman di bawah
          1.000 m dpl. Varietas-varietas kopi Arabica tidak terlalu tahan
          terhadap penyakit ini, jadi sebaiknya tidak ditanam pada lahan dengan
          ketinggian di bawah 1.000 m dpl. Pengendalian secara kimiawi dapat
          dilakukan dengan fungisida berbasis copper.
        </p>
      </div>
    </div>
  );
};

export default Rust;
