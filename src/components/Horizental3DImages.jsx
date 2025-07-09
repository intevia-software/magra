
import Personne_1 from '../media/img/personne_1.jpg'
import Personne_2 from '../media/img/personne_2.jpg'
import Personne_3 from '../media/img/personne_3.jpg'



export default function Horizental3DImages() {

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-full max-w-7xl px-4 perspective-1000">
        <div className="relative block lg:flex justify-center items-center gap-4 preserve-3d">
          {/* Image de gauche - légèrement tournée */}
          <img
            src={Personne_1}
            alt="Left"
            className="w-1/3 object-cover rounded-lg shadow-xl mx-auto"
            style={{
              transform: 'rotateY(20deg) translateZ(-30px) scale(0.9)',
            }}
          />

          {/* Image du milieu - frontale */}
          <img
            src={Personne_2}
            alt="Center"
            className="w-1/3 object-cover rounded-lg shadow-xl z-10 mx-auto"
            style={{
              transform: 'rotateY(0deg) translateZ(0px) scale(1)',
            }}
          />

          {/* Image de droite - tournée de l'autre côté */}
          <img
            src={Personne_3}
            alt="Right"
            className="w-1/3 object-cover rounded-lg shadow-xl mx-auto"
            style={{
              transform: 'rotateY(-20deg) translateZ(-30px) scale(0.9)',
            }}
          />
        </div>
      </div>
    </div>
  );
}