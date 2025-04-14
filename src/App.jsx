// import {Fragment} from "react";
 export const App = () => {
  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </>
  );
};

const NetflixSeries = () => {
   const name="Queen of Tears";
   // const rating="5.2";
   const summary="Baek Hyun-woo and Hong Hae-in naviagte a tense relationship,both at home and at work. But upon deciding his future, Hyun-woo pays a visit to his family.";
   let age=19;
   // let canwatch="Not Available";
   // if(age >=18) canwatch="watch now";

   const canwatch =() => {
      if (age>=18) return "watch now";
      return "not Available";
   }
   const returnGenre = () =>{
      const genre="RomCom";
      return genre;
   }
   // if(age<18){
   //    return (
   //       <div>
   //       <div>
   //          <img src="/images/qot.jpg" alt="jpg" width="40%" height="40%" />
   //       </div>
   //       <h2>Name: {name}</h2>
   //       <h3>Rating:{5+3.2}</h3>
   //       <p>
   //          Summary: {summary}
   //       </p>
   //       <p>Genre:{returnGenre()}</p>
   //       <button>Not Available</button>
   //     </div>
   //    );
   // }
   return (
      <div>
      <div>
         <img src="/images/qot.jpg" alt="jpg" width="40%" height="40%" />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating:{5+3.2}</h3>
      <p>
         Summary: {summary}
      </p>
      <p>Genre:{returnGenre()}</p>
      {/* <button>{age>=18?"Watch now":"Not Available"}</button> */}
      <button>{canwatch()}</button>
    </div>
   );
};