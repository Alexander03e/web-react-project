import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [myData, setMyData] = useState([]);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const requestURL = `https://e.mospolytech.ru/old/lk_api.php/?getStaff&search=&division=&page=${page}&perpage=50&token=P4aBTPg3j2raNH%2F%2FVIFoKKL9bUC3a1uw0Cntjq9wzELxMTZgPEFWacFk%2BbO2lmIVpB4FZl3gw4Gl4vqwmhv0ZlIGA5B0VpRgF%2FRpPeeKTyqcwt2YUrR5A2Re2qayntsBGbe23yanduYIehrsJE3OocVSQfgZwb5bcKS1NKEGVqg%3D`

  useEffect(()=>{
    axios
      .get(requestURL)
      .then(response => {
        setMyData(response.data.items)
        setTotalPages(response.data.pages);
        console.log(response.data)
      })
      console.log(myData)
  
  }, [page])
  
  
  return (
    <>
      {myData.map(item => {
        return (
          <div>{item.fio}</div>
        )
      })}
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
        <button onClick={() => setPage(page + 1)} disabled={page == totalPages}>Next</button>
        <p>current page: {page}</p>
        <p>total pages: {totalPages}</p>
      </div>
    </>
  )
}

export default App
