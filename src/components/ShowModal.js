import React from 'react';

function ShowModal(props) {
  return (
      <div>
        <button onClick={
          ()=>{
            if(props.setIsLoading){
              props.setIsLoading(true);
            }
          }
        }>Show Modal</button>

      </div>
  );
}
export default ShowModal;