export const Practices =() => {
   const students=[];
   console.log(Boolean(students.length));
   console.log(students.length);
   return (
    <>
      {/* <p>{students.length && "No Students found"}</p> */}
      {/* 1st */}
      {/* <p>{students.length === 0 && "No Students found"}</p> */}
      {/* 2nd */}
      {/* <p>{!students.length&& "No Students found"}</p> */}
      {/* 3rd */}
      <p>{Boolean(!students.length) && "No Students found"}</p>
      <p>Number of students: {students.length}</p>
    </>
   );
};