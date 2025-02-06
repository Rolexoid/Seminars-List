import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useGetSeminarsQuery } from '../api/SeminarsApi.js'
import { Spinner } from "react-bootstrap";

const SeminarList = () => {
  const {
    data: seminars, error: seminarsError, refetch, isLoading,
  } = useGetSeminarsQuery();
  // const dispatch = useDispatch();
  if (isLoading) {
    return <Spinner />
  }
  return (
    <div>
      <ul id="seminar-list">
        {seminars?.map((seminar) => (<li key={seminar.id}>{seminar.title}</li>))}
      </ul>
    </div>
  )
}

export default SeminarList;