import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const id = useParams();
  console.log(id);
  console.log(props);
  return <h1>Detail</h1>;
};

// function mapStateToProps(state, ownProps) {
//   const {
//     match: {
//       params: { id },
//     },
//   } = ownProps;
//   return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
// }

export default Detail;
