
import Make from "../components/make";
import Analyze from "../components/analyze";


export default function Home() {



  return (
    <div className="wraper">
      <p>このサイトはオフラインでも利用できます。</p>
      <Make />
      <Analyze />
    </div>
  )
}
