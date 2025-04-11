
 export const App = () => {
  return (
    <div>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </div>
  );
};

const NetflixSeries = () => {
   return (
      <div>
      <div>
         <img src="/images/qot.jpg" alt="jpg" width="40%" height="40%" />
      </div>
      <h2>Name: Queen of Tears</h2>
      <h3>Rating:8.2</h3>
      <p>
         Summary: Baek Hyun-woo and Hong Hae-in naviagte a tense relationship,
         both at home and at work. But upon deciding his future, Hyun-woo pays a 
         visit to his family.
      </p>
    </div>
   );
};