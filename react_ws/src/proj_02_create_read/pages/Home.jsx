import { useSearchParams } from "react-router-dom";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("sort"));
  return (
    <div>
      Home 페이지
    </div>
  )
}

export default Home;